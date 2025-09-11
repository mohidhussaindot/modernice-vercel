<template>
  <section id="services-top" class="relative h-[902px] bg-black overflow-hidden">
    <div
      class="absolute inset-0 bg-no-repeat left-[3rem] bg-[length:100%]"
      style="background-image: url('/images/services-hero-bg.png');"
    ></div>

    <div
      class="absolute z-10 flex flex-col gap-[1.5rem] w-[36.13rem] h-[22.75rem] left-[7.06rem] top-[13.06rem]"
    >
      <h1 class="text-white text-[3.8rem] font-lightbold italic leading-[1]">
        Von der ersten <span class="text-[#00FFB3]">Skizze</span><br />
        bis zum letzten <span class="text-[#00FFB3]">Pixel</span>
      </h1>

      <p class="text-white text-base ">
        Du hast eine Vision und wir die Leidenschaft, sie zum Leben zu erwecken.
        Eine umfassende Website-Strategie verwandelt Deine kreativen Vorstellungen
        in einen beeindruckende digitalen Auftritt. Für ein ästhetisches Design
        und messbare Ergebnisse.
      </p>

      <div
        class="relative inline-block rounded-[0.5rem] p-[0.0625rem] 
               bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] 
               w-[13.38rem] h-[2.75rem] text-[1rem]"
      >
        <Button
          type="button"
          class="relative w-full h-full rounded-[0.44rem] py-[0.5rem] px-[1rem] 
                 bg-black font-semibold border-none transition duration-300 
                 hover:bg-[#AFE639] hover:scale-105 hover:cursor-pointer"
        >
          <span
            class="bg-gradient-to-r hover:text-black from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] 
                   bg-clip-text text-transparent"
          >
            Termin vereinbaren
          </span>
        </Button>
      </div>
    </div>

    <div class="absolute left-[36rem] w-[34.5rem] h-[45.94rem] top-[6.81rem] pointer-events-auto">
      <div
        ref="servicesHeroRef"
        class="absolute left-[12rem] top-[6rem]"
        v-html="ServicesHeroRaw"
      />
    </div>
  </section>
</template>


<script setup>
import Button from '@atoms/Button.vue'
import { ref, onMounted, nextTick } from 'vue'
import ServicesHeroRaw from '@atoms/svgs/servicesfirst.svg?raw'
import { gsap } from 'gsap'

const servicesHeroRef = ref(null)

onMounted(async () => {
  await nextTick()

  const coin1 = servicesHeroRef.value?.querySelector('#coin1')
  const coin2 = servicesHeroRef.value?.querySelector('#coin2')

  if (coin1) {
    gsap.to(coin1, {
      y: -40,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }

  if (coin2) {
    gsap.to(coin2, {
      y: -40,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
     
    })
  }
})
</script>
