// scripts/createProaPerson.js
// Script to create a PROA person using the access token

const axios = require('axios');

async function createProaPerson({ env, proaAccessToken, randomUserData, proaClientFhirPatientId }) {
  if (!proaAccessToken) {
    throw new Error('PROA access token not available.');
  }

  if (!proaClientFhirPatientId) {
    throw new Error('PROA client FHIR patient ID not available.');
  }

  const personData = {
    resourceType: "Person",
    id: randomUserData.personUUID1,
    meta: {
      source: `https://fhir-proa.${env}.icanbwell.com/Person/${randomUserData.personUUID1}`,
      security: [
        {
          system: "https://www.icanbwell.com/owner",
          code: "proa_pharmacy_demo"
        },
        {
          system: "https://www.icanbwell.com/sourceAssigningAuthority",
          code: "proa_pharmacy_demo"
        },
        {
          system: "https://www.icanbwell.com/access",
          code: "proa_pharmacy_demo"
        },
        {
          system: "https://www.icanbwell.com/vendor",
          code: "proa_pharmacy_demo"
        }
      ]
    },
    name: [
      {
        use: "official",
        text: "Person Name",
        family: randomUserData.random_LN,
        given: [randomUserData.random_FN]
      }
    ],
    gender: randomUserData.genderType,
    birthDate: randomUserData.randomBirthday,
    address: [
      {
        line: [randomUserData.random_street],
        city: randomUserData.random_city,
        state: "OH",
        postalCode: "45040"
      }
    ],
    active: true,
    link: [
      {
        target: {
          reference: `Patient/${proaClientFhirPatientId}`,
          type: "Patient"
        },
        assurance: "level4"
      }
    ]
  };

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/Patient/$merge`,
    headers: {
      'Content-Type': 'application/json+fhir',
      'Authorization': `Bearer ${proaAccessToken}`
    },
    data: JSON.stringify(personData)
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`PROA Person creation error: ${error.response.status} ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(`PROA Person creation error: ${error.message}`);
    }
  }
}

module.exports = createProaPerson;
