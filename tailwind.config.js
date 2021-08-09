module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: [
    './app/**/*.html.erb',
    './app/**/*.erb',
    './app/**/*.html.haml',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/javascript/**/*.vue',
    './app/javascript/**/*.jsx'
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 1px 1px rgba(0, 0, 0, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
