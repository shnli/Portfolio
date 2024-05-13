/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

    variants: {
      extend: {
        textDecoration: ['hover'], 
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
      CG: ['Cormorant Garamond', 'sans-serif'],
      
      merriweather: ['Merriweather', 'serif'],
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
      
      'light_coral': '#E98F8A',
      'indian_red': '#D86357',
      'penn_red': '#9F120C',
      'forest_green': '#1C3A20',
      'sage': '#9EA28B',
      'off_white': '#FFFEF9',
    },


    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-1deg)' },
        '50%': { transform: 'rotate(1deg)' },
      }
    },

    animation: {
      'spin-slow': 'spin 3s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
    },

  },
  plugins: [],

  
  
}
