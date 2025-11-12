<template>
  <div
    id="services-top"
    class="relative min-h-[1000px] hidden lg:flex bg-black overflow-hidden text-white"
  >
    <!-- Background SVG -->
    <div
      class="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden"
      v-html="Seoherobg"
    />

    <!-- Black overlay -->
    <div class="'absolute inset-0 z-10 bg-black transition-opacity duration-700',"></div>

    <!-- Main content -->
    <div
      class="relative z-20 flex flex-col lg:flex-row justify-between max-w-7xl mx-auto pt-12 2xl:pt-[13rem] lg:pt-[8rem] gap-12 lg:gap-[6rem]"
    >
      <!-- Text Section -->
      <div class="flex-1 flex flex-col gap-[1.5rem] max-w-[32.13rem]">
        <h1
          class="text-[2rem] md:text-[2.8rem] lg:text-[2.8rem] xl:text-[3.8rem] font-lightbold italic leading-[1.2]"
        >
          {{ $t('serviceshero.headline.part1') }}
          <span class="text-[#00FFB3]">{{ $t('serviceshero.headline.highlight1') }}</span
          ><br />
          {{ $t('serviceshero.headline.part2') }}
          <span class="text-[#00FFB3]">{{ $t('serviceshero.headline.highlight2') }}</span>
        </h1>

        <p class="text-base lg:text-[1rem] xl:text-[1.125rem] font-light leading-relaxed">
          {{ $t('serviceshero.description') }}
        </p>

        <!-- CTA Button -->
        <div
          class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
        >
          <NuxtLink to="/appointment">
            <Button
              class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] rounded-[10px] bg-black bg-opacity-90 text-white hover:text-white transition"
            >
              <span
                class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text"
              >
                {{ $t('serviceshero.button') }}
              </span>
            </Button>
          </NuxtLink>
        </div>
      </div>

      <!-- Hero SVG -->
      <div class="flex-1 max-w-[34.5rem] w-full flex justify-center">
        <div
          ref="servicesHeroRef"
          class="w-full h-auto pointer-events-none services-hero-svg"
          v-html="ServicesHeroRaw"
        ></div>
      </div>
    </div>
  </div>

  <!-- Mobile version -->
  <div
    id="services-top-mobile"
    class="relative block lg:hidden bg-black text-white overflow-hidden"
  >
    <!-- Background SVG -->
    <div class="absolute inset-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
      <img
        src="@atoms/svgs/seoherobg.svg"
        alt="Background SVG"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 z-10 bg-black opacity-80"></div>

    <!-- Mobile Content -->
    <div
      class="relative z-20 md:pt-40 flex flex-col items-center text-center px-6 pt-24 pb-16 gap-8"
    >
      <h1 class="text-5xl font-semibold italic leading-tight">
        {{ $t('serviceshero.headline.part1') }}
        <span class="text-[#00FFB3]">{{ $t('serviceshero.headline.highlight1') }}</span
        ><br />
        {{ $t('serviceshero.headline.part2') }}
        <span class="text-[#00FFB3]">{{ $t('serviceshero.headline.highlight2') }}</span>
      </h1>

      <p class="text-base text-[0.9rem] font-semilight md:w-[500px] leading-relaxed">
        {{ $t('serviceshero.description') }}
      </p>

      <!-- CTA Button -->
      <div
        class="inline-block hover:scale-105 transition w-fit rounded-[10px] p-[2px] bg-gradient-to-r from-[#38EF61] to-[#44E5C8]"
      >
        <Button
          class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[10px] bg-black bg-opacity-90 text-white transition"
        >
          <span class="bg-gradient-to-r from-[#38EF61] to-[#44E5C8] text-transparent bg-clip-text">
            {{ $t('serviceshero.button') }}
          </span>
        </Button>
      </div>

      <!-- Hero SVG -->
      <div class="w-full max-w-[20rem] mt-8">
        <img src="@atoms/svgs/servicesfirst.svg" alt="Services Hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from '@atoms/Button.vue'
  import { ref } from 'vue'

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
