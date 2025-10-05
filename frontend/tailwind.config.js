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
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out'
      },
    },
  },
  plugins: [],
}
