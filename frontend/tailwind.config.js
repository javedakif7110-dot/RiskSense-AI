/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cit: {
          blue: "#1a56db",
          darkblue: "#1e3a8a",
          lightblue: "#e0f2fe",
          bg: "#f0f4f9",
          border: "#cbd5e1"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
