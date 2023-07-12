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
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
