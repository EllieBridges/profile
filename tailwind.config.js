/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      display: ["Sansita_Swashed", "cursive"],
      serif: ["Playfair-Display", "serif"],
      inter: ["inter", "sans"],
    },
    extend: {
      colors: {
        "hot-pink": "#f6727e",
        orange: "#f6926d",
        pink: "#e290ba",
        "light-pink": "#f3b5bd",
        blue: "#839dd7",
        "light-blue": "#adcde4",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
