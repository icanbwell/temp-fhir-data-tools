const axios = require('axios');

async function createConditions({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {
        const conditionsData = [
    {
        "resourceType": "Condition",
        "id": `${randomUserData.randomCondition1}`,
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
        "clinicalStatus": {
            "text": "Active",
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    "code": "active",
                    "display": "Active"
                }
            ]
        },
        "verificationStatus": {
            "text": "Confirmed",
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    "code": "confirmed",
                    "display": "Confirmed"
                }
            ]
        },
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "problem-list-item",
                        "display": "Problem List Item"
                    }
                ],
                "text": "Problem list item"
            }
        ],
        "severity": {
            "text": "Severe",
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "24484000",
                    "display": "Severe"
                }
            ]
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "38341003",
                    "display": "Hypertensive disorder"
                }
            ],
            "text": "Hypertensive disorder"
        },
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "51840005",
                        "display": "Systemic circulatory system structure"
                    }
                ],
                "text": "Systemic circulatory system structure"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "recorder": {
            "reference": `Practitioner/${randomUserData.practitionerId7}`,
            "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
        },
        "asserter": {
            "reference": `Practitioner/${randomUserData.practitionerId8}`,
            "display": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`
        },
        "onsetPeriod": {
            "start": "2018-09-17T00:00:00Z"
        },
        "recordedDate": "2018-12-01T00:00:00.000Z",
        "abatementPeriod": {
            "start": "2018-12-02T00:00:00Z"
        },
        "note": [
            {
                "text": "Broken heart.",
                "authorString": `${randomUserData.practitionerId8}`,
                "time": "2013-12-16T00:00:00.00Z"
            }
        ],
        "evidence": [
            {
                "code": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "386661006",
                                "display": "Finding of hypertension"
                            }
                        ],
                        "text": "High blood pressure reading"
                    }
                ]
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter11}`,
            "display": "General check-up"
        }
    },
    {
        "resourceType": "Condition",
        "id": `${randomUserData.randomCondition2}`,
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
        "clinicalStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    "code": "resolved",
                    "display": "Resolved"
                }
            ],
            "text": "Resolved"
        },
        "verificationStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    "code": "confirmed",
                    "display": "Confirmed"
                }
            ],
            "text": "Confirmed"
        },
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "problem-list-item",
                        "display": "Problem List Item"
                    }
                ],
                "text": "Problem list item"
            }
        ],
        "severity": {
            "text": "Mild",
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "255604002",
                    "display": "Mild"
                }
            ]
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "386661006",
                    "display": "Fever"
                }
            ],
            "text": "Fever"
        },
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "38266002",
                        "display": "Entire body as a whole"
                    }
                ],
                "text": "Entire body as a whole"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "onsetPeriod": {
            "end": "2013-05-01T00:00:00Z"
        },
        "abatementPeriod": {
            "end": "2013-05-01T00:00:00Z"
        },
        "recordedDate": "2013-04-04T00:00:00.000Z",
        "recorder": {
            "reference": `Practitioner/${randomUserData.practitionerId2}`,
            "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
        },
        "asserter": {
            "reference": `Practitioner/${randomUserData.practitionerId2}`,
            "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
        },
        "evidence": [
            {
                "code": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "258710007",
                                "display": "degrees C"
                            }
                        ],
                        "text": "Increased body temperature"
                    }
                ]
            }
        ],
        "note": [
            {
                "text": "This person be very cold.",
                "authorString": `${randomUserData.practitionerId2}`,
                "time": "2013-12-16T00:00:00.00Z"
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter12}`,
            "display": "Walk-in clinic visit"
        }
    },
    {
        "resourceType": "Condition",
        "id": `${randomUserData.randomCondition3}`,
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
        "clinicalStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    "code": "active",
                    "display": "Active"
                }
            ],
            "text": "Active"
        },
        "verificationStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    "code": "confirmed",
                    "display": "Confirmed"
                }
            ],
            "text": "Confirmed"
        },
        "category": [
            {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "75326-9",
                        "display": "Problem"
                    },
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "problem-list-item",
                        "display": "Problem List Item"
                    }
                ],
                "text": "Confirmed Problem"
            }
        ],
        "severity": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "LA6750-9",
                    "display": "Severe"
                },
                {
                    "system": "http://snomed.info/sct",
                    "code": "24484000",
                    "display": "Severe"
                }
            ],
            "text": "Severe"
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "195967001",
                    "display": "Asthma"
                }
            ],
            "text": "Asthma"
        },
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "39607008",
                        "display": "Lung Structure"
                    }
                ],
                "text": "Lung Structure"
            }
        ],
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "recorder": {
            "reference": `Practitioner/${randomUserData.practitionerId8}`,
            "display": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`
        },
        "asserter": {
            "reference": `Practitioner/${randomUserData.practitionerId8}`,
            "display": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`
        },
        "onsetDateTime": "2015-10-01T00:00:00.000Z",
        "recordedDate": "2016-10-01T00:00:00.000Z",
        "abatementDateTime": "2016-10-02T00:00:00.000Z",
        "note": [
            {
                "text": "Broken Lung.",
                "authorString": `${randomUserData.practitionerId5}`,
                "time": "2013-12-16T00:00:00.00Z"
            }
        ],
        "evidence": [
            {
                "code": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "49727002",
                                "display": "Asthma attack"
                            }
                        ],
                        "text": "Reported wheezing and difficulty breathing"
                    }
                ]
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter13}`,
            "display": "Pulmonology follow-up"
        }
    },
    {
        "resourceType": "Condition",
        "id": `${randomUserData.randomSpecialCondition1}`,
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
        "clinicalStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    "code": "active",
                    "display": "Active"
                }
            ],
            "text": "Active"
        },
        "verificationStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                    "code": "confirmed",
                    "display": "Confirmed"
                }
            ],
            "text": "Confirmed"
        },
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "encounter-diagnosis",
                        "display": "Encounter Diagnosis"
                    }
                ],
                "text": "Encounter Diagnosis"
            }
        ],
        "severity": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "6736007",
                    "display": "Moderate"
                }
            ],
            "text": "Moderate Severity"
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "73211009",
                    "display": "Diabetes mellitus type 2"
                }
            ],
            "text": "Type II Diabetes"
        },
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "181277001",
                        "display": "Entire Pancreas"
                    }
                ],
                "text": "Entire Pancreas"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "onsetPeriod": {
            "start": "2013-10-01T00:00:00.000Z",
            "end": "2013-12-02T00:00:00.000Z"
        },
        "abatementPeriod": {
            "start": "2013-12-02T00:00:00.000Z",
            "end": "2013-12-15T00:00:00.000Z"
        },
        "recordedDate": "2013-12-15T00:00:00.000Z",
        "recorder": {
            "reference": `Practitioner/${randomUserData.practitionerId8}`,
            "display": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`
        },
        "asserter": {
             "reference": `Practitioner/${randomUserData.practitionerId8}`,
            "display": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`
        },
        "note": [
            {
                "text": "Patient diagnosed with Type 2 Diabetes. Recommended to follow a strict diet and regular medication.",
                "authorString": `${randomUserData.practitionerId8}`,
                "time": "2013-12-16T00:00:00.00Z"
            }
        ],
        "evidence": [
            {
                "detail": [
                    {
                        "reference": `Observation/${randomUserData.observationId13}`,
                        "display": "HbA1c level observation"
                    }
                ]
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter14}`,
            "display": "Endocrinology evaluation"
        }
    }
]

        const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Condition/$merge`,
                headers: {
                    'Content-Type': 'application/fhir+json',
                    'Authorization': `Bearer ${proaAccessToken}`
                },
                data: conditionsData
            };
        
            try {
                const response = await axios(config);
                return response.data;
            } catch (error) {
                console.error('Error creating PROA Condition Records:', error);
                throw error;
            }
}

module.exports = createConditions;
