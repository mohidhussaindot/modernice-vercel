<template>
  <section class="relative h-[785px] bg-black overflow-hidden">

    <div class="absolute text-white top-[5.4375rem] left-[8rem] max-w-[38rem] max-h-[31rem]">
      <h1 class="text-[3.75rem] font-semibold italic">
        <span class="text-green-500">Form</span> folgt <span class="text-green-500">Funktion</span>
      </h1>

      <p class="text-[1.125rem] font-semilight mt-[1.5rem]">
        Insbesondere bei Websites, die durch ihr beeindruckendes visuelles Auftreten bestechen, wird die technische Leistungsfähigkeit oft vernachlässigt.
      </p>

      <p class="text-[1.125rem] font-semilight mt-[1.5rem]">
        Die Umsetzung einer ansprechenden und benutzerfreundlichen Seite verlangt nicht nur ein gutes Auge für’s Design. Von entscheidender Bedeutung sind vor allem eine robuste technische Infrastruktur und das Einhalten von Best Practices.
      </p>

      <p class="text-[1.125rem] font-semilight mt-[1.5rem]">
        Letztlich muss die Funktion immer im Zentrum der Entwicklung stehen. Nur auf einer soliden technischen Grundlage kann ein attraktives Design seine volle Wirkung entfalten und über die reine Ästhetik hinaus einen Mehrwert bieten.
      </p>
    </div>

   

<div class="absolute h-[916px] w-[1024px] left-[525px]top-[-77px]">
    <div
    ref="services-2"
    class=" absolute h-[521.8954467773438px] top-[55px] left-[842px] w-[545.0968017578125px]"
    v-html="servicesscond"
  />
</div>
   
  </section>

</template>
<script setup>
import servicesscond from '@atoms/svgs/servicessecond.svg?raw'
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const shadow = document.querySelector('#Shadow_2')
  const plant = document.querySelector('#Plant')
  const gears = document.querySelector('#Gears')

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
          trigger: 'section',
          start: 'CENTER',
          toggleActions: 'play none none none',
        }
      }
    )
  }
})
</script>
