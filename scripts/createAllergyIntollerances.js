const axios = require("axios");

async function createAllergyIntolerances({
  env,
  proaAccessToken,
  randomUserData,
  proaClientFhirPatientId,
}) {
  const allergyIntolleranceData = [
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance1}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            version: "4.0.0",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            version: "4.0.0",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "16403005",
            display: "NSAIDS (NON-STEROIDAL ANTI-INFLAMMATORY DRUG)",
          },
        ],
        text: "NSAIDS (NON-STEROIDAL ANTI-INFLAMMATORY DRUG)",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      onsetPeriod: {
        start: "2022-11-28T14:05:58.000Z",
        end: "2023-12-02T00:00:00.000Z",
      },
      lastOccurrence: "2022-10-01T00:00:00Z",
      recordedDate: "2022-11-28T14:05:58.000Z",
      reaction: [
        {
          description: "Immediate reaction with hives and difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Hives and difficulty breathing",
            },
          ],
          onset: "2021-08-01T14:00:00Z",
          severity: "severe",
          exposureRoute: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Taken orally",
          },
          note: [
            {
              text: "Patient reported symptoms starting approximately 30 minutes after taking medication.",
              authorString: `Dr. ${randomUserData.practitionerLN7}`,
              time: "2021-08-01T14:45:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance2}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "2582",
            display: "clindamycin",
          },
        ],
        text: "clindamycin",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      lastOccurrence: "2021-10-01T00:00:00Z",
      recordedDate: "2021-01-18T14:42:29.000Z",
      onsetPeriod: {
        start: "2021-01-08T14:05:58.000Z",
      },
      reaction: [
        {
          description: "Immediate reaction with hives and difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Hives and difficulty breathing",
            },
          ],
          onset: "2021-08-01T14:00:00Z",
          severity: "severe",
          exposureRoute: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Taken orally",
          },
          note: [
            {
              text: "Patient reported symptoms starting approximately 30 minutes after taking medication.",
              authorString: `Dr. ${randomUserData.practitionerLN6}`, 
              time: "2021-08-01T14:45:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance3}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202488",
            display: "Motrin",
          },
        ],
        text: "Motrin",
      },
      patient: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      lastOccurrence: "2017-10-01T00:00:00Z",
      recordedDate: "2017-04-11T11:21:01.000Z",
      onsetPeriod: {
        end: "2020-12-02T00:00:00.000Z",
      },
      reaction: [
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN4}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance4}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151399",
            display: "Bactrim",
          },
        ],
        text: "Bactrim",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      lastOccurrence: "2022-10-01T00:00:00Z",
      recordedDate: "2021-01-18T14:42:23.000Z",
      onsetPeriod: {
        start: "2022-11-28T14:05:58.000Z",
        end: "2023-12-02T00:00:00.000Z",
      },
      reaction: [
        {
          description: "Immediate reaction with hives and difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Hives and difficulty breathing",
            },
          ],
          onset: "2021-08-01T14:00:00Z",
          severity: "severe",
          exposureRoute: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Taken orally",
          },
          note: [
            {
              text: "Patient reported symptoms starting approximately 30 minutes after taking medication.",
              authorString: `Dr. ${randomUserData.practitionerLN6}`,
              time: "2021-08-01T14:45:00Z",
            },
          ],
        },
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN4}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
        {
          description: "Difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Difficulty breathing",
            },
          ],
          onset: "2022-04-15T18:20:00Z",
          severity: "severe",
          note: [
            {
              text: "Patient experienced difficulty breathing requiring emergency intervention.",
              authorString: "Emergency Doctor John Doe",
              time: "2022-04-15T18:55:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance5}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            version: "4.0.0",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            version: "4.0.0",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "2582",
            display: "CLINDAMYCIN",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "21235",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "81982",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "91075",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "797272",
          },
          {
            system: "urn:oid:2.16.840.1.113883.4.9",
            code: "3U02EL437C",
          },
          {
            system: "2.16.840.1.113883.4.9",
            code: "3U02EL437C",
          },
        ],
        text: "CLINDAMYCIN",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      onsetPeriod: {
        start: "2022-11-28T14:05:58.000Z",
      },
      lastOccurrence: "2022-10-01T00:00:00Z",
      recordedDate: "2022-10-11T14:23:58.000Z",
      reaction: [
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN4}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
        {
          description: "Difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Difficulty breathing",
            },
          ],
          onset: "2022-04-15T18:20:00Z",
          severity: "severe",
          note: [
            {
              text: "Patient experienced difficulty breathing requiring emergency intervention.",
              authorString: "Emergency Doctor John Doe",
              time: "2022-04-15T18:55:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance6}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            version: "4.0.0",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            version: "4.0.0",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "low",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "5640",
            display: "IBUPROFEN",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "36761",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151365",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151461",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151562",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151686",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151747",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151883",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151913",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151975",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152037",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152185",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152220",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152255",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152287",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152310",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "152637",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "153010",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "153691",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202487",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202488",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202489",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202490",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "217324",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "217694",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "218308",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "219538",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "220111",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "220167",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "225466",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "225648",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "225793",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226139",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226144",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226145",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226146",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226329",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "226335",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "227085",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "379859",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "379861",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "380799",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "380847",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "541710",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "643099",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "702240",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "854184",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "900431",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "900435",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1101916",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1300262",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1359092",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "1429044",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "2045472",
          },
          {
            system: "urn:oid:2.16.840.1.113883.4.9",
            code: "WK2XYI10QM",
          },
          {
            system: "2.16.840.1.113883.4.9",
            code: "WK2XYI10QM",
          },
        ],
        text: "IBUPROFEN",
      },
      patient: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      onsetPeriod: {
        end: "2016-12-02T00:00:00.000Z",
      },
      lastOccurrence: "2016-10-01T00:00:00Z",
      recordedDate: "2016-12-20T14:52:58.000Z",
      reaction: [
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN4}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
        {
          description: "Difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Difficulty breathing",
            },
          ],
          onset: "2022-04-15T18:20:00Z",
          severity: "severe",
          note: [
            {
              text: "Patient experienced difficulty breathing requiring emergency intervention.",
              authorString: "Emergency Doctor John Doe",
              time: "2022-04-15T18:55:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance7}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            version: "4.0.0",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            version: "4.0.0",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
        text: "Confirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "10831",
            display: "BACTRIM [SULFAMETHOXAZOLE-TRIMETHOPRIM]",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151399",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151540",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151737",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "151959",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202807",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "202808",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "215670",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "220091",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "220702",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "352548",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "402973",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "540131",
          },
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "544155",
          },
        ],
        text: "BACTRIM [SULFAMETHOXAZOLE-TRIMETHOPRIM]",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      onsetDateTime: "2022-11-28T14:05:58.000Z",
      lastOccurrence: "2022-10-01T00:00:00Z",
      recordedDate: "2022-10-11T14:23:58.000Z",
      reaction: [
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN2}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
        {
          description: "Difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Difficulty breathing",
            },
          ],
          onset: "2022-04-15T18:20:00Z",
          severity: "severe",
          note: [
            {
              text: "Patient experienced difficulty breathing requiring emergency intervention.",
              authorString: "Emergency Doctor John Doe",
              time: "2022-04-15T18:55:00Z",
            },
          ],
        },
      ],
    },
    {
      resourceType: "AllergyIntolerance",
      id: `${randomUserData.allergyIntolerance8}`,
      meta: {
        source: "proa-samsung-demo",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      clinicalStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            code: "active",
            display: "Active",
          },
        ],
        text: "Active",
      },
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: "unconfirmed",
            display: "Unconfirmed",
          },
        ],
        text: "Unconfirmed",
      },
      category: ["medication"],
      criticality: "high",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "7980",
            display: "Penicillin G",
          },
        ],
        text: "Penicillin G",
      },
      patient: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      onsetDateTime: "2022-10-28T14:05:58.000Z",
      lastOccurrence: "2022-10-01T00:00:00Z",
      recordedDate: "2022-10-11T14:23:58.000Z",
      recorder: {
        reference: `Practitioner/${randomUserData.practitionerId9}`,
      },
      reaction: [
        {
          description: "Immediate reaction with hives and difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Hives and difficulty breathing",
            },
          ],
          onset: "2021-08-01T14:00:00Z",
          severity: "severe",
          exposureRoute: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Taken orally",
          },
          note: [
            {
              text: "Patient reported symptoms starting approximately 30 minutes after taking medication.",
              authorString: `Dr. ${randomUserData.practitionerLN1}`,
              time: "2021-08-01T14:45:00Z",
            },
          ],
        },
        {
          description: "Hives",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "247472004",
                  display: "Hives",
                },
              ],
              text: "Hives",
            },
          ],
          onset: "2021-06-01T15:00:00Z",
          severity: "moderate",
          note: [
            {
              text: "Hives observed on arms and torso.",
              authorString: `Dr. ${randomUserData.practitionerLN1}`,
              time: "2021-06-01T15:30:00Z",
            },
          ],
        },
        {
          description: "Swelling of the lips",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "300910009",
                  display: "Swelling of lips",
                },
              ],
              text: "Swelling of lips",
            },
          ],
          onset: "2022-01-10T10:00:00Z",
          severity: "mild",
          note: [
            {
              text: "Mild swelling of the lips noted, resolved with antihistamines.",
              authorString: "Nurse Practitioner Sarah Lee",
              time: "2022-01-10T10:45:00Z",
            },
          ],
        },
        {
          description: "Difficulty breathing",
          manifestation: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "267036007",
                  display: "Difficulty breathing",
                },
              ],
              text: "Difficulty breathing",
            },
          ],
          onset: "2022-04-15T18:20:00Z",
          severity: "severe",
          note: [
            {
              text: "Patient experienced difficulty breathing requiring emergency intervention.",
              authorString: "Emergency Doctor John Doe",
              time: "2022-04-15T18:55:00Z",
            },
          ],
        },
      ],
    },
  ];

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/AllergyIntolerance/$merge`,
    headers: {
      "Content-Type": "application/fhir+json",
      Authorization: `Bearer ${proaAccessToken}`,
    },
    data: allergyIntolleranceData,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error creating PROA AllergyIntolerance Records:", error);
    throw error;
  }
}

module.exports = createAllergyIntolerances;
