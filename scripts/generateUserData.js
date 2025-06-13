// scripts/generateUserData.js
// Script to sequentially generate user data by making requests to different services

const axios = require("axios");
const { Buffer } = require("buffer");
const config = require("./config.json");
const Token = require("./token");
const { extractAndValidateInputVars } = require("./inputVars");
const generateScriptData = require("./generateScriptData");

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
    const tokenManager = new Token();
    const updateResult = await updateUserProfile({ env, tokenManager, profileInput });
    console.log("UpdateUserProfile result:", updateResult);
  } catch (err) {
    console.error("Error in updateUserProfile call:", err.message);
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
});
