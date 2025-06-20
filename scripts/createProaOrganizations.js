// scripts/createProaOrganizations.js
// Script to create PROA organizations using the access token

const axios = require('axios');

async function createProaOrganizations({ env, proaAccessToken, randomUserData }) {
  if (!proaAccessToken) {
    throw new Error('PROA access token not available.');
  }

  const organizationsData = [
    {
      resourceType: "Organization",
      id: randomUserData.organizationId1,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId1,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId1
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "BUILDING PROA DEMO - FAMILIES",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone2,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["1116 HAPPYJOIJOI ST S"],
          city: "BIRMINGHAM",
          state: "AL",
          postalCode: "352052410"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
            family: randomUserData.practitionerLN1,
            given: [randomUserData.practitionerFN1],
            suffix: ["OWNER"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone3,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId2,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId2,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId2
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "PROA DEMO - COUNTY OB/GYN",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone4,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone5,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["109 DONT CALL ME SALLY ROAD"],
          city: "TELL CITY",
          state: "IN",
          postalCode: "475862755"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN2} ${randomUserData.practitionerLN2}`,
            family: randomUserData.practitionerLN2,
            given: [randomUserData.practitionerFN2],
            suffix: ["CEO"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone6,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId3,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId3,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId3
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "PROA DEMO - DENTAL PLLC",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone7,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone8,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["4401 Pinkerton D"],
          city: "BROOKLYN",
          state: "NY",
          postalCode: "112035725"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
            family: randomUserData.practitionerLN3,
            given: [randomUserData.practitionerFN3],
            suffix: ["RCM MANAGER"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone9,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId4,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId4,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId4
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "PROA DEMO - PHARMACY, INC.",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone10,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone11,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["2025 CHICKEN STE A3"],
          city: "RIVERSIDE",
          state: "CA",
          postalCode: "925072315"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN4} ${randomUserData.practitionerLN4}`,
            family: randomUserData.practitionerLN4,
            given: [randomUserData.practitionerFN4],
            suffix: ["CEO"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone12,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId5,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId5,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId5
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "FRANKY PROA DEMO - DDS, PC",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone13,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone14,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["288 PINEY GREENS RD"],
          city: "DANVILLETON",
          state: "VA",
          postalCode: "245404124"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN5} ${randomUserData.practitionerLN5}`,
            family: randomUserData.practitionerLN5,
            given: [randomUserData.practitionerFN5],
            suffix: ["DENTIST"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone15,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId6,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId6,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId6
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "PROA DEMO - PHYSICIANS REGIONAL, PLLC",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone16,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone17,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["PO BOX 5857"],
          city: "CORPUS CHRISTI",
          state: "TX",
          postalCode: "784666327"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN6} ${randomUserData.practitionerLN6}`,
            family: randomUserData.practitionerLN6,
            given: [randomUserData.practitionerFN6],
            suffix: ["LLC BOARD MEMBER"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone18,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: randomUserData.organizationId7,
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: randomUserData.organizationId7,
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: randomUserData.organizationId7
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "PROA DEMO - BEHAVIORAL HEALTH LLC",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone19,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone20,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["5644 FORT BOONHOUR LN"],
          city: "KLAMATH FALLS",
          state: "OR",
          postalCode: "976019379"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: `${randomUserData.practitionerFN7} ${randomUserData.practitionerLN7}`,
            family: randomUserData.practitionerLN7,
            given: [randomUserData.practitionerFN7],
            suffix: ["SYSTEM ADMINISTRATOR"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone21,
              use: "work"
            }
          ]
        }
      ]
    },
    {
      resourceType: "Organization",
      id: "db361659-f797-5dc3-aa9b-a54bd2742cd5",
      meta: {
        source: "https://npiregistry.cms.hhs.gov",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung"
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo"
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo"
          }
        ]
      },
      identifier: [
        {
          id: "db361659-f797-5dc3-aa9b-a54bd2742cd5",
          use: "official",
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "NPI"
              }
            ]
          },
          system: "http://hl7.org/fhir/sid/us-npi",
          value: "db361659-f797-5dc3-aa9b-a54bd2742cd5"
        },
        {
          id: "sourceId",
          system: "https://www.icanbwell.com/sourceId",
          value: "db361659-f797-5dc3-aa9b-a54bd2742cd5"
        },
        {
          id: "uuid",
          system: "https://www.icanbwell.com/uuid",
          value: "db361659-f797-5dc3-aa9b-a54bd2742cd5"
        }
      ],
      active: true,
      type: [
        {
          id: "proa_demo-prov",
          coding: [
            {
              id: "proa_demo-prov",
              system: "http://terminology.hl7.org/CodeSystem/organization-type",
              code: "prov",
              display: "Healthcare Provider"
            }
          ]
        }
      ],
      name: "beans-and-rice BUILDING PROA DEMO - FAMILIES",
      telecom: [
        {
          id: "proa_demo-phone-number",
          system: "phone",
          value: randomUserData.random_phone22,
          use: "work",
          rank: 1
        },
        {
          id: "proa_demo-fax-number",
          system: "fax",
          value: randomUserData.random_phone23,
          use: "work",
          rank: 2
        }
      ],
      address: [
        {
          id: "proa_demo-address",
          use: "work",
          type: "postal",
          line: ["1116 beans-and-rice ST S"],
          city: "beans-and-rice",
          state: "AL",
          postalCode: "352052410"
        }
      ],
      contact: [
        {
          id: "proa_demo-admin",
          purpose: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
                code: "ADMIN",
                display: "Administrative"
              }
            ]
          },
          name: {
            use: "official",
            text: "beans-and-rice beans-and-rice",
            family: "beans-and-rice",
            given: ["beans-and-rice"],
            suffix: ["OWNER"]
          },
          telecom: [
            {
              id: "proa_demo-admin-phone",
              system: "phone",
              value: randomUserData.random_phone24,
              use: "work"
            }
          ]
        }
      ]
    }
  ];

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Organization/$merge`,
    headers: {
      'Content-Type': 'application/json+fhir',
      'Authorization': `Bearer ${proaAccessToken}`
    },
    data: JSON.stringify(organizationsData)
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`PROA Organizations creation error: ${error.response.status} ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(`PROA Organizations creation error: ${error.message}`);
    }
  }
}

module.exports = createProaOrganizations;
