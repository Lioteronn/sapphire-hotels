/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        libre: ['Libre Baskerville', 'serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}