// composables/useGSAP.ts
import { ref, onUnmounted } from 'vue'
import { useNuxtApp } from 'nuxt/app'

export const useGSAP = () => {
  const nuxtApp = useNuxtApp()
  const gsap = nuxtApp.$gsap as any
  const ScrollTrigger = nuxtApp.$ScrollTrigger as any
  const prefersReducedMotion = (nuxtApp.$prefersReducedMotion as boolean) || false

  const animations = ref<any[]>([])
  const scrollTriggers = ref<any[]>([])

  // Check if GSAP is available
  if (!gsap || !ScrollTrigger) {
    console.warn('GSAP is not available. Make sure gsap.client.ts plugin is loaded.')
  }

  // Create animation with automatic cleanup and reduced motion support
  const createAnimation = (callback: (gsapInstance: any) => any, skipIfReducedMotion = false) => {
    if (!gsap) return null

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion && skipIfReducedMotion) {
      return null
    }

    try {
      const timeline = callback(gsap)
      if (timeline) {
        animations.value.push(timeline)
      }
      return timeline
    } catch (error) {
      console.error('GSAP animation error:', error)
      return null
    }
  }

  // Create ScrollTrigger with automatic cleanup and reduced motion support
  const createScrollTrigger = (config: any, skipIfReducedMotion = false) => {
    if (!ScrollTrigger) return null

    // Skip ScrollTrigger if reduced motion is preferred
    if (prefersReducedMotion && skipIfReducedMotion) {
      return null
    }

    try {
      const st = ScrollTrigger.create(config)
      scrollTriggers.value.push(st)
      return st
    } catch (error) {
      console.error('ScrollTrigger creation error:', error)
      return null
    }
  }

  // Batch animations for better performance
  const batchAnimate = (elements: Element[], animationConfig: any) => {
    if (!gsap) return null

    // Use autoAlpha for better performance (handles visibility + opacity)
    const config: any = { ...animationConfig }
    if (!config.hasOwnProperty('autoAlpha') && config.opacity !== undefined) {
      config.autoAlpha = config.opacity
      delete config.opacity
    }

    try {
      return gsap.to(elements, {
        ...config,
        stagger: config.stagger || 0.1 // Default stagger for batch animations
      })
    } catch (error) {
      console.error('GSAP batch animation error:', error)
      return null
    }
  }

  // Cleanup all animations and scroll triggers
  const cleanup = () => {
    animations.value.forEach(timeline => {
      if (timeline) {
        timeline.kill()
      }
    })

    scrollTriggers.value.forEach(st => {
      if (st) {
        st.kill()
      }
    })

    animations.value = []
    scrollTriggers.value = []
  }

  // Auto cleanup on unmount
  onUnmounted(() => {
    cleanup()
  })

  return {
    gsap,
    ScrollTrigger,
    prefersReducedMotion: prefersReducedMotion || false,
    createAnimation,
    createScrollTrigger,
    batchAnimate,
    cleanup
  }
}

// Composable for common animation patterns
export const useGSAPAnimations = () => {
  const { gsap, createAnimation, createScrollTrigger, prefersReducedMotion } = useGSAP()

  // Helper to apply reduced motion - instant animation with final state
  const applyReducedMotion = (element: Element | Element[], finalState: any) => {
    if (!gsap) return
    if (Array.isArray(element)) {
      element.forEach(el => {
        if (el) {
          const htmlEl = el as HTMLElement
          Object.entries(finalState).forEach(([prop, value]) => {
            htmlEl.style.setProperty(prop === 'autoAlpha' ? 'opacity' : prop, String(value))
          })
        }
      })
    } else if (element) {
      const htmlEl = element as HTMLElement
      Object.entries(finalState).forEach(([prop, value]) => {
        htmlEl.style.setProperty(prop === 'autoAlpha' ? 'opacity' : prop, String(value))
      })
    }
  }

  // Fade in animation
  const fadeIn = (element: Element | Element[], options: any = {}) => {
    if (prefersReducedMotion) {
      applyReducedMotion(element, { autoAlpha: 1, y: 0 })
      return null
    }

    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          ...options
        }
      )
    })
  }

  // Slide in from left
  const slideInLeft = (element: Element | Element[], options: any = {}) => {
    if (prefersReducedMotion) {
      applyReducedMotion(element, { autoAlpha: 1, x: 0 })
      return null
    }

    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { x: -100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          ...options
        }
      )
    })
  }

  // Slide in from right
  const slideInRight = (element: Element | Element[], options: any = {}) => {
    if (prefersReducedMotion) {
      applyReducedMotion(element, { autoAlpha: 1, x: 0 })
      return null
    }

    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          ...options
        }
      )
    })
  }

  // Scale in animation
  const scaleIn = (element: Element | Element[], options: any = {}) => {
    if (prefersReducedMotion) {
      applyReducedMotion(element, { autoAlpha: 1, scale: 1 })
      return null
    }

    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          ...options
        }
      )
    })
  }

  // Scroll-triggered animation
  const onScroll = (element: Element | Element[], animation: any, triggerOptions: any = {}) => {
    if (prefersReducedMotion) {
      // Apply final state immediately
      const finalState = { ...(animation.from || {}), ...(animation.to || {}) }
      applyReducedMotion(element, finalState)
      return null
    }

    // Use autoAlpha for better performance
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

  // Parallax effect
  const parallax = (element: Element | Element[], speed: number = 0.5) => {
    if (prefersReducedMotion) {
      // Disable parallax for reduced motion
      return null
    }

    return createScrollTrigger({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      animation: gsap.to(element, {
        y: -100 * speed,
        ease: 'none'
      })
    })
  }

  return {
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    onScroll,
    parallax
  }
}
