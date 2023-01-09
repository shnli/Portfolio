/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      LS: ['League Spartan', 'sans-serif']
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'darkgreen': '#232f1f',
      'brightred': '#df4128',
      'tahiti': '#3ab7bf',
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'darkgreen': '#232f1f',
//       'midnight': '#121063',
//       'metal': '#565584',
//       'tahiti': '#3ab7bf',
//       'silver': '#ecebff',
//       'bubble-gum': '#ff77e9',
//       'bermuda': '#78dcca',
//     },
//   },
// }