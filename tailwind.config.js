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
      'white': '#F8F8F8',
      'dark': '#141414',
      'prussian-blue':'#003459',
      'cerulean':'#007EA7',
      'picton-blue': '#00A8E8',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

