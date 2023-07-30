/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        sans: ["Source Sans Pro", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "home-artist": "0 1px 10px 0 rgba(0,0,0,0.10)",
        play: "0 2px 8px 0 #00333F",
        "dashboard-items":
          "0 1px 3px 0 rgba(0,0,0,0.15), 0 3px 6px 0 rgba(75, 81, 91, 0.15) ",
        users: "0 1px 3px 0 rgba(0,0,0,0.15), 0 3px 6px 0 rgba(75,81,91,0.15)",
      },
    },
  },
  plugins: [],
};
