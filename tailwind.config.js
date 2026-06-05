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
      'main': '#a23ded',
      'dark__blue': '#090a0f',
      'light__blue': '#00ffcc',
      'gradient__light__blue': '#13112a',
      'bg_blue_phoenix': '#0d0f1c',
      'light_theme_bg': '#a23ded',
      'light_theme_ot': '#3b82f6',
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
