/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //  we need to add changes in tailwind config file for theme changes
  theme: {
    extend: {},
  },
  plugins: [],
}

