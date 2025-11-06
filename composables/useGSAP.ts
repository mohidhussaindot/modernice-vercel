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

  // Get device performance level from plugin
  const devicePerformanceLevel =
    (nuxtApp.$devicePerformanceLevel as 'high' | 'medium' | 'low') || 'high'
  const shouldLoadHeavyAnimations = (nuxtApp.$shouldLoadHeavyAnimations as boolean) ?? true
  const isLowPerformanceDevice = (nuxtApp.$isLowPerformanceDevice as boolean) || false

  // 🔁 Retry if GSAP not yet injected (only for high/medium performance)
  if (!gsap && devicePerformanceLevel !== 'low') {
    console.warn('⚠️ GSAP not yet available, waiting for plugin injection...')
    onMounted(() => {
      const app = useNuxtApp()
      gsap = app.$gsap
      ScrollTrigger = app.$ScrollTrigger
      if (gsap) {
        console.info('✅ GSAP initialized successfully after mount.')
      } else {
        console.error('❌ GSAP still missing after mount. Check gsap.client.ts.')
      }
    }
  })

  // ✨ Create GSAP timeline
  const createAnimation = (callback: (gsapInstance: any) => any, skipIfReducedMotion = false) => {
    // Skip animations entirely on low performance devices
    if (devicePerformanceLevel === 'low' || !gsap) return null
    if (prefersReducedMotion && skipIfReducedMotion) return null

    try {
      const timeline = callback(gsap)
      if (timeline) {
        animations.value.push(timeline)

        // Optimize timeline for medium performance devices
        if (devicePerformanceLevel === 'medium' && timeline.duration) {
          timeline.duration(timeline.duration() * 0.7) // Shorter duration
        }
      }
      return timeline
    } catch (err) {
      console.error('GSAP animation error:', err)
      return null
    }
  }

  // 🌀 ScrollTrigger creation helper
  const createScrollTrigger = (config: any, skipIfReducedMotion = false) => {
    // Skip ScrollTrigger on low performance devices or if not available
    if (!shouldLoadHeavyAnimations || devicePerformanceLevel === 'low') {
      return null
    }
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
    // Skip batch animations on low performance devices
    if (devicePerformanceLevel === 'low' || !gsap) return null

    const config = { ...animationConfig }

    if (!config.hasOwnProperty('autoAlpha') && config.opacity !== undefined) {
      config.autoAlpha = config.opacity
      delete config.opacity
    }

    // Reduce stagger on medium performance devices
    if (devicePerformanceLevel === 'medium' && config.stagger) {
      config.stagger = config.stagger * 0.5 // Faster stagger
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
    devicePerformanceLevel,
    shouldLoadHeavyAnimations,
    isLowPerformanceDevice,
    createAnimation,
    createScrollTrigger,
    batchAnimate,
    cleanup
  }
}

// --- Common animation presets ---
export const useGSAPAnimations = () => {
  const {
    gsap,
    createAnimation,
    createScrollTrigger,
    prefersReducedMotion,
    devicePerformanceLevel
  } = useGSAP()

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

  // --- Parallax ---
  const parallax = (element: Element | Element[], speed: number = 0.5) => {
    // Parallax is heavy - only enable on high performance devices
    if (prefersReducedMotion || devicePerformanceLevel !== 'high') {
      return null
    }
    return createScrollTrigger({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      animation: gsap.to(element, { y: -100 * speed, ease: 'none' })
    })
  }

  return { fadeIn, slideInLeft, slideInRight, scaleIn, onScroll, parallax }
}
