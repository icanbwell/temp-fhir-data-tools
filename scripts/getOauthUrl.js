// scripts/getOauthUrl.js
// Function to get OAuth URL for a connection ID

const axios = require("axios");

/**
 * Gets the OAuth URL for a specific connection ID
 * @param {Object} options Options for getting OAuth URL
 * @param {string} options.env Environment (staging, dev, etc.)
 * @param {string} options.accessToken Access token for authorization
 * @param {string} options.connectionId Connection ID (default: builds from env)
 * @returns {Promise<string>} The redirect URL or null if not found
 */
async function getOauthUrl({ env, accessToken, connectionId }) {
  // If connectionId is not provided, build it using the environment
  if (!connectionId) {
    connectionId = `bwell_proa_${env}_2`;
  }

  try {
    const response = await axios({
      method: 'post',
      url: `https://api-gateway.${env}.icanbwell.com/federated-graph-authed/graphql`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${accessToken}`
      },
      data: {
        query: `query getOauthUrl($connectionId: String!) {
          getOauthUrl(connectionId: $connectionId) {
            redirectUrl
          }
        }`,
        variables: { connectionId }
      }
    });
    
    if (response.data && response.data.data && response.data.data.getOauthUrl) {
      return response.data.data.getOauthUrl.redirectUrl;
    } else {
      console.log("OAuth URL not found in response:", JSON.stringify(response.data));
      return null;
    }
  } catch (err) {
    console.error("Error fetching OAuth URL:", err.message);
    return null;
  }
}

module.exports = getOauthUrl;
