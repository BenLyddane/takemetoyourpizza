/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "pizza-yellow": "#FFA600",
      },
    },
  },
  plugins: [],
};
