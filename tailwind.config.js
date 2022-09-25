/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.lime,
        secondary: colors.zinc
      }
    },
  },
  plugins: []
}
