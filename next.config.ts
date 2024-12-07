import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // StrictMode 비활성화

  experimental: {
    turbo: {
      rules: {
        // Turbopack에서 CSS 로더 활성화
        ".css": ["style-loader", "css-loader"],
      },
    },
  },
  typescript: {
    // 타입 오류가 있어도 빌드를 중단하지 않도록 설정합니다.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
