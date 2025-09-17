<template>
  <section ref="wrapper" class="outer-wrapper flex items-center overflow-hidden bg-black">
    <div class="relative inner-container">
      <div ref="scroller" class="scroller flex items-start gap-8">

        <div ref="slide1" class=" slide">
          <div class="rounded-xl shadow-2xl bg-white/7 backdrop-blur-sm p-4">
            <img src="/images/slider-first.png" alt="Robuste Technologie" class="rounded-lg" />
          </div>

          <div class="text-content">
            <h1>Robuste Technologie</h1>
            <p>
              Zuverlässige Technologien und Plattformen, die sicherstellen, dass eine Website nicht nur gut aussieht,
              sondern auch nahtlos funktioniert.
            </p>
          </div>
        </div>

        <div ref="slide2" class=" slide">
          <div class="rounded-xl shadow-2xl bg-white/7 backdrop-blur-sm p-4">
            <img src="/images/slider2.png" alt="Innovatives Design" />
          </div>

          <div class="text-content">
            <h1>Innovatives Design</h1>
            <p>
              Einzigartige und maßgeschneiderte Designs, die Marken repräsentieren und Visionen zum Leben erwecken.
            </p>
          </div>
        </div>

        <div ref="slide3" class=" slide">
          <div class="rounded-xl shadow-2xl bg-white/7 backdrop-blur-sm p-4">
            <img src="/images/sliderthird.png" alt="Gesucht & Gefunden" />
          </div>

          <div class="text-content">
            <h1>Gesucht & Gefunden</h1>
            <p>
              Tappe nicht im Dunkeln. Gezielte Suchmaschinen-Optimierung lässt Dich heller strahlen als Deine Konkurrenz.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wrapper = ref(null)
const scroller = ref(null)
const slide1 = ref(null)
const slide2 = ref(null)
const slide3 = ref(null)

onMounted(() => {
  const slides = [slide1.value, slide2.value, slide3.value]
  const scrollerWidth = scroller.value.scrollWidth
  const windowWidth = window.innerWidth
  const scrollDistance = scrollerWidth - windowWidth

  gsap.to(scroller.value, {
    x: -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper.value,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  })

  // Fade in/out slides based on their position
  slides.forEach((slide, i) => {
    gsap.fromTo(
      slide,
      { opacity: 0.35, scale: 0.92 },
      {
        opacity: 1,
        scale: 1.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scroller.value,
          start: () => `${i * windowWidth - windowWidth / 2}px center`,
          end: () => `${i * windowWidth + windowWidth / 2}px center`,
          scrub: true,
        },
      }
    )
  })
})
</script>

<style scoped>
.outer-wrapper {
  position: relative;
  height: 100vh;
}

.scroller {
  display: flex;
  will-change: transform;
}

.slide {
  flex: 0 0 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.35;
  scale: 0.92;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide img {
  height: 16rem;
  width: 22rem;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
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
