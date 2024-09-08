/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', "Courier New", "monospace"],
      },
      colors: {
        beige: {
          light: "#D5D1CC", // Light beige color
          medium: "#E9E6D0", // Medium beige color
          dark: "#EBE5CE", // Dark beige
        },
        accent: {
          red: "#ff6b6b", // Red accent color
          blue: "#4c7cf2", // Blue accent color
          green: "#4caf50", // Green accent color
          orange: "#ff9800", // Orange accent color
          purple: "#9c27b0", // Purple accent color
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-beige-light",
    "bg-beige-medium",
    "bg-beige-dark",
    "text-accent-red",
    "text-accent-blue",
    "text-accent-green",
    "text-accent-orange",
    "text-accent-purple",
    "decoration-accent-red",
    "decoration-accent-blue",
    "decoration-accent-green",
    "decoration-accent-orange",
    "decoration-accent-purple",
  ],
};
