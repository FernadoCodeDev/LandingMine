/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        fantasy: ['Fantasy', 'cursive'], //Fantasy font for the landing Web Call
        antonio: ['Antonio'], //Antonio font for the landing WPL
      },
    },
  },
  plugins: [],
}

