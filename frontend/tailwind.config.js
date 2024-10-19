/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html" ,
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F7F9FB', // or any name you prefer
      },
    },
  },
  plugins: [],
}

