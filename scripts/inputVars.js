// scripts/inputVars.js
// Centralized extraction and validation of required variables from base64 input

function extractAndValidateInputVars(input) {
  const requiredVars = ["env", "clientKey"];
  const missing = requiredVars.filter((key) => !input[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required input variables: ${missing.join(", ")}`);
  }
  // You can add more extraction/validation logic here as needed
  return {
    env: input.env,
    clientKey: input.clientKey,
    // Add more fields as needed
  };
}

module.exports = { extractAndValidateInputVars };
