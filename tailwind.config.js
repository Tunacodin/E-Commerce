/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      colors: {
        primary: "#6527BE",
        secondary: "#FF9671",
        third: "#E57B89",
        fourth: "#A166F9",
        fifth: "#D14D72",
        sixth: "#4E31AA",
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
