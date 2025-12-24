/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./APP/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#123456",
        secondary: "#4ECDC4", // XPAIO 포인트 컬러
      },
    },
    // 기본 색상(white 등)이 누락되지 않도록 방어막을 칩니다.
    colors: {
      ...colors,
    },
  },
  plugins: [],
};