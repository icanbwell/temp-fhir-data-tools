//script to create observations

const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

async function createObservations({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {

    const observationData = [
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId1}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId1}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-06-23T16:48:00.000Z",
        "issued": "2023-06-23T19:13:50.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 112,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal systolic pressure"
                    }
                ],
                "referenceRange": [
                    {
                        "low": {
                            "value": 90,
                            "unit": "mm[Hg]",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mm[Hg]",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "type": {
                            "text": "Normal systolic blood pressure range for adults"
                        }
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 60,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic pressure"
                    }
                ],
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mm[Hg]",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mm[Hg]",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "type": {
                            "text": "Normal diastolic blood pressure range for adults"
                        }
                    }
                ]
            }
        ],
        "note": [
            {
                "text": "Patient's blood pressure within normal range, no immediate action required.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ],
        "valuePeriod": {
            "start": "2023-06-24T00:00:00.000Z"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId4}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId4}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic blood pressure"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic blood pressure"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-05-01T18:54:00.000Z",
        "issued": "2023-05-01T22:31:47.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 122,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal systolic blood pressure"
                    }
                ],
                "referenceRange": [
                    {
                        "low": {
                            "value": 90,
                            "unit": "mm[Hg]",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mm[Hg]",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 78,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mm[Hg]",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mm[Hg]",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            }
        ],
        "note": [
            {
                "text": "Blood pressure within normal range. No action required.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId5}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId5}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8867-4",
                    "display": "Heart rate"
                }
            ],
            "text": "Heart rate"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-04-05T01:21:00Z",
        "issued": "2023-04-05T01:24:41Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "valueQuantity": {
            "value": 69,
            "unit": "/min",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 60,
                    "unit": "/min",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                },
                "high": {
                    "value": 100,
                    "unit": "/min",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal heart rate"
            }
        ],
        "note": [
            {
                "text": "Heart rate within normal limits.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId6}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId6}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8480-6",
                    "display": "Systolic blood pressure"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8462-4",
                    "display": "Diastolic blood pressure"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-03-29T15:32:00Z",
        "issued": "2023-03-29T15:35:42Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
                "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 120,
                    "unit": "mmHg",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmHg"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 90,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal systolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 80,
                    "unit": "mmHg",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmHg"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            }
        ],
        "note": [
            {
                "text": "Blood pressure within normal range.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId8}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId8}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8867-4",
                    "display": "Heart rate"
                }
            ],
            "text": "Pulse"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "issued": "2023-04-08T05:28:06Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "valueQuantity": {
            "value": 74,
            "unit": "/min",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 60,
                    "unit": "/min",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                },
                "high": {
                    "value": 100,
                    "unit": "/min",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal"
            }
        ],
        "note": [
            {
                "text": "Patient's pulse rate is within the normal range for resting heart rate.",
                "authorString": "Physician",
                "time": "2023-04-08T05:28:06Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "123456",
                    "display": "Manual Count"
                }
            ],
            "text": "Manual counting method"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "7890003",
                    "display": "Radial artery"
                }
            ],
            "text": "Radial artery (wrist)"
        },
        "device": [
            {
                "reference": `DeviceMetric/${uuidv4()}`,
                "display": "Manual sphygmomanometer"
            }
        ],
        "comment": "Observation performed under standard conditions.",
        "dataAbsentReason": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code": "not-applicable",
                    "display": "Not Applicable"
                }
            ],
            "text": "Not Applicable"
        },
        "effectivePeriod": {
            "start": "2023-04-08T05:27:00Z",
            "end": "2023-04-08T05:27:59Z"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId9}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId9}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8310-5",
                    "display": "Body temperature"
                }
            ],
            "text": "Temperature"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "issued": "2022-10-15T20:48:53Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "valueQuantity": {
            "value": 36.8,
            "unit": "°C",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "Cel"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 36.1,
                    "unit": "°C",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                },
                "high": {
                    "value": 37.2,
                    "unit": "°C",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal body temperature"
            }
        ],
        "note": [
            {
                "text": "Patient's body temperature is within the normal range.",
                "authorString": "Physician",
                "time": "2022-10-15T20:47:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "89003005",
                    "display": "Oral temperature taking"
                }
            ],
            "text": "Oral temperature measurement"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "74262004",
                    "display": "Oral cavity"
                }
            ],
            "text": "Oral"
        },
        "device": [
            {
                "reference": `DeviceMetric/${uuidv4()}`,
                "display": "Digital thermometer"
            }
        ],
        "comment": "Measurement taken under standard conditions, patient rested and seated.",
        "dataAbsentReason": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code": "not-applicable",
                    "display": "Not Applicable"
                }
            ],
            "text": "Not Applicable"
        },
        "effectivePeriod": {
            "start": "2022-10-15T20:47:00Z",
            "end": "2022-10-15T20:47:59Z"
        },
        "basedOn": [
            {
                "reference": `ServiceRequest/${randomUserData.randomCarePlan1}`,
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId1}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId10}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId10}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-10-20T00:29:00Z",
        "issued": "2022-10-20T00:31:49Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 112,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 70,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "note": [
                    {
                        "text": "Patient's results within normal range.",
                        "authorString": "Physician",
                        "time": "2022-10-15T20:47:59Z"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId11}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId11}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-10-22T16:30:00Z",
        "issued": "2022-10-22T16:31:08Z",
        "performer": [
            {
                "reference":  `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 116,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 68,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "note": [
                    {
                        "text": "Patient's results within normal range.",
                        "authorString": "Physician",
                        "time": "2022-10-15T20:47:59Z"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId12}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId12}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "8",
                    "display": "Pulse"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "taKwRDgTbLDk.ReJP0gGGlA0",
                    "display": "Pulse"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8867-4"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8867-4",
                    "display": "Heart rate"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "8",
                    "display": "Pulse"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8867-4"
                }
            ],
            "text": "Pulse"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-04-03T03:03:00Z",
        "issued": "2023-04-03T03:05:58Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "valueQuantity": {
            "value": 86,
            "unit": "/min",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 60,
                    "unit": "/min",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                },
                "high": {
                    "value": 100,
                    "unit": "/min",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal"
            }
        ],
        "note": [
            {
                "text": "Patient's pulse rate is within the normal range.",
                "authorString": "Physician",
                "time": "2023-04-03T03:03:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId13}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId13}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-11-11T02:39:00Z",
        "issued": "2022-11-11T02:40:41Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 118,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 77,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "note": [
                    {
                        "text": "Patient's results within normal range.",
                        "authorString": "Physician",
                        "time": "2021-01-28T00:00:00Z"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId16}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId16}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8310-5",
                    "display": "Body temperature"
                }
            ],
            "text": "Temperature"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "issued": "2022-11-11T17:19:47Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "valueQuantity": {
            "value": 35.7,
            "unit": "°C",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "Cel"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 36.1,
                    "unit": "°C",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                },
                "high": {
                    "value": 37.2,
                    "unit": "°C",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "L",
                        "display": "Low"
                    }
                ],
                "text": "Below normal body temperature"
            }
        ],
        "note": [
            {
                "text": "Patient's body temperature is slightly below the normal range. Consider re-evaluation or monitoring for hypothermia risk.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "89003005",
                    "display": "Oral temperature taking"
                }
            ],
            "text": "Oral temperature measurement"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "74262004",
                    "display": "Oral cavity"
                }
            ],
            "text": "Oral"
        },
        "device": [
            {
                "reference": `DeviceMetric/${uuidv4()}`,
                "display": "Digital thermometer"
            }
        ],
        "comment": "Measurement taken under standard conditions, patient rested and seated.",
        "dataAbsentReason": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code": "not-applicable",
                    "display": "Not Applicable"
                }
            ],
            "text": "Not Applicable"
        },
        "effectivePeriod": {
            "start": "2022-11-11T17:18:00Z",
            "end": "2022-11-11T17:18:59Z"
        },
        "basedOn": [
            {
                "reference": `CarePlan/${randomUserData.randomCarePlan1}`
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.randomProcedure1}`,
            }
        ],
        "derivedFrom": [
            {
                "reference": `Observation/${randomUserData.randomObservation9}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId17}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId17}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8310-5",
                    "display": "Body temperature"
                }
            ],
            "text": "Temperature"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-10-13T08:35:00Z",
        "issued": "2022-10-13T08:36:26Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "valueQuantity": {
            "value": 36.4,
            "unit": "°C",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "Cel"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 36.1,
                    "unit": "°C",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                },
                "high": {
                    "value": 37.2,
                    "unit": "°C",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "Cel"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal body temperature"
            }
        ],
        "note": [
            {
                "text": "Patient's body temperature is within the normal range.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId18}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId18}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-11-12T13:29:00Z",
        "issued": "2022-11-12T13:31:42Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 116,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 67,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "note": [
                    {
                        "text": "Patient's results within normal range.",
                        "authorString": "Lab Technician",
                        "time": "2023-06-23T00:00:00Z"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId19}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId19}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "t32zf3s-yIvcg869SDOmpgA0",
                    "display": "Blood Pressure"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8480-6"
                },
                {
                    "system": "http://loinc.org",
                    "code": "55284-4",
                    "display": "Blood pressure systolic and diastolic"
                },
                {
                    "system": "http://loinc.org",
                    "code": "85354-9",
                    "display": "Blood pressure panel with all children optional"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "5",
                    "display": "Blood Pressure"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8462-4"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8480-6"
                }
            ],
            "text": "Blood Pressure"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-03-31T15:28:00Z",
        "issued": "2023-03-31T15:29:10Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
            }
        ],
        "component": [
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8480-6",
                            "display": "Systolic blood pressure"
                        }
                    ],
                    "text": "Systolic blood pressure"
                },
                "valueQuantity": {
                    "value": 105,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 120,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ]
            },
            {
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8462-4",
                            "display": "Diastolic blood pressure"
                        }
                    ],
                    "text": "Diastolic blood pressure"
                },
                "valueQuantity": {
                    "value": 69,
                    "unit": "mm[Hg]",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mm[Hg]"
                },
                "referenceRange": [
                    {
                        "low": {
                            "value": 60,
                            "unit": "mmHg",
                            "comparator": ">=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        },
                        "high": {
                            "value": 80,
                            "unit": "mmHg",
                            "comparator": "<=",
                            "system": "http://unitsofmeasure.org",
                            "code": "mmHg"
                        }
                    }
                ],
                "interpretation": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "N",
                                "display": "Normal"
                            }
                        ],
                        "text": "Normal diastolic blood pressure"
                    }
                ],
                "note": [
                    {
                        "text": "Patient's results within normal range.",
                        "authorString": "Physician",
                        "time": "2021-01-28T00:00:00Z"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId21}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId21}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "urn:oid:1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "8",
                    "display": "Pulse"
                },
                {
                    "system": "http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id",
                    "code": "taKwRDgTbLDk.ReJP0gGGlA0",
                    "display": "Pulse"
                },
                {
                    "system": "urn:oid:1.2.246.537.6.96",
                    "code": "8867-4"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8716-3",
                    "display": "Vital signs"
                },
                {
                    "system": "http://loinc.org",
                    "code": "8867-4",
                    "display": "Heart rate"
                },
                {
                    "system": "1.2.840.114350.1.13.331.2.7.2.707679",
                    "code": "8",
                    "display": "Pulse"
                },
                {
                    "system": "1.2.246.537.6.96",
                    "code": "8867-4"
                }
            ],
            "text": "Pulse"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-03-31T18:15:00Z",
        "issued": "2023-03-31T18:24:05Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
                "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
            }
        ],
        "valueQuantity": {
            "value": 97,
            "unit": "/min",
            "comparator": ">=",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 60,
                    "unit": "/min",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                },
                "high": {
                    "value": 100,
                    "unit": "/min",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "/min"
                }
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal"
            }
        ],
        "note": [
            {
                "text": "Patient's pulse rate is within the normal range.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId22}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId22}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2339-0",
                    "display": "Glucose [Mass/volume] in Blood"
                }
            ],
            "text": "Blood Glucose Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2024-01-01T09:00:00Z",
        "issued": "2024-01-01T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId1}`,
                "display": `${randomUserData.practitionerLN1}, ${randomUserData.practitionerFN1}`
            }
        ],
        "valueQuantity": {
            "value": 5.6,
            "comparator": ">=",
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
        },
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "H",
                        "display": "High"
                    }
                ],
                "text": "Above normal range"
            }
        ],
        "note": [
            {
                "text": "Patient fasting glucose level suggests a risk for prediabetes. Recommend follow-up testing.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 3.9,
                    "comparator": ">=",
                    "unit": "mmol/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmol/L"
                },
                "high": {
                    "value": 5.5,
                    "comparator": "<=",
                    "unit": "mmol/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmol/L"
                },
                "type": {
                    "text": "Normal fasting blood glucose"
                },
                "appliesTo": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "703421000",
                                "display": "Adult human (organism)"
                            }
                        ],
                        "text": "Adult"
                    }
                ],
                "age": {
                    "low": {
                        "value": 18,
                        "comparator": ">=",
                        "unit": "years"
                    },
                    "high": {
                        "value": 65,
                        "comparator": "<=",
                        "unit": "years"
                    }
                },
                "text": "Reference range for fasting blood glucose in an adult."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId23}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId23}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2339-0",
                    "display": "Glucose [Mass/volume] in Blood"
                }
            ],
            "text": "Blood Glucose Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2024-01-01T10:00:00Z",
        "issued": "2024-01-01T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId1}`,
                "display": `${randomUserData.practitionerLN1}, ${randomUserData.practitionerFN1}`
            }
        ],
        "valueQuantity": {
            "value": 5.6,
            "comparator": ">=",
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
        },
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "H",
                        "display": "High"
                    }
                ],
                "text": "Above normal range"
            }
        ],
        "note": [
            {
                "text": "Patient fasting glucose level suggests a risk for prediabetes. Recommend follow-up testing.",
                "authorString": "Physician",
                "time": "2021-01-28T00:00:00Z"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 3.9,
                    "comparator": ">=",
                    "unit": "mmol/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmol/L"
                },
                "high": {
                    "value": 5.5,
                    "comparator": "<=",
                    "unit": "mmol/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "mmol/L"
                },
                "type": {
                    "text": "Normal fasting blood glucose"
                },
                "appliesTo": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "703421000",
                                "display": "Adult human (organism)"
                            }
                        ],
                        "text": "Adult"
                    }
                ],
                "age": {
                    "low": {
                        "value": 18,
                        "comparator": ">=",
                        "unit": "years"
                    },
                    "high": {
                        "value": 65,
                        "comparator": "<=",
                        "unit": "years"
                    }
                },
                "text": "Reference range for fasting blood glucose in an adult."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId040}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId040}`,
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "vital-signs",
                        "display": "Vital Signs"
                    }
                ],
                "text": "Vital Signs"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "8302-2",
                    "display": "Body height"
                }
            ],
            "text": "Body Height"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-06-23T16:48:00.000Z",
        "issued": "2023-06-23T19:13:50.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "note": [
            {
                "text": "Height measurement as part of annual physical examination.",
                "authorString": "Reported by Physician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Height is normal range for age and gender."
            }
        ],
        "valueRange": {
            "low": {
                "value": 95,
                "unit": "cm",
                "system": "http://unitsofmeasure.org",
                "code": "cm"
            }
        },
        "referenceRange": [
            {
                "low": {
                    "value": 70,
                    "unit": "cm",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                },
                "type": {
                    "text": "Expected minimum height for adult males"
                }
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
            data: observationData
        };
    
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            console.error('Error creating PROA immunization records:', error);
            throw error;
        }
}

module.exports = createObservations;
