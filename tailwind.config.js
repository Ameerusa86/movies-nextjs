/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    serverActions: true,
  },
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontFamily: {
    //   Righeous: "Righteous",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        // "dark-purple": "#081A51",
        "dark-purple": "#1d2f3e",

        "dark-blue": "#003399",
        "dark-green": "#009900",
        "dark-red": "#990000",
        "dark-orange": "#FF9900",
        "dark-yellow": "#FFFF00",
        "light-white": "rgba(255, 255, 255, 0.18)",
        "light-black": "rgba(0, 0, 0, 0.18)",
        "light-red": "rgba(255, 0, 0, 0.18)",
        "light-green": "rgba(0, 255, 0, 0.18)",
        "light-blue": "rgba(0, 0, 255, 0.18)",
        "light-orange": "rgba(255, 128, 0, 0.18)",
        "light-yellow": "rgba(255, 255, 0, 0.18)",
        "button-primary": "#3d3a4e",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "400%": "400%",
        16: "4rem",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
};
