/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#742E4F",
        red: "#D05532",
        yellow: "#8084D8",
        "dark-purple": "#444675",
        grey: "#B7B8B3",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(116,46,79,1) 8%, rgba(128,132,216,1) 51%, rgba(208,85,50,1) 95%)",

        "gradient-rainblue":
          "linear-gradient(90deg, rgba(128,132,216,1) 52%, rgba(208,85,50,1) 94%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        raleway: ["Raleway", "sans-serif"],
        lora: ["Lora", "serif"]
      },
      content: {  
        brush: "url('./assets/brushstroke1.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};