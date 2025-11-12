<template>
  <section
    class="bg-[#020111] hidden lg:flex relative 2xl:h-[1000px] lg:h-[837px] overflow-hidden py-24 px-6 md:px-16 lg:px-0"
  >
    <div
      class="absolute inset-0 xl:scale-[1.1] w-full h-full z-0 overflow-hidden"
      ref="seoLinesContainer"
      v-html="seoherolines"
    ></div>

    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-16"
    >
      <!-- Text Column -->
      <div class="text-white flex-1 flex flex-col gap-8 min-w-[299px]">
        <h1
          class="text-[2.5rem] md:text-[3rem] xl:text-[3.75rem] italic font-lightbold leading-tight"
        >
          {{ t('seohero.desktop.title.part1') }}

          <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
            {{ t('seohero.desktop.title.highlight1') }}
          </span>
          {{ t('seohero.desktop.title.part2') }}

          <span
            class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent"
          >
            {{ t('seohero.desktop.title.highlight2') }}
          </span>
        </h1>

        <p class="font-light text-[1.425rem] w-full max-w-full">
          {{ t('seohero.desktop.description') }}
        </p>

        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] hover:from-[#25CDDA] hover:to-[#01A3FF]"
        >
          <Button
            class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] text-transparent bg-clip-text duration-300"
            >
              {{ t('seohero.desktop.button') }}
            </span>
          </Button>
        </div>
      </div>

      <!-- Illustration Column -->
      <div class="flex-1 w-full max-w-[600px]">
        <div
          ref="seocharacter"
          v-html="Seocharacter"
          class="w-full xl:h-auto pointer-events-none"
        />
      </div>
    </div>
  </section>

  <!-- Mobile version, hidden on lg and above -->
  <section class="block lg:hidden bg-[#020111] text-white pt-20 px-6 relative">
    <!-- Image at top -->
    <div class="w-full flex justify-center mb-5">
      <img
        src="@atoms/svgs/seo-character.svg"
        alt="SEO Character"
        class="w-[20rem] h-auto object-contain"
      />
    </div>

    <!-- Text content -->
    <div class="flex flex-col items-center gap-3 text-center">
      <h1 class="text-[2rem] font-semibold italic leading-snug">
        {{ t('seohero.desktop.title.part1') }}

        <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
          {{ t('seohero.desktop.title.part1') }}
        </span>
        nach
        <span
          class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent"
        >
          {{ t('seohero.desktop.title.highlight2') }}
        </span>
      </h1>

      <p class="text-[1rem] md:w-[500px] font-semilight leading-relaxed">
        {{ t('seohero.desktop.description') }}
      </p>

      <!-- Button -->
      <div
        class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA]"
      >
        <Button
          class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
        >
          <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] text-transparent bg-clip-text">
            {{ t('seohero.desktop.button') }}
          </span>
        </Button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
  import { gsap } from 'gsap'
  import Button from '@atoms/Button.vue'
  import Seocharacter from '@atoms/svgs/seo-character.svg?raw'
  import seoherolines from '@atoms/svgs/seolines.svg?raw'
  const { t } = useI18n()

  const seocharacter = ref<HTMLElement | null>(null)
  const seoLinesContainer = ref<HTMLElement | null>(null)
  let tl: gsap.core.Timeline | null = null

  onMounted(async () => {
    await nextTick()

    const lines = seoLinesContainer.value?.querySelector('svg')
    if (lines) {
      Object.assign(lines.style, {
        display: 'block',
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        scale: '1.2'
      })
    }

    const character = seocharacter.value?.querySelector('#Character')
    if (character) {
      gsap.set(character, { transformOrigin: '50% 50%' })
      tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: 'sine.inOut' }
      })

      tl.to(character, { y: -15, duration: 2 }).to(character, { y: 0, duration: 2 })
    }
  })

  onBeforeUnmount(() => {
    if (tl) {
      tl.kill()
      tl = null
    }
  })
</script>
