/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary-color': "#FF4240",
          'input-color': 'rgba(19, 19, 24, 0.03)',
          'BG-main': 'rgba(19, 19, 24, 0.03)',
          'footer-color': '#131318',
        }
      },
    },
    plugins: [],
  }