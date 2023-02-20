/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: 'Raleway_400Regular',
        semibold: 'Raleway_600SemiBold',
        bold: 'Raleway_700Bold',
      }
    },
  },
  plugins: [],
}
