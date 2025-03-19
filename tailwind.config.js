/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a82f6",
        secondary: "#1e293b",
        warning: "#e9b307",
        gray1: "#0f172a",
        gray2: "#324154",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1920px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
