<template>
  <section class="relative h-[67.94rem] w-full bg-black overflow-hidden">
    <div
      class="absolute inset-0 bg-no-repeat bg-[length:100%]"
      style="background-image: url('/images/service4bg.png');"
    ></div>

    <div class="absolute text-white left-[7.5rem] h-[12.63rem] flex flex-col w-[32.13rem] top-[9.5rem] gap-[1.5rem]">
      <h1 class="font-lightbold text-[2rem] font-serif">Quellen der Inspiration</h1>
      <p class="font-light text-[1.13rem] max-w-[32.13rem]">
        Hinter jeder beeindruckenden Website steht eine kraftvolle Idee. In der Anfangsphase werden die Visionen und Ziele ausgelotet und so der Grundstein für ein kreatives und zielführendes Webkonzept gelegt.
      </p>
    </div>

    <div
      class="absolute left-[49.56rem] top-[0.0013rem] h-[32.94rem] z-10 w-[32.94rem]"
      v-html="servicesfourth"
      ref="servicesFourthContainer"
    ></div>

    <div class="absolute left-[57.06rem] h-[22rem] w-[27.53rem]">
      <img
        src="/images/services4shine.png"
        alt="services4thimage"
        style="transform: rotate(-29.69deg);"
      />
    </div>

    <div
      class="absolute left-[7.44rem] h-[30.5rem] top-[39.56rem] z-10 max-w-[32.88rem]"
      v-html="servicesfourth2"
      ref="servicesFourth2Container"
    ></div>

    <div class="absolute text-white left-[46.19rem] h-[13.13rem] flex flex-col w-[31.44rem] top-[46rem] gap-[2rem]">
      <h1 class="font-lightbold text-[2rem] font-serif">Routenplanung</h1>
      <p class="font-light text-[1.13rem] w-[31.44rem]">
        Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die sowohl das Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit eine zielgerichtete Entwicklung ermöglicht.
      </p>
    </div>
  </section>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import servicesfourth from '@atoms/svgs/servicesfourth.svg?raw'
import servicesfourth2 from '@atoms/svgs/servicesfourthsecond.svg?raw'

gsap.registerPlugin(ScrollTrigger)

const servicesFourthContainer = ref(null)
const servicesFourth2Container = ref(null)

onMounted(() => {

  const svgContainer = servicesFourthContainer.value
  if (svgContainer) {
    const plant = svgContainer.querySelector('#Plant')
    const shadow = svgContainer.querySelector('#Shadow')

    if (plant) {
      gsap.to(plant, {
        rotate: '7deg',
        transformOrigin: 'bottom center',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (shadow) {
      shadow.removeAttribute('style')
      shadow.setAttribute('stroke-width', '2.5')
      shadow.setAttribute('stroke', '#38EF61')

      gsap.to(shadow, {
        stroke: '#44E5C8',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }

  const svgContainer2 = servicesFourth2Container.value
  if (svgContainer2) {
    const gears = svgContainer2.querySelector('#Gears')
    const shadow2 = svgContainer2.querySelector('#Shadow') 

    if (gears) {
      gsap.fromTo(
        gears,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgContainer2.closest('section'),
            start: 'CENTER',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    if (shadow2) {
      shadow2.removeAttribute('style')
      shadow2.setAttribute('stroke-width', '2.5')
      shadow2.setAttribute('stroke', '#38EF61')

      gsap.to(shadow2, {
        stroke: '#44E5C8',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }
})
</script>
