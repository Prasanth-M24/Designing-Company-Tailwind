/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['Inconsolata', 'monospace'],
    }
  },
  plugins: [],
}