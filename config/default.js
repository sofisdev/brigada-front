module.exports = {
  THIRD_PARTY: {
    PLATFORM_API: {
      baseUrl: process.env.PLATFORM_API_URL || 'http://localhost:4000',
    },
    AUTH: {
      authUrl: process.env.NEXTAUTH_URL,
      authSecret: process.env.NEXTAUTH_SECRET,
    },
  },
  IS_MOCKING_ENABLED: false,
};
