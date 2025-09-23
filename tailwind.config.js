module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif']
      },
      colors: {
        primary: '#5C18A3',
        accent: '#85E642',
        'base-dark': '#111827',
        'base-light': '#EAEBF4',
        'text-dark': '#1F2937',
        yellowish: 'var(--yellowish)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui')]
}
