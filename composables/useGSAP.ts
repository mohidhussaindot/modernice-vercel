// composables/useGSAP.ts
import { ref, onMounted, onUnmounted, type Ref } from "vue";

export const useGSAP = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();
  const animations = ref<gsap.core.Timeline[]>([]);
  const scrollTriggers = ref<ScrollTrigger[]>([]);

  // Create animation with automatic cleanup
  const createAnimation = (
    callback: (gsap: typeof $gsap) => gsap.core.Timeline | void
  ) => {
    if (!$gsap) return;

    const timeline = callback($gsap);
    if (timeline) {
      animations.value.push(timeline);
    }
    return timeline;
  };

  // Create ScrollTrigger with automatic cleanup
  const createScrollTrigger = (config: ScrollTrigger.StaticVars) => {
    if (!$ScrollTrigger) return;

    const st = $ScrollTrigger.create(config);
    scrollTriggers.value.push(st);
    return st;
  };

  // Batch animations for better performance
  const batchAnimate = (
    elements: Element[],
    animationConfig: gsap.TweenVars
  ) => {
    if (!$gsap) return;

    return $gsap.to(elements, {
      ...animationConfig,
      stagger: 0.1, // Default stagger for batch animations
    });
  };

  // Cleanup all animations and scroll triggers
  const cleanup = () => {
    animations.value.forEach((timeline) => {
      if (timeline) {
        timeline.kill();
      }
    });

    scrollTriggers.value.forEach((st) => {
      if (st) {
        st.kill();
      }
    });

    animations.value = [];
    scrollTriggers.value = [];
  };

  // Auto cleanup on unmount
  onUnmounted(() => {
    cleanup();
  });

  return {
    gsap: $gsap,
    ScrollTrigger: $ScrollTrigger,
    createAnimation,
    createScrollTrigger,
    batchAnimate,
    cleanup,
  };
};

// Composable for common animation patterns
export const useGSAPAnimations = () => {
  const { gsap, createAnimation, createScrollTrigger } = useGSAP();

  // Fade in animation
  const fadeIn = (
    element: Element | Element[],
    options: gsap.TweenVars = {}
  ) => {
    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          ...options,
        }
      );
    });
  };

  // Slide in from left
  const slideInLeft = (
    element: Element | Element[],
    options: gsap.TweenVars = {}
  ) => {
    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          ...options,
        }
      );
    });
  };

  // Slide in from right
  const slideInRight = (
    element: Element | Element[],
    options: gsap.TweenVars = {}
  ) => {
    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          ...options,
        }
      );
    });
  };

  // Scale in animation
  const scaleIn = (
    element: Element | Element[],
    options: gsap.TweenVars = {}
  ) => {
    return createAnimation(() => {
      return gsap.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          ...options,
        }
      );
    });
  };

  // Scroll-triggered animation
  const onScroll = (
    element: Element | Element[],
    animation: gsap.TweenVars,
    triggerOptions: ScrollTrigger.StaticVars = {}
  ) => {
    return createScrollTrigger({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...triggerOptions,
      animation: gsap.fromTo(element, animation.from || {}, animation.to || {}),
    });
  };

  // Parallax effect
  const parallax = (element: Element | Element[], speed: number = 0.5) => {
    return createScrollTrigger({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      animation: gsap.to(element, {
        y: -100 * speed,
        ease: "none",
      }),
    });
  };

  return {
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    onScroll,
    parallax,
  };
};
