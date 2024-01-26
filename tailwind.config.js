/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary-color': "#FF4240",
          'input-color': 'rgba(19, 19, 24, 0.03)',
        },


        backgroundImage: {
          'primary_image': "url('Images/1.png')",
        }
      },
    },
    plugins: [],
  }