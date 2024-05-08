/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        oswald: ['Oswald']
      },
      colors: {
        orange:{
          400:" #ED8133",      
        },
        grey:{
          40:"#efefef",
          30:"#3f3f3f",
        },
       
      },

      // backgroundImage: {
      //   'hero-page': "url('/assets/hero_page.jpg')",
      // }
    },
    
  },
  plugins: [],
}

