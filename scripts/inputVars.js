// scripts/inputVars.js
// Centralized extraction and validation of required variables from base64 input

function extractAndValidateInputVars(input) {
  const requiredVars = ["env", "clientKey", "proaAccessToken", "userPoolId"];
  const missing = requiredVars.filter((key) => !input[key] || input[key] === undefined);
  if (missing.length > 0) {
    throw new Error(`Missing required input variables: ${missing.join(", ")}`);
  }
  // You can add more extraction/validation logic here as needed
  return {
    env: input.env,
    clientKey: input.clientKey,
    proaAccessToken: input.proaAccessToken,
    userPoolId: input.userPoolId, // Optional Cognito User Pool ID
    awsRegion: input.awsRegion || 'us-east-1', // Optional AWS region with default
    // Add more fields as needed
  };
}

module.exports = { extractAndValidateInputVars };
