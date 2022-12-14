/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{jsx,html}"],
  theme: {
    extend: {
      colors: {
        jack: {
          DEFAULT: '#406be2',
          light: '#5f83e7',
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
