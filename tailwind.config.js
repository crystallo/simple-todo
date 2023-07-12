/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        moonstone: "#01A7C2",
        palette11: "#79E0EE",
        palette12: "#D0F5BE",
        palette13: "#FBFFDC",
      },
    },
  },
  plugins: [],
};
