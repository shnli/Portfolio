/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


    variants: {
      extend: {
        textDecoration: ['hover'], // Enable hover variant for textDecoration
      },
    },

  


  theme: {
    extend: {},
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      LS: ['League Spartan', 'sans-serif'],
      OS: ['Open Sans', 'sans-serif'],
      Mont: ['Montserrat', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
      CG: ['Cormorant Garamond', 'sans-serif']
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'darkgreen': '#232f1f',
      'brightred': '#df4128',
      'tahiti': '#3ab7bf',
      'primary-blue':'#047fd6',
      'black':'#000000',
      'gray':'#dbdbdb',
      'green':'#375738',

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