// scripts/generateUserData.js
// Script to sequentially generate user data by making requests to different services

const axios = require("axios");
const { Buffer } = require("buffer");
const config = require("./config.json");
const Token = require("./token");
const { extractAndValidateInputVars } = require("./inputVars");
const generateScriptData = require("./generateScriptData");
const createProaPatient = require("./createProaPatient");

function decodeBase64JsonArg(arg) {
  try {
    const jsonString = Buffer.from(arg, "base64").toString("utf-8");
    return JSON.parse(jsonString);
  } catch (e) {
    throw new Error("Invalid base64-encoded JSON input.");
  }
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error(
      "Usage: node scripts/generateUserData.js <base64-encoded-json>"
    );
    process.exit(1);
  }
  const input = decodeBase64JsonArg(arg);
  let vars;
  try {
    vars = extractAndValidateInputVars(input);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  const env = vars.env;
  const clientKey = vars.clientKey;
  const proaAccessToken = vars.proaAccessToken;

  const bigUrl = config.bigUrl.replace("${env}", env);
  const createJwtUrl = `${bigUrl}/internal/create_test_samsung_jwt`;
  console.log(`Using createJwtUrl: ${createJwtUrl}`);
  const tokenManager = new Token();
  try {
    const response = await axios.get(createJwtUrl); // Use GET instead of POST
    // console.log(`Response from create_test_samsung_jwt:`, response.data);

    // Call the GraphQL endpoint with the JWT and clientKey
    try {
      tokenManager.set(response.data);
      const gqlResponse = await tokenManager.fetchGraphQLToken(clientKey, env);
      console.log("GraphQL response:", gqlResponse);
      // Print tokens and decoded access token from the Token instance
      if (tokenManager.accessToken) {
        if (tokenManager.decodedAccessTokenPayload) {
          console.log(
            "Decoded AccessToken Payload:",
            tokenManager.decodedAccessTokenPayload
          );
        }
      }
    } catch (err) {
      console.error("Error in getToken call:", err.message);
      process.exit(1);
    }
  } catch (error) {
    if (error.response) {
      console.error(
        `Error calling create_test_samsung_jwt:`,
        error.response.status,
        error.response.data
      );
    } else {
      console.error(`Error calling create_test_samsung_jwt:`, error.message);
      process.exit(1);
    }
  }

  // Generate and store random user data
  const randomUserData = generateScriptData();
  console.log("Random User Data:", randomUserData);

  // Prepare profile input for updateUserProfile
  const profileInput = {
    resourceType: "Person",
    name: [
      {
        use: "usual",
        family: randomUserData.random_LN,
        given: [randomUserData.random_FN],
      },
    ],
    telecom: [
      {
        system: "email",
        value: randomUserData.random_email,
        use: "home",
      },
      {
        system: "phone",
        value: randomUserData.random_phone,
        use: "home",
      },
    ],
    gender: randomUserData.genderType,
    birthDate: randomUserData.randomBirthday,
    address: [
      {
        use: "home",
        line: [randomUserData.random_street],
        city: randomUserData.random_city,
        state: "OH",
        country: "US",
        postalCode: "45040",
      },
    ],
  };

  // Call updateUserProfile
  const updateUserProfile = require("./updateUserProfile");
  try {
    const updateResult = await updateUserProfile({ env, tokenManager, profileInput });
    console.log("UpdateUserProfile result:", updateResult);
  } catch (err) {
    console.error("Error in updateUserProfile call:", err.message);
  }

  // Call createProaPatient
  let proaPatientResult = null;
  let proaClientFhirPatientId = null;
  let proaPatientFhirSourceUrl = null;
  let proaClientFhirPersonId = null;
  try {
    proaPatientResult = await createProaPatient({ env, proaAccessToken, randomUserData });
    proaClientFhirPatientId = proaPatientResult.id;
    proaPatientFhirSourceUrl = proaPatientResult.meta.source;
  } catch (err) {
    console.error("Error in createProaPatient call:", err.message);
    process.exit(1);
  }

  // Call createProaPerson
  const createProaPerson = require("./createProaPerson");
  try {
    const proaPersonResult = await createProaPerson({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    proaClientFhirPersonId = proaPersonResult.id;
    console.log("CreateProaPerson result:", proaPersonResult);
  } catch (err) {
    console.error("Error in createProaPerson call:", err.message);
    process.exit(1);
  }

  // Call createProaOrganizations
  const createProaOrganizations = require("./createProaOrganizations");
  try {
    const proaOrganizationsResult = await createProaOrganizations({ env, proaAccessToken, randomUserData });
    console.log("CreateProaOrganizations result:", proaOrganizationsResult);
  } catch (err) {
    console.error("Error in createProaOrganizations call:", err.message);
    process.exit(1);
  }

  // Call createProaPractitioners
  const createProaPractitioners = require("./createProaPractitioners");
  try {
    const proaPractitionersResult = await createProaPractitioners({ env, proaAccessToken, randomUserData });
    console.log("CreateProaPractitioners result:", proaPractitionersResult);
  } catch (err) {
    console.error("Error in createProaPractitioners call:", err.message);
    process.exit(1);
  }

  // Call createProaProcedures
  const createProaProcedures = require("./createProaProcedures");
  try {
    const proaProceduresResult = await createProaProcedures({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateProaProcedures result:", proaProceduresResult);
  } catch (err) {
    console.error("Error in createProaProcedures call:", err.message);
    process.exit(1);
  }

  // Call createProaImmunizations
  const createProaImmunizations = require("./createProaImmunization");
  try {
    const proaImmunizationsResult = await createProaImmunizations({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateProaImmunizations result:", proaImmunizationsResult);
  } catch (err) {
    console.error("Error in createProaImmunizations call:", err.message);
    process.exit(1);
  }

  // Call createObservations
  const createObservations = require("./createObservations");
  try {
    const observationsResult = await createObservations({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateObservations result:", observationsResult);
  } catch (err) {
    console.error("Error in createObservations call:", err.message);
    process.exit(1);
  }

  // call encounters
  const createEncounters = require("./createEncounters");
  try {
    const encountersResult = await createEncounters({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateEncounters result:", encountersResult);
  } catch (err) {
    console.error("Error in createEncounters call:", err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
});
