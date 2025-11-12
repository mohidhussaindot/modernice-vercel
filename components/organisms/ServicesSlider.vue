<template>
  <div
    ref="wrapper"
    class="outer-wrapper hidden lg:flex items-center overflow-hidden bg-black opacity-0 transition-opacity duration-300"
  >
    <div class="relative inner-container w-full">
      <div ref="scroller" class="scroller flex items-start">
        <div ref="slide1" class="slide">
          <div class="rounded-xl z p-4">
            <img
              src="/website-strategy/slider-first.png"
              alt="Robuste Technologie"
              class="rounded-lg"
            />
          </div>
          <div class="text-content">
            <h1>{{ $t('sliderContent.slide1.title') }}</h1>
            <p>
              {{ $t('sliderContent.slide1.description') }}
            </p>
          </div>
        </div>

        <div ref="slide2" class="slide">
          <div class="rounded-xl z p-4">
            <img src="/website-strategy/slider-second.png" alt="Innovatives Design" />
          </div>
          <div class="text-content">
            <h1>{{ $t('sliderContent.slide2.title') }}</h1>
            <p>
              {{ $t('sliderContent.slide2.description') }}
            </p>
          </div>
        </div>

        <div ref="slide3" class="slide">
          <div class="rounded-xl z p-4">
            <img src="/website-strategy/slider-third.png" alt="Gesucht & Gefunden" />
          </div>
          <div class="text-content">
            <div class="text-content">
              <h1>{{ $t('sliderContent.slide3.title') }}</h1>
              <p>
                {{ $t('sliderContent.slide3.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'

  // ✅ Import GSAP and ScrollTrigger
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  // ✅ Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  const wrapper = ref(null)
  const scroller = ref(null)
  const slide1 = ref(null)
  const slide2 = ref(null)
  const slide3 = ref(null)

  let triggers = []

  // helper to get CSS gap value in px
  function getGapPx(el) {
    const styles = getComputedStyle(el)
    const gap = styles.getPropertyValue('gap') || styles.getPropertyValue('column-gap') || '0px'
    if (gap.endsWith('px')) return parseFloat(gap)
    const temp = document.createElement('div')
    temp.style.width = gap
    document.body.appendChild(temp)
    const px = temp.getBoundingClientRect().width
    document.body.removeChild(temp)
    return px
  }

  const cleanupTriggers = () => {
    triggers.forEach(t => t?.kill?.())
    triggers = []
  }

  const initAnimation = async () => {
    await nextTick()
    if (!wrapper.value || !scroller.value) return

    cleanupTriggers()

    const slides = [slide1.value, slide2.value, slide3.value].filter(Boolean)
    if (!slides.length) return

    const wrapperEl = wrapper.value
    const scrollerEl = scroller.value
    const wrapperCenter = wrapperEl.clientWidth / 2

    // make sure layout is ready before calculating
    await nextTick()

    // compute centers
    const firstCenter = slides[0].offsetLeft + slides[0].offsetWidth / 2
    const lastCenter =
      slides[slides.length - 1].offsetLeft + slides[slides.length - 1].offsetWidth / 2

    const initialX = wrapperCenter - firstCenter
    const finalX = wrapperCenter - lastCenter
    const distance = Math.abs(finalX - initialX)

    // start hidden to avoid flash
    gsap.set(wrapperEl, { opacity: 0 })
    gsap.set(scrollerEl, { x: initialX })
    gsap.set(slides, { opacity: 0.35, scale: 0.92, transformOrigin: 'center center' })

    // main horizontal scroll
    const horiz = gsap.to(scrollerEl, {
      x: finalX,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperEl,
        start: 'center center',
        end: () => `+=${distance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })
    triggers.push(horiz.scrollTrigger)

    // slide scaling watcher
    const watcher = ScrollTrigger.create({
      trigger: wrapperEl,
      start: 'top top',
      end: () => `+=${distance}`,
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
      },
      invalidateOnRefresh: true
    })
    triggers.push(watcher)

    ScrollTrigger.refresh()

    // fade in wrapper after all setup done
    gsap.to(wrapperEl, { opacity: 1, duration: 0.3, ease: 'power1.out' })
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
    ScrollTrigger.killAll() // Replaced composable 'cleanup()'
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
    gap: 2rem; /* uniform spacing between slides */
    align-items: center;
    padding: 0 2rem;
  }

  .slide {
    flex: 0 0 clamp(42rem, 60vw, 60rem);
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
    height: 20rem;
    width: 28rem;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
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
  @media (max-width: 1024px) {
    .outer-wrapper {
      height: 120vh;
    }
    .slide img {
      height: 16rem;
      width: 22rem;
    }
    .text-content h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .slide {
      flex: 0 0 70vw;
      padding: 1rem;
    }
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
