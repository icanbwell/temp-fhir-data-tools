const env = "staging"; // Set the environment as needed

const accessToken = "your_access_token_here"; // Replace with your actual access token

const clientFhirPersonId = "your_client_fhir_person_id_here"; // Replace with your actual client FHIR Person ID
const resolvableResourceTypes = ["MedicationDispense"]

const axios = require('axios');


/**
 * Recursively extracts all values from fields named "reference" in a JSON object
 * Only extracts references from objects that have a resourceType matching one in allowedTypes
 * @param {Object|Array} obj - The object or array to search
 * @param {Set} references - Set to collect reference values
 * @param {Array} allowedTypes - Array of resource types to include
 */
function extractReferences(obj, references, allowedTypes) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  // Check if this is an object with a resourceType we care about
  const isAllowedResource = !Array.isArray(obj) && 
                            obj.resourceType && 
                            allowedTypes.includes(obj.resourceType);
  
  // If it's an array, process each element
  if (Array.isArray(obj)) {
    obj.forEach(item => extractReferences(item, references, allowedTypes));
  } else if (isAllowedResource) {
    // This is an object with a matching resourceType, extract all references from it
    extractAllReferencesFromObject(obj, references);
  } else {
    // Not a matching resource, but still need to check its children
    for (const [_, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        extractReferences(value, references, allowedTypes);
      }
    }
  }
}

/**
 * Extract all references from an object regardless of its resourceType
 * @param {Object} obj - The object to extract references from
 * @param {Set} references - Set to collect reference values
 */
function extractAllReferencesFromObject(obj, references) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  if (Array.isArray(obj)) {
    // If it's an array, process each element
    obj.forEach(item => extractAllReferencesFromObject(item, references));
  } else {
    // Process object properties
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'reference' && typeof value === 'string') {
        // Found a reference field with a string value, add it to our set
        references.add(value);
      } else if (typeof value === 'object' && value !== null) {
        // Recursively check nested objects
        extractAllReferencesFromObject(value, references);
      }
    }
  }
}

/**
 * Parse a reference string into resourceType and resourceId
 * @param {string} referenceString - The reference string in format "ResourceType/ResourceId"
 * @returns {Object|null} An object with resourceType and resourceId, or null if invalid format
 */
function parseReference(referenceString) {
  // Check for valid reference format
  if (!referenceString || typeof referenceString !== 'string') {
    return null;
  }
  
  const parts = referenceString.split('/');
  if (parts.length !== 2) {
    return null; // Invalid format
  }
  
  return {
    resourceType: parts[0],
    resourceId: parts[1]
  };
}

/**
 * Check if a resource exists by making a GET request to the FHIR server
 * @param {string} resourceType - The FHIR resource type
 * @param {string} resourceId - The resource ID
 * @param {string} env - The environment (e.g., "staging")
 * @param {string} accessToken - The access token for authentication
 * @returns {Promise<boolean>} True if the resource exists, false otherwise
 */
async function checkResourceExists(resourceType, resourceId, env, accessToken) {
  const url = `https://fhir.${env}.icanbwell.com/4_0_0/${resourceType}/${resourceId}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${accessToken}`
      }
    });
    
    // If we got a successful response, the resource exists
    return true;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // 404 means the resource doesn't exist
      return false;
    } else {
      // For other errors, log them but consider it a failure to check
      console.error(`Error checking resource ${resourceType}/${resourceId}:`, error.message);
      throw error; // Re-throw to be handled by the caller
    }
  }
}

