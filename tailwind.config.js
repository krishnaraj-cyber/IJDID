/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-dark-plum":"#32012f", //dark-plum
        "primary-brown":"#524c42",  //brown
        "primary-orange":"#f97300", //orange
        "primary-white":"#e2dfe086",
        // "primary-white":"#e2dfd0",
      }
    },
  },
  plugins: [],
}

