/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D4356",
        secondary: "#435B66",
        third: "#A76F6F",
        fourth: "#EAB2A0",
        fifth: "#A384AE",
      },
      fontFamily: {
        assistant: ["Montserrat", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
