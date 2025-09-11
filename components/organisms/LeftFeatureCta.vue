<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title: string
  eyebrow?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
  lineSvg?: string
  spaceshipSvg?: string
}

const {
  title,
  eyebrow = '',
  description = '',
  ctaLabel = 'Learn more',
  ctaTo = '#',
  lineSvg = '',
  spaceshipSvg = ''
} = defineProps<Props>()

onMounted(() => {
  gsap.from('.cta-text', {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
    },
  })

  if (spaceshipSvg) {
  gsap.fromTo(
  '.spaceship',
  {
    opacity: 0,
    x: 0,
    y: 0,
    rotation: 0,
  },
  {
    opacity: 1,
    x: -300,
    y: 40,
    rotation: 0,
    duration: 3,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top center', 
      toggleActions: 'play none none none',
    },
  }
)

}

  
  const btn = document.querySelector('.cta-button')
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power1.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.inOut' })
    })
  }
})
</script>
<template>
  <section
    class="cta-section relative min-h-[69.625rem] overflow-hidden w-full flex items-center"
  >
    <div
      v-if="lineSvg"
      class="absolute top-0 left-[14.5rem] w-full h-full bg-no-repeat pointer-events-none select-none z-0"
      :style="`background-image: url('${lineSvg}'); background-size: 100% auto; background-position: 100% center;`"
    ></div>

    <div class="relative mx-auto max-w-7xl w-full z-10">
      <div
        class="relative flex justify-center items-center min-h-screen"
      >
        <div class="relative z-10 top-[7.438rem] max-w-[37.125rem] max-h-[25.375rem]">
          <h2
            class="cta-text font-bold text-[3rem] italic text-white leading-tight"
          >
            {{ title }}
          </h2>

          <p
            v-if="description"
            class="cta-text mt-6 font-light text-white/70 text-[1.2rem] leading-relaxed"
          >
            {{ description }}
          </p>

          <div v-if="ctaLabel" class="cta-text mt-8">
            <NuxtLink
              :to="ctaTo"
              class="cta-button inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              {{ ctaLabel }}
            </NuxtLink>
          </div>
        </div>

        <div
          v-if="spaceshipSvg"
          class="absolute top-0 right-[-11rem] pointer-events-none z-10"
          style="will-change: transform;"
        >
          <NuxtImg
            :src="spaceshipSvg"
            alt="Animated spaceship illustration"
            class="spaceship lg:w-[33.375rem]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
