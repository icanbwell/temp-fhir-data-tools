// This file generates the base64-encoded JSON input for the generateUserData.js script.

const input = {
  env: "<your-env>", // Replace with your environment, e.g., "staging" or "production"
  clientKey: "<samsung-client-key>", // Replace with your actual Samsung client key
  proaAccessToken: "<your-proa-access-token>", // Replace with your actual PROA access token
  // AWS Cognito Configuration - Replace these with your actual values
  userPoolId: "<your-user-pool-id>", // Replace with your actual User Pool ID
  awsRegion: "<your-aws-region>" // AWS region where your Cognito User Pool is located
};

// If run directly, automatically generate the base64-encoded input and call the main script
if (require.main === module) {
  const { execSync } = require('child_process');
  const path = require('path');

  // Generate the base64 string
  const base64 = Buffer.from(JSON.stringify(input), "utf-8").toString("base64");
  console.log("Generated base64 input:", base64);

  // Build the path to the main script
  const mainScript = path.join(__dirname, 'scripts', 'generateUserData.js');

  // Run the main script with the generated base64 string
  try {
    const output = execSync(`node ${mainScript} ${base64}`, { stdio: 'inherit' });
  } catch (err) {
    console.error('Error running generateUserData.js:', err);
  }
}
