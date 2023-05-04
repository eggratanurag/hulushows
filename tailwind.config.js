/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#a2b69a",
        darkGreen: "#8cb67c",
        pink: "#E2C2B9",
        darkPink: "#E2C2B9",
        background1: "#100f0f",
        background2: "rgb(241, 241, 241, 0.1)",
        background3: "rgb(241, 241, 241, 0.05)",
        background4: "rgb(241, 241, 241, 0.2)",
        highlight: "#697C37",
        highlight2: "#b6b681",
        lime: "#D2D86E",
        offGreen: "#95956e"
      },
      fontFamily: {
        "poppins": ['Poppins']
       
      },
      screens: {
       
         "xs": '450px',
      // ...defautTheme.screens,
     
      }
    },
  },
  plugins: [],
}