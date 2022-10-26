/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{jsx,html}"],
  theme: {
    extend: {
      colors: {
        jack: {
          DEFAULT: '#406be2',
          light: '#5f83e7'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
