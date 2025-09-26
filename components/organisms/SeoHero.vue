<template>
  <section
    class="bg-[#020111] hidden lg:flex relative 2xl:h-[1000px] lg:h-[837px] overflow-hidden py-24 px-6 md:px-16 lg:px-10 xl:px-23"
  >
    <div
      class="absolute inset-0 w-full h-full z-0 overflow-hidden"
      ref="seoLinesContainer"
      v-html="seoherolines"
    ></div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col lg:flex-row items-center 2xl:gap-50 gap-4 xl:gap-16">
      <!-- Text Column -->
      <div class="text-white max-w-[599px] flex-1 flex flex-col gap-8">
        <h1
          class="text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] italic font-lightbold leading-tight"
        >
          Bereit für den
          <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
            Startschuss
          </span>
          nach
          <span
            class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent"
          >
            Oben?
          </span>
        </h1>

        <p class="font-light text-[1.425rem] max-w-[37.5rem]">
        Vertraue auf einen bedachten und strategischen Prozess, der von Anfang an effektive SEO-Maßnahmen in die Entwicklung mit einbezieht. SEO muss kein [after-thought] sein.
        </p>

        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] hover:from-[#25CDDA] hover:to-[#01A3FF]"
        >
          <Button
            class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] text-transparent bg-clip-text duration-300"
              >Startbefehl geben</span
            >
          </Button>
        </div>
      </div>

      <div class="flex-1 w-full max-w-[28rem] xl:max-w-[32rem]">
        <div ref="seocharacter" v-html="Seocharacter" class="w-full h-auto pointer-events-none" />
      </div>
    </div>
  </section>

    <!-- Mobile version, hidden on lg and above -->
  <section class="block lg:hidden bg-[#020111] text-white py-16 px-6 relative">
    <!-- Image at top -->
    <div class="w-full flex justify-center mb-10">
      <img
        src="@atoms/svgs/seo-character.svg"
        alt="SEO Character"
        class="w-[16rem] h-auto object-contain"
      />
    </div>

    <!-- Text content -->
    <div class="flex flex-col items-center gap-6 text-center">
      <h1 class="text-[2rem] font-lightbold italic leading-snug">
        Bereit für den
        <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
          Startschuss
        </span>
        nach
        <span class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent">
          Oben?
        </span>
      </h1>

      <p class="text-[1.125rem] font-light leading-relaxed">
       Vertraue auf einen bedachten und strategischen Prozess, der von Anfang an effektive SEO-Maßnahmen in die Entwicklung mit einbezieht. SEO muss kein [after-thought] sein.
      </p>

      <!-- Button -->
      <div
        class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA]"
      >
        <Button
          class="px-[1.5rem] py-[0.625rem] text-[1rem] rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
        >
          <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] text-transparent bg-clip-text">
            Startbefehl geben
          </span>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref, nextTick } from 'vue'
  import Button from '@atoms/Button.vue'
  import Seocharacter from '@atoms/svgs/seo-character.svg?raw'
  import seoherolines from '@atoms/svgs/seolines.svg?raw'
  import { gsap } from 'gsap'

  const seocharacter = ref(null)
  const seoLinesContainer = ref(null)

  onMounted(async () => {
    await nextTick()

    if (seoLinesContainer.value) {
      const svg = seoLinesContainer.value.querySelector('svg')
      if (svg) {
        svg.setAttribute('width', '100%')
        svg.setAttribute('height', '100%')
        svg.style.display = 'block'
        svg.style.maxWidth = '100%'
        svg.style.width = '100%'
        svg.style.height = '100%'
        svg.style.objectFit = 'cover'
        svg.style.scale = '1.2'
      }
    }

    // Animate character (rocket wiggle)
    if (seocharacter.value) {
      const characterElement = seocharacter.value.querySelector('#Character')
      if (characterElement) {
        gsap.set(characterElement, { transformOrigin: '50% 50%' })

        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: 'sine.inOut' }
        })

        tl.to(characterElement, { y: -15, duration: 2 }).to(characterElement, { y: 0, duration: 2 })
      }
    }
  })
</script>
