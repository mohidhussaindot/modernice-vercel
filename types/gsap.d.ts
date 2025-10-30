import type { gsap } from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { TextPlugin } from 'gsap/TextPlugin'
import type { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import type { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
    $TextPlugin: typeof TextPlugin
    $MotionPathPlugin: typeof MotionPathPlugin
    $DrawSVGPlugin: typeof DrawSVGPlugin
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
    $TextPlugin: typeof TextPlugin
    $MotionPathPlugin: typeof MotionPathPlugin
    $DrawSVGPlugin: typeof DrawSVGPlugin
  }
}

export {}
