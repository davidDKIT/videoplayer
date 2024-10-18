/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#331E38",
        secondary: {
          DEFAULT: "#706993",
          100: "#8A80A6",
          200: "#A297BF",
        },
        accent: {
          DEFAULT: "#70A0AF", 
          100: "#88B4BF",
          200: "#A0C1B9",
        },
        neutral: {
          DEFAULT: "#F4E8C1",
          100: "#F7F1DA",
        },
        black: {
          DEFAULT: "#1C0B19",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
