/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        paper: "#f4f1e8",
        lime: "#c7f36b",
        muted: "#a7a59b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 80px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};