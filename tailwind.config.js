/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'midnight': '#00171F',
      'dark': '#003459',
      'ocean': '#007EA7',
      'sky': '#00A8E8',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

