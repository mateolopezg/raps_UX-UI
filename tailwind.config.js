/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ultramar': '#0A2149'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

