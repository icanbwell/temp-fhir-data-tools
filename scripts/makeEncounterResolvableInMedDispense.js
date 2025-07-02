const env = "dev"; // Set the environment as needed

const accessToken = "<REPLACE_ME>"; // Replace with your actual access token

const clientFhirPersonId = "<REPLACE_ME>"; // Replace with your actual client FHIR Person ID

const clientFhirPatientId = "<REPLACE_ME>"; // Replace with your actual client FHIR Patient ID

const axios = require("axios");

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
 * @param {string} env - The environment (e.g., 'staging')
 * @param {string} accessToken - The OAuth access token
 * @returns {Promise<boolean>} - True if the resource exists, false otherwise
 */
async function checkResourceExists(resourceType, resourceId, env, accessToken) {
  const url = `https://fhir.${env}.icanbwell.com/4_0_0/${resourceType}/${resourceId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    });

    // If we got a successful response, the resource exists
    return true;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // 404 means the resource doesn't exist
      return false;
    } else {
      // For other errors, log them but consider it a failure to check
      console.error(
        `Error checking resource ${resourceType}/${resourceId}:`,
        error.message
      );
    }
  }
  return false;
}

/**
 * Create a resource if it doesn't exist
 * @param {string} reference - The reference string (e.g., 'Encounter/123')
 * @param {string} env - The environment
 * @param {string} accessToken - The OAuth access token
 * @returns {Promise<boolean>} - True if the resource was created or already exists, false otherwise
 */
async function createResourceIfNotExists(reference, env, accessToken) {
  const parsedRef = parseReference(reference);

  // First check if the resource exists
  const exists = await checkResourceExists(
    parsedRef.resourceType,
    parsedRef.resourceId,
    env,
    accessToken
  );

  if (exists) {
    console.log(`Resource ${reference} already exists`);
    return true;
  }

  // If we're here, the resource doesn't exist and we need to create it
  console.log(`Resource ${reference} does not exist. Creating it...`);

  try {
    const resourceData = {
      resourceType: parsedRef.resourceType,
      id: parsedRef.resourceId,
      status: "cancelled",
      class: {
        id: "20b4a3d4-a059-51d5-9379-c0d3ff86c466",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
      },
      subject: {
        reference: `Patient/${clientFhirPatientId}`,
      },
      meta: {
        versionId: "2",
        lastUpdated: new Date().toISOString(),
        source: "https://www.icanbwell.com/postman-data-collection",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "bwell_test",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "bwell_test",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "bwell_test",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "bwell_test",
          },
        ],
        tag: [
          {
            system: "https://www.icanbwell.com/uuid",
            code: parsedRef.resourceId,
          },
        ],
      },
    };

    const url = `https://fhir.${env}.icanbwell.com/4_0_0/${parsedRef.resourceType}/${parsedRef.resourceId}`;

    console.log(`Creating resource at ${url}`);

    // Use PUT to create the resource with the specific ID
    const response = await axios.put(url, resourceData, {
      headers: {
        accept: "application/json",
        "content-type": "application/fhir+json",
        authorization: `Bearer ${accessToken}`,
        prefer: "global_id=true",
      },
    });

    // grab the guid id and update the original medicationDispense resource from a non-guid to a guid

    console.log(`Successfully created resource: ${reference}`);
    return response.data;
  } catch (error) {
    console.error(`Error creating resource ${reference}:`, error.message);
    return false;
  }
}

