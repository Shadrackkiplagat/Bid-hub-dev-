/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(255, 255, 255, 1)",
        dashboard: "#e6e7e8",
        users: "e6e7e8",
        button: "rgba(20, 120, 163, 1)",
        underline: "rgba(0, 0, 0, 0.315)",
      },
    },
  },
  plugins: [],
};
