/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#EBFFE8",
      },
    },
    screens: {
      mobile: { min: "320px", max: "767px" },
      tablet: { min: "768px", max: "1534px" },
      note: { max: "1536px" },
    },
  },
  plugins: [],
};
