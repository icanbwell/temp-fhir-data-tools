const axios = require('axios');

async function createProaImmunization({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {
    
    if (!proaAccessToken) {
        throw new Error('PROA access token not available.');
    }

    if (!proaClientFhirPatientId) {
        throw new Error('proaClientFhirPatientId ID is required for immunization records.');
    }

    const immunizationData = [
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization1}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "AAlotNumberBBCCDD",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://www.ama-assn.org/go/cpt",
                    "code": "91300",
                    "display": "Covid 19 Vaccine (1st Dose)"
                }
            ],
            "text": "Covid 19 Vaccine (1st Dose)"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-06-11T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
        },
        "expirationDate": "2015-02-15",
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "LA",
                    "display": "left arm"
                }
            ],
            "text": "Left Arm"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "IM",
                    "display": "Injection, intramuscular"
                }
            ],
            "text": "Injection, intramuscular"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[2020-01-01, 2020-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization2}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "AAlotNumberBBCCDDEEFFGG",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://www.ama-assn.org/go/cpt",
                    "code": "91304",
                    "display": "Covid 19 Vaccine (3rd Dose)"
                }
            ],
            "text": "Covid 19 Vaccine (3rd Dose)"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2024-10-11T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
        },
        "expirationDate": "2025-05-11",
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "RA",
                    "display": "right arm"
                }
            ],
            "text": "Right Arm"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "IM",
                    "display": "Injection, intramuscular"
                }
            ],
            "text": "Injection, intramuscular"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[2024-07-01, 2024-12-11]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization3}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://www.ama-assn.org/go/cpt",
                    "code": "91300",
                    "display": "Covid 19 Vaccine (2nd Dose)"
                }
            ],
            "text": "Covid 19 Vaccine (2nd Dose)"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-09-11T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 2
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "429060002",
                        "display": "Procedure to meet occupational requirement"
                    }
                ],
                "text": "Required Procedural Immunization"
            }
        ],
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/LookbackIntervalOne",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization4}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "status": "not-done",
        "vaccineCode": {
            "coding": [
                {
                    "system": "urn:oid:1.2.36.1.2001.1005.17",
                    "code": "FLUVAX",
                    "display": "FLUVAX"
                }
            ],
            "text": "Fluvax (Influenza)"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter13}`
        },
        "occurrenceDateTime": "2013-01-10T00:00:00.000Z",
        "primarySource": true,
        "location": {
            "reference": `Location/${randomUserData.randomEncounter13}`
        },
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId4}`,
        },
        "lotNumber": "AAJN11K",
        "expirationDate": "2015-02-15",
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "LA",
                    "display": "left arm"
                }
            ],
            "text": "Left Arm"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "IM",
                    "display": "Injection, intramuscular"
                }
            ],
            "text": "Injection, intramuscular"
        },
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "doseQuantity": {
            "value": 5,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
        },
        "performer": [
            {
                "function": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
                            "code": "OP",
                            "display": "OP"
                        }
                    ],
                    "text": "OP"
                },
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId4}`,
                    "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
                }
            },
            {
                "function": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
                            "code": "AP",
                            "display": "AP"
                        }
                    ],
                    "text": "AP"
                },
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId3}`,
                    "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
                }
            }
        ],
        "note": [
            {
                "text": "Patient fainted and soiled pants",
                "authorString": "Administering RN",
                "time": "2013-01-10T00:00:00.000Z"
            }
        ],
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "429060002",
                        "display": "Procedure to meet occupational requirement"
                    }
                ],
                "text": "Required Procedural Immunization"
            }
        ],
        "isSubpotent": true,
        "education": [
            {
                "documentType": "253088698300010311120702",
                "publicationDate": "2012-07-10T00:00:00.000Z",
                "presentationDate": "2013-01-10T00:00:00.000Z"
            }
        ],
        "programEligibility": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
                        "code": "ineligible",
                        "display": "Ineligible"
                    }
                ],
                "text": "Ineligible"
            }
        ],
        "fundingSource": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                    "code": "private",
                    "display": "private"
                }
            ],
            "text": "Private"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[2013-01-01, 2013-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization5}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "urn:oid:1.2.36.1.2001.1005.17",
                    "code": "FLUVAX",
                    "display": "FLUVAX"
                }
            ],
            "text": "Fluvax (Influenza)"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter14}`
        },
        "occurrenceDateTime": "2024-06-10T04:33:00.000Z",
        "primarySource": true,
        "location": {
            "reference": `Location/${randomUserData.randomEncounter14}`
        },
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId4}`,
        },
        "lotNumber": "AAJN11K-BEANS_and_RICE",
        "expirationDate": "2025-05-15",
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "RA",
                    "display": "right arm"
                }
            ],
            "text": "Right Arm"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "IM",
                    "display": "Injection, intramuscular"
                }
            ],
            "text": "Injection, intramuscular"
        },
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "doseQuantity": {
            "value": 10,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
        },
        "performer": [
            {
                "function": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
                            "code": "OP",
                            "display": "OP"
                        }
                    ],
                    "text": "OP"
                },
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId4}`,
                    "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
                }
            },
            {
                "function": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
                            "code": "AP",
                            "display": "AP"
                        }
                    ],
                    "text": "AP"
                },
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId3}`,
                    "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
                }
            }
        ],
        "note": [
            {
                "text": "Patient fainted and completely soiled pants, quite embarrassing.",
                "authorString": "Administering RN",
                "time": "2024-06-10T04:33:00.000Z"
            }
        ],
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "429060002",
                        "display": "Procedure to meet occupational requirement"
                    }
                ],
                "text": "Required Procedural Immunization"
            }
        ],
        "isSubpotent": true,
        "education": [
            {
                "documentType": "253088698300010311120702",
                "publicationDate": "2022-06-10T00:00:00.000Z",
                "presentationDate": "2024-06-10T00:00:00.000Z"
            }
        ],
        "programEligibility": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
                        "code": "ineligible",
                        "display": "Ineligible"
                    }
                ],
                "text": "Ineligible"
            }
        ],
        "fundingSource": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                    "code": "private",
                    "display": "private"
                }
            ],
            "text": "Private"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/LookbackIntervalOne",
                "valueString": "Interval[2024-01-01, 2024-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization6}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "ER8735",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "208",
                    "display": "Pfizer Covid-19 Mdv"
                }
            ],
            "text": "Pfizer Covid-19 Mdv"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-04-22T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
        },
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "NA",
                    "display": "Not Available"
                }
            ],
            "text": "Not Available"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "NA",
                    "display": "Not Available"
                }
            ],
            "text": "Not Available"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization7}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "CVX:02-Polio oral-19960821",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "02",
                    "display": "Polio oral"
                }
            ],
            "text": "Polio oral"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "1996-08-21T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
        },
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "NA",
                    "display": "Not Available"
                }
            ],
            "text": "Not Available"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "PO",
                    "display": "Oral"
                }
            ],
            "text": "Oral"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/LookbackIntervalOne",
                "valueString": "Interval[1996-01-01, 1996-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization8}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "8762918",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "89",
                    "display": "Polio, Unspecified"
                }
            ],
            "text": "Polio, Unspecified"
        },
        "patient": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "1991-06-10T00:00:00.000Z",
        "protocolApplied": [
            {
                "doseNumberPositiveInt": 1
            }
        ],
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
        },
        "site": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                    "code": "NA",
                    "display": "Not Available"
                }
            ],
            "text": "Not Available"
        },
        "route": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                    "code": "NA",
                    "display": "Not Available"
                }
            ],
            "text": "Not Available"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[1991-01-01, 1991-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization9}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "8762914",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "urn:oid:1.2.36.1.2001.1005.17",
                    "code": "FLUVAX",
                    "display": "FLUVAX"
                }
            ],
            "text": "Fluvax (Influenza)"
        },
        "patient": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2023-12-01T00:00:00.000Z",
        "measurementPeriod": "Interval[2023-01-01, 2023-12-31]",
        "AdultFluVaccineDateImmunization": "2023-12-01",
        "currentPeriod": "2023-12-01",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/measurementPeriod",
                "valueString": "Interval[2023-01-01, 2023-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization10}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "10227918",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "208",
                    "display": "Pfizer Covid-19 Mdv"
                }
            ],
            "text": "Pfizer Covid-19 Mdv"
        },
        "patient": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-04-22T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId3}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization11}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "10227917",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "208",
                    "display": "Pfizer Covid-19 Mdv"
                }
            ],
            "text": "Pfizer Covid-19 Mdv"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-04-01T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId3}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization12}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "8762919",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "89",
                    "display": "Polio, Unspecified"
                }
            ],
            "text": "Polio, Unspecified"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "1993-08-15T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0,
            "unit": "Not Available",
            "system": "http://careevolution.com/fhircodes#MedicationAdministrationDoseUnits",
            "code": "NA"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/LookbackIntervalOne",
                "valueString": "Interval[1993-01-01, 1993-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization13}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "ER8735",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "208",
                    "display": "Pfizer Covid-19 Mdv"
                }
            ],
            "text": "Pfizer Covid-19 Mdv"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-04-22T00:00:00.000Z",
        "primarySource": false,
        "location": {
            "reference": `Location/${randomUserData.randomEncounter12}`,
            "display": "HV1388"
        },
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization14}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "CVX:02-Polio oral-19910724",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "02",
                    "display": "Polio oral"
                }
            ],
            "text": "Polio oral"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "1996-08-21T00:00:00.000Z",
        "primarySource": true,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0,
            "unit": "Not Available",
            "system": "http://careevolution.com/fhircodes#MedicationAdministrationDoseUnits",
            "code": "N/A"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/LookbackIntervalOne",
                "valueString": "Interval[1996-01-01, 1996-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization15}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "8762918",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "89",
                    "display": "Polio, Unspecified"
                }
            ],
            "text": "Polio, Unspecified"
        },
        "patient": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "1991-06-10T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId1}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0,
            "unit": "Not Available",
            "system": "http://careevolution.com/fhircodes#MedicationAdministrationDoseUnits",
            "code": "N/A"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[1991-01-01, 1991-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization16}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "GJ3274",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "300",
                    "display": "Pfizer Covid-19 bivalent Booster"
                }
            ],
            "text": "Pfizer Covid-19 bivalent Booster"
        },
        "patient": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2022-12-05T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": "Organization/{{organizationId4}}",
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[2022-01-01, 2022-12-31]"
            }
        ]
    },
    {
        "resourceType": "Immunization",
        "id": `${randomUserData.immunization17}`,
        "meta": {
            "source": "https://www.icanbwell.com",
            "security": [
                {
                    "system": "https://www.icanbwell.com/owner",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/access",
                    "code": "proa_demo_samsung"
                },
                {
                    "system": "https://www.icanbwell.com/vendor",
                    "code": "proa_demo"
                },
                {
                    "system": "https://www.icanbwell.com/sourceAssigningAuthority",
                    "code": "proa_demo"
                }
            ]
        },
        "lotNumber": "ER8733",
        "status": "completed",
        "vaccineCode": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/sid/cvx",
                    "code": "208",
                    "display": "Pfizer Covid-19 Mdv"
                }
            ],
            "text": "Pfizer Covid-19 Mdv"
        },
        "patient": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "occurrenceDateTime": "2021-04-01T00:00:00.000Z",
        "primarySource": false,
        "manufacturer": {
            "reference": `Organization/${randomUserData.organizationId2}`,
            "display": "Unknown Manufacturer"
        },
        "doseQuantity": {
            "value": 0.3,
            "unit": "mL",
            "system": "urn:oid:1.2.840.114350.1.13.501.2.7.10.768076.4019",
            "code": "1"
        },
        "extension": [
            {
                "url": "http://example.com/fhir/StructureDefinition/MeasurementPeriod",
                "valueString": "Interval[2021-01-01, 2021-12-31]"
            }
        ]
    }
]

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Immunization/$merge`,
        headers: {
            'Content-Type': 'application/fhir+json',
            'Authorization': `Bearer ${proaAccessToken}`
        },
        data: immunizationData
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error creating PROA immunization records:', error);
        throw error;
    }
}

module.exports = createProaImmunization;
