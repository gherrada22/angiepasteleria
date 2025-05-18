/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F7',
          100: '#FFEBEF',
          200: '#FFCCD5',
          300: '#FFA3B5',
          400: '#FF7A96',
          500: '#FF4D76', // Primary 
          600: '#E93D66',
          700: '#D32E57',
          800: '#BA2147',
          900: '#A11A3A',
        },
        secondary: {
          50: '#F8F7FF',
          100: '#F0EEFF',
          200: '#DCD8FF',
          300: '#C2BAFF',
          400: '#A799FF',
          500: '#8B77FF', // Secondary
          600: '#7A66E9',
          700: '#6955D3',
          800: '#5844BA',
          900: '#4A39A1',
        },
        accent: {
          50: '#FFFAF0',
          100: '#FFF5E0',
          200: '#FFE7B3',
          300: '#FFD580',
          400: '#FFC14D',
          500: '#FFAC1A', // Accent
          600: '#E99B15',
          700: '#D38A12',
          800: '#BA780E',
          900: '#A1670C',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF9F0',
          200: '#FFF2DC',
          300: '#FFEBC7',
          400: '#FFE4B3',
          500: '#FFDC9E',
          600: '#F5D08E',
          700: '#E6C27E',
          800: '#D7B46E',
          900: '#C8A65E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};