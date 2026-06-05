/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'min': '1px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '991px' },
      'lg': { 'min': '992px', 'max': '1239px' },
      'xl': { 'min': '1240px' },
    },
    colors: {
      'main': '#dbad69',
      'dark__blue': '#060031',
      'light__blue': '#7b9e57',
      'gradient__light__blue': '#080042',
      'bg_blue_phoenix': '#0b005d',
      'light_theme_bg': '#dbad69',
      'light_theme_ot': '#00479f',
      'blue': '#1a56db',
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
      'gray': {
        100: '#f3f4f6',
        200: '#e5e7eb',
        400: '#9ca3af',
        600: '#4b5563',
        800: '#1f2937',
        900: '#111827',
      },
    },
  },
  plugins: [],
}
