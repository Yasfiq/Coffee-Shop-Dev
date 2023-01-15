/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik' : 'Rubik',
        'poppins' : 'Poppins'
      },
      colors: {
        'primary' : '#FFBA33',
        'secondary' : '#6A4029'
      }
    },
  },
  plugins: [],
}
