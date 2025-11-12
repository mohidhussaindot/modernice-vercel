import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineNuxtConfig({
  css: ['~/assets/tailwind.css', 'swiper/css', 'swiper/css/navigation', 'swiper/css/autoplay'],

  typescript: { shim: false },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'swiper',
        'gsap',
        'gsap/ScrollTrigger',
        'gsap/TextPlugin',
        'gsap/MotionPathPlugin',
        'gsap/DrawSVGPlugin'
      ]
    },
    define: {
      __GSAP_VERSION__: JSON.stringify('3.13.0')
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap-core': ['gsap'],
            'gsap-heavy': ['gsap/ScrollTrigger', 'gsap/MotionPathPlugin', 'gsap/DrawSVGPlugin']
          }
        }
      }
    }
  },

  build: {
    transpile: ['vue-toastification', 'swiper', 'gsap']
  },

  alias: {
    '@atoms': resolve(__dirname, 'components/atoms'),
    '@molecules': resolve(__dirname, 'components/molecules'),
    '@organisms': resolve(__dirname, 'components/organisms'),
    '@templates': resolve(__dirname, 'components/templates')
  },

  components: [
    { path: '~/components/atoms', prefix: 'atoms' },
    { path: '~/components/molecules', prefix: 'molecules' },
    { path: '~/components/organisms', prefix: 'organisms' },
    { path: '~/components/templates', prefix: 'templates' }
  ],

  compatibilityDate: '2025-01-25',

  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'German', file: 'de.json' }
    ]
  },

  plugins: [
    { src: '~/plugins/gsap.client.ts', mode: 'client' },
    { src: '~/plugins/apexcharts.client.ts', mode: 'client' },
    { src: '~/plugins/customLoading.ts', mode: 'client' },
    { src: '~/plugins/progress-bar.ts', mode: 'client' },
    { src: '~/plugins/countryDisplay.ts', mode: 'client' }
  ]
})
