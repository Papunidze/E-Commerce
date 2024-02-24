/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f9a8d4",
          DEFAULT: "#e35478",
          dark: "#db4067",
        },
        secondary: {
          light: "#F5F5F5",
          DEFAULT: "#FAFAFA",
          dark: "#ededed",
        },
        accent: {
          light: "#222222",
          DEFAULT: "#001122",
        },
      },
      backgroundImage: {
        "pink-white": "linear-gradient(to bottom, #f660ff, #fe8aad)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        dancing: ['"Dancing Script"', "cursive"],
        caveat: ['"Caveat"', "cursive"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      xl: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      "2xl": "0px 0px 25px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-in",
      fadeout: "fadeout 0.5s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeout: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
