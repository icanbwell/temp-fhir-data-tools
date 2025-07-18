const { faker } = require("@faker-js/faker");

const encounterPriorities = ["Urgent", "Routine"];

const encounterStatuses = ["finished"];

const encounterTypes = [
  "Patient-initiated encounter",
  "Diabetes Follow-up",
  "General consultation",
  "Follow-up visit",
  "Routine general medical examination at a health care facility",
];

const reasonCodes = [
  "Asthma",
  "Type II diabetes mellitus follow-up visit",
  "General medical examination",
  "Hypertension follow-up",
  "Injury of ankle",
  "Fever of unknown origin",
];

const diagnosisRoles = ["Chief complaint"];

const admitSources = ["Transfer from hospital"];

const dischargeDispositions = ["Home"];

const createPeriod = () => ({
  start: faker.date.past().toISOString(),
  end: faker.date.future().toISOString(),
});

const createIdentifier = () => ({
  id: faker.string.uuid(),
  system: "https://www.icanbwell.com/sourceId",
  value: faker.string.alphanumeric({ length: 10 }),
});

const participantTypes = ["HCP", "Patient", "Family", "Caregiver"];
const participantIds = [
  "Practitioner/7dff22e9-5063-43f1-86f2-50fde98a7dd7",
  "Practitioner/45b0c0ea-bad0-4e69-bd9a-89410ec47387",
];
const createParticipant = () => ({
  individual: {
    id: faker.string.uuid(),
    identifier: {
      id: faker.string.uuid(),
      system: "https://www.icanbwell.com/sourceId",
      value: faker.helpers.arrayElement(participantIds),
    },
  },
  type: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/participant-type",
          code: faker.helpers.arrayElement(participantTypes),
          display: faker.helpers.arrayElement(participantTypes),
        },
      ],
      text: faker.helpers.arrayElement(participantTypes),
    },
  ],
});

const locationIds = [
  "4a8f6b85-1923-5fed-b2f9-d328d9d64fde",
  "6a3e623e-6c20-5ee5-86a3-3c37f728d9db",
  "a14d8523-c049-5848-a73d-ce0d9a8d2392",
];

const createLocation = () => ({
  location: {
    reference: `Location/${faker.helpers.arrayElement(locationIds)}`,
  },
  status: faker.helpers.arrayElement(["planned", "active", "completed", null]),
  physicalType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "building",
        display: "Building",
      },
    ],
    text: "Building",
  },
  period: createPeriod(),
});

const createPriority = () => ({
  coding: [
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: faker.helpers.arrayElement(encounterPriorities),
      display: faker.helpers.arrayElement(encounterPriorities),
    },
  ],
  text: faker.helpers.arrayElement(encounterPriorities),
});

const createReasonCode = () => ({
  coding: [
    {
      system: "http://snomed.info/sct",
      code: faker.string.alphanumeric({ length: 8 }),
      display: faker.helpers.arrayElement(reasonCodes),
    },
  ],
  text: faker.helpers.arrayElement(reasonCodes),
});

const createType = () => ({
  coding: [
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: faker.string.alphanumeric({ length: 8 }),
      display: faker.helpers.arrayElement(encounterTypes),
    },
  ],
  text: faker.helpers.arrayElement(encounterTypes),
});

module.exports = {
  createPeriod,
  createIdentifier,
  createParticipant,
  createLocation,
  createReasonCode,
  createPriority,
  createType,
};
