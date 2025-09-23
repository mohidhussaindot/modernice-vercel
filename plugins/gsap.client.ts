// plugins/gsap.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    // Dynamic imports to avoid SSR issues
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/TextPlugin'),
      import('gsap/MotionPathPlugin'),
      import('gsap/DrawSVGPlugin')
    ]).then(
      ([{ gsap }, { ScrollTrigger }, { TextPlugin }, { MotionPathPlugin }, { DrawSVGPlugin }]) => {
        // Register all plugins centrally
        gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, DrawSVGPlugin)

        // Global GSAP performance optimizations
        gsap.config({
          nullTargetWarn: false
        })

        // Optimize for better performance
        gsap.defaults({
          ease: 'power2.out',
          duration: 0.6
        })

        // ScrollTrigger global settings for better performance
        ScrollTrigger.config({
          ignoreMobileResize: true,
          autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
        })

        // Refresh ScrollTrigger on route changes
        const router = useRouter()
        router.afterEach(() => {
          nextTick(() => {
            ScrollTrigger.refresh()
          })
        })

        // Make available globally
        return {
          provide: {
            gsap,
            ScrollTrigger,
            TextPlugin,
            MotionPathPlugin,
            DrawSVGPlugin
          }
        }
      }
    )
  }
})
