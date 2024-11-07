/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro Display', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'white': '0 0 30px rgba(255, 255, 255, 0.9)',
        'white-intense': '0 0 30px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.7), 0 0 70px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}