async function makeEncounterResolvableInMedDispense() {
  try {
    // Get the medication dispense using a get request and store the result in a variable
    const response = await axios.get(
      `https://fhir-internal.${env}.bwell.zone/4_0_0/MedicationDispense?patient=Patient/person.${clientFhirPersonId}&_count=1000`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200 && response.data && response.data.entry) {
      const medicationDispenses = response.data.entry.map(
        (entry) => entry.resource
      );
      console.log(
        `Retrieved ${medicationDispenses.length} medication dispenses`
      );

      // We will extract all the encounter resources from the medication dispenses context field
      const encounterReferences = new Set();

      // Loop through each medication dispense
      medicationDispenses.forEach((medicationDispense) => {
        // Check if the medication dispense has a context field
        if (medicationDispense.context) {
          // Check if the context has a reference that starts with "Encounter/"
          if (
            medicationDispense.context.reference &&
            medicationDispense.context.reference.startsWith("Encounter/")
          ) {
            encounterReferences.add(medicationDispense.context.reference);
          }
        }
      });

      console.log(
        `Found ${encounterReferences.size} unique encounter references`
      );
      console.log("Encounter references:", Array.from(encounterReferences));

      // Check if each encounter exists and create it if it doesn't
      const encounterArray = Array.from(encounterReferences);
      console.log(`Checking if ${encounterArray.length} encounters exist...`);

      // Use Promise.all to process all encounters in parallel
      const results = await Promise.all(
        encounterArray.map((reference) =>
          createResourceIfNotExists(reference, env, accessToken)
        )
      );

      const updatedMedicationDispenses = await Promise.all(
        medicationDispenses
          .filter(
            (medicationDispense) =>
              medicationDispense.context &&
              medicationDispense.context.reference &&
              medicationDispense.context.reference.startsWith("Encounter/") &&
              encounterArray.includes(medicationDispense.context.reference)
          )
          .map(async (medicationDispense) => {
            const updatedDispense = { ...medicationDispense };
            const foundEncounter = results.find(
              (result) =>
                result &&
                result.id === updatedDispense.context.reference.split("/")[1]
            );

            if (foundEncounter) {
              console.log(
                `Found existing encounter for medication dispense ${updatedDispense.id}`
              );
              // look for the uuid identifier in the foundEncounter
              const uuidIdentifier = foundEncounter.identifier.find(
                (identifier) =>
                  identifier.system === "https://www.icanbwell.com/uuid"
              ).value;
              if (uuidIdentifier) {
                console.log(
                  `Updating medication dispense ${updatedDispense.id} with encounter UUID: ${uuidIdentifier}`
                );

                // Update the medication dispense context reference to use the UUID
                updatedDispense.context.reference = `Encounter/${uuidIdentifier}`;

                if (updatedDispense.subject) {
                  // check if the subject reference matches the uuid
                  const subjectUuid = updatedDispense.subject.extension.find(
                    (ext) => ext.url === "https://www.icanbwell.com/uuid"
                  ).valueString;
                  if (updatedDispense.subject.reference !== subjectUuid) {
                    console.error(
                      `Medication dispense ${updatedDispense.id} subject reference does not match client patient ID`
                    );
                    updatedDispense.subject.reference = subjectUuid;
                  }
                }
                const url = `https://fhir.${env}.icanbwell.com/4_0_0/MedicationDispense/${updatedDispense.id}`;
                // Use PUT to create the resource with the specific ID
                const response = await axios.put(url, updatedDispense, {
                  headers: {
                    accept: "application/json",
                    "content-type": "application/fhir+json",
                    authorization: `Bearer ${accessToken}`,
                    prefer: "global_id=true",
                  },
                });
                if (response.status === 200) {
                  console.log(
                    `Successfully updated medication dispense ${medicationDispense.id}`
                  );
                } else {
                  console.error(
                    `Failed to update medication dispense ${medicationDispense.id}`
                  );
                }
              }
            }
          })
      );

      // Count how many encounters were created vs. already existed
      const created = results.filter((result) => result).length;
      console.log(`${created} encounters were checked/created successfully`);

      return {
        medicationDispenses,
        encounterReferences: encounterArray,
        createdEncounters: created,
      };
    } else {
      console.error(
        "Failed to retrieve medication dispenses or no entries found"
      );
      console.log(response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching medication dispenses:", error.message);
    throw error;
  }
}

if (require.main === module) {
  // If this script is run directly, execute the function
  makeEncounterResolvableInMedDispense()
    .then((result) => {
      if (result && result.encounterReferences) {
        console.log(
          `Summary: Processed ${result.encounterReferences.length} unique encounter references`
        );
        if (result.createdEncounters) {
          console.log(
            `Created ${result.createdEncounters} encounters that were missing`
          );
        }
      } else {
        console.log("No encounter references found or processing failed");
      }
      console.log("Encounter made resolvable in MedicationDispense.");
    })
    .catch((error) => {
      console.error(
        "Error making encounter resolvable in MedicationDispense:",
        error
      );
    });
}
