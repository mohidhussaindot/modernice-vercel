<template>
  <section
    id="services-top"
    class="relative lg:h-[800px] 2xl:h-[850px] bg-black overflow-hidden text-white"
  >
  
    <!-- Injected SVG Background -->
    <div
     
      class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      v-html="Seoherobg"
    />

    <!-- Black Overlay (fades in/out) -->
    <div
      class="
        'absolute inset-0 z-10 bg-black transition-opacity duration-700',
       
      "
    ></div>

    <!-- Flex Container -->
    <div
      class="relative z-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-12 2xl:pt-[13rem] lg:pt-[8rem] gap-12 lg:gap-[6rem]"
    >
      <!-- Text Content -->
      <div class="flex-1 flex flex-col gap-[1.5rem] max-w-[32.13rem]">
        <h1
          class="text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] font-lightbold italic leading-[1.2]"
        >
          Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
          bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
        </h1>

        <p class="text-base lg:text-[1.125rem] font-light leading-relaxed">
          Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu
          erwecken. Eine umfassende Website-Strategie verwandelt Deine kreativen
          Vorstellungen in einen beeindruckende digitalen Auftritt. Für ein
          ästhetisches Design und messbare Ergebnisse.
        </p>

        <!-- CTA Button -->
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
        >
          <Button
            class="px-[1.5rem] py-[0.625rem] 
                   text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] 
                   rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
          >
            <span
              class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text"
            >
              Termin vereinbaren
            </span>
          </Button>
        </div>
      </div>

      <!-- SVG Illustration -->
      <div
        class="flex-1 max-w-[34.5rem] w-full flex justify-center items-center"
      >
        <div
          ref="servicesHeroRef"
          class="w-full h-auto pointer-events-none services-hero-svg"
          v-html="ServicesHeroRaw"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '@atoms/Button.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Injected SVGs
import ServicesHeroRaw from '@atoms/svgs/servicesfirst.svg?raw'
import Seoherobg from '@atoms/svgs/seoherobg.svg?raw'

const servicesHeroRef = ref(null)

</script>

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
