/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B652',
        accent1: '#5200B6',
        accent2: '#E76800',
        black1: '#212528',
        black2: '#32313a',
        text: '#D1D5DB'
      },
    },
  },
  plugins: [],
}
