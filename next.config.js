/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const config = require('config');

const THIRD_PARTY = config.get('THIRD_PARTY');
const IS_MOCKING_ENABLED = config.get('IS_MOCKING_ENABLED');

const redirects = async () => [
  {
    source: '/',
    destination: '/home',
    permanent: true,
  },
];

module.exports = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  publicRuntimeConfig: {
    staticFolder: '/public',
    IS_MOCKING_ENABLED,
    THIRD_PARTY,
  },
  serverRuntimeConfig: {
    THIRD_PARTY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  redirects,
};
