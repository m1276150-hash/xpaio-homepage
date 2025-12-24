/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./APP/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. 기존 색상을 유지하면서 커스텀 색상만 추가할 때
      colors: {
        primary: "#123456",
        secondary: "#4ECDC4", // XPAIO의 포인트 컬러
      },
    },
    // 2. 만약 기본 색상이 계속 인식되지 않는다면 아래 주석을 해제하여 강제로 복구합니다.
    /*
    colors: {
      ...colors,
    },
    */
  },
  plugins: [],
};