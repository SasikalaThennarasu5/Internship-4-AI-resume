/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#F59E0B",
        accent: "#22C55E",
        border: "#D9D9D9",
        background: "#F9FAFB",
      },
    },
  },
  plugins: [],
};