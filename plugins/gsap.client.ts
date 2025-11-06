// plugins/gsap.client.ts
import { defineNuxtPlugin } from 'nuxt/app'
import { nextTick } from 'vue'
import { useRouter } from 'nuxt/app'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (!process.client) return

  // Dynamic imports to avoid SSR issues
  const [
    { default: gsap },
    { default: ScrollTrigger },
    { default: TextPlugin },
    { default: MotionPathPlugin },
    { default: DrawSVGPlugin }
  ] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/TextPlugin'),
    import('gsap/MotionPathPlugin'),
    import('gsap/DrawSVGPlugin')
  ])

  // Register plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

  // GSAP config
  gsap.config({ nullTargetWarn: false })
  gsap.defaults({ ease: 'power2.out', duration: 0.6 })

  // ScrollTrigger global config
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
  })

  // Refresh ScrollTrigger after route changes
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      ScrollTrigger.refresh()
    })
  })

  // ✅ Return plugin injections so Nuxt provides them globally
  return {
    provide: {
      gsap,
      ScrollTrigger,
      TextPlugin,
      MotionPathPlugin,
      DrawSVGPlugin
    }
  }
})
