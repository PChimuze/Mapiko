/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "amareloPrimaria":"#ffc300",
        "cinza":"#6c757d-cinza",
        "azul":"#0466c8",
        "verde":"#29bf12",
        "preto":"#14110f"
      },
    },
  },
  plugins: [],
}