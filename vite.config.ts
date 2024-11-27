import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr() // SVG를 React 컴포넌트로 변환
  ],
  // ... 기존 설정들 ...
})