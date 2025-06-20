
const axios = require('axios');

async function createProaPractitioners({ env,
    proaAccessToken,
    randomUserData }) {

    if (!proaAccessToken) {
        throw new Error('PROA access token not available.');
    }

    const practitionerData = [
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId1}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId1}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId1}`
                },
                {
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "value": `${randomUserData.practitionerId1}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
                    "family": `${randomUserData.practitionerLN1}`,
                    "given": [
                        `${randomUserData.practitionerFN1}`
                    ],
                    "suffix": [
                        "OWNER"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "1116 HAPPYJOIJOI ST S"
                    ],
                    "city": "BIRMINGHAM",
                    "state": "AL",
                    "postalCode": "352052410"
                }
            ],
            "gender": "female"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId2}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId2}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId2}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`,
                    "family": `${randomUserData.practitionerLN2}`,
                    "given": [
                        `${randomUserData.practitionerFN2}`
                    ],
                    "suffix": [
                        "CEO"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "109 DONT CALL ME SALLY ROAD"
                    ],
                    "city": "TELL CITY",
                    "state": "IN",
                    "postalCode": "475862755"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId3}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId3}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId3}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
                    "family": `${randomUserData.practitionerLN3}`,
                    "given": [
                        `${randomUserData.practitionerFN3}`
                    ],
                    "suffix": [
                        "RCM MANAGER"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "4401 Pinkerton D"
                    ],
                    "city": "BROOKLYN",
                    "state": "NY",
                    "postalCode": "112035725"
                }
            ],
            "gender": "female"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId4}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId4}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId4}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`,
                    "family": `${randomUserData.practitionerLN4}`,
                    "given": [
                        `${randomUserData.practitionerFN4}`
                    ],
                    "suffix": [
                        "CEO"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "2025 CHICKEN STE A3"
                    ],
                    "city": "RIVERSIDE",
                    "state": "CA",
                    "postalCode": "925072315"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId5}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId5}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId5}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN5} ${randomUserData.practitionerLN5}`,
                    "family": `${randomUserData.practitionerLN5}`,
                    "given": [
                        `${randomUserData.practitionerFN5}`
                    ],
                    "suffix": [
                        "DENTIST"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "288 PINEY GREENS RD"
                    ],
                    "city": "DANVILLETON",
                    "state": "VA",
                    "postalCode": "245404124"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId6}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId6}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId6}`
                }
            ],
            "active": true,
            "name": [
                {
                    "use": "official",
                    "text": `${randomUserData.practitionerFN6} ${randomUserData.practitionerLN6}`,
                    "family": `${randomUserData.practitionerLN6}`,
                    "given": [
                        `${randomUserData.practitionerFN6}`
                    ],
                    "suffix": [
                        "LLC BOARD MEMBER"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "PO BOX 5857"
                    ],
                    "city": "CORPUS CHRISTI",
                    "state": "TX",
                    "postalCode": "784666327"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId7}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId7}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId7}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo-name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
                    "family": `${randomUserData.practitionerLN7}`,
                    "given": [
                        `${randomUserData.practitionerFN7}`
                    ],
                    "suffix": [
                        "SYSTEM ADMINISTRATOR"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo-phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo-fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo-address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "5644 FORT BOONHOUR LN"
                    ],
                    "city": "KLAMATH FALLS",
                    "state": "OR",
                    "postalCode": "976019379"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId8}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId8}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId8}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo_name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN8} ${randomUserData.practitionerLN8}`,
                    "family": `${randomUserData.practitionerLN8}`,
                    "given": [
                        `${randomUserData.practitionerFN8}`
                    ],
                    "suffix": [
                        "SYSTEM ADMINISTRATOR"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo_phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo_fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo_address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "5644 FORT BOONHOUR LN"
                    ],
                    "city": "KLAMATH FALLS",
                    "state": "OR",
                    "postalCode": "976019379"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId9}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId9}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId9}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo_name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN9} ${randomUserData.practitionerLN9}`,
                    "family": `${randomUserData.practitionerLN9}`,
                    "given": [
                        `${randomUserData.practitionerFN9}`
                    ],
                    "suffix": [
                        "SYSTEM ADMINISTRATOR"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo_phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo_fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo_address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "5644 FORT BOONHOUR LN"
                    ],
                    "city": "KLAMATH FALLS",
                    "state": "OR",
                    "postalCode": "976019379"
                }
            ],
            "gender": "male"
        },
        {
            "resourceType": "Practitioner",
            "id": `${randomUserData.practitionerId10}`,
            "meta": {
                "source": "https://npiregistry.cms.hhs.gov",
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
            "identifier": [
                {
                    "id": `proa_demo-${randomUserData.practitionerId10}`,
                    "use": "official",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "NPI"
                            }
                        ]
                    },
                    "system": "http://hl7.org/fhir/sid/us-npi",
                    "value": `${randomUserData.practitionerId10}`
                }
            ],
            "active": true,
            "name": [
                {
                    "id": "proa_demo_name",
                    "use": "official",
                    "text": `${randomUserData.practitionerFN10} ${randomUserData.practitionerLN10}`,
                    "family": `${randomUserData.practitionerLN10}`,
                    "given": [
                        `${randomUserData.practitionerFN10}`
                    ],
                    "suffix": [
                        "SYSTEM ADMINISTRATOR"
                    ]
                }
            ],
            "telecom": [
                {
                    "id": "proa_demo_phone-number",
                    "system": "phone",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 1
                },
                {
                    "id": "proa_demo_fax-number",
                    "system": "fax",
                    "value": `${randomUserData.phone}`,
                    "use": "work",
                    "rank": 2
                }
            ],
            "address": [
                {
                    "id": "proa_demo_address",
                    "use": "billing",
                    "type": "postal",
                    "line": [
                        "5644 FORT BOONHOUR LN"
                    ],
                    "city": "KLAMATH FALLS",
                    "state": "OR",
                    "postalCode": "976019379"
                }
            ],
            "gender": "male"
        }
    ]

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Practitioner/$merge`,
        headers: {
            'Content-Type': 'application/fhir+json',
            'Authorization': `Bearer ${proaAccessToken}`
        },
        data: practitionerData
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('Error creating PROA Practitioner:', error.message);
        throw error;
    }

}

module.exports = createProaPractitioners;
