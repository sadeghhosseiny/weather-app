module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'card-screen': { 'max': '1410px' },
        'text-screen1': { 'min': '1330px' },
        'text-screen2': { 'min': '1000px' },
        'footer-screen': { 'max': '1000px' },
        'xlg': { 'min': '1100px' },
      },
      height: {
        '50': '50vw'
      }
    },
  },
  plugins: [],
}