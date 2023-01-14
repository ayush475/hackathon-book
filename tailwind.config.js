/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
   darkMode: 'class',
  theme: {
    screens: {
      'xs':'440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
     screens:{
      'xxs':'200px'
     }
    },
  },
  plugins: [
    require('flowbite/plugin'),
]
}
