/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ng: {
          green: '#009e4f', // Verde vibrante da logo
          dark: '#111111',  // Preto quase absoluto
          black: '#0a0a0a', // Fundo profundo
          gray: '#f3f3f3',  // Off-white para sessões
        }
      },
      fontFamily: {
        // Fontes impactantes como nas artes
        sans: ['"Oswald"', 'sans-serif'], 
        body: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}