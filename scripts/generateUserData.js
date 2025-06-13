// scripts/generateUserData.js
// Script to sequentially generate user data by making requests to different services

const axios = require("axios");
const { Buffer } = require("buffer");
const config = require("./config.json");
const Token = require("./token");
const { extractAndValidateInputVars } = require("./inputVars");

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
  try {
    const response = await axios.get(createJwtUrl); // Use GET instead of POST
    console.log(`Response from create_test_samsung_jwt:`, response.data);
    // Store the JWT token using the Token singleton
    const tokenManager = new Token();
    tokenManager.set(response.data);
    // Decode and print the JWT
    const decoded = tokenManager.decode();
    if (decoded) {
      console.log('Decoded JWT Header:', decoded.header);
      console.log('Decoded JWT Payload:', decoded.payload);
    } else {
      console.log('Invalid JWT format.');
    }

    // Call the GraphQL endpoint with the JWT and clientKey
    try {
      const gqlResponse = await tokenManager.fetchGraphQLToken(clientKey, env);
      console.log('GraphQL response:', gqlResponse);
      // Print tokens and decoded access token from the Token instance
      if (tokenManager.accessToken) {
        console.log('AccessToken:', tokenManager.accessToken);
        if (tokenManager.decodedAccessTokenPayload) {
          console.log('Decoded AccessToken Payload:', tokenManager.decodedAccessTokenPayload);
        }
      }
    } catch (err) {
      console.error('Error in GraphQL call:', err.message);
    }
  } catch (error) {
    if (error.response) {
      console.error(`Error calling create_test_samsung_jwt:`, error.response.status, error.response.data);
    } else {
      console.error(`Error calling create_test_samsung_jwt:`, error.message);
    }
  }

}

main().catch((err) => {
  console.error("Script failed:", err);
});
