import { ref } from 'vue'

const isLoading = ref(false)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('loadingBar', {
    start() {
      isLoading.value = true
    },
    stop() {
      isLoading.value = false
    },
    isLoading
  })
})
