module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      "dark-1": "#261C2C",
      "dark-2": "#3E2C41",
      "dark-3": "#5C527F",
      "dark-4": "#6E85B2",
      "light-1": "#FBF8F1",
      "light-2": "#F7ECDE",
      "light-3": "#E9DAC1",
      "light-4": "#54BAB9",
    },
    fontFamily: {
      Rubik: ['"Rubik"', "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
