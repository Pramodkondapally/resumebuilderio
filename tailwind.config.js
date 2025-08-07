const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatUp: "floatUp 0.5s ease-out forwards", // <-- 'forwards' is key
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
