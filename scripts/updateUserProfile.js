// scripts/updateUserProfile.js
// Script to update the user profile using the decoded access token payload

const GraphQLAdapter = require('./graphqlAdapter');
const Token = require('./token');

async function updateUserProfile({ env, tokenManager, profileInput }) {
  if (!tokenManager.decodedAccessTokenPayload) {
    throw new Error('Decoded access token payload not available.');
  }
  const payload = typeof tokenManager.decodedAccessTokenPayload === 'string'
    ? JSON.parse(tokenManager.decodedAccessTokenPayload)
    : tokenManager.decodedAccessTokenPayload;
  const clientFhirPersonId = payload["clientFhirPersonId"];
  if (!clientFhirPersonId) {
    throw new Error('clientFhirPersonId not found in access token payload.');
  }
  const url = `https://api-gateway.${env}.icanbwell.com/federated-graph-authed/graphql`;
  const headers = {
    'bwell-client-fhir-person-id': clientFhirPersonId,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tokenManager.accessToken}`
  };
  const query = require('./queries/updateUserProfile');
  const adapter = new GraphQLAdapter({ url, headers });
  return await adapter.request(query, { input: profileInput });
}

module.exports = updateUserProfile;
