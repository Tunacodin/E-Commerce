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
        primary: "#2D4356",
        secondary: "#435B66",
        third: "#A76F6F",
        fourth: "#EAB2A0",
        fifth: "#A384AE",
        sixth: "rgb(254, 215,170)",
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
