// scripts/getMemberConnections.js
// Script to fetch member connections after a successful data connection

const axios = require('axios');

/**
 * Fetches member connections data using GraphQL
 * @param {Object} options - The options for fetching member connections
 * @param {string} options.accessToken - The access token for authentication
 * @returns {Promise<Object>} - The response from the member connections request
 */
async function getMemberConnections({ accessToken }) {
  if (!accessToken) {
    throw new Error('accessToken is required');
  }

  try {
    const data = JSON.stringify({
      query: `{
        getMemberConnections {
          id
          name
          category
          type
          status
          syncStatus
          statusUpdated
          lastSynced
          created
          isDirect
        }
      }`,
      variables: {}
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api-gateway.staging.icanbwell.com/federated-graph-authed/graphql',
      headers: { 
        'x-powered-by': 'Express', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${accessToken}`
      },
      data: data
    };

    console.log('Fetching member connections...');
    const response = await axios.request(config);
    
    if (response.status === 200) {
      console.log('Member connections fetched successfully');
      return {
        success: true,
        data: response.data
      };
    } else {
      console.log(`Unexpected response status: ${response.status}`);
      return {
        success: false,
        status: response.status,
        data: response.data
      };
    }
  } catch (error) {
    console.error('Error fetching member connections:', error.message);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data: ${JSON.stringify(error.response.data)}`);
    }
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = getMemberConnections;
