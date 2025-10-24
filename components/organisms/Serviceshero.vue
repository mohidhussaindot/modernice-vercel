<template>
  <div
    ref="servicesTopRef"
    id="services-top"
    class="relative min-h-screen hidden lg:flex bg-black overflow-hidden text-white"
  >
    <!-- Background SVG -->
    <div
      class="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden"
      v-html="Seoherobg"
    />

    <div
      ref="overlayRef"
      class="absolute inset-0 z-10 bg-black opacity-0 pointer-events-none transition-opacity duration-700"
    ></div>

    <div ref="cockpitRef" class="cockpit-container">
      <img src="@atoms/svgs/cockpit.svg" alt="Cockpit" class="cockpit-img" />
    </div>

    <div ref="pinWrapRef" class="relative z-20 w-full flex justify-center">
      <div
        ref="contentRef"
        class="relative scale-[0.5] pb-2 origin-center z-20 max-w-7xl w-full px-6"
      >
        <div class="flex flex-col pt-20 lg:flex-row justify-between gap-12 lg:gap-[6rem]">
          <!-- Text Section -->
          <div class="flex-1 flex flex-col gap-[1.5rem] max-w-[32.13rem] mx-auto">
            <h1
              class="md:text-[2.8rem] xl:text-[3.8rem] font-lightbold italic leading-[1.2] text-center lg:text-left"
            >
              Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
              bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
            </h1>
            <p
              class="text-base xl:text-[1.125rem] md:text-[0.9rem] font-light leading-relaxed text-center lg:text-left"
            >
              Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu erwecken. Eine
              umfassende Website‑Strategie verwandelt Deine kreativen Vorstellungen in einen
              beeindruckenden digitalen Auftritt. Für ein ästhetisches Design und messbare
              Ergebnisse.
            </p>
            <div
              class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8] mx-auto lg:mx-0"
            >
              <div
                ref="buttonWrapperRef"
                class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8] mx-auto lg:mx-0"
              >
                <NuxtLink to="/appointment">
                  <Button
                    class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
                  >
                    <span
                      class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text"
                    >
                      Termin vereinbaren
                    </span>
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- SVG / Hero Section -->
          <div class="flex-1 max-w-[34.5rem] w-full flex justify-center">
            <div
              ref="servicesHeroRef"
              class="w-full h-auto pointer-events-none services-hero-svg"
              v-html="ServicesHeroRaw"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile fallback -->
  <div
    id="services-top-mobile"
    class="relative block md:hidden bg-black text-white overflow-hidden"
  >
    <div class="absolute inset-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
      <img
        src="@atoms/svgs/seoherobg.svg"
        alt="Background SVG"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 z-10 bg-black opacity-80"></div>
    <div class="relative z-20 flex flex-col items-center text-center px-6 pt-24 pb-16 gap-8">
      <h1 class="text-5xl font-semibold italic leading-tight">
        Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
        bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
      </h1>
      <p class="text-base font-light leading-relaxed">
        Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu erwecken. Eine umfassende
        Website‑Strategie verwandelt Deine kreativen Vorstellungen in einen beeindruckenden
        digitalen Auftritt. Für ein ästhetisches Design und messbare Ergebnisse.
      </p>
      <div
        class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
      >
        <Button
          class="px-[1.5rem] py-[0.625rem] text-[1rem] rounded-[10px] bg-black bg-opacity-90 text-white transition"
        >
          <span class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text">
            Termin vereinbaren
          </span>
        </Button>
      </div>
      <div class="w-full max-w-[20rem] mt-8">
        <img src="@atoms/svgs/servicesfirst.svg" alt="Services Hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import Button from '@atoms/Button.vue'
  import ServicesHeroRaw from '@atoms/svgs/servicesfirst.svg?raw'
  import Seoherobg from '@atoms/svgs/seoherobg.svg?raw'

  gsap.registerPlugin(ScrollTrigger)

  const cockpitRef = ref(null)
  const contentRef = ref(null)
  const servicesTopRef = ref(null)
  const buttonWrapperRef = ref(null)

  onMounted(async () => {
    await nextTick()

    const cockpitEl = cockpitRef.value
    const contentEl = contentRef.value
    const topEl = servicesTopRef.value
    const buttonEl = buttonWrapperRef.value
    const animationEnd = 500

    const setButtonState = enabled => {
      if (buttonEl) buttonEl.style.pointerEvents = enabled ? 'auto' : 'none'
    }

    const currentScroll = window.scrollY
    const sectionTop = topEl?.offsetTop ?? 0
    setButtonState(currentScroll >= sectionTop + animationEnd)

    ScrollTrigger.create({
      trigger: topEl,
      start: 'top top',
      end: '+=1200',
      pin: true,
      scrub: 1.4,
      anticipatePin: 1
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: topEl,
          start: 'top top',
          end: `+=${animationEnd}`,
          scrub: 1.2,
          onUpdate: self => setButtonState(self.progress >= 1)
        }
      })
      .to(
        cockpitEl,
        {
          scale: 1.1,
          autoAlpha: 0,
          ease: 'power1.out',
          transformOrigin: 'center',
          duration: 2,
          delay: 0.2
        },
        0
      )
      .to(
        contentEl,
        {
          scale: 1,
          ease: 'power2.out',
          transformOrigin: 'center',
          duration: 1.8,
          delay: 0.2
        },
        0
      )
  })

  onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
</script>

<style scoped>
  .cockpit-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    pointer-events: none;
    will-change: transform, opacity;
  }

  .cockpit-img {
    display: block;
    width: 100%;
    height: 1000px;
    object-fit: cover;
    pointer-events: none;
    transform-origin: center top;
    will-change: transform, opacity;
  }

  [ref='contentRef'] {
    will-change: transform;
    transform-style: preserve-3d;
  }

  #services-top {
    background-color: black !important; /* make sure it’s always black */
    min-height: 100vh;
    height: auto;
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  #services-top,
  .pin-wrap,
  .cockpit-container,
  [ref='contentRef'] {
    transform: translateZ(0);
    will-change: transform, opacity;
  }
  #services-top,
  .cockpit-container,
  [ref='contentRef'],
  .services-hero-svg {
    will-change: transform, opacity;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
</style>

<style>
  @keyframes floatUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
  }

  .services-hero-svg #coin1,
  .services-hero-svg #coin2 {
    animation: floatUpDown 3s ease-in-out infinite;
  }
</style>
