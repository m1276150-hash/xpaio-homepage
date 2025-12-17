/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1B2A",     // 딥 네이비 배경
        textPrimary: "#FFFFFF",   // 기본 텍스트 색상
        neonBlue: "#4ECDC4",      // 청록빛 네온 블루
        neonPurple: "#9B5DE5",    // 보라빛 네온 퍼플
        neonYellow: "#FFD93D",    // 밝은 네온 옐로우
      },
      // 네온 효과를 위한 그림자 추가
      dropShadow: {
        'neon': '0 0 10px rgba(78, 205, 196, 0.5)',
      }
    },
  },
  plugins: [],
}
