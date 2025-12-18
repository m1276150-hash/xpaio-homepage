/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1B2A",
        textPrimary: "#FFFFFF",
        neonBlue: "#4ECDC4",
        neonPurple: "#9B5DE5",
        neonYellow: "#FFD93D",
      },
    },
  },
  plugins: [],
}