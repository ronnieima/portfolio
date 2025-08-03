/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.imagawa.dev',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
