// tailwind.config.js

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Next.js App Router 경로
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Next.js Pages Router 경로
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Components 경로
    './src/**/*.{js,ts,jsx,tsx,mdx}', // src 디렉토리 내의 모든 파일
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // NextUI 테마 관련 파일
  ],
  theme: {
    extend: {}, // 커스텀 확장은 필요 시 추가
  },
  plugins: [
    nextui(), // NextUI 플러그인 등록
  ],
};