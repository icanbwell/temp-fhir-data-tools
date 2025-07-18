const {
  config,
  ACCESS_TOKEN,
  FHIR_BASE_URL,
  PROA_FHIR_BASE_URL,
  INTERNAL_FHIR_BASE_URL,
  CLIENT_PATIENT_ID,
  CLIENT_PERSON_ID,
} = require("../src/constants/index.js");
const axios = require("axios");
const { createResourceIfNotExists } = require("./createResource.js");
const {
  createFakeEncounter,
} = require("../src/fakers/encounter/encounter.faker.ts");

async function makeEncounterResolvable(resource) {
  try {
    const url = `${
      config.useProaServer ? PROA_FHIR_BASE_URL : INTERNAL_FHIR_BASE_URL
    }/${resource}?patient=Patient/person.${CLIENT_PERSON_ID}&count=1000`;

    // Get the medication dispense using a get request and store the result in a variable
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 && response.data && response.data.entry) {
      const resourceEntries = response.data.entry.map(
        (entry) => entry.resource
      );
      console.log(`Retrieved ${resourceEntries.length} ${resource} entries`);

      // Extract all encounter resources from the medication dispenses context field
      const encounterReferences = new Set();

      // Loop through each resource entry
      resourceEntries.forEach((resourceEntry) => {
        // Check if the context or encounter field contains an encounter reference
        // "encounter" is used in some resources like MedicationRequest
        // "context" is used in others like MedicationDispense
        // This ensures we capture both cases
        if (
          "context" in resourceEntry &&
          resourceEntry.context?.reference?.startsWith("Encounter/")
        ) {
          encounterReferences.add(resourceEntry.context.reference);
        } else if (
          "encounter" in resourceEntry &&
          resourceEntry.encounter?.reference?.startsWith("Encounter/")
        ) {
          encounterReferences.add(resourceEntry.encounter.reference);
        }
      });

      console.log(
        `Found ${encounterReferences.size} unique encounter references`
      );
      console.log("Encounter references:", Array.from(encounterReferences));

      const encounterArray = Array.from(encounterReferences);
      console.log(`Checking if ${encounterArray.length} encounters exist...`);

      const fakeEncounter = createFakeEncounter(CLIENT_PATIENT_ID);

      // Use Promise.all to process all encounters in parallel
      const results = await Promise.all(
        encounterArray.map((reference) =>
          createResourceIfNotExists(reference, fakeEncounter)
        )
      );

      const updatedResourceEntries = await Promise.all(
        resourceEntries
          .filter(
            (resourceEntry) =>
              resourceEntry.context?.reference?.startsWith("Encounter/") &&
              encounterArray.includes(resourceEntry.context.reference)
          )
          .map(async (resourceEntry) => {
            const updatedEntry = { ...resourceEntry };
            const foundEncounter = results.find(
              (result) =>
                result &&
                result.id === updatedEntry.context.reference.split("/")[1]
            );

            if (foundEncounter) {
              console.log(
                `Found existing encounter for ${resource} ${updatedEntry.id}`
              );

              const uuidIdentifier = foundEncounter.identifier?.find(
                (identifier) =>
                  identifier.system === "https://www.icanbwell.com/uuid"
              )?.value;

              if (uuidIdentifier) {
                console.log(
                  `Updating ${resource} ${updatedEntry.id} with encounter UUID: ${uuidIdentifier}`
                );

                updatedEntry.context.reference = `Encounter/${uuidIdentifier}`;

                if (updatedEntry.subject) {
                  const subjectUuid = updatedDispense.subject.extension?.find(
                    (ext) => ext.url === "https://www.icanbwell.com/uuid"
                  )?.valueString;

                  if (updatedEntry.subject.reference !== subjectUuid) {
                    console.error(
                      `${resource} ${updatedEntry.id} subject reference does not match client patient ID`
                    );
                    updatedEntry.subject.reference = subjectUuid;
                  }
                }

                const url = `${
                  config.useProaServer ? PROA_FHIR_BASE_URL : FHIR_BASE_URL
                }/${resource}/${updatedEntry.id}`;

                const response = await axios.put(url, updatedEntry, {
                  headers: {
                    accept: "application/json",
                    "content-type": "application/fhir+json",
                    authorization: `Bearer ${ACCESS_TOKEN}`,
                    prefer: "global_id=true",
                  },
                });

                if (response.status === 200) {
                  console.log(
                    `Successfully updated ${resource} ${updatedEntry.id}`
                  );
                } else {
                  console.error(
                    `Failed to update ${resource} ${updatedEntry.id}`
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
        resourceEntries,
        encounterReferences: encounterArray,
        createdEncounters: created,
      };
    } else {
      console.error(`Failed to retrieve ${resource} or no entries found`);
      console.log(response.data);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error.message);
    throw error;
  }
}

if (require.main === module) {
  const resourceType = process.argv[2];

  // If this script is run directly, execute the function
  makeEncounterResolvable(resourceType)
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
      console.log(`Encounter made resolvable in ${resourceType}.`);
    })
    .catch((error) => {
      console.error(
        `Error making encounter resolvable in ${resourceType}:`,
        error
      );
    });
}
