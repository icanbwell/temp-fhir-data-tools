



const axios = require('axios');

async function createProaProcedures({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {

  if (!proaAccessToken) {
    throw new Error('PROA access token not available.');
  }
  if(!proaClientFhirPatientId) {
    throw new Error('PROA client FHIR Patient ID not available.');
  }

  const proceduresData = [
    {
        "resourceType": "Procedure",
        "id": `${randomUserData.procedureId1}`,
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
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "609588000",
                    "display": "Total Knee Replacement"
                }
            ],
            "text": "Total Knee Replacement"
        },
        "complication": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "95870007",
                        "display": "Surgical site infection"
                    }
                ],
                "text": "Surgical site infection"
            }
        ],
        "complicationDetail": [
            {
                "reference": "Condition/surgical-site-infection",
                "display": "Postoperative wound infection"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_FN} ${randomUserData.random_LN}`
        },
        "performedPeriod": {
            "start": "2020-01-20T09:00:00.000Z",
            "end": "2020-01-20T10:30:00.000Z"
        },
        "performer": [
            {
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
                }
            }
        ],
        "recorder": {
                 "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
        },
        "asserter": {
                 "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
        },
        "reasonCode": [
            {
                "text": "Patient’s knee had worn down after years of working on the factory floor and needed to be replaced",
                "coding": [
                    {
                        "display": "Local destruction of lesion of knee joint",
                        "system": "http://snomed.info/sct",
                        "code": "33859005"
                    }
                ]
            }
        ],
        "bodySite": [
            {
                "text": "Knee",
                "coding": [
                    {
                        "display": "Knee",
                        "system": "http://snomed.info/sct",
                        "code": "72696002"
                    }
                ]
            }
        ],
        "outcome": {
            "text": "Patient’s knee was successfully replaced with little to no surprises"
        },
        "followUp": [
            {
                "coding": [
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "wear-knee-brace",
                        "display": "Wear knee brace"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "begin-physical-therapy",
                        "display": "Begin physical therapy"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "schedule-follow-up-visits",
                        "display": "Schedule follow-up visits"
                    }
                ],
                "text": "Wear knee brace, begin physical therapy, and schedule follow-up visits."
            }
        ],
        "note": [
            {
                "text": "Patient needs to participate in twice weekly PT for the next 5-6 weeks to reestablish movement of 160 degrees in their leg.",
                "authorString": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
                "time": "2022-11-15T20:45:00.000Z"
            }
        ]
    },
    {
        "resourceType": "Procedure",
        "id": `${randomUserData.procedureId2}`,
        "meta": {
            "source": "https://fhir.proa.com",
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
        "category": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/procedure-category",
                    "code": "treatment",
                    "display": "Treatment"
                }
            ],
            "text": "Treatment"
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "443497004",
                    "display": "Laser photocoagulation of retina"
                }
            ],
            "text": "Retinal Laser Surgery"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_FN} ${randomUserData.random_LN}`
        }, 
        "performedPeriod": {
            "start": "2022-11-15T19:41:00.000Z"
        },
        "performer": [
            {
                "actor": {
                    "reference": `Practitioner/${randomUserData.practitionerId2}`,
                    "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
                }
            },
            {
                "actor": {
                     "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
                }
            },
            {
                "actor": {
                     "reference": `Practitioner/${randomUserData.practitionerId3}`,
                    "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
                }
            }
        ],
        "recorder": {
             "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
        },
        "asserter": {
             "reference": `Practitioner/${randomUserData.practitionerId1}`,
                    "display": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "422034002",
                        "display": "Diabetic retinopathy"
                    }
                ],
                "text": "Diabetic retinopathy"
            }
        ],
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "81745001",
                        "display": "Structure of retina (body structure)"
                    }
                ],
                "text": "Retina"
            }
        ],
        "outcome": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/procedure-category",
                    "display": "Successful, no complications",
                    "code": "Successful"
                }
            ],
            "text": "Successful, no complications"
        },
        "complication": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "95870007",
                        "display": "Surgical site infection"
                    }
                ],
                "text": "Surgical site infection"
            }
        ],
        "complicationDetail": [
            {
                "reference": "Condition/surgical-site-infection",
                "display": "Postoperative wound infection"
            }
        ],
        "followUp": [
            {
                "coding": [
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "avoid-strenuous-activities",
                        "display": "Avoid strenuous activities"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "use-eye-drops",
                        "display": "Use prescribed eye drops"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "schedule-follow-up",
                        "display": "Schedule follow-up appointment"
                    }
                ],
                "text": "Avoid strenuous activities, use prescribed eye drops, and schedule a follow-up appointment."
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
                "time": "2022-11-15T20:45:00.000Z",
                "text": "Procedure to treat diabetic retinopathy. Patient recovered well with improved retinal health."
            }
        ]
    },
    {
        "resourceType": "Procedure",
        "id": `${randomUserData.procedureId3}`,
        "meta": {
            "source": "https://fhir.proa.com",
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
        "category": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/procedure-category",
                    "code": "surgical",
                    "display": "Surgical Operation"
                }
            ],
            "text": "Surgical Operation"
        },
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "80146002",
                    "display": "Appendectomy"
                }
            ],
            "text": "Appendectomy"
        },
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_FN} ${randomUserData.random_LN}`
        },
        "performedPeriod": {
            "end": "2023-05-20T19:41:00.000Z"
        },
        "performer": [
            {
                "actor": {
                     "reference": `Practitioner/${randomUserData.practitionerId3}`,
                    "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
                }
            }
        ],
        "recorder": {
             "reference": `Practitioner/${randomUserData.practitionerId2}`,
                    "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
        },
        "asserter": {
            "reference": `Practitioner/${randomUserData.practitionerId2}`,
                    "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
        },
        "reasonCode": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "47693006",
                        "display": "Acute appendicitis"
                    }
                ],
                "text": "Acute appendicitis"
            }
        ],
        "bodySite": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "66754008",
                        "display": "Appendix structure (body structure)"
                    }
                ],
                "text": "Appendix"
            }
        ],
        "outcome": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/procedure-outcome",
                    "code": "successful",
                    "display": "Successful"
                }
            ],
            "text": "Procedure was successful with no complications."
        },
        "followUp": [
            {
                "coding": [
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "keep-surgical-site-clean",
                        "display": "Keep surgical site clean"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "avoid-lifting-heavy-objects",
                        "display": "Avoid lifting heavy objects"
                    },
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "schedule-follow-up-appointment",
                        "display": "Schedule follow-up appointment"
                    }
                ],
                "text": "Keep surgical site clean, avoid lifting heavy objects, and schedule a follow-up appointment."
            }
        ],
        "note": [
            {
                "authorString": `${randomUserData.practitionerId1}`,
                "time": "2023-05-20T12:00:00.000Z",
                "text": "Appendectomy done under general anesthesia. Patient responded well to the procedure with vital signs stable throughout."
            }
        ]
    },
    {
        "resourceType": "Procedure",
        "id": `${randomUserData.procedureId4}`,
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
        "code": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "278939002",
                    "display": "Eye prosthesis procedure"
                }
            ],
            "text": "Eye prosthesis procedure"
        },
        "complication": [
            {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "95870007",
                        "display": "Surgical site infection"
                    }
                ],
                "text": "Surgical site infection"
            }
        ],
        "complicationDetail": [
            {
                "reference": "Condition/surgical-site-infection",
                "display": "Postoperative wound infection"
            }
        ],
        "subject": {
            "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_FN} ${randomUserData.random_LN}`
        },
        "performedDateTime": "2020-01-20T00:00:00.000Z",
        "performer": [
            {
                "actor": {
 "reference": `Practitioner/${randomUserData.practitionerId3}`,
                    "display": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`
                }
            }
        ],
        "recorder": {
             "reference": `Practitioner/${randomUserData.practitionerId4}`,
                    "display": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`
        },
        "asserter": {
             "reference": `Practitioner/${randomUserData.practitionerId2}`,
                    "display": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`
        },
        "reasonCode": [
            {
                "text": "Patient’s Eye was missing due to freak pirate accident and needed prosthetic eyeball placed",
                "coding": [
                    {
                        "display": "Ocular prosthetic service",
                        "system": "http://snomed.info/sct",
                        "code": "15822000"
                    }
                ]
            }
        ],
        "bodySite": [
            {
                "text": "Visual Structure",
                "coding": [
                    {
                        "display": "Visual structure",
                        "system": "http://snomed.info/sct",
                        "code": "Visual structure"
                    }
                ]
            }
        ],
        "outcome": {
            "text": "Pirate's eyeball was successfully replaced with prosthetic with site infection complications"
        },
        "followUp": [
            {
                "coding": [
                    {
                        "system": "http://example.org/follow-up-actions",
                        "code": "wear-up-encounter",
                        "display": "Follow-up Encounter"
                    }
                ],
                "text": "Wear eye patch and peg leg, source parrot for shoulder."
            }
        ],
        "note": [
            {
                "text": "Patient needs to participate in twice weekly scrubbing of the poopdeck until other pirates quit noticing prosthetic eye.",
                "authorString": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
                "time": "2022-11-15T20:45:00.000Z"
            }
        ]
    }
]

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Procedure/$merge`,
        headers: {
        'Content-Type': 'application/fhir+json',
        'Authorization': `Bearer ${proaAccessToken}`
        },
        data: proceduresData
    };
    
    try {
        const response = await axios(config);
        console.log("Create Proa Procedures response status:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating Proa Procedures:", error.message);
        throw error;
    }
}

module.exports = createProaProcedures;
