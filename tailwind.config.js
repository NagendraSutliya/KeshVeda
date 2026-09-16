/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      colors: {
        herbal: {
          50: '#f2f7f4',
          100: '#e1ede6',
          200: '#c5dcd0',
          300: '#9cc2af',
          400: '#6ea289',
          500: '#4c866c',
          600: '#396b54',
          700: '#2e5644',
          800: '#274638',
          900: '#1b3b2b',
          950: '#0d2218',
        },
        ayurGold: {
          50: '#fbf8f1',
          100: '#f4ebd9',
          200: '#e8d4b3',
          300: '#dab684',
          400: '#cc9759',
          500: '#d4a373',
          600: '#b88652',
          700: '#946640',
          800: '#785239',
          900: '#634431',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f4ede2',
          300: '#eae0cf',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
