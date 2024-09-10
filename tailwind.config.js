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
          charcoal: "#333333", // Blue accent color
          green: "#A7C080", // Green accent color
          orange: "#D2691E", // Orange accent color
          rusticBlue: "#5C6BC0",
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
    "text-accent-charcoal",
    "text-accent-green",
    "text-accent-orange",
    "text-accent-rusticBlue",
    "decoration-accent-wood",
    "decoration-accent-charcoal",
    "decoration-accent-green",
    "decoration-accent-orange",
    "decoration-accent-rusticBlue",
  ],
};
