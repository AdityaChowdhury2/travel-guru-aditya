/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('https://i.ibb.co/6NR6pJY/Rectangle-1.png')"
      },
      screens: {
        lg: '1440px',
      },
      fontFamily: {
        'bebas-neue': "Bebas Neue, sans-serif",
        'montserrat': "Montserrat, sans-serif",
      },
      container: {
        center: true,
        screens: {
          lg: '1440px',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}