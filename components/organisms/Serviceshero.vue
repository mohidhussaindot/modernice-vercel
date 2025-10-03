<template>
  <div
    ref="servicesTopRef"
    id="services-top"
    class="relative min-h-[800px] hidden lg:flex bg-black overflow-hidden text-white"
  >
    <!-- Background SVG -->
    <div
      class="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden"
      v-html="Seoherobg"
    />

    <!-- Black overlay (will fade out with cockpit) -->
    <div
      ref="overlayRef"
      class="absolute inset-0 z-10  transition-opacity duration-700 pointer-events-none"
    ></div>

    <!-- COCKPIT IMAGE OVERLAY (fixed) -->
    <div ref="cockpitRef" class="cockpit-container">
      <img src="@atoms/svgs/cockpit.svg" alt="Cockpit" class="cockpit-img" />
    </div>

    <!-- PIN WRAP: this wrapper will be pinned during the animation -->
    <div ref="pinWrapRef" class="relative z-20 w-full">
      <!-- HERO CONTENT -->
      <div
        class="relative z-20 flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-6 pt-12 2xl:pt-[13rem] lg:pt-[8rem] gap-12 lg:gap-[6rem]"
      >
        <div class="flex-1 flex flex-col gap-[1.5rem] max-w-[32.13rem]">
          <h1
            class="text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] font-lightbold italic leading-[1.2]"
          >
            Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
            bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
          </h1>

          <p class="text-base lg:text-[1.125rem] font-light leading-relaxed">
            Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu erwecken. Eine umfassende
            Website-Strategie verwandelt Deine kreativen Vorstellungen in einen beeindruckenden
            digitalen Auftritt. Für ein ästhetisches Design und messbare Ergebnisse.
          </p>

          <div
            class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
          >
            <Button
              class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
            >
              <span
                class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text"
              >
                Termin vereinbaren
              </span>
            </Button>
          </div>
        </div>

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

  <!-- MOBILE (unchanged) -->
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
        Website-Strategie verwandelt Deine kreativen Vorstellungen in einen beeindruckenden
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
  import { ref, onMounted, onUnmounted } from 'vue'
  import Button from '@atoms/Button.vue'
  import ServicesHeroRaw from '@atoms/svgs/servicesfirst.svg?raw'
  import Seoherobg from '@atoms/svgs/seoherobg.svg?raw'

  /* GSAP */
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const servicesHeroRef = ref(null)
  const servicesTopRef = ref(null)
  const pinWrapRef = ref(null)
  const cockpitRef = ref(null)
  const overlayRef = ref(null)

  let mm = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      // safety guards
      if (!servicesTopRef.value || !pinWrapRef.value || !cockpitRef.value) return

      gsap.set(cockpitRef.value, {
        scale: 1,
        opacity: 1,
        transformOrigin: 'center top',
      })
      if (overlayRef.value) {
        gsap.set(overlayRef.value, { opacity: 1, willChange: 'opacity' })
      }

      // helper to compute an appropriate scroll distance (dynamic)
      const computeScrollDistance = () => {
        const elH = servicesTopRef.value.offsetHeight || window.innerHeight
        // at least 450px, or 85% of the section height — adjust factor if you want longer/shorter
        return Math.max(450, Math.round(elH * 0.85))
      }

      // Create timeline that will run while pinning the component
      const tl = gsap.timeline({
      scrollTrigger: {
  trigger: servicesTopRef.value,
  start: 'top +=150',
  end: () => '+=' + computeScrollDistance(),
  scrub: 0.8,
  fastScrollEnd: true
}
      })

      tl.to(
        cockpitRef.value,
        {
          scale: 1.9,
       
          opacity: 0,
          ease: 'power1.out'
        },
        0
      )

      if (overlayRef.value) {
        tl.to(
          overlayRef.value,
          {
            opacity: 0,
     
            ease: 'power1.out'
          },
          0
        )
      }

      // cleanup for this matchMedia context
      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(st => st.kill && st.kill())
      }
    })

    // no cockpit on smaller screens (component's lg:hidden already prevents it), but ensure nothing lingers
    mm.add('(max-width: 1023px)', () => {
      if (cockpitRef.value) {
        gsap.set(cockpitRef.value, { autoAlpha: 0 })
      }
      return () => {}
    })
  })

  onUnmounted(() => {
    if (mm) {
      mm.revert()
      mm = null
    } else {
      ScrollTrigger.getAll().forEach(st => st.kill && st.kill())
    }
  })
</script>

<style scoped>
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

  /* cockpit overlay (fixed) — top of stacking order so it visually sits above the hero content */
.cockpit-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30; /* higher than hero text (20) */
  pointer-events: none;
  will-change: transform, opacity;
}

  /* Adjust cockpit image height/cover as needed — this combo keeps aspect and prevents sudden reflows */
  .cockpit-img {
    display: block;
    width: 100%;
    height: 1000px; /* tweak to frame the cockpit; larger value if you want more of the graphic visible */
    object-fit: cover;
    pointer-events: none;
    transform-origin: center top;
  }
</style>
