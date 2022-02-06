module.exports = {
  THIRD_PARTY: {
    PLATFORM_API: {
      baseUrl: process.env.PLATFORM_API_URL || 'http://localhost:4000',
    },
    AUTH: {
      authSecret: process.env.NEXTAUTH_SECRET,
      cognitoDomain: process.env.COGNITO_DOMAIN,
      cognitoClientId: process.env.COGNITO_CLIENT_ID,
    },
  },
  IS_MOCKING_ENABLED: false,
};
