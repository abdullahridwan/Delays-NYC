const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      borderColor: {
        'orange-100': 'rgba(255, 165, 0, 0.1)', // Adjust the opacity as needed
        'orange-200': 'rgba(255, 165, 0, 0.2)',
        'orange-300': 'rgba(255, 165, 0, 0.3)',
        // Define more shades as needed
      },
      backgroundColor: {
        'orange-100': 'rgba(255, 165, 0, 0.1)', // Adjust the opacity as needed
        'orange-200': 'rgba(255, 165, 0, 0.2)',
        'orange-300': 'rgba(255, 165, 0, 0.3)',
        // Define more shades as needed
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}