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
