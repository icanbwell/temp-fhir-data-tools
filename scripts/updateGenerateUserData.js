// scripts/updateGenerateUserData.js
// This is a suggested update to the generateUserData.js file
// to add getMemberConnections functionality.
// You can choose to implement these changes after reviewing them.

// Add this after the successful data connection creation in generateUserData.js:

  // After successful data connection, try to get member connections if we have the access token
  if (dataConnectionResult && dataConnectionResult.success && tokenManager.accessToken) {
    try {
      console.log("Fetching member connections...");
      const getMemberConnections = require('./getMemberConnections');
      
      const connectionsResult = await getMemberConnections({ 
        accessToken: tokenManager.accessToken
      });
      
      if (connectionsResult.success) {
        const connections = connectionsResult.data?.data?.getMemberConnections || [];
        console.log(`Found ${connections.length} member connections`);
        
        // Process or log the connections
        if (connections.length > 0) {
          console.log("Connection details:");
          connections.forEach((connection, index) => {
            console.log(`[${index + 1}] ${connection.name} (${connection.id}): ${connection.status}`);
          });
        }
      } else {
        console.log("No member connections found or request failed");
      }
    } catch (err) {
      console.error("Error getting member connections:", err.message);
      // Don't exit process to allow script to complete even if connections request fails
    }
  }