async function populateNonResolvableResources() {
  // Get the user data from the everything endpoint and save the response in a variable
  let userData = null;
  try {
    const url = `https://fhir.${env}.icanbwell.com/4_0_0/Person/${clientFhirPersonId}/$everything?contained=true&_format=json&_metaUuid=1`;
    
    const headers = {
      'accept': 'application/json',
      'authorization': `Bearer ${accessToken}`
    };
    
    console.log(`Fetching data from ${url}...`);
    const response = await axios.get(url, { headers });
    userData = response.data;
    
    console.log('Data fetched successfully!');
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    throw error;
  }

  console.log('Processing user data...');

  // Extract all references from objects that have a resourceType in resolvableResourceTypes
  const allReferences = new Set();
  extractReferences(userData, allReferences, resolvableResourceTypes);
  
  console.log(`Found ${allReferences.size} unique references from resources of types: ${resolvableResourceTypes.join(', ')}.`);


  // Check each reference to see if it exists
  console.log('Checking references for existence...');
  const nonResolvableReferences = [];
  let checkedCount = 0;
  
  // Process references in batches to avoid overwhelming the server
  const batchSize = 5; // Adjust based on server capacity
  const referenceArray = Array.from(allReferences);
  
  for (let i = 0; i < referenceArray.length; i += batchSize) {
    const batch = referenceArray.slice(i, i + batchSize);
    const promises = batch.map(async (reference) => {
      const parsedRef = parseReference(reference);
      
      if (!parsedRef) {
        console.log(`Skipping invalid reference format: ${reference}`);
        return;
      }
      
      try {
        const exists = await checkResourceExists(
          parsedRef.resourceType, 
          parsedRef.resourceId,
          env,
          accessToken
        );
        
        if (!exists) {
          console.log(`Non-resolvable reference found: ${reference}`);
          nonResolvableReferences.push(reference);
        }
        
        checkedCount++;
        if (checkedCount % 10 === 0) {
          console.log(`Checked ${checkedCount}/${allReferences.size} references...`);
        }
      } catch (error) {
        console.error(`Error checking reference ${reference}:`, error.message);
        // Add to non-resolvable references if there was an error checking
        nonResolvableReferences.push(`${reference} (Error: ${error.message})`);
      }
    });
    
    // Wait for all promises in this batch to complete
    await Promise.all(promises);
  }
  
  console.log(`Completed checking ${checkedCount} references.`);
  console.log(`Found ${nonResolvableReferences.length} non-resolvable references.`);

  // Create non resolvable resources
  if (nonResolvableReferences.length > 0) {
    console.log('Creating non-resolvable resources...');
    
    const createdResources = [];
    const failedResources = [];
    
    // Process in batches to avoid overwhelming the server
    for (let i = 0; i < nonResolvableReferences.length; i++) {
      const reference = nonResolvableReferences[i];
      const parsedRef = parseReference(reference);
      
      if (!parsedRef) {
        console.log(`Skipping invalid reference format for creation: ${reference}`);
        continue;
      }

      if(parsedRef.resourceType !== "Encounter") continue; // Only create Encounter resources
      
      try {
        // Create a minimal resource with just the required fields
        const resourceData = {
          resourceType: parsedRef.resourceType,
          id: parsedRef.resourceId,
          status: "cancelled",
          class: {
              id: "20b4a3d4-a059-51d5-9379-c0d3ff86c466",
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "AMB"
            },
            meta: {
              versionId: "2",
              lastUpdated: "2024-12-02T17:11:29.675Z",
              source: "https://www.icanbwell.com/postman-data-collection",
              security: [
                {
                  system: "https://www.icanbwell.com/owner",
                  code: "bwell_test"
                },
                {
                  system: "https://www.icanbwell.com/access",
                  code: "bwell_test"
                },
                {
                  system: "https://www.icanbwell.com/vendor",
                  code: "bwell_test"
                },
                {
                  system: "https://www.icanbwell.com/sourceAssigningAuthority",
                  code: "bwell_test"
                }
              ],
              tag: [
                {
                  system: "https://www.icanbwell.com/uuid",
                  code: parsedRef.resourceId,
                }
              ]
            },
        };
        
        const url = `https://fhir.${env}.icanbwell.com/4_0_0/${parsedRef.resourceType}/${parsedRef.resourceId}`;
        
        console.log(`Creating resource at ${url}`);
        
        // Use PUT to create the resource with the specific ID
        const response = await axios.put(url, resourceData, {
          headers: {
            'accept': 'application/json',
            'content-type': 'application/fhir+json',
            'authorization': `Bearer ${accessToken}`
          }
        });
        
        console.log(`Successfully created resource: ${reference}`);
        createdResources.push(reference);
      } catch (error) {
        console.error(`Failed to create resource ${reference}:`, error.message);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', JSON.stringify(error.response.data, null, 2));
        }
        failedResources.push({
          reference,
          error: error.message,
          status: error.response?.status || 'Unknown'
        });
      }
      
      // Add a small delay between requests to prevent rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`Completed creating resources. Created: ${createdResources.length}, Failed: ${failedResources.length}`);
    
    // Save results to files
    const fs = require('fs');
    if (createdResources.length > 0) {
      fs.writeFileSync(
        `./createdResources_${clientFhirPersonId}.json`, 
        JSON.stringify(createdResources, null, 2)
      );
      console.log(`Created resources saved to createdResources_${clientFhirPersonId}.json`);
    }
    
    if (failedResources.length > 0) {
      fs.writeFileSync(
        `./failedResources_${clientFhirPersonId}.json`,
        JSON.stringify(failedResources, null, 2)
      );
      console.log(`Failed resources saved to failedResources_${clientFhirPersonId}.json`);
    }
  } else {
    console.log('No non-resolvable references to create.');
  }
}

if (require.main === module) {
    // If this script is run directly, execute the function
    populateNonResolvableResources()
      .then(() => console.log('Process completed successfully'))
      .catch(err => console.error('Process failed:', err));
}
