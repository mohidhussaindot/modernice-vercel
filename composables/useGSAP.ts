// composables/useGSAP.ts
import { ref, onUnmounted, onMounted, nextTick } from 'vue'
import { useNuxtApp } from 'nuxt/app'

// --- Core composable ---
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

// --- Common animation presets ---
export const useGSAPAnimations = () => {
  const { gsap, createAnimation, createScrollTrigger, prefersReducedMotion } = useGSAP()

  const applyReducedMotion = (element: Element | Element[], finalState: Record<string, any>) => {
    if (!gsap) return
    const applyStyle = (el: HTMLElement) => {
      Object.entries(finalState).forEach(([prop, val]) =>
        el.style.setProperty(prop === 'autoAlpha' ? 'opacity' : prop, String(val))
      )
    }

    Array.isArray(element)
      ? element.forEach(el => el && applyStyle(el as HTMLElement))
      : element && applyStyle(element as HTMLElement)
  }

  const fadeIn = (element: Element | Element[], options: any = {}) =>
    prefersReducedMotion
      ? (applyReducedMotion(element, { autoAlpha: 1, y: 0 }), null)
      : createAnimation(() =>
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', ...options }
          )
        )

  const slideInLeft = (element: Element | Element[], options: any = {}) =>
    prefersReducedMotion
      ? (applyReducedMotion(element, { autoAlpha: 1, x: 0 }), null)
      : createAnimation(() =>
          gsap.fromTo(
            element,
            { x: -100, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out', ...options }
          )
        )

  const slideInRight = (element: Element | Element[], options: any = {}) =>
    prefersReducedMotion
      ? (applyReducedMotion(element, { autoAlpha: 1, x: 0 }), null)
      : createAnimation(() =>
          gsap.fromTo(
            element,
            { x: 100, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out', ...options }
          )
        )

  const scaleIn = (element: Element | Element[], options: any = {}) =>
    prefersReducedMotion
      ? (applyReducedMotion(element, { autoAlpha: 1, scale: 1 }), null)
      : createAnimation(() =>
          gsap.fromTo(
            element,
            { scale: 0, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.7)', ...options }
          )
        )

  const onScroll = (element: Element | Element[], animation: any, triggerOptions: any = {}) => {
    if (prefersReducedMotion) {
      const finalState = { ...(animation.from || {}), ...(animation.to || {}) }
      applyReducedMotion(element, finalState)
      return null
    }

    const fromState = { ...(animation.from || {}) }
    const toState = { ...(animation.to || {}) }

    if (fromState.opacity !== undefined && !fromState.autoAlpha) {
      fromState.autoAlpha = fromState.opacity
      delete fromState.opacity
    }
    if (toState.opacity !== undefined && !toState.autoAlpha) {
      toState.autoAlpha = toState.opacity
      delete toState.opacity
    }

    return createScrollTrigger({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
      animation: gsap.fromTo(element, fromState, toState)
    })
  }

  const parallax = (element: Element | Element[], speed: number = 0.5) =>
    prefersReducedMotion
      ? null
      : createScrollTrigger({
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          animation: gsap.to(element, { y: -100 * speed, ease: 'none' })
        })

  return { fadeIn, slideInLeft, slideInRight, scaleIn, onScroll, parallax }
}
