<template>
  <div ref="wrapper" class="outer-wrapper hidden lg:flex items-center overflow-hidden bg-black">
    <div class="relative inner-container">
      <div ref="scroller" class="scroller flex items-start gap-8">
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

<script setup>
  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const wrapper = ref(null)
  const scroller = ref(null)
  const slide1 = ref(null)
  const slide2 = ref(null)
  const slide3 = ref(null)
  let triggers = []

  const initAnimation = async () => {
    await nextTick()

    // Kill existing triggers to avoid duplicates
    triggers.forEach(t => {
      try {
        t.kill?.()
      } catch (e) {}
    })
    triggers = []

    const slides = [slide1.value, slide2.value, slide3.value]
    if (!scroller.value || !wrapper.value) return

    const windowWidth = window.innerWidth
    const scrollerWidth = slides.length * windowWidth

    gsap.set(scroller.value, { width: scrollerWidth })

    const scrollDistance = scrollerWidth - windowWidth

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
    triggers.push(horiz)

    slides.forEach(s => {
      gsap.set(s, { opacity: 0.35, scale: 0.92, transformOrigin: 'center center' })
    })

    const watcher = ScrollTrigger.create({
      trigger: wrapper.value,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      scrub: true,
      onUpdate: () => {
        const vw = window.innerWidth
        const vwCenter = vw / 2
        const minOpacity = 0.35
        const maxOpacity = 1
        const minScale = 0.92
        const maxScale = 1.05

        slides.forEach(slide => {
          const rect = slide.getBoundingClientRect()
          const slideCenter = rect.left + rect.width / 2
          const dist = Math.abs(slideCenter - vwCenter)

          const normalized = Math.min(dist / (vw / 2), 1)
          const easeFactor = 1 - normalized

          const opacity = minOpacity + easeFactor * (maxOpacity - minOpacity)
          const scale = minScale + easeFactor * (maxScale - minScale)

          gsap.set(slide, { opacity, scale })
        })
      }
    })
    triggers.push(watcher)

    ScrollTrigger.refresh()
  }

  onMounted(() => {
    initAnimation()
    window.addEventListener('resize', initAnimation)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', initAnimation)
    triggers.forEach(t => {
      try {
        t.kill?.()
      } catch (e) {}
    })
    triggers = []
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
    opacity: 0.35;
    transform: scale(0.92);
    transform-origin: center center;
  }

  .slide img {
    height: 16rem;
    width: 22rem;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  .text-content {
    max-width: 28rem;
    text-align: center;
    color: white;
  }

  .text-content h1 {
    font-size: 1.75rem;
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
