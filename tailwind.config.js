/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


     colors: {


      transparent: 'transparent',

      
      'gray': {
        50: '#FFFFFF',
        100:'#EDF1F4',
        500: '#B3B8BE',
        700: '#3D4450',
      },

      'orange':{

        100: '#FDA177'
      },

     },





    extend: {},
  },
  plugins: [],
}

