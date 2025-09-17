<template>
  <section
    ref="cityRef"
    :class="[
      'relative text-white w-full  grid place-items-center px-1 sm:px-1.5 transition-opacity duration-700',
      fadeClass,
    ]"
  >
    <div class="w-full max-w-[65.9375rem]">
      <div
        ref="cityImage"
        class="relative w-full h-[61rem] bg-no-repeat bg-contain bg-center bg-[url('/first-three-sect-img/city.png')]"
      >
        <div
          class="absolute inset-0 grid place-items-center top-[0.125rem] sm:top-[0.1875rem] md:top-[0.21875rem] lg:top-[0.2851875rem]"
        >
          <div class="text-center px-0.125 sm:px-0.25 max-w-full">
            <h1
              class="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3.25rem] font-bold mb-[1rem] leading-snug"
            >
              KI-gesteuerte Geschäftslösungen
            </h1>

            <div class="mx-auto grid gap-[0.09375rem] sm:gap-[0.1171875rem]">
              <p
                class="text-[0.95rem] sm:text-[1.05rem] md:text-[1.125rem] xl:max-w-[50.25rem] lg:text-[1.188rem]"
              >
                Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz (KI),
                Großen Sprachmodellen (LLMs) und Maschinellem Lernen (ML). Diese Technologien
                verändern die Art und Weise, wie wir arbeiten und wachsen.
              </p>

              <div class="inline-block mx-auto hover:scale-105 transition w-fit rounded-[0.75rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] hover:from-[#AFE639] mt-4 hover:to-[#3BE8E8]">
                <Button
                  class="px-[1.5rem] py-[0.625rem] 
                         text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1rem] 
                         rounded-[10px] bg-black bg-opacity-90
                         transition hover:cursor-pointer 
                         text-white hover:text-white"
                >
                  <span
                    class="bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] 
                           text-transparent bg-clip-text duration-300"
                  >
                    Prozessoptimierung durch KI
                  </span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Button from '@atoms/Button.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cityRef = ref(null)
const cityImage = ref(null)

const isVisible = ref(true)
const fadeClass = computed(() => (isVisible.value ? 'fade-in' : 'fade-out'))

// GSAP Animation
onMounted(() => {
  const city = cityRef.value
  const image = cityImage.value
  if (!city || !image) return

  const cityTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: city,
      start: 'top top',
      end: '+=50%',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: false,
    },
    smoothChildTiming: true,
  })

  gsap.set(image, { willChange: 'transform, opacity' })

  cityTimeline.fromTo(
    image,
    { scale: 0.86, opacity: 0.95 },
    {
      scale: 1,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.6,
    }
  )

  const textContent = city.querySelector('h1')?.parentElement
  if (textContent) {
    gsap.set(textContent, { willChange: 'transform, opacity' })

    cityTimeline.fromTo(
      textContent,
      { opacity: 0, y: 25, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power1.out',
      },
      '<0.2'
    )
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1,
    }
  )

  observer.observe(city)

  onUnmounted(() => {
    observer.disconnect()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
})
</script>

<style scoped>
.fade-in {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.7s ease;
}
.fade-out {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease;
}
</style>
