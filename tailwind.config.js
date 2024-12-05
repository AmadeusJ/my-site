import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    // 추가로 Tailwind가 스캔해야 할 경로
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()], // NextUI 플러그인 추가
};