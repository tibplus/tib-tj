/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F766E", // teal — нейтральный медицинский, не "рекламный"
          dark: "#0B5C56",
          light: "#E6F4F3",
        },
      },
      fontFamily: {
        sans: ["'Noto Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
