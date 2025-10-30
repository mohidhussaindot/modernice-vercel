// plugins/gsap.client.ts
import { defineNuxtPlugin, useRouter, type NuxtApp } from 'nuxt/app'
import { nextTick } from 'vue'
export default defineNuxtPlugin(async (nuxtApp: NuxtApp) => {
  if (!process.client) return

  const [{ gsap }, { ScrollTrigger }, { TextPlugin }, { MotionPathPlugin }, { DrawSVGPlugin }] =
    await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/TextPlugin'),
      import('gsap/MotionPathPlugin'),
      import('gsap/DrawSVGPlugin')
    ])

  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

  gsap.config({ nullTargetWarn: false })
  gsap.defaults({ ease: 'power2.out', duration: 0.6 })

  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
  })

  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => ScrollTrigger.refresh())
  })

  // ✅ Proper global injection
  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
  nuxtApp.provide('TextPlugin', TextPlugin)
  nuxtApp.provide('MotionPathPlugin', MotionPathPlugin)
  nuxtApp.provide('DrawSVGPlugin', DrawSVGPlugin)
})
