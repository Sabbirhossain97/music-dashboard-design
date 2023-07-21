/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        sans: ["Source Sans Pro", "sans-serif"],
      },
      boxShadow: {
        "home-artist": "0 1px 10px 0 rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
