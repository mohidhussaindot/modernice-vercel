// plugins/gsap.client.ts
// Inert plugin — doesn't import, inject, or load anything.

import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(nuxtApp => {
  // Provide neutral, no-op values so the app doesn't break
  nuxtApp.provide('gsap', null)
  nuxtApp.provide('ScrollTrigger', null)
  nuxtApp.provide('TextPlugin', null)
  nuxtApp.provide('MotionPathPlugin', null)
  nuxtApp.provide('DrawSVGPlugin', null)
  nuxtApp.provide('prefersReducedMotion', false)
  nuxtApp.provide('devicePerformanceLevel', 'high')
  nuxtApp.provide('shouldLoadHeavyAnimations', false)
  nuxtApp.provide('isLowPerformanceDevice', false)
})
