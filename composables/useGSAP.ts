// composables/useGSAP.ts
import { ref, onUnmounted } from 'vue'

export const useGSAP = () => {
  // ✅ Only run in client
  if (import.meta.server) {
    return {
      gsap: null,
      ScrollTrigger: null,
      createAnimation: () => {},
      createScrollTrigger: () => {},
      batchAnimate: () => {},
      cleanup: () => {}
    }
  }

  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const animations = ref<gsap.core.Timeline[]>([])
  const scrollTriggers = ref<ScrollTrigger[]>([])

  const createAnimation = (callback: (gsap: typeof $gsap) => gsap.core.Timeline | void) => {
    if (!$gsap) return
    const timeline = callback($gsap)
    if (timeline) animations.value.push(timeline)
    return timeline
  }

  const createScrollTrigger = (config: ScrollTrigger.StaticVars) => {
    if (!$ScrollTrigger) return
    const st = $ScrollTrigger.create(config)
    scrollTriggers.value.push(st)
    return st
  }

  const batchAnimate = (elements: Element[] | null, animationConfig: gsap.TweenVars) => {
    if (!$gsap || !elements?.length) return
    return $gsap.to(elements, { ...animationConfig, stagger: 0.1 })
  }

  const cleanup = () => {
    animations.value.forEach(t => t?.kill?.())
    scrollTriggers.value.forEach(st => st?.kill?.())
    animations.value = []
    scrollTriggers.value = []
  }

  onUnmounted(cleanup)

  return { gsap: $gsap, ScrollTrigger: $ScrollTrigger, createAnimation, createScrollTrigger, batchAnimate, cleanup }
}
