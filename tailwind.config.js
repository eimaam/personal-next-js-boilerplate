/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '820px'},
      'md': {'min': '820px', 'max': '1510px'},
      'lg': "1510px",
    },
    extend: {
      colors: {
        'default': '#fff',
        'primary': '#61db98',
        'secondary': '#ebfff5',
        'blue': '#3B82F6',
        'dark': '#212121',
        'bgColor': 'rgb(240, 239, 239)',
        'grey': 'rgb(57, 56, 56)',
        "extras": "#788fdb"
      },
      width: {
        '15': '15%',
        '55': "55%",
        '60': "60%",
        '70': '70%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
      },
      height: {
        'half-screen': "50vh",
        '70vh': "70vh" 
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      'md': '0.5rem',
      'lg': '1rem',
      'xl': '2rem',
    }
    
  },
  // plugins: [require('tailwind-scrollbar-hide')],
}