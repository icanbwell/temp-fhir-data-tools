const axios = require("axios");
const {
  config,
  ACCESS_TOKEN,
  FHIR_BASE_URL,
  PROA_FHIR_BASE_URL,
} = require("../src/constants/index.js");

/**
 * Parses a resource reference string to extract resource type and id
 * @param {string} reference - The reference string in format "ResourceType/resourceId"
 * @returns {Object} - Object with resourceType and resourceId
 */
function parseReference(reference) {
  const parts = reference.split("/");
  if (parts.length !== 2) {
    throw new Error(`Invalid reference format: ${reference}`);
  }
  return {
    resourceType: parts[0],
    resourceId: parts[1],
  };
}

/**
 * Check if a FHIR resource exists
 * @param {string} resourceType - The FHIR resource type (e.g., 'Encounter')
 * @param {string} resourceId - The ID of the resource
 * @returns {Promise<boolean>} - True if the resource exists, false otherwise
 */
async function checkResourceExists(resourceType, resourceId) {
  const url = `${
    config.useProaServer ? PROA_FHIR_BASE_URL : FHIR_BASE_URL
  }/${resourceType}/${resourceId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const data = response.data;
    // Check for empty objects or unknown values
    if (
      (data.period && Object.keys(data.period).length === 0) ||
      (Array.isArray(data.reasonCode) &&
        data.reasonCode.some(
          (rc) =>
            Array.isArray(rc.coding) &&
            rc.coding.some(
              (c) => c.code === "AMB|unknown" || c.display === "Unknown"
            )
        )) ||
      (data.resourceType === "Encounter" &&
        (data.status === "CANCELLED" ||
          (Array.isArray(data.type) &&
            data.type.some(
              (t) =>
                Array.isArray(t.coding) &&
                t.coding.some(
                  (c) => c.code === "unknown" || c.display === "Unknown"
                )
            ))))
    ) {
      return false;
    }

    return true;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false;
    }
    console.error(
      `Error checking resource ${resourceType}/${resourceId}:`,
      error.message
    );
  }
  return false;
}

/**
 * Create a FHIR resource
 * @param {string} resourceType - The type of resource to create (e.g., 'Encounter')
 * @param {string} resourceId - The ID for the resource
 * @param {Object} resourceData - The resource data to create
 * @returns {Promise<Object|false>} - The created resource or false if creation failed
 */
async function createResource(resourceType, resourceId, resourceData) {
  try {
    const url = `${
      config.useProaServer ? PROA_FHIR_BASE_URL : FHIR_BASE_URL
    }/${resourceType}/${resourceId}`;
    console.log(`Creating resource at ${url}`);

    const response = await axios.put(url, resourceData, {
      headers: {
        accept: "application/json",
        "content-type": "application/fhir+json",
        authorization: `Bearer ${ACCESS_TOKEN}`,
        prefer: "global_id=true",
      },
    });

    console.log(`Successfully created resource: ${resourceType}/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error creating resource ${resourceType}/${resourceId}:`,
      error.message
    );
    return false;
  }
}

/**
 * Creates a resource if it doesn't already exist
 * @param {string|Object} resource - Either a reference string (e.g., 'Encounter/123') or an object containing the resource data
 * @param {Object} [defaultData={}] - Default data to use when creating the resource
 * @returns {Promise<Object|false>} - The created/existing resource or false if operation failed
 */
async function createResourceIfNotExists(resource, defaultData = {}) {
  let resourceType, resourceId, resourceData;

  // Handle input as either reference string or resource object
  if (typeof resource === "string") {
    const parsedRef = parseReference(resource);
    resourceType = parsedRef.resourceType;
    resourceId = parsedRef.resourceId;
    resourceData = {
      ...defaultData,
      resourceType,
      id: resourceId,
    };
  } else if (typeof resource === "object") {
    resourceType = resource.resourceType;
    resourceId = resource.id;
    resourceData = { ...defaultData, ...resource };
  } else {
    throw new Error("Invalid resource format");
  }

  // Check if resource exists
  const exists = await checkResourceExists(resourceType, resourceId);
  if (exists) {
    console.log(`Resource ${resourceType}/${resourceId} already exists`);
    return true;
  }

  // Create the resource
  return await createResource(resourceType, resourceId, resourceData);
}

module.exports = {
  parseReference,
  checkResourceExists,
  createResource,
  createResourceIfNotExists,
};
