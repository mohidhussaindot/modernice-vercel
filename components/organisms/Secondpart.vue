<template>
  <section
    ref="cityRef"
    :class="[
      'relative text-white w-full grid place-items-center px-1 sm:px-1.5 transition-opacity duration-700',
      fadeClass
    ]"
  >
    <div class="w-full max-w-[65.9375rem]">
      <div
        ref="cityImage"
        class="relative w-full h-[61rem] bg-no-repeat bg-contain bg-center bg-[url('/first-three-sect-img/city.png')] transition-opacity duration-1000 ease-in-out opacity-0 image-fade"
      >
        <div class="absolute inset-0 grid place-items-center">
          <div ref="textContent" class="text-center px-0.125 sm:px-0.25 max-w-full opacity-0">
            <h1
              class="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3.25rem] font-bold mb-[1rem] leading-snug"
            >
              KI-gesteuerte Geschäftslösungen
            </h1>

            <div class="mx-auto grid gap-[0.09375rem] sm:gap-[0.1171875rem]">
              <p
                class="text-[0.95rem] sm:text-[1.05rem] md:text-[1.125rem] xl:max-w-[50.25rem] lg:text-[1.188rem]"
              >
                Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz (KI), Großen
                Sprachmodellen (LLMs) und Maschinellem Lernen (ML). Diese Technologien verändern die
                Art und Weise, wie wir arbeiten und wachsen.
              </p>

              <div
                class="inline-block mx-auto hover:scale-105 transition w-fit rounded-[0.75rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] hover:from-[#AFE639] mt-4 hover:to-[#3BE8E8]"
              >
                <Button
                  class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1rem] rounded-[10px] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
                >
                  <span
                    class="bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] text-transparent bg-clip-text duration-300"
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
  const textContent = ref(null)

  const isVisible = ref(true)
  const fadeClass = computed(() => (isVisible.value ? 'fade-in' : 'fade-out'))

  onMounted(() => {
    const city = cityRef.value
    const image = cityImage.value
    const text = textContent.value
    if (!city || !image || !text) return

    const cssFadeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          image.classList.add('opacity-100')
        }
      },
      { threshold: 0.01 }
    )
    cssFadeObserver.observe(image)

    gsap.fromTo(
      image,
      { scale: 0.86 },
      {
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    gsap.fromTo(
      text,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    const fadeObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    fadeObserver.observe(city)

    onUnmounted(() => {
      cssFadeObserver.disconnect()
      fadeObserver.disconnect()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })
  })
</script>
