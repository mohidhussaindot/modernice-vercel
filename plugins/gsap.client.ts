// plugins/gsap.client.ts
import { defineNuxtPlugin, useRouter } from 'nuxt/app'
import { nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

/**
 * Device performance detection
 * Checks memory, CPU cores, and network connection to determine performance level
 */
const detectDevicePerformance = (): {
  performanceLevel: 'high' | 'medium' | 'low'
  shouldLoadHeavyAnimations: boolean
  shouldLoadAnimations: boolean
  isLowPerformance: boolean
} => {
  if (!process.client) {
    return {
      performanceLevel: 'high',
      shouldLoadHeavyAnimations: true,
      shouldLoadAnimations: true,
      isLowPerformance: false
    }
  }

  const THRESHOLDS = {
    LOW_MEMORY: 4, // GB
    LOW_CPU_CORES: 4,
    SLOW_CONNECTION: 2 // Mbps
  }

  const nav = navigator as any

  // 1. Check Memory
  const memory = nav.deviceMemory || null

  // 2. Check CPU Cores
  const cpuCores = navigator.hardwareConcurrency || null

  // 3. Check Network Connection
  const connection =
    nav.connection || nav.mozConnection || nav.webkitConnection || nav.networkInformation
  let hasSlowConnection = false
  if (connection) {
    const effectiveType = connection.effectiveType // 'slow-2g', '2g', '3g', '4g'
    const downlink = connection.downlink // Mbps

    if (
      effectiveType &&
      (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g')
    ) {
      hasSlowConnection = true
    } else if (downlink && downlink < THRESHOLDS.SLOW_CONNECTION) {
      hasSlowConnection = true
    } else if (effectiveType === '4g' && downlink && downlink < 5) {
      hasSlowConnection = true // Slow 4G
    }
  }

  const hasLowMemory = memory !== null && memory < THRESHOLDS.LOW_MEMORY
  const hasLowCores = cpuCores !== null && cpuCores < THRESHOLDS.LOW_CPU_CORES

  // Count performance issues
  const issues = [hasLowMemory, hasLowCores, hasSlowConnection].filter(Boolean).length

  let performanceLevel: 'high' | 'medium' | 'low' = 'high'
  let isLowPerformance = false

  if (issues >= 2) {
    performanceLevel = 'low'
    isLowPerformance = true
  } else if (issues === 1) {
    performanceLevel = 'medium'
  }

  // Very low memory (< 2GB) always disables heavy animations
  if (memory !== null && memory < 2) {
    performanceLevel = 'low'
    isLowPerformance = true
  }

  const shouldLoadHeavyAnimations = performanceLevel === 'high'
  const shouldLoadAnimations = performanceLevel !== 'low'

  return {
    performanceLevel,
    shouldLoadHeavyAnimations,
    shouldLoadAnimations,
    isLowPerformance
  }
}

export default defineNuxtPlugin(async nuxtApp => {
  if (!process.client) {
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('prefersReducedMotion', false)
    nuxtApp.provide('devicePerformanceLevel', 'high')
    nuxtApp.provide('shouldLoadHeavyAnimations', true)
    return
  }

  // Detect device performance
  const perf = detectDevicePerformance()

  // Provide performance info globally
  nuxtApp.provide('devicePerformanceLevel', perf.performanceLevel)
  nuxtApp.provide('shouldLoadHeavyAnimations', perf.shouldLoadHeavyAnimations)
  nuxtApp.provide('isLowPerformanceDevice', perf.isLowPerformance)

  try {
    // Always load GSAP core for basic animations
    const { gsap } = await import('gsap')

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Low performance: Skip heavy plugins, use minimal config
    if (perf.performanceLevel === 'low') {
      gsap.config({
        nullTargetWarn: false,
        force3D: false, // Disable hardware acceleration on low-end devices
        autoSleep: 30 // Shorter auto-sleep
      })

      gsap.defaults({
        ease: 'power1.out', // Simpler easing
        duration: 0.3 // Shorter duration
      })

      nuxtApp.provide('gsap', gsap)
      nuxtApp.provide('ScrollTrigger', null)
      nuxtApp.provide('TextPlugin', null)
      nuxtApp.provide('MotionPathPlugin', null)
      nuxtApp.provide('DrawSVGPlugin', null)
      nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)

      console.log('⚡ Low performance device detected - GSAP loaded with minimal configuration')
      return
    }

    // Medium performance: Load core + ScrollTrigger only, skip heavy plugins
    if (perf.performanceLevel === 'medium') {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)

      gsap.config({
        nullTargetWarn: false,
        force3D: false, // Disable 3D transforms on medium devices
        autoSleep: 45
      })

      gsap.defaults({
        ease: 'power1.out',
        duration: 0.4
      })

      ScrollTrigger.config({
        ignoreMobileResize: true,
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
      })

      // Light debounced refresh
      let refreshTimeout: NodeJS.Timeout | null = null
      const debouncedRefresh = () => {
        if (refreshTimeout) clearTimeout(refreshTimeout)
        refreshTimeout = setTimeout(() => {
          ScrollTrigger.refresh()
          refreshTimeout = null
        }, 300) // Longer debounce for medium performance
      }

      const router = useRouter()
      router.afterEach(() => {
        nextTick(() => {
          debouncedRefresh()
        })
      })

      nuxtApp.provide('gsap', gsap)
      nuxtApp.provide('ScrollTrigger', ScrollTrigger)
      nuxtApp.provide('TextPlugin', null)
      nuxtApp.provide('MotionPathPlugin', null)
      nuxtApp.provide('DrawSVGPlugin', null)
      nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)

      console.log('⚖️ Medium performance device - GSAP loaded with ScrollTrigger only')
      return
    }

    // High performance: Load all plugins with full optimization
    const [{ ScrollTrigger }, { TextPlugin }, { MotionPathPlugin }, { DrawSVGPlugin }] =
      await Promise.all([
        import('gsap/ScrollTrigger'),
        import('gsap/TextPlugin'),
        import('gsap/MotionPathPlugin'),
        import('gsap/DrawSVGPlugin')
      ])

    // Register all plugins centrally
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

    // ScrollTrigger global settings for better performance
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

    console.log('✅ High performance device - GSAP loaded with all plugins')
  } catch (error) {
    console.error('❌ GSAP initialization failed:', error)
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('prefersReducedMotion', false)
  }
})
