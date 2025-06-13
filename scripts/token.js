// scripts/token.js
// Singleton Token class to manage the JWT token

const { Buffer } = require("buffer");
const GraphQLAdapter = require('./graphqlAdapter');
const getTokenQuery = require('./queries/getToken');

class Token {
  constructor() {
    if (Token.instance) {
      return Token.instance;
    }
    this.token = null;
    Token.instance = this;
  }

  set(token) {
    this.token = token;
  }

  get() {
    return this.token;
  }

  decode() {
    if (!this.token) return null;
    const [header, payload] = this.token.split('.');
    if (header && payload) {
      return {
        header: Buffer.from(header, 'base64').toString('utf-8'),
        payload: Buffer.from(payload, 'base64').toString('utf-8'),
      };
    }
    return null;
  }

  async fetchGraphQLToken(clientKey, env) {
    if (!this.token) throw new Error('JWT token not set.');
    const url = `https://api-gateway.${env}.icanbwell.com/federated-graph/graphql`;
    const headers = {
      'clientkey': clientKey,
      'Authorization': this.token,
      'Content-Type': 'application/json',
    };
    const query = getTokenQuery;
    const adapter = new GraphQLAdapter({ url, headers });
    try {
      const gqlResponse = await adapter.request(query, {});
      // Store tokens as instance variables
      const getToken = gqlResponse?.data?.getToken;
      if (getToken) {
        this.accessToken = getToken.accessToken?.jwtToken || null;
        this.idToken = getToken.idToken?.jwtToken || null;
        this.refreshToken = getToken.refreshToken?.token || null;
        // Decode and store access token payload
        if (this.accessToken) {
          const [header, payload] = this.accessToken.split('.');
          if (header && payload) {
            this.decodedAccessTokenHeader = Buffer.from(header, 'base64').toString('utf-8');
            this.decodedAccessTokenPayload = Buffer.from(payload, 'base64').toString('utf-8');
          }
        }
      }
      return gqlResponse;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Token;
