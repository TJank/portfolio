/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': {
          100: '#6D0101',
          200: '#FD4E4F',
          300: '#AB2222',
        },
        'secondary': {
          100: '#1B0000',
          200: '#B68080',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}