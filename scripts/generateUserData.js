// scripts/generateUserData.js
// Script to sequentially generate user data by making requests to different services

const axios = require("axios");
const { Buffer } = require("buffer");
const config = require("./config.json");

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
  const env = input.env || "staging";

  const bigUrl = config.bigUrl.replace("${env}", env);
  const createJwtUrl = `${bigUrl}/internal/create_test_samsung_jwt`;
  console.log(`Using createJwtUrl: ${createJwtUrl}`);
  try {
    const response = await axios.get(createJwtUrl); // Use GET instead of POST
    console.log(`Response from create_test_samsung_jwt:`, response.data);
    // TODO: Store or process the JWT as needed
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
