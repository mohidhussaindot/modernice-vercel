<template>
  <section class="relative bg-black overflow-hidden">
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto lg:px-4 xl:px-0 gap-12 md:gap-20"
    >
      <!-- TEXT CONTENT -->
      <div
        class="text-white xl:pt-20 xl:max-w-[38rem] lg:max-w-[28rem] md:max-w-[32rem] flex flex-col gap-[1.8rem] md:items-center text-center lg:items-start lg:text-left"
      >
        <h1 class="text-[2rem] md:text-[3rem] xl:text-[3.8rem] font-semibold italic">
          <span class="text-green-500">{{ $t('servicesSecond.headline.highlight1') }}</span>
          {{ $t('servicesSecond.headline.part1') }}
          <span class="text-green-500">{{ $t('servicesSecond.headline.highlight2') }}</span>
        </h1>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight leading-relaxed">
          {{ $t('servicesSecond.paragraph1') }}
        </p>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight leading-relaxed">
          {{ $t('servicesSecond.paragraph2') }}
        </p>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight leading-relaxed">
          {{ $t('servicesSecond.paragraph3') }}
        </p>
      </div>

      <!-- SVG CONTENT -->
      <div class="hidden lg:flex lg:items-center xl:pt-20 lg:pt-8 flex-shrink-0">
        <div
          ref="services2"
          v-html="servicesscond"
          class="w-full max-w-[30rem] xl:max-w-[38rem] h-auto services-hero-svg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import servicesscond from '@atoms/svgs/servicessecond.svg?raw'
  import { onMounted, ref } from 'vue'

  const services2 = ref(null)

  onMounted(() => {
    const gears = services2.value?.querySelector('#Gears')
    if (!gears) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          gears.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(gears)
  })
</script>

<style>
  @keyframes shadowPulse {
    0%,
    100% {
      stroke: #ffff33;
      filter: drop-shadow(0 0 10px #ffff33);
    }
    50% {
      stroke: #ffff99;
      filter: drop-shadow(0 0 40px #ffff33);
    }
  }

  @keyframes plantSwing {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(7deg);
    }
  }

  @keyframes gearsSlideIn {
    0% {
      transform: translateX(-60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .services-hero-svg #Plant {
    transform-origin: bottom center;
    animation: plantSwing 5s ease-in-out infinite;
  }

  .services-hero-svg #Gears {
    opacity: 0;
    transform: translateX(-60px);
    transition: none;
  }

  .services-hero-svg #Gears.visible {
    animation: gearsSlideIn 3s ease-out forwards;
  }
</style>
