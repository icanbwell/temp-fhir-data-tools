const {
  createIdentifier,
  createLocation,
  createPeriod,
  createParticipant,
  createPriority,
  createReasonCode,
  createType,
} = require("./constants.js");
const { createCodeableConcept } = require("../fhir/codeableConcept.js");
const { faker } = require("@faker-js/faker");
const { createCoding } = require("../fhir/coding.js");

// Replace with a more specific type if available
// type SubjectType = string;

const createFakeEncounter = (subject) => ({
  id: faker.string.uuid(),
  resourceType: "Encounter",
  text: {
    div: `<div>Generated Text for Encounter</div>`,
    status: "generated",
  },
  identifier: [createIdentifier()],
  type: [createType()],
  status: "finished",
  subject: {
    reference: `Patient/${subject}`,
  },
  participant: [createParticipant()],
  period: createPeriod(),
  reasonCode: [createReasonCode()],
  priority: createPriority(),
  location: [createLocation()],
  class: {
    id: "20b4a3d4-a059-51d5-9379-c0d3ff86c466",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: "AMB",
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
  },
});

module.exports = { createFakeEncounter };
