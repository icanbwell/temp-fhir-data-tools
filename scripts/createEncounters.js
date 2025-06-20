


const axios = require('axios');

async function createEncounters({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {

    const encounterData = [
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter1}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter 1"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "participant": [
            {
                "individual": {
                    "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.random_FN} ${randomUserData.random_LN}`
                },
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/participant-type",
                                "code": "PPRF",
                                "display": "Primary Performer"
                            }
                        ]
                    }
                ]
            }
        ],
        "period": {
            "start": "2022-08-20T00:00:00.000Z",
            "end": "2022-08-21T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "123456",
                        "display": "Routine health maintenance"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "R",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter2}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2021-11-14T00:00:00.000Z",
            "end": "2021-11-14T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "789000",
                        "display": "Consultation for treatment"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "EL",
                    "display": "Elective"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter3}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2022-05-20T00:00:00.000Z",
            "end": "2022-05-20T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "195662009",
                        "display": "Asthma"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "UR",
                    "display": "Urgent"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter4}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2022-11-17T00:00:00.000Z",
            "end": "2022-11-17T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "29857009",
                        "display": "Chest pain"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "STAT",
                    "display": "Immediate"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter5}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2021-10-25T00:00:00.000Z",
            "end": "2021-10-26T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "7890003",
                        "display": "Abdominal pain"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "S",
                    "display": "Semi-urgent"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter6}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "270427003",
                        "display": "Patient-initiated encounter"
                    }
                ],
                "text": "Patient-initiated encounter"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-01-20T00:00:00.000Z",
            "end": "2023-01-21T00:00:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "11833005",
                        "display": "Headache"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "N",
                    "display": "Normal"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter7}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "386661006",
                        "display": "Fever of unknown origin"
                    }
                ]
            }
        ],
        "diagnosis": [
            {
                "condition": {
                    "reference": "Condition/feverUnknownOrigin",
                    "display": "Fever of Unknown Origin"
                },
                "use": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
                            "code": "CC",
                            "display": "Chief complaint"
                        }
                    ]
                },
                "rank": 1
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185349003",
                        "display": "General consultation"
                    }
                ],
                "text": "General Consultation"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "participant": [
            {
                "individual": {
                    "reference": `Practitioner/${randomUserData.practitionerId3}`,
                }
            }
        ],
        "period": {
            "start": "2023-04-12T09:00:00.000Z",
            "end": "2023-04-12T09:30:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "UR",
                    "display": "Urgent"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter8}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "162673000",
                        "display": "Major depressive disorder"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "104091002",
                        "display": "Psychiatric follow-up"
                    }
                ],
                "text": "Psychiatric Follow-Up"
            }
        ],
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-06-15T10:00:00.000Z",
            "end": "2023-06-15T11:00:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "UR",
                    "display": "Urgent"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter9}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "444814009",
                        "display": "Viral pharyngitis"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185345009",
                        "display": "Office visit"
                    }
                ],
                "text": "Office Visit for Sore Throat"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-07-20T09:30:00.000Z",
            "end": "2023-07-20T10:00:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter10}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "367497003",
                        "display": "Injury of ankle"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "305408004",
                        "display": "Follow-up visit"
                    }
                ],
                "text": "Follow-Up Visit for Ankle Injury"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-08-05T14:00:00.000Z",
            "end": "2023-08-05T14:30:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "UR",
                    "display": "Urgent"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter11}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "118930001",
                        "display": "Hypertension follow-up"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "308335008",
                        "display": "Routine general medical examination at a health care facility"
                    }
                ],
                "text": "Routine Hypertension Follow-Up"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-09-10T10:00:00.000Z",
            "end": "2023-09-10T10:30:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter12}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "54329005",
                        "display": "Screening for malignant neoplasms"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185349003",
                        "display": "General consultation"
                    }
                ],
                "text": "Cancer Screening Consultation"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-10-15T09:00:00.000Z",
            "end": "2023-10-15T10:00:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter13}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "267102003",
                        "display": "General medical examination"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185349003",
                        "display": "General consultation"
                    }
                ],
                "text": "Annual Physical Examination"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-11-20T09:00:00.000Z",
            "end": "2023-11-20T10:30:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter14}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "386661006",
                        "display": "Fever"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185349003",
                        "display": "General consultation"
                    }
                ],
                "text": "Consultation for Fever"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-12-01T10:00:00.000Z",
            "end": "2023-12-01T10:45:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter15}`,
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
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "408512008",
                        "display": "Suspected COVID-19"
                    }
                ]
            }
        ],
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "34729004",
                        "display": "Viral infectious disease consultation"
                    }
                ],
                "text": "COVID-19 Consultation"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-12-15T11:00:00.000Z",
            "end": "2023-12-15T11:30:00.000Z"
        },
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "IMM",
                    "display": "Immediate"
                }
            ]
        }
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomEncounter16}`,
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
        "text": {
            "status": "generated",
            "div": "Generated Text for Encounter"
        },
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "Ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "185345009",
                        "display": "Office visit"
                    }
                ],
                "text": "Office Visit for General Checkup"
            }
        ],
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "period": {
            "start": "2023-03-15T09:00:00.000Z",
            "end": "2023-03-15T09:30:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "109006",
                        "display": "General examination of patient (procedure)"
                    }
                ]
            }
        ],
        "priority": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
                    "code": "ROUT",
                    "display": "Routine"
                }
            ]
        },
        "participant": [
            {
                "individual": {
                    "reference": `Practitioner/${randomUserData.practitionerId4}`,
                },
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/participant-type",
                                "code": "ATND",
                                "display": "Attender"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Encounter",
        "id": `${randomUserData.randomSpecialEncounter1}`,
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
        "status": "finished",
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB",
            "display": "ambulatory"
        },
        "type": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/encounter-type",
                        "code": "diabfollowup",
                        "display": "Diabetes Follow-up"
                    }
                ],
                "text": "Diabetes Follow-up"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "participant": [
            {
                "individual": {
                    "reference": `Practitioner/${randomUserData.practitionerId1}`,
                },
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                "code": "ADM",
                                "display": "admitter"
                            }
                        ],
                        "text": "admitter"
                    }
                ]
            }
        ],
        "period": {
            "start": "2023-04-05T09:30:00.000Z",
            "end": "2023-04-05T09:59:00.000Z"
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "44054006",
                        "display": "Type II diabetes mellitus follow-up visit"
                    }
                ],
                "text": "Type II diabetes mellitus follow-up visit"
            }
        ],
        "hospitalization": {
            "admitSource": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/admit-source",
                        "code": "hosp-trans",
                        "display": "Transfer from hospital"
                    }
                ],
                "text": "Transfer from hospital"
            },
            "dischargeDisposition": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/discharge-disposition",
                        "code": "home",
                        "display": "Home"
                    }
                ],
                "text": "Discharged to home"
            }
        },
        "location": [
            {
                "location": {
                    "reference": `Location/${randomUserData.locationId1}`,
                },
                "status": "active",
                "period": {
                    "start": "2023-04-05T09:30:00.000Z",
                    "end": "2023-04-05T09:45:00.000Z"
                }
            }
        ],
        "serviceProvider": {
            "reference": `Organization/${randomUserData.organizationId1}`,
        }
    }
]
    const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Encounter/$merge`,
            headers: {
                'Content-Type': 'application/fhir+json',
                'Authorization': `Bearer ${proaAccessToken}`
            },
            data: encounterData
        };
    
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            console.error('Error creating PROA Encounter Records:', error);
            throw error;
        }
   }

module.exports = createEncounters;
