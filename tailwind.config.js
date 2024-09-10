/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', "Courier New", "monospace"],
      },
      fontSize: {
        xxxs: ".5rem",
        xxs: ".625rem",
      },
      colors: {
        beige: {
          light: "#F4F4F4", // Light beige color
          medium: "#EBE5CE", // Medium beige color
          dark: "#FFF8DF", // Dark beige
        },
        accent: {
          wood: "#A0522D", // wood accent color
          blue: "#4c7cf2", // Blue accent color
          green: "#4caf50", // Green accent color
          orange: "#ff9800", // Orange accent color
          purple: "#9c27b0", // Purple accent color
          sienna: "#A0522D",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-beige-light",
    "bg-beige-medium",
    "bg-beige-dark",
    "text-accent-wood",
    "text-accent-blue",
    "text-accent-green",
    "text-accent-orange",
    "text-accent-purple",
    "text-accent-sienna",
    "decoration-accent-wood",
    "decoration-accent-blue",
    "decoration-accent-green",
    "decoration-accent-orange",
    "decoration-accent-purple",
    "decoration-accent-sienna",
  ],
};
