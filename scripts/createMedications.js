const axios = require("axios");

const { v4: uuidv4 } = require("uuid");

async function createMedications({
  env,
  proaAccessToken,
  randomUserData,
  proaClientFhirPatientId,
}) {
  const medicationsRequestsData = [
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id1}`,
      meta: {
        profile: ["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/identifier-type",
                code: "MR",
              },
            ],
            text: "Medical Record Number",
          },
          system: "https://www.icanbwell.com/identifiers/medication-requests",
          value: "12345",
          period: {
            start: "2022-08-22T00:00:00.000Z",
            end: "2023-08-22T00:00:00.000Z",
          },
          assigner: {
            display: "Bwell Pharmacy",
          },
        },
      ],
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
              code: "outpatient",
              display: "Outpatient",
            },
          ],
          text: "Outpatient Medication",
        },
      ],
      priority: "routine",
      doNotPerform: false,
      reportedBoolean: false,
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0378-3950-77",
            display: "Atorvastatin 10mg",
          },
        ],
        text: "Atorvastatin 10mg",
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      encounter: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter1}`,
      },
      supportingInformation: [
        {
          reference: `Observation/${randomUserData.labObservationId12}`,
        },
      ],
      authoredOn: "2022-08-22T00:00:00Z",
      requester: {
        reference: `Practitioner/${randomUserData.practitionerId3}`,
        display: `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
      },
      performer: {
        reference: `Practitioner/${randomUserData.practitionerId8}`,
        display: `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`,
      },
      performerType: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/practitioner-role",
            code: "pharm",
            display: "Pharmacist",
          },
        ],
        text: "Pharmacist",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "123456",
              display: "Hypercholesterolemia",
            },
          ],
          text: "High cholesterol",
        },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          text: "Take one tablet by mouth once daily",
          additionalInstruction: [
            {
              text: "with evening meal",
            },
          ],
          patientInstruction:
            "Take this medication with food to reduce stomach upset.",
          timing: {
            repeat: {
              frequency: 1,
              period: 1,
              periodUnit: "d",
            },
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307486002",
                  display: "Once daily",
                },
              ],
              text: "Once Daily",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral Route",
              },
            ],
            text: "Oral Route",
          },
          doseAndRate: [
            {
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        validityPeriod: {
          start: "2022-08-22T00:00:00.000Z",
          end: "2023-08-22T00:00:00.000Z",
        },
        numberOfRepeatsAllowed: 1,
        quantity: {
          value: 90,
          unit: "tablet",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
        expectedSupplyDuration: {
          value: 90,
          unit: "days",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "d",
        },
        performer: {
          reference: `Organization/${randomUserData.organizationId1}`,
          display: "Bwell Pharmacy",
        },
      },
      substitution: {
        allowedBoolean: true,
        reason: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              code: "CT",
              display: "Continuity of Therapy",
            },
          ],
          text: "Generic substitution allowed",
        },
      },
      detectedIssue: [
        {
          reference: `DetectedIssue/${uuidv4()}`,
        },
      ],
      eventHistory: [
        {
          reference: `Provenance/${uuidv4()}`,
        },
      ],
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id1}`,
      meta: {
        source: "https://www.icanbwell.com",
        profile: ["http://hl7.org/fhir/StructureDefinition/MedicationDispense"],
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/identifier-type",
                code: "DI",
                display: "Dispense Identifier",
              },
            ],
            text: "Pharmacy Dispense ID",
          },
          system: "https://www.icanbwell.com/identifiers/medication-dispenses",
          value: "disp12345",
          assigner: {
            display: "Bwell Pharmacy",
          },
        },
      ],
      status: "completed",
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/medicationdispense-category",
            code: "outpatient",
            display: "Outpatient Dispense",
          },
        ],
        text: "Outpatient Dispense",
      },
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0378-3950-77",
            display: "Atorvastatin 10mg Tablet",
          },
        ],
        text: "Atorvastatin 10mg Tablet",
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      context: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter1}`,
      },
      supportingInformation: [
        {
          reference: `DocumentReference/${randomUserData.labObservationId1}`,
        },
      ],
      partOf: [
        {
          reference: `Procedure/${randomUserData.procedureId1}`,
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id1}`,
        },
      ],
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "FF",
            display: "First Fill",
          },
        ],
        text: "First Fill",
      },
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      daysSupply: {
        value: 90,
        unit: "days",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "d",
      },
      whenPrepared: "2023-02-18T10:00:00Z",
      whenHandedOver: "2023-02-18T12:00:00Z",
      destination: {
        display: "Patient's Home Address",
      },
      receiver: [
        {
          reference: `Patient/${proaClientFhirPatientId}`,
          display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
        },
      ],
      note: [
        {
          authorString: `Pharmacist ${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
          time: "2023-02-18T11:50:00Z",
          text: "Patient counseled on medication adherence and side effects.",
        },
      ],
      dosageInstruction: [
        {
          text: "Take one tablet by mouth once daily with water and food to reduce the risk of side effects. Do not crush or split the tablet.",
        },
      ],
      substitution: {
        wasSubstituted: false,
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              code: "CT",
              display: "Continuity of Therapy",
            },
          ],
          text: "No substitution made",
        },
        reason: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                code: "FP",
                display: "Formulary Policy",
              },
            ],
            text: "Brand medically necessary",
          },
        ],
        responsibleParty: [
          {
            reference: `Practitioner/${randomUserData.practitionerId3}`,
            display: `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
          },
        ],
      },
      detectedIssue: [
        {
          reference: `DetectedIssue/${uuidv4()}`,
        },
      ],
      eventHistory: [
        {
          reference: `Provenance/${uuidv4()}`,
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id2}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
                display: "RX",
              },
            ],
            text: "RX",
          },
          value: "9876",
        },
      ],
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        text: "Cetirizine",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "16714-799-04",
            display: "Cetirizine",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      authoredOn: "2022-11-20T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2022-11-20T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 2,
        quantity: {
          value: 90,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id2}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "9876",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id2}`,
        },
      ],
      status: "completed",
      medicationCodeableConcept: {
        text: "Cetirizine",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "16714-799-04",
            display: "Cetirizine",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      whenPrepared: "2023-02-18T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2022-11-20T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "2",
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id3}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "123-987",
        },
      ],
      status: "unknown",
      intent: "order",
      medicationCodeableConcept: {
        text: "Metoprolol",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "52817-361-10",
            display: "Metoprolol",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      authoredOn: "2022-05-23T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2022-05-24T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 25,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 3,
        quantity: {
          value: 90,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id3}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "123-987",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id3}`,
        },
      ],
      status: "draft",
      medicationCodeableConcept: {
        text: "Metoprolol",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "52817-361-10",
            display: "Metoprolol",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      whenPrepared: "2023-02-18T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2022-05-24T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 25,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "3",
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id4}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "890-456",
        },
      ],
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        text: "Lisinopril",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-722-03",
            display: "Lisinopril",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      authoredOn: "2023-05-10T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-05-10T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 20,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 1,
        quantity: {
          value: 30,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id4}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "890-456",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id4}`,
        },
      ],
      status: "completed",
      medicationCodeableConcept: {
        text: "Lisinopril",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-722-03",
            display: "Lisinopril",
          },
        ],
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      whenPrepared: "2023-06-02T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-05-10T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 20,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 30,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "1",
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: `${randomUserData.medStatementId1}`,
      meta: {
        source: "https://fhir.proa.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "337321",
            display: "Albuterol 0.083% Inhalant Solution",
          },
        ],
        text: "Albuterol 0.083% Inhalant Solution",
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      context: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter1}`,
      },
      effectiveDateTime: "2023-07-15T00:00:00.000Z",
      dateAsserted: "2023-07-15T00:00:00.000Z",
      reasonReference: [
        {
          reference: `Condition/${randomUserData.randomSpecialCondition1}`,
        },
      ],
      note: [
        {
          text: "Patient is using inhaler as needed for asthma symptoms.",
          authorString: "Pharmacist",
          time: "2023-07-15T00:00:00.000Z",
        },
      ],
      dosage: [
        {
          text: "Inhale 2 puffs every 4-6 hours as needed for shortness of breath",
          timing: {
            repeat: {
              frequency: 1,
              period: 4,
              periodUnit: "h",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "446096002",
                display: "Inhalation",
              },
            ],
            text: "Inhalation",
          },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: `${randomUserData.medStatementId2}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "860975",
            display: "Metformin Hydrochloride 500mg Oral Tablet",
          },
        ],
        text: "Metformin Hydrochloride 500mg Oral Tablet",
      },
      subject: {
        reference: `Patient/${proaClientFhirPatientId}`,
        display: `${randomUserData.random_LN}, ${randomUserData.random_FN}`,
      },
      context: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter2}`,
      },
      effectiveDateTime: "2023-06-10T00:00:00.000Z",
      dateAsserted: "2023-06-10T00:00:00.000Z",
      reasonReference: [
        {
          reference: `Condition/${randomUserData.randomSpecialCondition2}`,
        },
      ],
      note: [
        {
          text: "Patient is taking medication as prescribed for Type II diabetes management.",
          authorString: "RN",
          time: "2023-06-23T00:00:00Z",
        },
      ],
      dosage: [
        {
          text: "Take 1 tablet orally twice daily with meals",
          timing: {
            repeat: {
              frequency: 2,
              period: 1,
              periodUnit: "d",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Oral Route",
          },
        },
      ],
    },

    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id5}`,
      meta: {
        profile: ["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/identifier-type",
                code: "MR",
              },
            ],
            text: "Medical Record Number",
          },
          system: "https://www.icanbwell.com/identifiers/medication-requests",
          value: "54321",
          period: {
            start: "2023-01-15T00:00:00.000Z",
            end: "2024-01-15T00:00:00.000Z",
          },
          assigner: {
            display: "BWell Pharmacy",
          },
        },
      ],
      status: "completed",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
              code: "community",
              display: "Community",
            },
          ],
          text: "Community Medication",
        },
      ],
      priority: "urgent",
      doNotPerform: false,
      reportedBoolean: false,
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0781-7145-05",
            display: "Metformin 500mg",
          },
        ],
        text: "Metformin 500mg",
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      encounter: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter3}`,
      },
      supportingInformation: [
        {
          reference: `DocumentReference/${randomUserData.labObservationId15}`,
        },
      ],
      authoredOn: "2023-01-15T00:00:00Z",
      requester: {
        reference: `Practitioner/${randomUserData.practitionerId5}`,
        display: `${randomUserData.practitionerFN5} ${randomUserData.practitionerLN5}`,
      },
      performer: {
        reference: `Practitioner/${randomUserData.practitionerId10}`,
        display: `${randomUserData.practitionerFN10} ${randomUserData.practitionerLN10}`,
      },
      performerType: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/practitioner-role",
            code: "pharm",
            display: "Pharmacist",
          },
        ],
        text: "Pharmacist",
      },
      reasonCode: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "44054006",
              display: "Diabetes mellitus type 2",
            },
          ],
          text: "Diabetes Type 2",
        },
      ],
      dosageInstruction: [
        {
          sequence: 1,
          text: "Take one tablet by mouth twice daily",
          additionalInstruction: [
            {
              text: "with meals",
            },
          ],
          patientInstruction:
            "Take this medication with food to avoid stomach upset.",
          timing: {
            repeat: {
              frequency: 2,
              period: 1,
              periodUnit: "d",
            },
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "307472002",
                  display: "Twice daily",
                },
              ],
              text: "Twice Daily",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral Route",
              },
            ],
            text: "Oral Route",
          },
          doseAndRate: [
            {
              doseQuantity: {
                value: 500,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        validityPeriod: {
          start: "2023-01-15T00:00:00.000Z",
          end: "2024-01-15T00:00:00.000Z",
        },
        numberOfRepeatsAllowed: 3,
        quantity: {
          value: 180,
          unit: "tablet",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
        expectedSupplyDuration: {
          value: 90,
          unit: "days",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "d",
        },
        performer: {
          reference: `Organization/${randomUserData.organizationId5}`,
          display: "BWell Pharmacy",
        },
      },
      substitution: {
        allowedBoolean: true,
        reason: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              code: "CT",
              display: "Continuity of Therapy",
            },
          ],
          text: "Generic substitution allowed",
        },
      },
      detectedIssue: [
        {
          reference: `DetectedIssue/${uuidv4()}`,
        },
      ],
      eventHistory: [
        {
          reference: `Provenance/${uuidv4()}`,
        },
      ],
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id5}`,
      meta: {
        source: "https://www.icanbwell.com",
        profile: ["http://hl7.org/fhir/StructureDefinition/MedicationDispense"],
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/identifier-type",
                code: "DI",
                display: "Dispense Identifier",
              },
            ],
            text: "Pharmacy Dispense ID",
          },
          system: "https://www.icanbwell.com/identifiers/medication-dispenses",
          value: "disp54321",
          assigner: {
            display: "BWell Pharmacy",
          },
        },
      ],
      status: "completed",
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/medicationdispense-category",
            code: "community",
            display: "Community Dispense",
          },
        ],
        text: "Community Dispense",
      },
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0781-7145-05",
            display: "Metformin 500mg Tablet",
          },
        ],
        text: "Metformin 500mg Tablet",
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      context: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter3}`,
      },
      supportingInformation: [
        {
          reference: `DocumentReference/${randomUserData.labObservationId15}`,
        },
      ],
      partOf: [
        {
          reference: `Procedure/${randomUserData.procedureId1}`,
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id5}`,
        },
      ],
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "FF",
            display: "First Fill",
          },
        ],
        text: "First Fill",
      },
      quantity: {
        value: 180,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      daysSupply: {
        value: 90,
        unit: "days",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "d",
      },
      whenPrepared: "2023-03-01T10:00:00Z",
      whenHandedOver: "2023-03-01T12:00:00Z",
      destination: {
        display: "Patient's Home Address",
      },
      receiver: [
        {
         "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
      ],
      note: [
        {
          authorString: `Pharmacist ${randomUserData.practitionerFN5} ${randomUserData.practitionerLN5}`,
          time: "2023-03-01T11:50:00Z",
          text: "Patient counseled on medication adherence and potential side effects.",
        },
      ],
      dosageInstruction: [
        {
          text: "Take one tablet by mouth twice daily with meals.",
        },
      ],
      substitution: {
        wasSubstituted: false,
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              code: "CT",
              display: "Continuity of Therapy",
            },
          ],
          text: "No substitution made",
        },
        reason: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                code: "FP",
                display: "Formulary Policy",
              },
            ],
            text: "Brand medically necessary",
          },
        ],
        responsibleParty: [
          {
            reference: `Practitioner/${randomUserData.practitionerId5}`,
            display: `${randomUserData.practitionerFN5} ${randomUserData.practitionerLN5}`,
          },
        ],
      },
      detectedIssue: [
        {
          reference: `DetectedIssue/${uuidv4()}`,
        },
      ],
      eventHistory: [
        {
          reference: `Provenance/${uuidv4()}`,
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id6}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
                display: "RX",
              },
            ],
            text: "RX",
          },
          value: "4321",
        },
      ],
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        text: "Amlodipine",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0069-0004-50",
            display: "Amlodipine 10mg",
          },
        ],
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      authoredOn: "2023-02-14T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-02-14T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 2,
        quantity: {
          value: 90,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id6}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "4321",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id6}`,
        },
      ],
      status: "completed",
      medicationCodeableConcept: {
        text: "Amlodipine",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0069-0004-50",
            display: "Amlodipine 10mg",
          },
        ],
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      whenPrepared: "2023-03-15T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-02-14T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "2",
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id7}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "6789",
        },
      ],
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        text: "Lisinopril",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-722-03",
            display: "Lisinopril 10mg",
          },
        ],
      },
      subject: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      authoredOn: "2023-03-10T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-03-10T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 3,
        quantity: {
          value: 90,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id7}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "6789",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id7}`,
        },
      ],
      status: "completed",
      medicationCodeableConcept: {
        text: "Lisinopril",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-722-03",
            display: "Lisinopril 10mg",
          },
        ],
      },
      subject: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      whenPrepared: "2023-04-01T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-03-10T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 10,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "3",
        },
      ],
    },
    {
      resourceType: "MedicationRequest",
      id: `${randomUserData.med_request_id8}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "5678",
        },
      ],
      status: "active",
      intent: "order",
      medicationCodeableConcept: {
        text: "Simvastatin",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-721-01",
            display: "Simvastatin 20mg",
          },
        ],
      },
      subject: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      authoredOn: "2023-04-05T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-04-05T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
                text: "Ordered",
              },
              doseQuantity: {
                value: 20,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      dispenseRequest: {
        numberOfRepeatsAllowed: 1,
        quantity: {
          value: 90,
          unit: "tablets",
          comparator: ">=",
          system: "http://unitsofmeasure.org",
          code: "tbl",
        },
      },
    },
    {
      resourceType: "MedicationDispense",
      id: `${randomUserData.med_dispense_id8}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      identifier: [
        {
          type: {
            coding: [
              {
                system:
                  "https://fhir.icanbwell.com/4_0_0/CodeSystem/vs-identifier-type",
                code: "RX",
              },
            ],
            text: "RX",
          },
          value: "5678",
        },
      ],
      authorizingPrescription: [
        {
          reference: `MedicationRequest/${randomUserData.med_request_id8}`,
        },
      ],
      status: "completed",
      medicationCodeableConcept: {
        text: "Simvastatin",
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "68180-721-01",
            display: "Simvastatin 20mg",
          },
        ],
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      whenPrepared: "2023-05-01T00:00:00.000Z",
      dosageInstruction: [
        {
          timing: {
            repeat: {
              boundsPeriod: {
                start: "2023-04-05T00:00:00.000Z",
              },
            },
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 20,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
                comparator: ">=",
              },
            },
          ],
        },
      ],
      quantity: {
        value: 90,
        unit: "tablets",
        comparator: ">=",
        system: "http://unitsofmeasure.org",
        code: "tbl",
      },
      extension: [
        {
          id: "refills-remaining",
          valueString: "1",
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: `${randomUserData.medStatementId3}`,
      meta: {
        source: "https://fhir.bwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "704599",
            display: "Omeprazole 20mg Oral Capsule",
          },
        ],
        text: "Omeprazole 20mg Oral Capsule",
      },
      subject: {
       "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      context: {
        reference: `Encounter/${uuidv4()}`,
      },
      effectiveDateTime: "2023-06-10T00:00:00.000Z",
      dateAsserted: "2023-06-10T00:00:00.000Z",
      reasonReference: [
        {
          reference: `Condition/${randomUserData.randomSpecialCondition3}`,
        },
      ],
      note: [
        {
          text: "Patient is using medication for acid reflux.",
          authorString: "Pharmacist",
          time: "2023-06-10T00:00:00.000Z",
        },
      ],
      dosage: [
        {
          text: "Take one capsule daily before breakfast",
          timing: {
            repeat: {
              frequency: 1,
              period: 1,
              periodUnit: "d",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral Route",
              },
            ],
            text: "Oral Route",
          },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: `${randomUserData.medStatementId4}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo",
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
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "860975",
            display: "Metformin Hydrochloride 500mg Oral Tablet",
          },
        ],
        text: "Metformin Hydrochloride 500mg Oral Tablet",
      },
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      context: {
        reference: `Encounter/${randomUserData.randomSpecialEncounter4}`,
      },
      effectiveDateTime: "2023-06-10T00:00:00.000Z",
      dateAsserted: "2023-06-10T00:00:00.000Z",
      reasonReference: [
        {
          reference: `Condition/${randomUserData.randomSpecialCondition4}`,
        },
      ],
      note: [
        {
          text: "Patient is taking medication as prescribed for Type II diabetes management.",
          authorString: "RN",
          time: "2023-06-23T00:00:00Z",
        },
      ],
      dosage: [
        {
          text: "Take 1 tablet orally twice daily with meals",
          timing: {
            repeat: {
              frequency: 2,
              period: 1,
              periodUnit: "d",
            },
          },
          route: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "26643006",
                display: "Oral route",
              },
            ],
            text: "Oral Route",
          },
        },
      ],
    },
  ];

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Immunization/$merge`,
    headers: {
      "Content-Type": "application/fhir+json",
      Authorization: `Bearer ${proaAccessToken}`,
    },
    data: medicationsRequestsData,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error creating PROA immunization records:", error);
    throw error;
  }
}

module.exports = createMedications;
