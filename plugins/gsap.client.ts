// plugins/gsap.client.ts
export default defineNuxtPlugin(async () => {
  if (process.client) {
    // Dynamic imports to avoid SSR issues
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { TextPlugin } = await import("gsap/TextPlugin");
    // Add other plugins you need

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Make available globally
    return {
      provide: {
        gsap,
        ScrollTrigger,
        TextPlugin,
      },
    };
  }
});
