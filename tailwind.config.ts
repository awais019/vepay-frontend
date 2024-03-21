/** @type {import('tailwindcss').Config} */

import theme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...theme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/abstract-pattern.png')",
        gradient1:
          "linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);",
      },
      background: {},
      container: {
        center: true,
        padding: "1rem",
      },
    },
    colors: {
      green: {
        "50": "#9EFF00",
        "60": "#B1FF33",
        "70": "#C5FF66",
        "80": "#D8FF99",
        "90": "#ECFFCC",
        "95": "#F5FFE5",
        "97": "#F9FFF0",
        "99": "#FDFFFA",
      },
      grey: {
        "10": "#191919",
        "12": "#242424",
        "15": "#262626",
        "20": "#333333",
        "30": "#4C4C4D",
        "35": "#59595A",
        "40": "#656567",
        "60": "#98989A",
        "90": "#E6E6E6",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
