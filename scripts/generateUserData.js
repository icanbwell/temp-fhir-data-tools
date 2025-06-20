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
    console.log(`Response from create_test_samsung_jwt:`, response.data);

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
    // console.log("CreateProaPerson result:", proaPersonResult);
  } catch (err) {
    console.error("Error in createProaPerson call:", err.message);
    process.exit(1);
  }

  console.log("proaClientFhirPatientId:", proaClientFhirPatientId);
  console.log("proaPatientFhirSourceUrl:", proaPatientFhirSourceUrl);
  console.log("proaClientFhirPersonId:", proaClientFhirPersonId);

  // Call createProaOrganizations
  const createProaOrganizations = require("./createProaOrganizations");
  try {
    const proaOrganizationsResult = await createProaOrganizations({ env, proaAccessToken, randomUserData });
    // console.log("CreateProaOrganizations result:", proaOrganizationsResult);
  } catch (err) {
    console.error("Error in createProaOrganizations call:", err.message);
    process.exit(1);
  }

  // Call createProaPractitioners
  const createProaPractitioners = require("./createProaPractitioners");
  try {
    const proaPractitionersResult = await createProaPractitioners({ env, proaAccessToken, randomUserData });
    // console.log("CreateProaPractitioners result:", proaPractitionersResult);
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
    console.log("CreateProaImmunizations result:", JSON.stringify(proaImmunizationsResult));
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

  // call conditions
  const createConditions = require("./createConditions");
  try {
    const conditionsResult = await createConditions({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateConditions result:", conditionsResult);
  } catch (err) {
    console.error("Error in createConditions call:", err.message);
    process.exit(1);
  }

  // call medications
  const createMedications = require("./createMedications");
  try {
    const medicationsResult = await createMedications({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateMedications result:", medicationsResult);
  }
  catch (err) {
    console.error("Error in createMedications call:", err.message);
    process.exit(1);
  }

  // call documentReference
  const createDocumentReference = require("./createdocumentreferenes");
  try {
    const documentReferenceResult = await createDocumentReference({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateDocumentReference result:", documentReferenceResult);
  }
  catch (err) {
    console.error("Error in createDocumentReference call:", err.message);
    process.exit(1);
  }

  // call careplans
  const createCarePlans = require("./createCareplans");
  try {
    const carePlansResult = await createCarePlans({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateCarePlans result:", carePlansResult);
  }
  catch (err) {
    console.error("Error in createCarePlans call:", err.message);
    process.exit(1);
  }

  // call allergyIntolerances
  const createAllergyIntolerances = require("./createAllergyIntollerances");
  try {
    const allergyIntolerancesResult = await createAllergyIntolerances({ env, proaAccessToken, randomUserData, proaClientFhirPatientId });
    console.log("CreateAllergyIntolerances result:", allergyIntolerancesResult);
  }
  catch (err) {
    console.error("Error in createAllergyIntolerances call:", err.message);
    process.exit(1);
  }

  // Create Cognito user if userPoolId is provided
  let cognitoResult = null;
  if (vars.userPoolId) {
    const createCognitoUser = require("./createCognitoUser");
    try {
      console.log("Creating Cognito user...");
      console.log("Using FHIR IDs:");
      console.log(`- proaClientFhirPatientId: ${proaClientFhirPatientId}`);
      console.log(`- proaClientFhirPersonId: ${proaClientFhirPersonId}`);
      
      cognitoResult = await createCognitoUser({
        userPoolId: vars.userPoolId,
        awsRegion: vars.awsRegion,
        randomUserData,
        proaClientFhirPatientId,
        proaClientFhirPersonId
      });
      console.log("Cognito user created successfully:");
      console.log(`Username: ${cognitoResult.username}`);
      console.log(`Email: ${cognitoResult.email}`);
      console.log(`Password: ${cognitoResult.password}`);
      console.log("Custom attributes set:");
      console.log(`- custom:bwellFhirPatientId: ${proaClientFhirPatientId}`);
      console.log(`- custom:clientFhirPatientId: ${proaClientFhirPatientId}`);
      console.log(`- custom:bwellFhirPersonId: ${proaClientFhirPersonId}`);
      console.log(`- custom:clientFhirPersonId: ${proaClientFhirPersonId}`);
    } catch (err) {
      console.error("Error creating Cognito user:", err.message);
      process.exit(1);
    }
  } else {
    console.log("Skipping Cognito user creation - userPoolId not provided in input");
  }

  // Get OAuth URL and then extract code and state from the redirect
  const getOauthUrl = require("./getOauthUrl");
  const getOauthCode = require("./getOauthCode");
  
  let oauthResults = {
    redirectUrl: null,
    cognitoCode: null,
    cognitoState: null
  };

  try {
    console.log("Fetching OAuth URL...");
    const redirectUrl = await getOauthUrl({ 
      env, 
      accessToken: tokenManager.accessToken,
      connectionId: `bwell_proa_${env}_2`
    });
    
    if (redirectUrl) {
      console.log("OAuth Redirect URL:", redirectUrl);
      oauthResults.redirectUrl = redirectUrl;
      
      // Now use the URL to get the OAuth code and state
      try {
        console.log("Fetching OAuth code and state...");
        const { cognitoCode, cognitoState } = await getOauthCode({ 
          env,
          redirectUrl 
        });
        
        if (cognitoCode && cognitoState) {
          console.log("Successfully extracted OAuth code and state");
          oauthResults.cognitoCode = cognitoCode;
          oauthResults.cognitoState = cognitoState;
        } else {
          console.log("Failed to extract OAuth code and state from response");
        }
      } catch (codeErr) {
        console.error("Error fetching OAuth code and state:", codeErr.message);
      }
    } else {
      console.log("Failed to retrieve OAuth URL");
    }
  } catch (err) {
    console.error("Error fetching OAuth URL:", err.message);
    // Don't exit process to allow script to complete even if OAuth URL fetch fails
  }
  
  // Output the full OAuth results
  console.log("OAuth Flow Results:", {
    redirectUrl: oauthResults.redirectUrl,
    cognitoCode: oauthResults.cognitoCode,
    cognitoState: oauthResults.cognitoState
  });
  console.log("Samsung jwt : ", tokenManager.token);
  console.log("PROA Client FHIR Patient ID:", proaClientFhirPatientId);
  console.log("PROA Client FHIR Person ID:", proaClientFhirPersonId);
}

main().catch((err) => {
  console.error("Script failed:", err);
});
