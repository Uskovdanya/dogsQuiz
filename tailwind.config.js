/** @type {import('tailwindcss').Config} */
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico"],
        Sniglet: ["Sniglet"],
      },
      gridTemplateColumns: {
        section1: "repeat( 2, minmax(0, 250px))",
        section2: "repeat( 2, minmax(0, 200px))",
        section3: "repeat( 2, minmax(0, 135px))",
        progress: "auto auto",
      },
      gridTemplateRows: {
        section1: "repeat(2,minmax(0, 150px))",
        section2: "repeat(2,minmax(0, 130px))",
        section5: "repeat(2,minmax(0, 110px))",
      },

      container: {
        center: true,
        padding: {},
        screens: {
          xl: "1440px",
        },
      },

      transitionTimingFunction: {},
      backgroundImage: {
        latestNews: "lightgray 50% / cover no-repeat, #C4C4C4",
        bgImage: "url('/bg-layer.png')",
        gradientBg:
          "background: linear-gradient(210deg, rgba(255, 255, 255, 0.90) 50.99%, rgba(255, 255, 255, 0.00) 107.27%)",
        hotTopicGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.25%, rgba(0, 0, 0, 0.65) 100%);",
      },
      boxShadow: {
        border: "0px 6px 15px 0px rgba(0, 0, 0, 0.40)",
      },

      colors: {
        h1Color: "#1C361C",
        buttonHover: "var(--success---hover, #398639)",
        buttonActive: "var(--success---pressed, #266626)",
        whereIsText: " var(--dark-green, #1C361C)",
        arrowColor: "var(--success, #3CA33C)",
        black: "var(--image-grayscale, #000)",
        finishScreen: "var(--mid-green, #CDE4CD)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [tailwindcssDebugScreens],
};
