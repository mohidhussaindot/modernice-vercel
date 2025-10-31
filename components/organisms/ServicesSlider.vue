<template>
  <div ref="wrapper" class="outer-wrapper hidden lg:flex items-center overflow-hidden bg-black">
    <div class="relative inner-container">
      <div ref="scroller" class="scroller flex items-start">
        <div ref="slide1" class="slide">
          <div class="rounded-xl shadow-2xl p-4">
            <img src="/images/slider-first.png" alt="Robuste Technologie" class="rounded-lg" />
          </div>
          <div class="text-content">
            <h1>Robuste Technologie</h1>
            <p>
              Zuverlässige Technologien und Plattformen, die sicherstellen, dass eine Website nicht
              nur gut aussieht, sondern auch nahtlos funktioniert.
            </p>
          </div>
        </div>

        <div ref="slide2" class="slide">
          <div class="rounded-xl shadow-2xl p-4">
            <img src="/images/slider2.png" alt="Innovatives Design" />
          </div>
          <div class="text-content">
            <h1>Innovatives Design</h1>
            <p>
              Einzigartige und maßgeschneiderte Designs, die Marken repräsentieren und Visionen zum
              Leben erwecken.
            </p>
          </div>
        </div>

        <div ref="slide3" class="slide">
          <div class="rounded-xl shadow-2xl p-4">
            <img src="/images/sliderthird.png" alt="Gesucht & Gefunden" />
          </div>
          <div class="text-content">
            <h1>Gesucht & Gefunden</h1>
            <p>
              Tappe nicht im Dunkeln. Gezielte Suchmaschinen-Optimierung lässt Dich heller strahlen
              als Deine Konkurrenz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
  import { useGSAP } from '../../composables/useGSAP'

  const { gsap, ScrollTrigger, cleanup } = useGSAP()

  const wrapper = ref<HTMLElement | null>(null)
  const scroller = ref<HTMLElement | null>(null)
  const slide1 = ref<HTMLElement | null>(null)
  const slide2 = ref<HTMLElement | null>(null)
  const slide3 = ref<HTMLElement | null>(null)

  let triggers: ScrollTrigger[] = []

  const cleanupTriggers = () => {
    triggers.forEach(t => t?.kill?.())
    triggers = []
  }

  const initAnimation = async () => {
    await nextTick()

    if (typeof window === 'undefined') return
    if (!wrapper.value || !scroller.value) return

    cleanupTriggers()

    const slides = [slide1.value, slide2.value, slide3.value].filter(Boolean) as HTMLElement[]
    const windowWidth = window.innerWidth
    const scrollerWidth = slides.length * windowWidth
    const scrollDistance = scrollerWidth - windowWidth

    gsap.set(scroller.value, { width: scrollerWidth })
    gsap.set(slides, { opacity: 0.35, scale: 0.92, transformOrigin: 'center center' })

    const horiz = gsap.to(scroller.value, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper.value,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    })
    triggers.push(horiz.scrollTrigger as ScrollTrigger)

    const watcher = ScrollTrigger.create({
      trigger: wrapper.value,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      scrub: true,
      onUpdate: () => {
        const vw = window.innerWidth
        const vwCenter = vw / 2

        slides.forEach(slide => {
          const rect = slide.getBoundingClientRect()
          const slideCenter = rect.left + rect.width / 2
          const normalized = Math.min(Math.abs(slideCenter - vwCenter) / (vw / 2), 1)
          const easeFactor = 1 - normalized

          gsap.set(slide, {
            opacity: 0.35 + easeFactor * 0.65,
            scale: 0.92 + easeFactor * 0.13
          })
        })
      }
    })
    triggers.push(watcher)

    ScrollTrigger.refresh()
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    initAnimation()
    window.addEventListener('resize', initAnimation, { passive: true })
  })

  onBeforeUnmount(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', initAnimation)
    cleanupTriggers()
    cleanup()
  })
</script>

<style scoped>
  .outer-wrapper {
    position: relative;
    height: 130vh;
  }

  .scroller {
    display: flex;
    will-change: transform;
    /* width is now set dynamically in JS */
  }

  .slide {
    flex: 0 0 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transform: scale(0.92);
    transform-origin: center center;
  }

  .slide img {
    height: 18rem;
    width: 24rem;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  .text-content {
    max-width: 29rem;
    text-align: center;
    color: white;
  }

  .text-content h1 {
    font-size: 1.95rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .text-content p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .slide img {
      height: 10rem;
      width: 14rem;
    }

    .text-content h1 {
      font-size: 1.25rem;
    }

    .text-content p {
      font-size: 0.9rem;
    }
  }
</style>
