export default defineNuxtPlugin(async nuxtApp => {
  if (!process.client) return

  // Skip GSAP loading on mobile devices
  if (window.innerWidth < 768) return

  const [
    { default: gsap },
    { default: ScrollTrigger },
    { default: TextPlugin },
    { default: MotionPathPlugin },
    { default: DrawSVGPlugin }
  ] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/TextPlugin'),
    import('gsap/MotionPathPlugin'),
    import('gsap/DrawSVGPlugin')
  ])

  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

  gsap.config({ nullTargetWarn: false })
  gsap.defaults({ ease: 'power2.out', duration: 0.6 })

  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
  })

  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      ScrollTrigger.refresh()
    })
  })

  return {
    provide: { gsap, ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin }
  }
})
