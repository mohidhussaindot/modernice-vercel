// composables/useGSAP.ts
import { ref, onUnmounted } from 'vue'
import { useNuxtApp, type NuxtApp } from 'nuxt/app'
import type gsap from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGSAP = () => {
  const nuxtApp = useNuxtApp() as NuxtApp & {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
  }

  const $gsap = nuxtApp.$gsap
  const $ScrollTrigger = nuxtApp.$ScrollTrigger

  const animations = ref<(gsap.core.Tween | gsap.core.Timeline)[]>([])
  const scrollTriggers = ref<ScrollTrigger[]>([])

  const createAnimation = (
    callback: (gsap: typeof $gsap) => gsap.core.Tween | gsap.core.Timeline | void
  ) => {
    if (!$gsap) return
    const anim = callback($gsap)
    if (anim) animations.value.push(anim)
    return anim
  }

  const createScrollTrigger = (config: ScrollTrigger.StaticVars) => {
    if (!$ScrollTrigger) return
    const st = $ScrollTrigger.create(config)
    scrollTriggers.value.push(st)
    return st
  }

  const batchAnimate = (elements: Element[], animationConfig: gsap.TweenVars) => {
    if (!$gsap) return
    return $gsap.to(elements, {
      ...animationConfig,
      stagger: 0.1
    })
  }

  const cleanup = () => {
    animations.value.forEach(anim => anim?.kill?.())
    scrollTriggers.value.forEach(st => st?.kill?.())
    animations.value = []
    scrollTriggers.value = []
  }

  onUnmounted(() => cleanup())

  return {
    gsap: $gsap,
    ScrollTrigger: $ScrollTrigger,
    createAnimation,
    createScrollTrigger,
    batchAnimate,
    cleanup
  }
}

// ----------------------------
// Common animation utilities
// ----------------------------
export const useGSAPAnimations = () => {
  const { gsap, createAnimation, createScrollTrigger } = useGSAP()

  const fadeIn = (element: Element | Element[], options: gsap.TweenVars = {}) =>
    createAnimation(() =>
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', ...options }
      )
    )

  const slideInLeft = (element: Element | Element[], options: gsap.TweenVars = {}) =>
    createAnimation(() =>
      gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', ...options }
      )
    )

  const slideInRight = (element: Element | Element[], options: gsap.TweenVars = {}) =>
    createAnimation(() =>
      gsap.fromTo(
        element,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', ...options }
      )
    )

  const scaleIn = (element: Element | Element[], options: gsap.TweenVars = {}) =>
    createAnimation(() =>
      gsap.fromTo(
        element,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', ...options }
      )
    )

  const onScroll = (
    element: Element | Element[],
    animation: { from?: gsap.TweenVars; to?: gsap.TweenVars },
    triggerOptions: ScrollTrigger.StaticVars = {}
  ) =>
    createScrollTrigger({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
      animation: gsap.fromTo(element, animation.from || {}, animation.to || {})
    })

  const parallax = (element: Element | Element[], speed: number = 0.5) =>
    createScrollTrigger({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      animation: gsap.to(element, { y: -100 * speed, ease: 'none' })
    })

  return {
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    onScroll,
    parallax
  }
}
