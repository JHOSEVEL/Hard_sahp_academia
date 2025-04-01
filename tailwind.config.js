/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gym-orange': '#FF5722',
        'gym-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
};