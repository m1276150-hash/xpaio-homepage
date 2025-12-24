/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/old-roadmap",
        destination: "/roadmap",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;