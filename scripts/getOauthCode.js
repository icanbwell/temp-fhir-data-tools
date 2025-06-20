// scripts/getOauthCode.js
// Function to get OAuth code and state from Cognito OAuth endpoint

const axios = require("axios");

/**
 * Makes a request to the Cognito OAuth authorize endpoint and extracts code and state
 * @param {Object} options Options for the OAuth request
 * @param {string} options.env Environment (staging, dev, etc.)
 * @param {string} options.redirectUrl The OAuth redirect URL obtained from getOauthUrl
 * @returns {Promise<Object>} Object containing code and state values
 */
async function getOauthCode({ env, redirectUrl }) {
  try {
    // If redirectUrl is not provided, use a default URL for testing
    if (!redirectUrl) {
      console.warn("No redirectUrl provided, using default test URL");
      redirectUrl = `${redirectUrl}`;
    }

    console.log(`Making request to OAuth authorize endpoint: ${redirectUrl}`);
    
    const response = await axios({
      method: 'get',
      maxBodyLength: Infinity,
      url: redirectUrl,
      headers: {
      }
    });

    // Get the HTML content from the response
    const responseHtml = response.data;
    
    // Define regex patterns
    const statePattern = /state=([^"&]+)/;
    const codePattern = /value="([^"]+)"/;

    // Extract 'state' value
    const stateMatch = statePattern.exec(responseHtml);
    let cognitoState = null;
    if (stateMatch && stateMatch[1]) {
      cognitoState = stateMatch[1];
      console.log("cognitoState extracted:", cognitoState);
    } else {
      console.log("No match found for state in the response HTML.");
    }

    // Extract 'code' value
    const codeMatch = codePattern.exec(responseHtml);
    let cognitoCode = null;
    if (codeMatch && codeMatch[1]) {
      cognitoCode = codeMatch[1];
      console.log("cognitoCode extracted:", cognitoCode);
    } else {
      console.log("No match found for code in the response HTML.");
    }

    // Return the extracted values
    return { 
      cognitoCode, 
      cognitoState,
    };
    
  } catch (err) {
    console.error("Error fetching OAuth code:", err.message);
    return { 
      error: err.message,
      cognitoCode: null,
      cognitoState: null
    };
  }
}

module.exports = getOauthCode;
