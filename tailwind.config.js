/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#faf8f5',
        gold: '#b8976a',
        'gold-light': '#e8d9c0',
        'gold-dark': '#8a6d4a',
      },
    },
  },
  plugins: [],
}
