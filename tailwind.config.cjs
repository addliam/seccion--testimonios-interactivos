/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bg: "#242629",
        greyLigth: "#cfd6e3",
        blue: "#8ff2ff",
        greyDark: "#303c51",
        white: "#ffffff",
        neutral: "#62728f"
      },
      fontFamily: {
        poppins: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};