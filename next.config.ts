import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // هذا لإضافة صور النباتات من موقع Pinterest
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;