/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{jsx,html}"],
  theme: {
    extend: {
      colors: {
        jack: '#1c49c2',
        jackLight: '#406be2'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
