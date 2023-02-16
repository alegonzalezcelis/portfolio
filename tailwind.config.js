/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
              "./src/**/*.{html,js}",
              "./node_modules/flowbite/**/*.js"
            ],
  theme: {
    colors: {
      'neutral': '#00171F',
      'blue': '#003459',
      'cyan': '#007EA7',
      'sky': '#00A8E8',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
