// i18n.config.ts
import defineI18nConfig from '@nuxtjs/i18n'

// @ts-expect-error Nuxt typing bug, runtime works with one argument
export default defineI18nConfig(() => ({
  defaultLocale: 'en',
  strategy: 'prefix',
  lazy: true,
  langDir: 'locales/',
  legacy: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true,
    fallbackLocale: 'en',
    redirectOn: 'root',
    cookieExpiration: 365,
    cookieSecure: process.env.NODE_ENV === 'production'
  },
  locales: [
    { code: 'en', name: 'English', file: 'en.json', iso: 'en-US' },
    { code: 'de', name: 'German', file: 'de.json', iso: 'de-DE' },
    { code: 'ar', name: 'Arabic', file: 'ar.json', iso: 'ar-SA' },
    { code: 'fr', name: 'French', file: 'fr.json' },
    { code: 'es', name: 'Spanish', file: 'es-ES.json' }
  ]
}))
