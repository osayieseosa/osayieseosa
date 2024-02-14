/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')   
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files:["./public/*.html"]
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js : where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {opacity : '0'},
          '100%': {opacity: '1'}
        },
        display: {
          '0%': {opacity : '0'},
          '100%': {opacity: '1'}
        },
        type: {
          '0%': {width: '0px', height:'16px'},
          '95%': {width: '120px',  height:'16px'},
          '100%': {width: '120px',borderRight:'none'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s linear forwards',
        display: 'display 5s linear forwards',
        type: 'type 1s linear forwards',
      }

    },
  },
  plugins: [
    plugin(
      ({matchUtilities, theme}) => {
     matchUtilities(
       {
         'animate-delay': (value) => ({
           animationDelay: value,
         }),
       },
       {values: theme('transitionDelay')}
     )}
   ),require('taos/plugin'),require("@tailwindcss/typography"),require("daisyui")],
  daisyui:{
    themes:["light", "dark"],
  }
}