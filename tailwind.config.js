/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["New Rocker", "cursive"],
        sans: ['Maven Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
