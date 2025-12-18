/** @type {import('next').NextConfig} */
const nextConfig = {
  // 터보팩 설정: 에러 메시지에서 제안한 대로 empty object를 넣습니다.
  turbopack: {},

  // 브라우저에서 fs 에러 방지
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false, os: false };
    }
    return config;
  },
};

export default nextConfig;