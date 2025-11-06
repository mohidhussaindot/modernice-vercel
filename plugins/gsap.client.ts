// plugins/gsap.client.ts
import { defineNuxtPlugin, useRouter } from 'nuxt/app'
import { nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) {
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('prefersReducedMotion', false)
    return
  }

  try {
    // ✅ Register all GSAP plugins once
    gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

    // ✅ Global GSAP defaults & performance optimizations
    gsap.config({
      nullTargetWarn: false,
      force3D: true,
      autoSleep: 60
    })

    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    })

    // ✅ Route change refresh
    const router = useRouter()
    let refreshTimeout: ReturnType<typeof setTimeout> | null = null

    const debouncedRefresh = () => {
      if (refreshTimeout) clearTimeout(refreshTimeout)
      refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
        refreshTimeout = null
      }, 150)
    }

    router.afterEach(() => {
      nextTick(() => {
        debouncedRefresh()
      })
    })

    // ✅ Inject globally
    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
    nuxtApp.provide('TextPlugin', TextPlugin)
    nuxtApp.provide('MotionPathPlugin', MotionPathPlugin)
    nuxtApp.provide('DrawSVGPlugin', DrawSVGPlugin)
    nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)

    console.info('✅ GSAP successfully initialized (client)')
  } catch (error) {
    console.error('❌ GSAP initialization failed:', error)
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('prefersReducedMotion', false)
  }
})
