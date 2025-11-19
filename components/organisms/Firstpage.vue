<template>
  <div class="text-white overflow-hidden bg-[#020111]">
    <!-- DESKTOP HERO (hidden on small screens) -->
    <div class="hidden sm:block">
      <div
        ref="firstPart"
        :class="[isFirstPartVisible ? 'fade-in' : 'fade-out']"
        class="relative w-full overflow-hidden"
      >
        <div class="w-full" v-html="bghero"></div>
        <div
          ref="stripesDiv"
          class="absolute -top-40 inset-0 pointer-events-none z-10"
          v-html="stripessvg"
        ></div>

        <div class="flex">
          <div class="absolute z-30 inset-0 flex items-center mx-auto max-w-7xl">
            <div
              class="text-white flex flex-col w-full max-w-none sm:max-w-[32rem] md:max-w-[29rem] xl:max-w-[34.875rem]"
            >
              <h1
                class="font-bold leading-tight text-[2.5rem] sm:text-[2.25rem] md:text-[2rem] lg:text-[1.75rem] xl:text-[2.75rem] 2xl:text-[3.5rem] w-full"
              >
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]"
                >
                  <span>{{ $t('hero.title') }}</span>
                </span>
              </h1>

              <p
                class="mt-[1.5rem] font-light leading-relaxed text-[1rem] sm:text-[1.125rem] md:text-[1rem] lg:text-[0.95rem] xl:text-[1.5rem] 2xl:text-[1.25rem] w-full xl:w-[34.875rem]"
              >
                {{ $t('hero.subtitle') }}
              </p>

              <div
                class="mt-[2rem] inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] hover:from-[#6BE0FF] hover:to-[#3BB1FF]"
              >
                <Button
                  class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.25rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
                >
                  <span
                    class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text duration-300"
                  >
                    {{ $t('hero.button') }}
                  </span>
                </Button>
              </div>
            </div>

            <div
              class="float-moon md:w-289 2xl:w-[1200px] 2xl:h-[900px] md:h-[600px]"
              v-html="moonSVGRaw"
            ></div>
          </div>
        </div>
      </div>

      <!-- CITY SECTION -->
      <div
        ref="cityRef"
        :class="[
          'relative text-white overflow-hidden w-full grid place-items-center   max-w-7xl mx-auto transition-opacity duration-700'
        ]"
      >
        <div class="w-full max-w-7xl">
          <div
            ref="cityImage"
            class="relative w-full xl:h-[61rem] h-[50rem] bg-no-repeat bg-contain bg-center bg-[url('/first-three-sect-img/city.png')] transition-opacity duration-1000 ease-in-out image-fade"
          >
            <div class="absolute inset-0 grid place-items-center">
              <div
                ref="textContent"
                class="items-center text-center flex flex-col px-0.125 sm:px-0.25 max-w-full opacity-0"
              >
                <h1
                  class="text-[1.25rem] sm:text-[2rem] 2xl:text-[3.45rem] lg:text-[3rem] font-bold mb-[0.5rem] leading-snug"
                >
                  {{ $t('citySection.title') }}
                </h1>
                <div class="mx-auto grid">
                  <p
                    class="text-[0.95rem] 2xl:text-[1.2rem] sm:text-[1.05rem] md:text-[1rem] xl:max-w-[50.25rem] lg:w-[800px] lg:text-[1rem]"
                  >
                    {{ $t('citySection.subtitle') }}
                  </p>

                  <NuxtLink :to="localePath('/services/aiconsulting')">
                    <div
                      class="inline-block mx-auto mt-[2rem] hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
                    >
                      <Button
                        class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
                      >
                        <span
                          class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
                        >
                          {{ $t('citySection.button') }}
                        </span>
                      </Button>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TEXT + ROCKET -->
      <div
        ref="sectionRef"
        :class="[
          'flex 2xl:mt-[-10rem]  xl:mt-[-15rem] overflow-visible  max-w-7xl mx-auto md:pl-10 gap-12 md:gap-0 lg:gap-0 transition-opacity duration-700 relative z-20',
          fadeClassSection
        ]"
      >
        <div
          class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-full xl:min-w-[500px] lg:w-[597px] md:w-[500px]"
        >
          <h1
            class="font-semibold italic text-[1.75rem] sm:text-[2.125rem] md:text-[2rem] lg:text-[2.625rem] leading-tight"
          >
            {{ $t('innovationSection.title') }}
          </h1>
          <p class="font-light 2xl:text-[1.2rem] lg:text-[1rem] sm:text-[1.0625rem] md:text-[1rem]">
            {{ $t('innovationSection.subtitle') }}
          </p>

          <div
            class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#FFE501] to-[#FFA901] hover:from-[#FFA901] hover:to-[#FFE501]"
          >
            <Button
              class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#FFA901] to-[#FFE501] text-transparent bg-clip-text duration-300"
              >
                {{ $t('innovationSection.button') }}
              </span>
            </Button>
          </div>
        </div>

        <div class="w-full flex justify-center items-center">
          <img
            src="/first-three-sect-img/rocketmoon.png"
            alt="Rocket Moon"
            class="xl:w-[650.4355px] 2xl:w-[750.4355px] w-full h-full right-left object-contain select-none pointer-events-none"
            loading="lazy"
          />
        </div>
      </div>

      <!-- CTA Section -->
      <div
        ref="ctaSectionRef"
        :class="[`cta-section relative h-[69.625rem] overflow-hidden w-full`, fadecta]"
      >
        <ClientOnly>
          <div
            class="absolute inset-0 flex justify-center pt-[5.5%] pl-[13%] pointer-events-none select-none z-0"
            style="transform: scale(3.2) rotate(3.9deg); transform-origin: center"
            v-html="bglines"
          ></div>
        </ClientOnly>

        <div class="relative mx-auto max-w-7xl w-full z-10">
          <div class="relative flex justify-center items-center">
            <div
              class="relative z-10 md:top-[19.438rem] xl:top-[23.438rem] 2xl:top-[25.438rem] flex flex-col gap-[1.5rem] xl:w-[37.125rem] lg:w-[30rem] md:w-[30rem] max-h-[25.375rem]"
            >
              <h2
                class="font-bold italic text-white leading-tight text-[2.25rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[2.2rem] 2xl:text-[3rem] xl:text-[2.7rem]"
              >
                {{ $t('ctaSection.title') }}
              </h2>
              <p
                class="font-light 2xl:text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.24rem]"
              >
                {{ $t('ctaSection.subtitle') }}
              </p>

              <NuxtLink :to="localePath('/services/aiconsulting')">
                <div
                  class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] hover:from-[#3BE8E8] hover:to-[#AFE639]"
                >
                  <Button
                    class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
                  >
                    <span
                      class="bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] text-transparent bg-clip-text duration-300"
                    >
                      {{ $t('ctaSection.button') }}
                    </span>
                  </Button>
                </div>
              </NuxtLink>
            </div>

            <div
              class="absolute md:w-[350.5314px] md:pt-10 2xl:pt-4 xl:pt-2 xl:w-[534.5314px] right-0 top-0 pointer-events-none z-10 spaceship-wrapper"
            >
              <ClientOnly>
                <img
                  src="/first-three-sect-img/rocket.png"
                  height="800"
                  width="1000"
                  loading="lazy"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile (only) -->
    <section class="block md:hidden text-white bg-[#020111] overflow-x-hidden">
      <!-- HERO SECTION -->
      <div class="relative mt-30">
        <ClientOnly>
          <img
            alt="rocketmoonhero"
            class="absolute right-0 left-10 top-12 w-[150%] max-w-none"
            src="@atoms/svgs/rocket-moon-hero.svg"
            loading="lazy"
          />
        </ClientOnly>

        <div class="relative px-4 pt-48 flex flex-col z-10">
          <h1 class="text-[2rem] font-bold mb-2 leading-snug">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE] [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
            >
              {{ $t('hero.title') }}
            </span>
          </h1>

          <p class="max-w-[300px] text-[0.9rem] font-light leading-relaxed">
            {{ $t('hero.subtitle') }}
          </p>

          <div
            class="mt-4 inline-block transition-transform duration-300 w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] active:scale-105"
          >
            <Button
              class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 text-white"
            >
              <span
                class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
              >
                {{ $t('hero.button') }}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <!-- SECTION 2 -->
      <div class="relative mt-70 h-[30rem] bg-[#020111] overflow-hidden">
        <img
          src="/first-three-sect-img/city.png"
          class="w-full h-full object-cover"
          alt="City"
          loading="lazy"
        />

        <div
          class="absolute inset-0 flex flex-col  justify-center text-center px-5 text-white bg-black/30 backdrop-blur-0 md:backdrop-blur-[1px]"
        >
          <h1 class="text-[2rem] font-bold leading-snug mb-2"> {{ $t('citySection.title') }}</h1>
          <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
            {{ $t('citySection.subtitle') }}
          </p>

          <NuxtLink :to="localePath('/services/aiconsulting')">
            <div
              class="inline-block mt-6 transition-transform duration-300 active:scale-105 w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639]"
            >
              <Button
                class="px-[1.25rem] py-[0.625rem] text-[1rem] rounded-[0.625rem] bg-black bg-opacity-90 text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
                >
                  {{ $t('citySection.button') }}
                </span>
              </Button>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- SECTION 3 -->
      <div class="h-[40rem]  items-center px-5">
        <img src="/first-three-sect-img/rocket.png" alt="rocket" ></img>
        <div class="flex flex-col items-center text-center gap-6 max-w-full">
          <h1 class="text-[2rem] font-bold italic leading-snug">
            {{ $t('innovationSection.title') }}
          </h1>
          <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
            {{ $t('innovationSection.subtitle') }}
          </p>
          
          <div
            class="inline-block transition-transform duration-300 active:scale-105 w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#FFE501] to-[#FFA901]"
          >
            <Button
              class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 text-white"
            >
              <span
                class="bg-gradient-to-r from-[#FFA901] to-[#FFE501] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
              >
                {{ $t('innovationSection.button') }}
              </span>
            </Button>
          </div>
         
        </div>
        
      </div>

      <!-- SECTION 4 -->
      <div class="h-[45rem]  items-center px-5">
         <img src="/first-three-sect-img/rocketmoon.png" alt="Rocket Moon" loading="lazy" />
        <div class="relative z-10 flex flex-col items-center text-center gap-6 max-w-full">
          <h2 class="text-[2rem] font-bold italic leading-snug">
            {{ $t('ctaSection.title') }}
          </h2>
          <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
            {{ $t('ctaSection.subtitle') }}
          </p>
          <NuxtLink :to="localePath('/services/aiconsulting')">
            <div
              class="inline-block transition-transform duration-300 active:scale-105 w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#AFE639] to-[#3BE8E8]"
            >
              <Button
                class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
                >
                  {{ $t('ctaSection.button') }}
                </span>
              </Button>
            </div>
          </NuxtLink>
        </div>
      </div>

  <!-- FINAL CTA -->
<div class="h-[20rem] flex items-center px-5">
  <div class="flex flex-col items-center text-center gap-6 max-w-full">

    <h1 class="text-[2rem] font-bold italic leading-snug">
      {{ $t('MobileEnd.title') }}
    </h1>

    <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
      {{ $t('MobileEnd.Description') }}
    </p>
    <div
      class="inline-block transition-transform duration-300 active:scale-105 w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#38EF61] to-[#44E5C8']"
    >
<NuxtLink to="/services/website-strategy">

      <Button
        class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 text-white"
      >
        <span
          class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
        >
          {{ $t('MobileEnd.Button') }}
        </span>
      </Button>
      </NuxtLink>
    </div>

  </div>

      </div>
    </section>
  </div>
</template>
<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import Button from '@atoms/Button.vue'
  import moonSVGRaw from '@atoms/svgs/rocket-moon-hero.svg?raw'
  import stripessvg from '@atoms/svgs/herosectionstripes.svg?raw'
  import bghero from '@atoms/svgs/bghero.svg?raw'
  import bglines from '@atoms/svgs/Lines.svg?raw'
  import { useLocalePath } from '#i18n'

  const localePath = useLocalePath()

  // ✅ Import GSAP and ScrollTrigger
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const route = useRoute()

  // ✅ Refs
  const firstPart = ref(null)
  const stripesDiv = ref(null)
  const cityRef = ref(null)
  const cityImage = ref(null)
  const textContent = ref(null)
  const sectionRef = ref(null)
  const ctaSectionRef = ref(null)

  // ✅ Visibility states
  const isFirstPartVisible = ref(true)
  const isCityVisible = ref(true)
  const isSectionVisible = ref(true)
  const isCTAVisible = ref(false)

  const fadeClassSection = computed(() => (isSectionVisible.value ? 'fade-in' : 'fade-out'))
  const fadecta = computed(() => (isCTAVisible.value ? 'fade-in' : 'fade-out'))

  // ✅ IntersectionObserver helper
  let observers = []
  let activeTriggers = []
  let resizeRaf = null
  function observeElement(el, callback, options = { threshold: 0.1 }) {
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => callback(entry.isIntersecting), options)
    observer.observe(el)
    observers.push(observer)
  }

  // ✅ Cleanup Observers + GSAP
  function localCleanup() {
    observers.forEach(obs => obs.disconnect())
    observers = []
    activeTriggers.forEach(trigger => trigger.kill())
    activeTriggers = []
    if (typeof window !== 'undefined' && resizeRaf) {
      window.cancelAnimationFrame(resizeRaf)
      resizeRaf = null
    }
    if (cityImage.value) {
      gsap.set(cityImage.value, { clearProps: 'will-change,transform' })
    }
    if (ctaSectionRef.value) {
      const spaceship = ctaSectionRef.value.querySelector('.spaceship-wrapper')
      if (spaceship) {
        gsap.set(spaceship, { clearProps: 'will-change,transform,x,y' })
      }
    }
  }

  // ✅ Main animation logic
  function runGSAPAnimations() {
    localCleanup()

    const isDesktopView =
      typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true

    if (!isDesktopView) {
      isFirstPartVisible.value = true
      isCityVisible.value = true
      isSectionVisible.value = true
      isCTAVisible.value = true
      return
    }

    const vectorEl =
      stripesDiv.value?.querySelector('#Vector\\ 343') ||
      stripesDiv.value?.querySelector('#Vector343')

    if (firstPart.value && vectorEl) {
      observeElement(vectorEl, visible => (isFirstPartVisible.value = visible))
    }

    if (!(cityRef.value && cityImage.value && textContent.value)) return

    observeElement(cityRef.value, visible => (isCityVisible.value = visible))
    observeElement(ctaSectionRef.value, visible => (isCTAVisible.value = visible), {
      threshold: 0.3
    })

    gsap.set(cityImage.value, { willChange: 'transform' })

    // ✅ Parallax scale effect on city image
    activeTriggers.push(
      ScrollTrigger.create({
        id: 'hero-city-scale',
        trigger: cityImage.value,
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
        animation: gsap.fromTo(cityImage.value, { scale: 0.86 }, { scale: 1, ease: 'power2.out' })
      })
    )

    // ✅ Fade text on scroll
    activeTriggers.push(
      ScrollTrigger.create({
        id: 'hero-text-fade',
        trigger: cityImage.value,
        start: 'top 23%',
        toggleActions: 'play none none reverse',
        animation: gsap.fromTo(
          textContent.value,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        )
      })
    )

    // ✅ Fade out city as it scrolls away
    activeTriggers.push(
      ScrollTrigger.create({
        id: 'hero-city-fade',
        trigger: cityRef.value,
        start: 'bottom 60%',
        end: 'bottom 100%',
        scrub: true,
        animation: gsap.to(cityRef.value, {
          opacity: 0,
          ease: 'power2.out'
        })
      })
    )

    // ✅ Observe section visibility
    observeElement(sectionRef.value, visible => (isSectionVisible.value = visible), {
      threshold: 0.1,
      rootMargin: '-100px 0px -100px 0px'
    })

    if (ctaSectionRef.value) {
      const spaceship = ctaSectionRef.value.querySelector('.spaceship-wrapper')
      if (spaceship) {
        gsap.set(spaceship, { opacity: 1, x: 0, y: 0 })

        gsap.set(spaceship, { willChange: 'transform' })

        // ✅ Spaceship scroll movement
        activeTriggers.push(
          ScrollTrigger.create({
            id: 'hero-spaceship',
            trigger: ctaSectionRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            onUpdate: self => {
              gsap.set(spaceship, {
                x: -200 * self.progress,
                y: 100 * self.progress
              })
            }
          })
        )
      }
    }
  }

  onMounted(async () => {
    await nextTick()
    runGSAPAnimations()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }
  })

  watch(
    () => route.fullPath,
    async () => {
      await nextTick()
      if (gsap) {
        gsap.delayedCall(0.1, () => gsap.globalTimeline?.clear())
        ScrollTrigger.refresh()
      }
    }
  )

  function handleResize() {
    if (typeof window === 'undefined') return
    if (resizeRaf) {
      window.cancelAnimationFrame(resizeRaf)
    }
    resizeRaf = window.requestAnimationFrame(() => runGSAPAnimations())
  }

  onUnmounted(() => {
    localCleanup()
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize)
    }
  })
</script>

<style scoped>
  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(30px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .float-moon {
    animation: float 3s ease-in-out infinite;
    margin-top: 0px;
  }

  .fade-in {
    opacity: 1;
    transition: opacity 0.8s ease-in-out;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }

  .spaceship-wrapper {
    will-change: transform;
  }

  .image-fade {
    transition: opacity 1s ease-in-out;
  }

  @keyframes floatAndRotate {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }

    50% {
      transform: translate3d(5px, 3px, 0) rotate(4deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  .right-left {
    animation: floatAndRotate 3s ease-in-out infinite;
    display: inline-block;
    will-change: transform;
    transform-origin: center center;
  }

  .content {
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .section.hero {
    position: relative;
    z-index: 1;
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
    z-index: 10;
    pointer-events: none;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform, opacity;
  }

  .content {
    overflow: hidden;
  }

  .content .section {
    height: 100vh;
  }

  .svg-gradient {
    mask-image: url('/path/to/Lines.svg');
    mask-repeat: no-repeat;
    mask-size: cover;
    background: linear-gradient(to top, #ff66cc, #3399ff);
    width: 100%;
    height: 100%;
  }
</style>
