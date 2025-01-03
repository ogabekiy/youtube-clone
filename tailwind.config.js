/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#0F0F0F",
      },
    },
  },
  plugins: [],
}

