/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Mono"', "Courier New", "monospace"],
    },
    extend: {
      colors: {
        beige: {
          light: "#D5D1CC",
          medium: "#E9E6D0",
          dark: "#CCC4A1",
        },
        accent: {
          red: "#ff6b6b",
          blue: "#4c7cf2",
          green: "#4caf50",
          orange: "#ff9800",
          purple: "#9c27b0",
        },
      },
    },
  },
  plugins: [],
};
