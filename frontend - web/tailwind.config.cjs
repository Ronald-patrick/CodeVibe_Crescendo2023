/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2735AD",
        secondary : "#002B51"
      },
      fontFamily: {
        main: ['Red Hat Display']
      }
    },
  },
  plugins: [],
}
