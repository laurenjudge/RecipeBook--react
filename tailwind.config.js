/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_gray': '#425b76',
        'blue_gray_light': '#a1b5d8',
        'glass': 'rgba(255 255 255/ 0.8)'
      }
    },
  },
  plugins: [],
}

