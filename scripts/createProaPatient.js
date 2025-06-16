// scripts/createProaPatient.js
// Script to create a PROA patient using the access token

const axios = require('axios');

async function createProaPatient({ env, proaAccessToken, randomUserData }) {

  const patientData = {
    resourceType: "Patient",
    meta: {
      source: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Patient/`,
      security: [
        {
          system: "https://www.icanbwell.com/owner",
          code: "proa_demo"
        },
        {
          system: "https://www.icanbwell.com/access",
          code: "proa_demo"
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
    name: [
      {
        family: randomUserData.random_LN,
        given: [randomUserData.random_FN]
      }
    ],
    telecom: [
      {
        system: "phone",
        value: randomUserData.random_phone
      },
      {
        system: "email",
        value: randomUserData.random_email
      }
    ],
    gender: randomUserData.genderType,
    birthDate: randomUserData.randomBirthday,
    address: [
      {
        line: [randomUserData.random_street],
        city: randomUserData.random_city,
        state: "OH",
        country: "US",
        postalCode: "45040"
      }
    ]
  };

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Patient`,
    headers: {
      'Content-Type': 'application/json+fhir',
      'Authorization': `Bearer ${proaAccessToken}`
    },
    data: JSON.stringify(patientData)
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`PROA Patient creation error: ${error.response.status} ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(`PROA Patient creation error: ${error.message}`);
    }
  }
}

module.exports = createProaPatient;
