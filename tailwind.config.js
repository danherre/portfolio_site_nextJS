/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        russian_violet: {
          DEFAULT: '#0b0033',
          100: '#02000a',
          200: '#040014',
          300: '#07001f',
          400: '#090029',
          500: '#0b0033',
          600: '#1f008f',
          700: '#3300eb',
          800: '#6f47ff',
          900: '#b7a3ff',
        },
        light_yellow: {
          DEFAULT: '#fffbdb',
          100: '#5f5400',
          200: '#bea800',
          300: '#ffe51e',
          400: '#fff07c',
          500: '#fffbdb',
          600: '#fffce2',
          700: '#fffdea',
          800: '#fffdf1',
          900: '#fffef8',
        },
        burgundy: {
          DEFAULT: '#93032e',
          100: '#1d0109',
          200: '#3a0112',
          300: '#57021b',
          400: '#740224',
          500: '#93032e',
          600: '#d80444',
          700: '#fb2a69',
          800: '#fc719b',
          900: '#feb8cd',
        },
        rosy_brown: {
          DEFAULT: '#cc978e',
          100: '#301916',
          200: '#60332b',
          300: '#904c41',
          400: '#b76c5f',
          500: '#cc978e',
          600: '#d7aca5',
          700: '#e1c1bb',
          800: '#ebd6d2',
          900: '#f5eae8',
        },
        black_olive: {
          DEFAULT: '#30362f',
          100: '#0a0b09',
          200: '#131613',
          300: '#1d211c',
          400: '#272c26',
          500: '#30362f',
          600: '#576255',
          700: '#7f8d7c',
          800: '#a9b3a8',
          900: '#d4d9d3',
        },
      },
    },
  },
  plugins: [],
};
