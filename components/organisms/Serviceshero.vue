<template>
  <section
    id="services-top"
    class="relative bg-black overflow-hidden h-auto md:h-auto lg:h-[56.375rem] xl:h-[56.375rem]"
  >
    <div
      class="absolute inset-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('/images/services-hero-bg.png');"
    ></div>

    <div
      class="relative h-full w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start"
    >
      <div
        class="flex flex-col gap-[1.5rem] px-[2rem] pt-[3rem] md:pt-[3rem] md:px-[2rem] md:items-center md:text-center lg:pt-[13rem] lg:px-[5rem] lg:items-start lg:text-left min-w-[unset] md:min-w-full lg:min-w-[32.13rem] md:w-full lg:w-auto"
      >
        <h1 class="text-white text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] font-lightbold italic leading-[1]">
          Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
          bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
        </h1>

        <p class="text-white text-base max-w-full md:w-[36.13rem]">
          Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu
          erwecken. Eine umfassende Website-Strategie verwandelt Deine kreativen
          Vorstellungen in einen beeindruckende digitalen Auftritt. Für ein
          ästhetisches Design und messbare Ergebnisse.
        </p>

        <div
          class="inline-block hover:scale-105 hover:transition transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
        >
          <Button
            class="px-[1.5rem] py-[0.625rem] 
                   text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 
                   rounded-[10px] bg-black bg-opacity-90
                   transition hover:cursor-pointer 
                   text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] 
                     text-transparent bg-clip-text duration-300"
            >
              Termin vereinbaren
            </span>
          </Button>
        </div>
      </div>

      <div
        class="w-full md:w-full lg:w-[34.5rem] pt-[3rem] md:pt-[1.5rem] lg:pt-[13.75rem] h-[45.94rem] pointer-events-auto flex justify-center"
      >
        <div
          ref="servicesHeroRef"
          class="relative services-hero-svg"
          v-html="ServicesHeroRaw"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '@atoms/Button.vue'
import { ref, onMounted, nextTick } from 'vue'
import ServicesHeroRaw from '@atoms/svgs/servicesfirst.svg?raw'

const servicesHeroRef = ref(null)

onMounted(async () => {
  await nextTick()
})
</script>

<style>
@keyframes floatUpDown {
  0%, 100% {
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
