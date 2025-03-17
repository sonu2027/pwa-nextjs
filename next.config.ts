// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   productionBrowserSourceMaps: false,
// };

// export default nextConfig;



const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  // Exclude specific files from precaching
  exclude: [
    /_next\/app-build-manifest\.json$/, // Exclude app-build-manifest.json
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});