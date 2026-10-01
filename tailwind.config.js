/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0A0A0B',
          900: '#121214',
          800: '#1A1A1D',
          700: '#262629',
          600: '#3A3A3E',
          500: '#5A5A5F',
        },
        champagne: {
          50: '#FFFBF5',
          100: '#FDF7EF',
          200: '#F5E8D5',
          300: '#E8D5B7',
          400: '#D4B896',
          500: '#C9A96A',
          600: '#B8956A',
        },
        ivory: {
          50: '#FBFAF8',
          100: '#F5F3F0',
          200: '#E8E6E2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'wide-alt': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
