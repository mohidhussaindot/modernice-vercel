<template>
  <section
    class="relative bg-black overflow-hidden md:min-h-[auto] flex flex-col md:flex-col lg:flex-row items-center lg:items-start xl:px-[8rem] xl:gap-10 lg:px-[3.25rem]"
  >
    <!-- TEXT CONTENT -->
    <div
      class="text-white xl:max-w-[38rem] lg:max-w-[25rem] flex flex-col gap-[1.5rem] md:items-center md:text-center lg:items-start lg:text-left"
    >
      <h1 class="text-[3.75rem] font-semibold italic">
        <span class="text-green-500">Form</span> folgt <span class="text-green-500">Funktion</span>
      </h1>

      <p class="text-[1.125rem] font-semilight">
        Insbesondere bei Websites, die durch ihr beeindruckendes visuelles Auftreten bestechen, wird die technische Leistungsfähigkeit oft vernachlässigt.
      </p>

      <p class="text-[1.125rem] font-semilight">
        Die Umsetzung einer ansprechenden und benutzerfreundlichen Seite verlangt nicht nur ein gutes Auge für’s Design. Von entscheidender Bedeutung sind vor allem eine robuste technische Infrastruktur und das Einhalten von Best Practices.
      </p>

      <p class="text-[1.125rem] font-semilight">
        Letztlich muss die Funktion immer im Zentrum der Entwicklung stehen. Nur auf einer soliden technischen Grundlage kann ein attraktives Design seine volle Wirkung entfalten und über die reine Ästhetik hinaus einen Mehrwert bieten.
      </p>
    </div>

    <!-- SVG CONTENT -->
    <div class="md:flex lg:items-center lg:pt-20 xl:pt-0 md:justify-center">
      <div
        ref="services2"
        v-html="servicesscond"
        class="mt-12 md:mt-16 lg:mt-0 lg:ml-16 w-full lg:w-[25rem] xl:max-w-[64rem] h-auto"
      />
    </div>
  </section>
</template>

<script setup>
import servicesscond from '@atoms/svgs/servicessecond.svg?raw'
import gsap from 'gsap'
import { onMounted, nextTick, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services2 = ref(null)

onMounted(async () => {
  // wait until v-html finishes injecting the SVG
  await nextTick()

  const shadow = services2.value?.querySelector('#Shadow_2')
  const plant = services2.value?.querySelector('#Plant')
  const gears = services2.value?.querySelector('#Gears')

  if (shadow) {
    shadow.removeAttribute('style')
    shadow.setAttribute('stroke-width', '2.5')

    gsap.to(shadow, {
      stroke: '#FFFF33',
      filter: 'drop-shadow(0 0 40px #FFFF33)',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      delay: 1,
      ease: 'power1.inOut'
    })
  }

  if (plant) {
    gsap.to(plant, {
      rotate: '7deg',
      transformOrigin: 'bottom center',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }

  if (gears) {
    gsap.fromTo(
      gears,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: services2.value, 
          start: 'center bottom',
          toggleActions: 'play none none none'
        }
      }
    )
  }
})
</script>
