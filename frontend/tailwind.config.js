/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#FFFDE4",
        sage: "#A3B18A",
        brunswick: "#344E41",
        floral: "#FAF6E9",
        platinum: "#D9D9D9",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['Inter', "sans-serif"],
      },
    },
  },
  plugins: [],
}
