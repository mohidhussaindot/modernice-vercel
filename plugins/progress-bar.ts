import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default defineNuxtPlugin(nuxtApp => {
  NProgress.configure({ minimum: 0.1, showSpinner: false })

  const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

  if (process.client) {
    nuxtApp.hook('page:start', () => {
      NProgress.start()
    })

    nuxtApp.hook('page:finish', async () => {
      await delay(300)
      NProgress.done()
    })
  }
})
