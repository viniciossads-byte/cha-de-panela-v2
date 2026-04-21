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
      keyframes: {
        confetti: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
      },
      animation: {
        confetti: 'confetti 1.6s ease-in forwards',
      },
    },
  },
  plugins: [],
}
