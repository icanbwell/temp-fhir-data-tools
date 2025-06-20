// scripts/graphqlAdapter.js
// Adapter for making GraphQL requests with custom headers and queries

const axios = require('axios');

class GraphQLAdapter {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers || {};
  }

  setHeaders(headers) {
    this.headers = { ...this.headers, ...headers };
  }

  async request(query, variables = {}) {
    const body = JSON.stringify({ query, variables });
    try {
      const response = await axios.post(this.url, body, { headers: this.headers });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`GraphQL error: ${error.response.status} ${JSON.stringify(error.response.data)}`);
      } else {
        throw new Error(`GraphQL error: ${error.message}`);
      }
    }
  }
}

module.exports = GraphQLAdapter;
