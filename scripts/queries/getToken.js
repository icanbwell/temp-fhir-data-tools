// scripts/queries/getToken.js
module.exports = `query {\n  getToken {\n    accessToken {\n      jwtToken\n    }\n    idToken {\n      jwtToken\n    }\n    refreshToken{\n      token\n    }\n  }\n}`;
