/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 0 0 .1em rgba(0, 0, 0, .1)",
      },
      fontFamily: {
        custom: ["Lato", "Helvetica Neue", "Arial", "Helvetica", "sans-serif"],
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        white80: "rgba(255, 255, 255, 0.8)",
        white60: "rgba(0, 0, 0, .6);",
        "black-light": "rgba(0, 0, 0, .6)",
        "light-grey": "rgba(0, 0, 0, .05)",
        "grey-light": "rgb(201, 201, 201)",
        "about-grey": "rgb(134, 134, 134)",
        "grey-description": "rgb(121, 122, 122)",
      },
      backgroundImage: {
        "hero-pattern": "url('https://adshnk.com/src/img/right-row.svg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
