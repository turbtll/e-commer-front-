/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        "marian-blue":"#314899",
        "raising-black" :"#231F20",
        "silveer":"#C2C2C2",
        "dim-gray" :"#737373",
        "floral-white" :"#f8f4ec",
        "white-smock":"#F3F3F3",
        "sea-salt":"#FAFAFA",
        "periwinkle":"#C7DBFF",
        "violet-blue":"#4243B1",
        "violet-blue-2":"#3738A6",
        "aquamarine":"#B2FCE4",
        "red":"#DF1B41",
        "cream":"#e8e0d0"

      }
    },
  },
  plugins: [],
}
