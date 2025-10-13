<template>
  <div class="text-white overflow-hidden sm:block hidden bg-[#020111]">
    <div
      ref="firstPart"
      :class="[isFirstPartVisible ? 'fade-in' : 'fade-out']"
      class="relative w-full overflow-hidden"
    >
      <div class="w-full" v-html="bghero"></div>
      <div
        ref="stripesDiv"
        class="absolute inset-0 pointer-events-none z-10"
        v-html="stripessvg"
      ></div>

      <div class="flex justify-center">
        <div
          class="absolute z-30 inset-0 flex md:pt-[9rem] xl:pt-[18.125rem] lg:pt-[11.25rem] pl-4 sm:pl-6 md:pl-[3rem] lg:pl-[5rem] xl:pl-[7.1875rem]"
        >
          <div
            class="text-white flex flex-col w-full max-w-none sm:max-w-[32rem] md:max-w-[29rem] xl:max-w-[34.875rem]"
          >
            <h1
              class="font-bold leading-tight text-[1.75rem] sm:text-[2.25rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.375rem] 2xl:text-[4.5rem] w-full xl:w-[34.0625rem]"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]"
              >
                Entdecke<br />Neue Horizonte
              </span>
            </h1>

            <p
              class="mt-[1.5rem] font-light leading-relaxed text-[1rem] sm:text-[1.125rem] md:text-[1rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.5rem] w-full xl:w-[34.875rem]"
            >
              Kreatives Webdesign, meisterhafte Softwareentwicklung und bahnbrechende
              AI-Technologien, die dein Geschäft auf die Überholspur bringen.
            </p>

            <div
              class="mt-[2rem] inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] hover:from-[#6BE0FF] hover:to-[#3BB1FF]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text duration-300"
                  >Erzähl mir mehr.</span
                >
              </Button>
            </div>
          </div>
          <div class="float-moon md:w-252 w-full" v-html="moonSVGRaw"></div>
        </div>
      </div>
    </div>

    <div
      ref="cityRef"
      :class="[
        'relative text-white overflow-hidden w-full grid place-items-center px-1 sm:px-1.5 transition-opacity duration-700'
      ]"
    >
      <div class="w-full max-w-[65.9375rem]">
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
                KI-gesteuerte Geschäftslösungen
              </h1>
              <div class="mx-auto grid">
                <p
                  class="text-[0.95rem] 2xl:text-[1.2rem] sm:text-[1.05rem] md:text-[1rem] xl:max-w-[50.25rem] lg:w-[800px] lg:text-[1rem]"
                >
                  Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz (KI), Großen
                  Sprachmodellen (LLMs) und Maschinellem Lernen (ML). Diese Technologien verändern
                  die Art und Weise, wie wir arbeiten und wachsen.
                </p>
                <div
                  class="inline-block mx-auto mt-[2rem] hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
                >
                  <Button
                    class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
                  >
                    <span
                      class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
                      >Prozessoptimierung durch KI</span
                    >
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      ref="sectionRef"
      :class="[
        'flex 2xl:mt-[-10rem] xl:mt-[-15rem] overflow-visible xl:px-[7.1875rem] px-4  md:pl-10  gap-12 md:gap-0 lg:gap-0 transition-opacity duration-700 relative z-20',
        fadeClassSection
      ]"
    >
      <div
        class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-full xl:min-w-[500px] lg:w-[597px] md:w-[500px]"
      >
        <h1
          class="font-semibold italic text-[1.75rem] sm:text-[2.125rem] md:text-[2rem] lg:text-[2.625rem] leading-tight"
        >
          Innovation <br />
          durch Design und Technologie
        </h1>
        <p class="font-light 2xl:text-[1.2rem] lg:text-[1rem] sm:text-[1.0625rem] md:text-[1rem]">
          In einer erfolgreichen Web-Lösung verschmelzen Design und Entwicklung zu einem
          harmonischen Ganzen. Die nahtlose Integration von Frontend und Backend, ergänzt durch den
          Einsatz modernster Technologien wie Künstlicher Intelligenz, Großen Sprachmodellen (LLM)
          und Machine Learning, ermöglicht die Schaffung von Produkten, die den Horizont des
          Möglichen erweitern und das Nutzererlebnis auf ein ungekanntes Niveau heben.
        </p>
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#FFE501] to-[#FFA901] hover:from-[#FFA901] hover:to-[#FFE501]"
        >
          <Button
            class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#FFA901] to-[#FFE501] text-transparent bg-clip-text duration-300"
              >Schaffe Außergewöhnliches</span
            >
          </Button>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <img
          src="/images/rocketmoon.png"
          alt="Rocket Moon"
          class="xl:w-[650.4355025557797px] 2xl:w-[750.4355025557797px] w-full h-full right-left object-contain select-none pointer-events-none"
        />
      </div>
    </div>

    <div
      ref="ctaSectionRef"
      :class="[`cta-section mt-[-10rem] relative h-[69.625rem] overflow-hidden w-full`, fadecta]"
    >
      <div
        class="absolute inset-0 flex justify-center pt-[5.5%] pl-[10%] pointer-events-none select-none z-0"
        style="transform: scale(3) rotate(2.9deg); transform-origin: center"
        v-html="bglines"
      ></div>

      <div class="relative mx-auto max-w-7xl w-full z-10">
        <div class="relative flex justify-center items-center">
          <div
            class="relative z-10 md:top-[19.438rem] xl:top-[23.438rem] 2xl:top-[25.438rem] flex flex-col gap-[1.5rem] xl:w-[37.125rem] lg:w-[30rem] md:w-[30rem] max-h-[25.375rem]"
          >
            <h2
              class="font-bold italic text-white leading-tight text-[2.25rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[2.2rem] 2xl:text-[3rem] xl:text-[2.7rem]"
            >
              Sei der Wandel, den du in deiner Branche sehen möchtest.
            </h2>

            <p
              class="font-light 2xl:text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.24rem]"
            >
              Wir transformieren Daten in Einblicke, Herausforderungen in Chancen. Mit unserer
              Strategie werden Künstliche Intelligenz und deine Ambitionen zu treibenden Kräften.
              Lass die Zukunft nicht warten.
            </p>

            <div
              class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] hover:from-[#3BE8E8] hover:to-[#AFE639]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[0.8rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] text-transparent bg-clip-text duration-300"
                  >KI-Beratung</span
                >
              </Button>
            </div>
          </div>

          <div
            class="absolute md:w-[350.5314333374696px] md:pt-10 2xl:pt-4 xl:pt-2 xl:w-[534.5314333374696px] right-0 top-0 pointer-events-none z-10 spaceship-wrapper"
            style="will-change: transform"
            v-html="rocket"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <section class="text-white block md:hidden overflow-hidden bg-[#020111]">
    <div class="relative mt-30">
      <img
        alt="rocketmoonhero"
        class="block md:hidden absolute right-[-85%] top-12 w-[200%] max-w-none"
        src="@atoms/svgs/rocket-moon-hero.svg"
      />

      <!-- mobile -->

      <!-- Text Content -->
      <div class="relative px-3 pt-50 flex flex-col">
        <h1 class="text-[2rem] font-bold mb-[0.5rem] leading-snug">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]"
          >
            Entdecke<br />Neue Horizonte
          </span>
        </h1>

        <p class="w-[300px] text-[0.9rem] font-light leading-relaxed">
          Kreatives Webdesign, meisterhafte Softwareentwicklung und bahnbrechende AI-Technologien,
          die dein Geschäft auf die Überholspur bringen.
        </p>

        <div
          class="mt-4 inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] hover:from-[#6BE0FF] hover:to-[#3BB1FF]"
        >
          <Button
            class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text duration-300"
              >Erzähl mir mehr.</span
            >
          </Button>
        </div>
      </div>
    </div>

    <div class="relative mt-100 h-[40rem] bg-black">
      <img src="/first-three-sect-img/city.png" class="w-full h-full object-cover" alt="City" />

      <!-- Text overlay -->
      <div
        class="absolute items-center text-center inset-0 flex flex-col mt-70 px-4 sm:px-8 text-white bg-opacity-40"
      >
        <h1 class="text-[2rem] font-bold mb-[rem] leading-snug">
          KI-gesteuerte Geschäftslösungen
        </h1>
        <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
          Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz (KI), Großen Sprachmodellen
          (LLMs) und Maschinellem Lernen (ML). Diese Technologien verändern die Art und Weise, wie
          wir arbeiten und wachsen.
        </p>

        <div
          class="inline-block mt-4 hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
        >
          <Button
            class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
              >Prozessoptimierung durch KI</span
            >
          </Button>
        </div>
      </div>
    </div>

    <!-- 3rd div -->
    <div class="h-[30rem] flex items-center px-5">
      <div class="flex flex-col items-center text-center gap-6 max-w-full">
        <h1 class="text-[2rem] font-bold mb-[0.5rem] leading-snug italic">
          Innovation <br />
          durch Design und Technologie
        </h1>
        <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
          In einer erfolgreichen Web-Lösung verschmelzen Design und Entwicklung zu einem
          harmonischen Ganzen. Die nahtlose Integration von Frontend und Backend, ergänzt durch den
          Einsatz modernster Technologien wie Künstlicher Intelligenz, Großen Sprachmodellen (LLM)
          und Machine Learning, ermöglicht die Schaffung von Produkten, die den Horizont des
          Möglichen erweitern und das Nutzererlebnis auf ein ungekanntes Niveau heben.
        </p>
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#FFE501] to-[#FFA901] hover:from-[#FFA901] hover:to-[#FFE501]"
        >
          <Button
            class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#FFA901] to-[#FFE501] text-transparent bg-clip-text duration-300"
              >Schaffe Außergewöhnliches</span
            >
          </Button>
        </div>
      </div>
    </div>

    <!-- 4th div -->
    <div class="h-[30rem] flex items-center px-5">
      <div
        class="relative z-10 items-center text-center flex flex-col gap-6 max-w-full"
        style="margin-top: 0"
      >
        <h2 class="text-[2rem] font-bold mb-[0.5rem] leading-snug italic">
          Sei der Wandel, den du in deiner Branche sehen möchtest.
        </h2>
        <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
          Wir transformieren Daten in Einblicke, Herausforderungen in Chancen. Mit unserer Strategie
          werden Künstliche Intelligenz und deine Ambitionen zu treibenden Kräften. Lass die Zukunft
          nicht warten.
        </p>
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] hover:from-[#3BE8E8] hover:to-[#AFE639]"
        >
          <Button
            class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#AFE639] to-[#3BE8E8] text-transparent bg-clip-text duration-300"
              >KI-Beratung</span
            >
          </Button>
        </div>
      </div>
    </div>

    <!-- 5th div -->
    <div class="h-[20rem] flex items-center px-5">
      <div class="flex flex-col items-center text-center gap-6 max-w-full">
        <h1 class="text-[2rem] font-bold mb-[0.5rem] leading-snug italic">
          Ready to take your Online Presence to the next level?
        </h1>
        <p class="max-w-3xl text-[0.9rem] font-light leading-relaxed">
          We'll work with you to plan and create a website that aligns with your business goals and
          resonates with your target audience. Only if we become friends of course!
        </p>
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#38EF61] to-[#44E5C8] hover:from-[#44E5C8] hover:to-[#38EF61]"
        >
          <Button
            class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text duration-300"
              >Get a Website Strategy</span
            >
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import ServicesHero from '@organisms/Serviceshero.vue'
  import Button from '@atoms/Button.vue'
  import moonSVGRaw from '@atoms/svgs/rocket-moon-hero.svg?raw'
  import stripessvg from '@atoms/svgs/herosectionstripes.svg?raw'
  import bghero from '@atoms/svgs/bghero.svg?raw'
  import rocket from '@atoms/svgs/leftsectionsvg.svg?raw'
  import bglines from '@atoms/svgs/Lines.svg?raw'
  import ServicesSlider from './ServicesSlider.vue'
  import Servicesmain from './Servicesmain.vue'
  import Servicessecond from '@organisms/Servicessecond.vue'

  gsap.registerPlugin(ScrollTrigger)

  const route = useRoute() // 👈 Track route changes

  const firstPart = ref(null)
  const stripesDiv = ref(null)
  const cityRef = ref(null)
  const cityImage = ref(null)
  const textContent = ref(null)
  const sectionRef = ref(null)
  const ctaSectionRef = ref(null)
  const contentWrapperRef = ref(null)

  const isFirstPartVisible = ref(true)
  const isCityVisible = ref(true)
  const isSectionVisible = ref(true)
  const isCTAVisible = ref(false)

  const fadeClassSection = computed(() => (isSectionVisible.value ? 'fade-in' : 'fade-out'))
  const fadecta = computed(() => (isCTAVisible.value ? 'fade-in' : 'fade-out'))

  let observers = []

  function runGSAPAnimations() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // Kill existing triggers

    observers.forEach(obs => obs.disconnect()) // Disconnect any old observers
    observers = []

    // === HERO STRIPES OBSERVER ===
    if (firstPart.value && stripesDiv.value) {
      const vector343 =
        stripesDiv.value.querySelector('#Vector\\ 343') ||
        stripesDiv.value.querySelector('#Vector343')
      if (vector343) {
        const vectorObserver = new IntersectionObserver(
          ([entry]) => {
            isFirstPartVisible.value = entry.isIntersecting
          },
          { threshold: 0.1 }
        )
        vectorObserver.observe(vector343)
        observers.push(vectorObserver)
      }
    }

    // === CITY SECTION ANIMATIONS ===
    if (cityRef.value && cityImage.value && textContent.value) {
      const cssFadeObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) cityImage.value.classList.add('opacity-100')
        },
        { threshold: 0.01 }
      )
      cssFadeObserver.observe(cityImage.value)
      observers.push(cssFadeObserver)

      gsap.fromTo(
        cityImage.value,
        { scale: 0.86 },
        {
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cityImage.value,
            start: 'top bottom',
            end: 'top 40%',
            scrub: 1
          }
        }
      )

      gsap.fromTo(
        textContent.value,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cityImage.value,
            start: 'top 23%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.to(cityRef.value, {
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cityRef.value,
          start: 'bottom 60%',
          end: 'bottom 100%',
          scrub: true
        }
      })

      const fadeObserver = new IntersectionObserver(
        ([entry]) => {
          isCityVisible.value = entry.isIntersecting
        },
        { threshold: 0.1 }
      )
      fadeObserver.observe(cityRef.value)
      observers.push(fadeObserver)

      const observer = new IntersectionObserver(
        ([entry]) => {
          isCTAVisible.value = entry.isIntersecting
        },
        { threshold: 0.3 }
      )
      if (ctaSectionRef.value) observer.observe(ctaSectionRef.value)
    }

    // === SECTION OBSERVER ===
    if (sectionRef.value) {
      const sectionObserver = new IntersectionObserver(
        ([entry]) => {
          isSectionVisible.value = entry.isIntersecting
        },
        {
          threshold: 0.1,
          rootMargin: '-100px 0px -100px 0px'
        }
      )
      sectionObserver.observe(sectionRef.value)
      observers.push(sectionObserver)
    }

    // === SPACESHIP ANIMATION ===
    if (ctaSectionRef.value) {
      const section = ctaSectionRef.value
      const spaceship = section.querySelector('.spaceship-wrapper')
      if (spaceship) {
        gsap.set(spaceship, { opacity: 1, x: 0, y: 0 })
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: self => {
            const x = -200 * self.progress
            const y = 100 * self.progress
            gsap.to(spaceship, {
              x,
              y,
              ease: 'none',
              overwrite: 'auto',
              duration: 0.1
            })
          }
        })
      }
    }
  }

  // Run once on mount
  onMounted(() => {
    runGSAPAnimations()
  })

  // Re-run when route changes (e.g., coming from another page)
  watch(
    () => route.fullPath,
    () => {
      nextTick(() => {
        runGSAPAnimations()
      })
    }
  )

  onUnmounted(() => {
    observers.forEach(obs => obs.disconnect())
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
    margin-top: -80px;
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
</style>
