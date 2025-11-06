// composables/useGSAP.ts
// This file is now inert — no JS runs, no imports, no GSAP logic.w
export const useGSAP = () => {
  return {
    gsap: null,
    ScrollTrigger: null,
    prefersReducedMotion: false,
    devicePerformanceLevel: 'high',
    shouldLoadHeavyAnimations: false,
    isLowPerformanceDevice: false,
    createAnimation: () => null,
    createScrollTrigger: () => null,
    batchAnimate: () => null,
    cleanup: () => {}
  }
}

export const useGSAPAnimations = () => {
  return {
    fadeIn: () => null,
    slideInLeft: () => null,
    slideInRight: () => null,
    scaleIn: () => null,
    onScroll: () => null,
    parallax: () => null
  }
}
