/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-animatecss')],
};



