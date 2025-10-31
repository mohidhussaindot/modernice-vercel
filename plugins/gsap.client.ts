// plugins/gsap.client.ts
import { defineNuxtPlugin, useRouter } from 'nuxt/app'
import { nextTick } from 'vue'

export default defineNuxtPlugin(async nuxtApp => {
  if (!process.client) {
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('TextPlugin', null)
    nuxtApp.provide('MotionPathPlugin', null)
    nuxtApp.provide('DrawSVGPlugin', null)
    nuxtApp.provide('prefersReducedMotion', false)
    return
  }

  try {
    const [{ gsap }, { ScrollTrigger }, { TextPlugin }, { MotionPathPlugin }, { DrawSVGPlugin }] =
      await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/TextPlugin'),
        import('gsap/MotionPathPlugin'),
        import('gsap/DrawSVGPlugin')
      ])

    // Register all plugins centrally
    gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

    // Production GSAP performance optimizations
    gsap.config({
      nullTargetWarn: false,
      force3D: true, // Enable hardware acceleration
      autoSleep: 60 // Auto-kill inactive animations after 60 seconds
    })

    // Optimize for better performance
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ScrollTrigger global settings for better performance
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    })

    // Debounced ScrollTrigger refresh to prevent multiple calls
    let refreshTimeout: NodeJS.Timeout | null = null
    const debouncedRefresh = () => {
      if (refreshTimeout) clearTimeout(refreshTimeout)
      refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
        refreshTimeout = null
      }, 150)
    }

    // Batch refresh ScrollTrigger on route changes
    const router = useRouter()
    router.afterEach(() => {
      nextTick(() => {
        debouncedRefresh()
      })
    })

    // ✅ Proper global injection with error handling
    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
    nuxtApp.provide('TextPlugin', TextPlugin)
    nuxtApp.provide('MotionPathPlugin', MotionPathPlugin)
    nuxtApp.provide('DrawSVGPlugin', DrawSVGPlugin)
    nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)
  } catch (error) {
    console.error('GSAP initialization failed:', error)
    // Return empty provides to prevent crashes
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('TextPlugin', null)
    nuxtApp.provide('MotionPathPlugin', null)
    nuxtApp.provide('DrawSVGPlugin', null)
    nuxtApp.provide('prefersReducedMotion', false)
  }
})
