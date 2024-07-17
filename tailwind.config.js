/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'rojo': '#D31E2F',
        'amarillo': '#FFDD33',
        'negro': '#19171F',
        'blanco': '#FFFFFF', 
        'blanco-bg': '#F9F9F9',
      },
      fontFamily: {
        'roboto': ["Montserrat", "sans"],
      },


      animation: {
        'iconos': 'iconos 4s linear infinite',
        'iconos2': 'iconos2 4s linear infinite',

        'marquee': 'marquee2 60s linear infinite',


      },

      keyframes: {
        iconos: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '95%': { transform: 'translateY(-30px)' },
          '45%': { transform: 'translateY(180px)' },
          '50%': { transform: 'translateY(200px)' },  
        },

        iconos2: {
          '50%': { transform: 'translateY(-50px)' },
          '45%': { transform: 'translateY(-30px)' },
          '95%': { transform: 'translateY(180px)' },
          '0%, 100%': { transform: 'translateY(200px)' },  
        },


        marquee2: {
          '0%, 100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-30%)' },  
        },


      },

    },
  },
  plugins: [],
}

