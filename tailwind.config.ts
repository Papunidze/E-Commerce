/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#d3d3d3",
        },
        blue: {
          10: "#ecf0f1",
          20: "#d6eaf8",
        },
        beige: {
          50: "#f5f5dc",
        },
        green: {
          70: "#eaf2e3",
        },
        lavender: {
          50: "#f5f0ff",
        },
        ghost: {
          10: "#f8f8ff",
        },
        antique: {
          10: "#faebd7",
        },
      },
      screens: {
        xs: "400px",
        md: "865px",
        "2xl": "1680px",
        "4xl": "2200px",
      },
      shadow: {
        xs: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
      },
    },
  },
  plugins: [],
};
