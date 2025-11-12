import { watchEffect } from 'vue'

export default defineNuxtPlugin(nuxtApp => {
  if (!process.client) return

  const i18n = nuxtApp.$i18n
  const storedLanguage = localStorage.getItem('user-language')

  if (storedLanguage && i18n.availableLocales.includes(storedLanguage)) {
    i18n.setLocale(storedLanguage)
  }

  watchEffect(() => {
    localStorage.setItem('user-language', i18n.locale.value)
  })
})
