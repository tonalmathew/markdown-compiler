module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'dark-1': '#171717',
      'dark-2': '#121212',
      'dark-3': '#121212',
      'dark-4': '#171717',
      'light-1': '#FBF8F1',
      'light-2': '#F7ECDE',
      'light-3': '#E9DAC1',
      'light-4': '#29C7AC',
    },
    fontFamily: {
      Rubik: ['"Rubik"', 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
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
}
