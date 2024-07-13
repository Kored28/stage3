/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gradientColorStops: {
        main:{
          100: 'linear-gradient(180deg, #A4179F 0%, #3E093C 61.5%)'
        },
      },

      width: {
        45: '185px'
      },

      fontFamily: {
        poppins : '"Poppins", sans-serif',
        josefin: '"Josefin Sans", sans-serif',
        poller: '"Poller One", serif'
      }
    },
  },
  variants: {
    fill: ['hover' , 'focus']
  },
  plugins: [],
}

