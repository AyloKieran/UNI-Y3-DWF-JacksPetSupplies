/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{jsx,html}"],
  theme: {
    extend: {
      colors: {
        jack: '#406be2',
        jackLight: '#5f83e7'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
