module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafbff",
          900: "#222222",
          "900_cc": "#1f1f1fcc",
          "900_e5": "#222222e5",
        },
        blue_gray: { "900_b2": "#1c274cb2", "900_33": "#1c274c33" },
        deep_purple: { 100: "#d9cffb" },
        amber: { A400: "#ffcb00" },
        white: {
          A700_cc: "#fcfcffcc",
          A700_cc_01: "#fcfdffcc",
          A700: "#ffffff",
        },
        black: { 900: "#000000", "900_26": "#00000026" },
        indigo: { 800: "#413b89", 900: "#1e2875" },
      },
      fontFamily: { outfit: "Outfit", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
