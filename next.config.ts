import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        // Turbopack에서 CSS 로더 활성화
        ".css": ["style-loader", "css-loader"],
      },
    },
  },
};

export default nextConfig;
