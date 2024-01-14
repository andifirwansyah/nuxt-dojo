/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
  ],
  theme: {
    // fontFamily: {

    // },
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: '#FF6F1E',
        'primary-dark': '#e65301',
        'header-primary': '#b02a00',
        'header-secondary': '#A12700',
        shadowcs: 'rgba(82, 63, 105, 0.15)',
        background: '#fcfcfc',
      },
    },
  },
  plugins: [],
}

