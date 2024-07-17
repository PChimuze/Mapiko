/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          light: '#F3C300',  // Amarelo claro
          DEFAULT: '#F7E300', // Amarelo padrão
          dark: '#F7C600',   // Amarelo escuro
        },
        black: '#000000',    // Preto
        white: '#FFFFFF',    // Branco
        gray: {
          light: '#D3D3D3',  // Cinza claro
          DEFAULT: '#A9A9A9', // Cinza padrão
          dark: '#696969',   // Cinza escuro
        }
      },
    },
  },
  plugins: [],
}