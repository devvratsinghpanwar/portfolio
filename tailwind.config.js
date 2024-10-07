/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        italianno: ['Italianno', 'cursive'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hrb1.jpg')",
        "about-pattern": "url('/src/assets/about1.jpg')",
        "experience-pattern": "url('/src/assets/night/night.jpg')"
      },
    },
  },
  plugins: [],
};