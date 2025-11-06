// composables/useGSAP.ts
import { ref, onUnmounted, onMounted, nextTick } from 'vue'
import { useNuxtApp } from 'nuxt/app'

export const useGSAP = () => {
  if (!process.client) {
    // SSR-safe stub
    return {
      gsap: null,
      ScrollTrigger: null,
      prefersReducedMotion: false,
      createAnimation: () => null,
      createScrollTrigger: () => null,
      batchAnimate: () => null,
      cleanup: () => {}
    }
  }

  const nuxtApp = useNuxtApp()
  const animations = ref<any[]>([])
  const scrollTriggers = ref<any[]>([])

  let gsap: any = nuxtApp.$gsap
  let ScrollTrigger: any = nuxtApp.$ScrollTrigger
  const prefersReducedMotion = (nuxtApp.$prefersReducedMotion as boolean) || false

  // 🔁 Ensure GSAP is injected before use
  onMounted(async () => {
    await nextTick()
    if (!gsap || !ScrollTrigger) {
      const app = useNuxtApp()
      gsap = app.$gsap
      ScrollTrigger = app.$ScrollTrigger

      if (gsap && ScrollTrigger) {
        console.info('✅ GSAP initialized successfully after mount.')
      } else {
        console.error('❌ GSAP still missing after mount. Check gsap.client.ts.')
      }
    }
  })

  // ✨ Create GSAP timeline
  const createAnimation = (callback: (gsapInstance: any) => any, skipIfReducedMotion = false) => {
    if (!gsap) return null
    if (prefersReducedMotion && skipIfReducedMotion) return null

    try {
      const timeline = callback(gsap)
      if (timeline) animations.value.push(timeline)
      return timeline
    } catch (err) {
      console.error('GSAP animation error:', err)
      return null
    }
  }

  // 🌀 ScrollTrigger creation helper
  const createScrollTrigger = (config: any, skipIfReducedMotion = false) => {
    if (!ScrollTrigger) return null
    if (prefersReducedMotion && skipIfReducedMotion) return null

    try {
      const st = ScrollTrigger.create(config)
      scrollTriggers.value.push(st)
      return st
    } catch (err) {
      console.error('ScrollTrigger creation error:', err)
      return null
    }
  }

  // 🧩 Batch animation helper
  const batchAnimate = (elements: Element[], animationConfig: any) => {
    if (!gsap) return null
    const config = { ...animationConfig }

    if (!config.hasOwnProperty('autoAlpha') && config.opacity !== undefined) {
      config.autoAlpha = config.opacity
      delete config.opacity
    }

    try {
      return gsap.to(elements, { ...config, stagger: config.stagger || 0.1 })
    } catch (err) {
      console.error('GSAP batch animation error:', err)
      return null
    }
  }

  // 🧹 Cleanup
  const cleanup = () => {
    animations.value.forEach(t => t?.kill?.())
    scrollTriggers.value.forEach(st => st?.kill?.())
    animations.value = []
    scrollTriggers.value = []
  }

  onUnmounted(cleanup)

  return {
    gsap,
    ScrollTrigger,
    prefersReducedMotion,
    createAnimation,
    createScrollTrigger,
    batchAnimate,
    cleanup
  }
}
