module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#2B2727'
    },
    // backgroundColor: theme => ({
    //   ...theme('colors'),
    //   'primary': '#3490dc',
    //   'secondary': '#ffed4a',
    //   'danger': '#e3342f',
    //   'header': '#524B4B'
    // }),
    screens: {
      '2xs':{'min': '320px', 'max': '374px'},
      'xs': {'min': '375px', 'max': '424px'},
      'sm': {'min': '425px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
