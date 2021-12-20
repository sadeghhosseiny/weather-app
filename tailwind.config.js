module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'card-screen1': { 'max': '1410px' },
        'card-screen2': { 'max': '715px' },
        'text-screen1': { 'min': '1330px' },
        'text-screen2': { 'min': '1000px' },
        'footer-screen': { 'max': '1000px' },
        'xlg': { 'min': '1100px' },
        'header-screen': { 'max': '850px' },
      },
      height: {
        '50': '50vw',
        '351': '351px'
      },
      width: {
        '700': '700px'
      },
      minWidth: {
        '700': '700px'
      }
    },
  },
  plugins: [],
}