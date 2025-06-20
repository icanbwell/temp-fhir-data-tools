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
    },

    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId41}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId41}`,
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
                    "code": "2708-6",
                    "display": "Oxygen saturation in Arterial blood"
                }
            ],
            "text": "SpO2"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter1}`, 
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T12:19:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId1}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 100,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId42}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId42}`,
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
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org", // Adjust the system code for the observation
                    "code": "57021-8",
                    "display": "CBC with Differential and Platelets Panel"
                }
            ],
            "text": "CBC With Differential/Platelet"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2021-04-30T09:59:00+00:00",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
            }
        ],
        "hasMember": [
            {
                "reference": `Observation/${randomUserData.observationId43}`,
                "display": "Baso (Absolute)"
            },
            {
                "reference": `Observation/${randomUserData.observationId44}`,
                "display": "Basos"
            },
            {
                "reference": `Observation/${randomUserData.observationId45}`,
                "display": "Eos (Absolute)"
            },
            {
                "reference": `Observation/${randomUserData.observationId46}`,
                "display": "Eos"
            },
            {
                "reference": `Observation/${randomUserData.observationId47}`,
                "display": "Hematocrit"
            },
            {
                "reference": `Observation/${randomUserData.observationId48}`,
                "display": "Hemoglobin"
            },
            {
                "reference": `Observation/${randomUserData.observationId49}`,
                "display": "Immature Grans (Abs)"
            },
            {
                "reference": `Observation/${randomUserData.observationId50}`,
                "display": "Immature Granulocytes"
            },
            {
                "reference": `Observation/${randomUserData.observationId51}`,
                "display": "Lymphs (Absolute)"
            },
            {
                "reference": `Observation/${randomUserData.observationId52}`,
                "display": "Lymphs"
            },
            {
                "reference": `Observation/${randomUserData.observationId53}`,
                "display": "MCH"
            },
            {
                "reference": `Observation/${randomUserData.observationId54}`,
                "display": "MCV"
            },
            {
                "reference": `Observation/${randomUserData.observationId55}`,
                "display": "Monocytes"
            },
            {
                "reference": `Observation/${randomUserData.observationId56}`,
                "display": "Monocytes (Absolute)"
            },
            {
                "reference": `Observation/${randomUserData.observationId57}`,
                "display": "Neutrophils"
            },
            {
                "reference": `Observation/${randomUserData.observationId58}`,
                "display": "Neutrophils (Absolute)"
            },
            {
                "reference":  `Observation/${randomUserData.observationId59}`,
                "display": "Platelets"
            },
            {
                "reference": `Observation/${randomUserData.observationId60}`,
                "display": "RBC"
            },
            {
                "reference": `Observation/${randomUserData.observationId61}`,
                "display": "RDW"
            },
            {
                "reference": `Observation/${randomUserData.observationId62}`,
                "display": "WBC"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId63}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId63}`,
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
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter2}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T09:02:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 58,
            "unit": "/min",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId64}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId64}`,
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
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter3}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-04T06:38:00+00:00",
        "issued": "2023-10-04T12:18:56.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 49,
            "unit": "/min",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        },
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "A",
                        "display": "Abnormal"
                    }
                ]
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId66}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId66}`,
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
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter4}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T22:19:00+00:00",
        "issued": "2023-10-03T22:20:37.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
                "display": "Natalie K"
            }
        ],
        "valueQuantity": {
            "value": 76,
            "unit": "/min",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId67}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId67}`,
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
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter5}`,
            "display": "Emergency Department"
        },
        "effectiveDateTime": "2020-07-31T03:15:00+00:00",
        "issued": "2020-07-31T03:25:09.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId5}`,
                "display": "Amber S"
            }
        ],
        "valueQuantity": {
            "value": 86,
            "unit": "/min",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId69}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId69}`,
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
                    "code": "2708-6",
                    "display": "Oxygen saturation in Arterial blood"
                }
            ],
            "text": "SpO2"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter7}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T09:08:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 97,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId70}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId70}`,
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
                    "code": "2708-6",
                    "display": "Oxygen saturation in Arterial blood"
                }
            ],
            "text": "SpO2"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter8}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T09:13:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 97,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId71}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId71}`,
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
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter9}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T10:37:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 61,
            "unit": "/min",
            "system": "http://unitsofmeasure.org",
            "code": "/min"
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.observationId72}`,
        "meta": {
            "source": `https://icanbwell.com/${randomUserData.observationId72}`,
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
                    "code": "2708-6",
                    "display": "Oxygen saturation in Arterial blood"
                }
            ],
            "text": "SpO2"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.recnounter10}`,
            "display": "Hospital Encounter"
        },
        "effectiveDateTime": "2023-10-03T09:29:00+00:00",
        "issued": "2023-10-03T12:26:28.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": "Deborah K"
            }
        ],
        "valueQuantity": {
            "value": 98,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        }
    },

    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId1}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2093-3",
                    "display": "Total Cholesterol"
                }
            ],
            "text": "Total Cholesterol Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2022-11-17T00:00:00.000Z",
            "end": "2022-12-17T00:00:00.000Z"
        },
        "issued": "2022-11-17T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "valueQuantity": {
            "value": 227,
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Elevated cholesterol level"
            }
        ],
        "note": [
            {
                "text": "Consider lifestyle modifications or medication to manage cholesterol levels.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Direct Assay"
                }
            ],
            "text": "Direct measurement of Total Cholesterol"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId1}`
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Left arm"
                }
            ],
            "text": "Venipuncture - left arm"
        },
        "device": {
            "display": "Clinical Chemistry Analyzer"
        },
        "status": "final",
        "referenceRange": [
            {
                "high": {
                    "value": 240,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId2}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2089-1",
                    "display": "Low-density lipoprotein (LDL) cholesterol"
                }
            ],
            "text": "LDL Cholesterol Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "end": "2022-12-17T00:00:00.000Z"
        },
        "issued": "2022-11-17T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "valueQuantity": {
            "value": 162,
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Elevated LDL cholesterol level"
            }
        ],
        "note": [
            {
                "text": "LDL cholesterol level is above the recommended limit. Consider evaluating for potential cardiovascular risk.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Direct Assay"
                }
            ],
            "text": "Direct LDL measurement"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId2}`
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Left arm"
                }
            ],
            "text": "Venipuncture - left arm"
        },
        "device": {
            "display": "Clinical Chemistry Analyzer"
        },
        "derivedFrom": [
            {
                "reference": `Observation/${randomUserData.observationId1}`
            }
        ],
        "status": "final",
        "referenceRange": [
            {
                "high": {
                    "value": 160,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId3}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "13458-5",
                    "display": "Very low-density lipoprotein (VLDL) cholesterol"
                }
            ],
            "text": "VLDL Cholesterol Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2022-11-17T00:00:00.000Z"
        },
        "issued": "2022-11-17T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
            }
        ],
        "valueQuantity": {
            "value": 28,
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Normal VLDL cholesterol level"
            }
        ],
        "note": [
            {
                "text": "VLDL cholesterol level within normal limits.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Calculation"
                }
            ],
            "text": "Calculated VLDL cholesterol from triglycerides"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId1}`
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Left arm"
                }
            ],
            "text": "Venipuncture - left arm"
        },
        "device": {
            "display": "Clinical Chemistry Analyzer"
        },
        "derivedFrom": [
            {
                "reference": `Observation/${randomUserData.labObservationId1}`
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 2,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 30,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId4}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "X-hcg",
                    "display": "Human chorionic gonadotropin (HCG) test"
                }
            ],
            "text": "Pregnancy Test"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-01-01T00:00:00.000Z",
        "issued": "2023-01-01T10:00:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
            }
        ],
        "valueBoolean": true,
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "POS",
                        "display": "Positive"
                    }
                ],
                "text": "Pregnant"
            }
        ],
        "note": [
            {
                "text": "Pregnancy test result is positive.",
                "authorString": "The Maury Show",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Immunoassay"
                }
            ],
            "text": "Immunoassay pregnancy test"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId4}`
        },
        "referenceRange": [
            {
                "text": "Not applicable"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId5}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "status": "final",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2085-9",
                    "display": "High-density lipoprotein (HDL) cholesterol"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "end": "2022-12-17T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 47,
            "comparator": "<=",
            "unit": "mg/dL",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 45,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Patient could probably handle eating a few more eggs.",
                "authorString": "Reported by Physician",
                "time": "2023-06-23T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId6}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "status": "final",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "3043-7",
                    "display": "Triglycerides"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2022-11-17T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 189.7,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
        },
        "referenceRange": [
            {
                "high": {
                    "value": 200,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Tested positive: For being a PARTY ANIMAL.",
                "authorString": "Reported by Physician",
                "time": "2023-06-23T00:00:00Z"
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId7}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2093-3",
                    "display": "Total Cholesterol"
                }
            ],
            "text": "Total Cholesterol Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-05-20T00:00:00.000Z",
        "issued": "2022-05-20T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.organizationId1}`,
                "display": "Best Labs, Inc."
            }
        ],
        "valueQuantity": {
            "value": 243,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "High cholesterol level"
            }
        ],
        "comment": "Patient's total cholesterol level exceeds the normal high limit. Further clinical evaluation may be considered.",
        "referenceRange": [
            {
                "low": {
                    "value": 0,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 240,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "type": {
                    "text": "Normal Range"
                },
                "appliesTo": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/patient-gender",
                                "code": "male",
                                "display": "Male"
                            },
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/patient-gender",
                                "code": "female",
                                "display": "Female"
                            }
                        ],
                        "text": "Adults"
                    }
                ],
                "age": {
                    "low": {
                        "value": 18,
                        "unit": "years",
                        "comparator": "<=",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    },
                    "high": {
                        "value": 65,
                        "unit": "years",
                        "comparator": ">=",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    }
                },
                "text": "Recommended cholesterol level for adults."
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Enzymatic Assay"
                }
            ],
            "text": "Enzymatic assay method for cholesterol determination."
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId3}`
        },
        "device": {
            "display": "Centrifugal Fast Analyzer"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "119365003",
                    "display": "Blood vessel of arm"
                }
            ],
            "text": "Venipuncture"
        },
        "note": [
            {
                "authorString": "Lab Technician",
                "time": "2022-05-20T09:30:00.000Z",
                "text": "Fasting blood sample collected in the morning."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId8}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2089-1",
                    "display": "Low-density lipoprotein (LDL) cholesterol"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "end": "2022-12-17T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 158,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Within normal range"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 0,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 160,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "LDL cholesterol levels are within the target range for adults.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "XXXXX",
                    "display": "Direct Measurement"
                }
            ],
            "text": "Direct measurement of LDL cholesterol"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId2}`
        },
        "status": "final",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId5}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId9}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "13458-5",
                    "display": "Very low-density lipoprotein (VLDL) cholesterol"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2022-05-20T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 32,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
        "referenceRange": [
            {
                "low": {
                    "value": 2,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 30,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "VLDL cholesterol levels slightly above the normal range. Consider dietary adjustments.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "XXXXX",
                    "display": "Calculation based on Triglycerides"
                }
            ],
            "text": "Calculated VLDL cholesterol from triglycerides"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId1}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId5}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId10}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2085-9",
                    "display": "High-density lipoprotein (HDL) cholesterol"
                }
            ]
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2022-05-17T00:00:00.000Z",
            "end": "2022-12-17T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 51,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Normal HDL cholesterol level"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 40,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 60,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "HDL cholesterol is within the desirable range, which is protective against heart disease.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "XXXXX",
                    "display": "Direct Measurement"
                }
            ],
            "text": "Direct measurement of HDL cholesterol"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId2}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId5}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId12}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "3043-7",
                    "display": "Triglycerides"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2022-05-20T00:00:00.000Z",
        "valueQuantity": {
            "value": 207.3,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Above normal triglyceride level"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 0,
                    "unit": "mg/dL",
                    "comparator": "<",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 150,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Consider dietary adjustments or medication to manage triglyceride levels.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "XXXXX",
                    "display": "Enzymatic Method"
                }
            ],
            "text": "Enzymatic measurement of triglycerides"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId3}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId5}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId11}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2093-3",
                    "display": "Total Cholesterol"
                }
            ],
            "text": "Total Cholesterol"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2021-11-14T00:00:00.000Z",
        "valueQuantity": {
            "value": 287,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "High cholesterol level, consider lifestyle changes or medication."
            }
        ],
        "referenceRange": [
            {
                "high": {
                    "value": 240,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Patient's total cholesterol level exceeds the recommended upper limit.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId4}`
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId12}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2089-1",
                    "display": "Low-density lipoprotein (LDL) cholesterol"
                }
            ],
            "text": "LDL Cholesterol"
        },
        "subject": {
           "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2021-11-14T00:00:00.000Z",
            "end": "2021-12-29T00:00:00.000Z"
        },
        "valueQuantity": {
            "value": 177,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "Elevated LDL level, increased risk of heart disease."
            }
        ],
        "referenceRange": [
            {
                "high": {
                    "value": 160,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Consider discussing cholesterol-lowering strategies with your healthcare provider.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId13}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "13458-5",
                    "display": "Very low-density lipoprotein (VLDL) cholesterol"
                }
            ],
            "text": "VLDL Cholesterol"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2021-11-14T00:00:00.000Z",
        "valueQuantity": {
            "value": 42,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "VLDL level above normal range, potential risk for heart disease."
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 2,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 30,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Monitoring VLDL cholesterol is important for assessing the risk of heart disease.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`
        }
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId14}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "status": "final",
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "2085-9",
                    "display": "High-density lipoprotein (HDL) cholesterol"
                }
            ]
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2021-11-14T00:00:00.000Z",
        "valueQuantity": {
            "value": 38,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 45,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Lab Test Method"
                }
            ],
            "text": "Enzymatic colorimetric test"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId4}`
        },
        "device": {
            "display": "Automated Analyzer"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "119365003",
                    "display": "Blood vessel of arm"
                }
            ],
            "text": "Blood sample from arm"
        },
        "note": [
            {
                "authorString": "Lab Technician",
                "time": "2021-11-14T11:00:00.000Z",
                "text": "Specimen collected after 12-hour fasting."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId15}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "3043-7",
                    "display": "Triglycerides"
                }
            ],
            "text": "Triglycerides Level"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "start": "2021-11-14T00:00:00.000Z",
            "end": "2021-12-29T00:00:00.000Z"
        },
        "issued": "2021-11-14T12:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
            }
        ],
        "valueQuantity": {
            "value": 255,
            "unit": "mg/dL",
            "comparator": "<=",
            "system": "http://unitsofmeasure.org",
            "code": "mg/dL"
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
                "text": "High triglycerides level"
            }
        ],
        "comment": "Patient's triglycerides level exceeds normal reference range. Consider dietary adjustments or medical treatment as needed.",
        "referenceRange": [
            {
                "low": {
                    "value": 0,
                    "unit": "mg/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 200,
                    "unit": "mg/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Lab Test Method"
                }
            ],
            "text": "Enzymatic colorimetric test"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId4}`
        },
        "device": {
            "display": "Automated Analyzer"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "119365003",
                    "display": "Blood vessel of arm"
                }
            ],
            "text": "Blood sample from arm"
        },
        "note": [
            {
                "authorString": "Lab Technician",
                "time": "2021-11-14T11:00:00.000Z",
                "text": "Specimen collected after 12-hour fasting."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId16}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "718-7",
                    "display": "Hemoglobin [Mass/volume] in Blood"
                }
            ],
            "text": "Hemoglobin Count"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectiveDateTime": "2023-01-01T00:00:00.000Z",
        "valueInteger": 14,
        "unit": "g/dL",
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal hemoglobin level"
            }
        ],
        "referenceRange": [
            {
                "low": {
                    "value": 13,
                    "unit": "g/dL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "g/dL"
                },
                "high": {
                    "value": 17,
                    "unit": "g/dL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "g/dL"
                }
            }
        ],
        "note": [
            {
                "text": "Patient shows a normal hemoglobin level, indicative of no anemia.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count"
                }
            ],
            "text": "Automated hemoglobin count"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId3}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId17}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "166434005",
                    "display": "Serum pregnancy test (B-HCG)"
                }
            ],
            "text": "Serum pregnancy test (B-HCG)"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "issued": "2021-02-01T00:00:00.000Z",
        "effectiveDateTime": "2021-02-01T01:00:00.000Z",
        "referenceRange": [
            {
                "text": "Not applicable"
            }
        ],
        "valueBoolean": false,
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "NEG",
                        "display": "Negative"
                    }
                ],
                "text": "Not Pregnant"
            }
        ],
        "note": [
            {
                "text": "Pregnancy test result came back as negative, Patient Relieved.",
                "authorString": "Dr. Turk",
                "time": "2021-02-02T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Immunoassay"
                }
            ],
            "text": "Immunoassay Serum B-HCG pregnancy test"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId1}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId1}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId18}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "ABO",
                    "display": "ABO Blood Group"
                }
            ],
            "text": "Blood Type"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "effectivePeriod": {
            "end": "2023-06-01T00:00:00.000Z"
        },
        "valueCodeableConcept": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                    "code": "A",
                    "display": "Type A"
                }
            ],
            "text": "Blood type A"
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
                "text": "Typical finding"
            }
        ],
        "note": [
            {
                "text": "Patient's blood type is A.",
                "authorString": "Lab Technician",
                "time": "2023-06-23T00:00:00Z"
            }
        ],
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Serotyping"
                }
            ],
            "text": "Blood typing by serological method"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId2}`
        },
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
            }
        ]
    },

    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId19}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory Test"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "example-code",
                    "display": "STD Panel Test"
                }
            ],
            "text": "Standard STD Panel Test"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "encounter": {
            "reference": `Encounter/${randomUserData.encounterId1}`,
        },
        "effectivePeriod": {
            "start": "2023-01-01T00:00:00.000Z",
            "end": "2023-01-02T00:00:00.000Z"
        },
        "issued": "2023-01-01T11:30:00Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId1}`,
                "display":`${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
            }
        ],
        "valueString": "Negative for all tested STDs",
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "NEG",
                        "display": "Negative"
                    }
                ],
                "text": "Negative"
            }
        ],
        "comment": "No evidence of common STDs found in the specimen.",
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "123456",
                    "display": "Blood"
                }
            ],
            "text": "Blood Sample"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "PCR"
                }
            ],
            "text": "Polymerase Chain Reaction (PCR)"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId3}`,
        },
        "device": {
            "reference": `Device/${randomUserData.deviceId1}`,
            "display": "PCR Machine Model X"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 0,
                    "unit": "copies/mL",
                    "comparator": "<=",
                    "system": "http://unitsofmeasure.org",
                    "code": "copies/mL"
                },
                "high": {
                    "value": 50,
                    "unit": "copies/mL",
                    "comparator": ">=",
                    "system": "http://unitsofmeasure.org",
                    "code": "copies/mL"
                },
                "type": {
                    "text": "Standard Reference Range for STD Panel"
                },
                "appliesTo": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                "code": "NORM",
                                "display": "Normal"
                            }
                        ],
                        "text": "Adults"
                    }
                ],
                "age": {
                    "low": {
                        "value": 18,
                        "unit": "years",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    },
                    "high": {
                        "value": 65,
                        "unit": "years",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    }
                },
                "text": "Negative result threshold for STDs"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
                "time": "2023-01-01T11:30:00Z",
                "text": "Patient advised to continue regular screenings."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId20}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Complete Blood Count Test Results</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "example-observation-1",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Smart Hospital"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId1}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count"
                }
            ],
            "text": "RBC Count"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition1}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter2}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId2}`,
                "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
            }
        ],
        "valueRange": {
            "low": {
                "value": 4.5,
                "unit": "x10^12/L",
                "comparator": "<=",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
            },
            "high": {
                "value": 6.0,
                "unit": "x10^12/L",
                "comparator": ">=",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
            }
        },
        "dataAbsentReason": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code": "unknown",
                    "display": "Unknown"
                }
            ]
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
                "text": "Normal"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`,
                "time": "2023-10-01T10:00:00Z",
                "text": "Patient shows normal erythrocyte count."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count"
                }
            ],
            "text": "Automated Blood Count"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId3}`,
        },
        "device": {
            "reference": `Device/${randomUserData.deviceId2}`,
            "display": "Sysmex Automated Hematology Analyzer"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 4.5,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "high": {
                    "value": 6.0,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "type": {
                    "text": "Normal Range"
                },
                "appliesTo": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "703426002",
                                "display": "Male"
                            }
                        ],
                        "text": "Male Adults"
                    }
                ],
                "age": {
                    "low": {
                        "value": 18,
                        "unit": "years",
                        "comparator": "<=",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    },
                    "high": {
                        "value": 65,
                        "unit": "years",
                        "comparator": "<=",
                        "system": "http://unitsofmeasure.org",
                        "code": "a"
                    }
                },
                "text": "Reference range for adult males."
            }
        ],
        "related": [
            {
                "type": "has-member",
                "target": {
                    "reference": `Observation/${randomUserData.observationId17}`,
                }
            }
        ],
        "derivedFrom": [
            {
                "reference": `DocumentReference/${uuidv4()}`,
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId21}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns='http://www.w3.org/1999/xhtml'>Observation with High Value Only</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier for High Value"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "high-value-observation",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Smart Hospital High Value"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId2}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory High Value"
                    }
                ],
                "text": "Laboratory High Value"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count High Value"
                }
            ],
            "text": "RBC Count High Value"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition2}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter1}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "valueRange": {
            "high": {
                "value": 6.0,
                "unit": "x10^12/L",
                "comparator": ">=",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
            }
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
                "text": "High"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
                "time": "2023-10-01T10:00:00Z",
                "text": "Observation notes for high value."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood High Value"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count High Value"
                }
            ],
            "text": "Automated Blood Count High Value"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId4}`,
        },
        "device": {
            "reference": `Device/${randomUserData.deviceId3}`,
            "display": "Sysmex Automated Hematology Analyzer High Value"
        },
        "referenceRange": [
            {
                "high": {
                    "value": 6.0,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "text": "Reference range high value."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId22}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns='http://www.w3.org/1999/xhtml'>Observation with Low Value Only</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier for Low Value"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "low-value-observation",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Samsung Hospital Low Value"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId3}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory Low Value"
                    }
                ],
                "text": "Laboratory Low Value"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count Low Value"
                }
            ],
            "text": "RBC Count Low Value"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition3}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter3}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "valueRange": {
            "low": {
                "value": 4.5,
                "unit": "x10^12/L",
                "comparator": "<=",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
            }
        },
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "L",
                        "display": "Low"
                    }
                ],
                "text": "Low"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
                "time": "2023-10-01T10:00:00Z",
                "text": "Observation notes for low value."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood Low Value"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count Low Value"
                }
            ],
            "text": "Automated Blood Count Low Value"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`,
        },
        "device": {
            "reference": `Device/${uuidv4()}`,
            "display": "Sysmex Automated Hematology Analyzer Low Value"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 4.5,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "text": "Reference range low value."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId23}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns='http://www.w3.org/1999/xhtml'>Observation with Value Ratio</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "value-ratio-observation",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Samsung Hospital"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId4}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory"
                    }
                ],
                "text": "Laboratory"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count"
                }
            ],
            "text": "RBC Count"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition4}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter4}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "valueRatio": {
            "numerator": {
                "value": 1,
                "unit": "mg/dL",
                "system": "http://unitsofmeasure.org",
                "code": "mg/dL"
            },
            "denominator": {
                "value": 2,
                "unit": "mg/dL",
                "system": "http://unitsofmeasure.org",
                "code": "mg/dL"
            }
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
                "text": "Normal"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
                "time": "2023-10-01T10:00:00Z",
                "text": "Patient shows normal erythrocyte ratio."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count"
                }
            ],
            "text": "Automated Blood Count"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`,
        },
        "device": {
            "reference": `Device/${uuidv4()}`,
            "display": "Sysmex Automated Hematology Analyzer"
        },
        "referenceRange": [
            {
                "low": {
                    "value": 4.5,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "high": {
                    "value": 6.0,
                    "unit": "x10^12/L",
                    "system": "http://unitsofmeasure.org",
                    "code": "10*12/L"
                },
                "text": "Reference range for RBC Count."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId24}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns='http://www.w3.org/1999/xhtml'>Observation with Time Value</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier for Time Value"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "time-value-observation",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Samsung Hospital Time Value"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId5}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory Time Value"
                    }
                ],
                "text": "Laboratory Time Value"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count Time Value"
                }
            ],
            "text": "RBC Count Time Value"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition5}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter5}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId7}`,
                "display": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`
            }
        ],
        "valueTime": "14:23:00",
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal Time Value"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
                "time": "2023-10-01T10:30:00Z",
                "text": "Observation notes for time value."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood Time Value"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count Time Value"
                }
            ],
            "text": "Automated Blood Count Time Value"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId5}`,
        },
        "device": {
            "reference": `Device/${uuidv4()}`,
            "display": "Sysmex Automated Hematology Analyzer Time Value"
        },
        "referenceRange": [
            {
                "text": "Reference range not applicable for time value."
            }
        ]
    },
    {
        "resourceType": "Observation",
        "id": `${randomUserData.labObservationId25}`,
        "meta": {
            "profile": [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
            ],
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
            "div": "<div xmlns='http://www.w3.org/1999/xhtml'>Observation with DateTime Value</div>"
        },
        "identifier": [
            {
                "use": "official",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR",
                            "display": "Medical Record Number"
                        }
                    ],
                    "text": "Medical Record Identifier for DateTime Value"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": "datetime-value-observation",
                "period": {
                    "start": "2023-01-01",
                    "end": "2023-12-31"
                },
                "assigner": {
                    "display": "Samsung Hospital DateTime Value"
                }
            }
        ],
        "partOf": [
            {
                "reference": `Procedure/${randomUserData.procedureId3}`,
            }
        ],
        "status": "final",
        "category": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                        "code": "laboratory",
                        "display": "Laboratory DateTime Value"
                    }
                ],
                "text": "Laboratory DateTime Value"
            }
        ],
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "789-8",
                    "display": "Erythrocyte count DateTime Value"
                }
            ],
            "text": "RBC Count DateTime Value"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
        },
        "focus": [
            {
                "reference": `Condition/${randomUserData.randomCondition3}`,
            }
        ],
        "encounter": {
            "reference": `Encounter/${randomUserData.randomEncounter3}`,
        },
        "effectiveDateTime": "2023-10-01T09:00:00.000Z",
        "issued": "2023-10-01T10:00:00.000Z",
        "performer": [
            {
                "reference": `Practitioner/${randomUserData.practitionerId4}`,
                "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
            }
        ],
        "valueDateTime": "2023-10-01T14:23:00Z",
        "interpretation": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "N",
                        "display": "Normal"
                    }
                ],
                "text": "Normal DateTime Value"
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`,
                "time": "2023-10-01T15:00:00Z",
                "text": "Observation notes for DateTime value."
            }
        ],
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "368209003",
                    "display": "Peripheral blood specimen"
                }
            ],
            "text": "Peripheral Blood DateTime Value"
        },
        "method": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "method-code",
                    "display": "Automated Count DateTime Value"
                }
            ],
            "text": "Automated Blood Count DateTime Value"
        },
        "specimen": {
            "reference": `Specimen/${randomUserData.labSpecimenId3}`,
        },
        "device": {
            "reference": `Device/${uuidv4()}`,
            "display": "Sysmex Automated Hematology Analyzer DateTime Value"
        },
        "referenceRange": [
            {
                "text": "Reference range not applicable for DateTime value."
            }
        ]
    }


]


        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Observation/$merge`,
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
            console.error('Error creating PROA Observation Records:', error);
            throw error;
        }
}

module.exports = createObservations;
