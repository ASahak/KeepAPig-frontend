/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true
  },
  env: {
    GOOGLE_AUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    API_BASE_URL_LOCAL: process.env.REACT_APP_API_BASE_URL_LOCAL,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL
  }
};

module.exports = nextConfig;
