<template>
  <section class="relative bg-black overflow-hidden">
    <div
      class="flex flex-col md:flex-col lg:flex-row items-center lg:items-start px-6  lg:max-w-7xl mx-auto gap-12 md:gap-[0rem] xl:gap-[6rem]"
    >
      <!-- Content -->
      <!-- TEXT CONTENT -->
      <div
        class="text-white xl:pt-20 xl:max-w-[38rem] lg:max-w-[25rem] md:max-w-[29rem] flex flex-col gap-[1.8rem] md:items-center text-center lg:items-start lg:text-left"
      >
        <h1 class="text-[2rem] md:text-[3rem] xl:text-[3.8rem] font-semibold italic">
          <span class="text-green-500">Form</span> folgt
          <span class="text-green-500">Funktion</span>
        </h1>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight">
          Insbesondere bei Websites, die durch ihr beeindruckendes visuelles Auftreten bestechen,
          wird die technische Leistungsfähigkeit oft vernachlässigt.
        </p>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight">
          Die Umsetzung einer ansprechenden und benutzerfreundlichen Seite verlangt nicht nur ein
          gutes Auge für’s Design. Von entscheidender Bedeutung sind vor allem eine robuste
          technische Infrastruktur und das Einhalten von Best Practices.
        </p>

        <p class="xl:text-[1.125rem] md:text-[0.9rem] font-semilight">
          Letztlich muss die Funktion immer im Zentrum der Entwicklung stehen. Nur auf einer soliden
          technischen Grundlage kann ein attraktives Design seine volle Wirkung entfalten und über
          die reine Ästhetik hinaus einen Mehrwert bieten.
        </p>
      </div>

      <!-- SVG CONTENT -->
      <div class="lg:flex lg:items-center xl:pt-20 lg:pt-2  hidden">
        <div
          ref="services2"
          v-html="servicesscond"
          class="mt-12 md:mt-16 lg:mt-0 lg:ml-16 w-full lg:w-[25rem]  xl:max-w-[64rem] h-auto services-hero-svg"
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
      ([entry]) => {
        if (entry.isIntersecting) {
          gears.classList.add('visible')
          observer.unobserve(gears)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(gears)
  })
</script>

<style>
  /* Shadow pulsating stroke + glow */
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

  /* Plant swinging rotation */
  @keyframes plantSwing {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(7deg);
    }
  }

  /* Gears slide in and fade */
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

  /* Plant swinging (slowed down) */
  .services-hero-svg #Plant {
    transform-origin: bottom center;
    animation: plantSwing 5s ease-in-out infinite;
  }

  /* Gears - start hidden, slide in only when .visible added */
  .services-hero-svg #Gears {
    opacity: 0;
    transform: translateX(-60px);
    transition: none;
  }

  .services-hero-svg #Gears.visible {
    animation: gearsSlideIn 3s ease-out forwards;
  }
</style>
