const AWS = require('aws-sdk');

/**
 * Creates a user in AWS Cognito
 * @param {Object} options - The options for creating a user
 * @param {string} options.userPoolId - The Cognito User Pool ID
 * @param {string} options.awsRegion - The AWS region where the User Pool is located
 * @param {Object} options.randomUserData - User data generated from generateScriptData.js
 * @returns {Promise<Object>} - The created user information
 */
async function createCognitoUser({ userPoolId, awsRegion, randomUserData, proaClientFhirPatientId, proaClientFhirPersonId }) {
  if (!userPoolId) {
    throw new Error('userPoolId is required');
  }

  if (!awsRegion) {
    throw new Error('awsRegion is required');
  }

  if (!randomUserData) {
    throw new Error('randomUserData is required');
  }
  
  if (!proaClientFhirPatientId) {
    throw new Error('proaClientFhirPatientId is required');
  }
  
  if (!proaClientFhirPersonId) {
    throw new Error('proaClientFhirPersonId is required');
  }

  // Configure AWS SDK with the specified region
  AWS.config.update({ region: awsRegion });
  
  try {
    const { random_FN, random_LN, random_email } = randomUserData;
    
    // Format username as firstname.lastname (lowercase)
    const username = `${random_FN.toLowerCase()}.${random_LN.toLowerCase()}`;
    const password = 'Password&1';
    
    // Initialize Cognito Identity Provider
    const cognito = new AWS.CognitoIdentityServiceProvider();
    
    console.log(`Creating Cognito user in user pool ${userPoolId}...`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${random_email}`);
    
    // Create user in Cognito User Pool
    const params = {
      UserPoolId: userPoolId,
      Username: username,
      TemporaryPassword: password,
      MessageAction: 'SUPPRESS', // Prevent sending verification emails
      UserAttributes: [
        {
          Name: 'email',
          Value: random_email
        },
        {
          Name: 'email_verified',
          Value: 'true'
        },
        {
          Name: 'given_name',
          Value: random_FN
        },
        {
          Name: 'family_name',
          Value: random_LN
        },
        {
          Name: 'custom:bwellFhirPatientId',
          Value: proaClientFhirPatientId
        },
        {
          Name: 'custom:clientFhirPatientId',
          Value: proaClientFhirPatientId
        },
        {
          Name: 'custom:bwellFhirPersonId',
          Value: proaClientFhirPersonId
        },
        {
          Name: 'custom:clientFhirPersonId',
          Value: proaClientFhirPersonId
        }
      ]
    };
    
    const createUserResult = await cognito.adminCreateUser(params).promise();
    console.log('User created successfully');
    
    // Set the permanent password for the user
    const setPasswordParams = {
      Password: password,
      Permanent: true,
      Username: username,
      UserPoolId: userPoolId
    };
    
    await cognito.adminSetUserPassword(setPasswordParams).promise();
    console.log('Password set to permanent: Password&1');
    
    return {
      username,
      email: random_email,
      password,
      cognitoResult: createUserResult,
      customAttributes: {
        bwellFhirPatientId: proaClientFhirPatientId,
        clientFhirPatientId: proaClientFhirPatientId,
        bwellFhirPersonId: proaClientFhirPersonId,
        clientFhirPersonId: proaClientFhirPersonId
      }
    };
  } catch (error) {
    console.error('Error creating Cognito user:', error);
    throw error;
  }
}

module.exports = createCognitoUser;
