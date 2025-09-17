<script setup lang="ts">
import Button from '@atoms/Button.vue'
import { onMounted, onUnmounted, ref, computed } from 'vue'
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
  spaceshipSvg = '',
} = defineProps<Props>()

const ctaSectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(true)
const fadeClass = computed(() => (isVisible.value ? 'fade-in' : 'fade-out'))

onMounted(() => {
  // Animate CTA text
  gsap.from('.cta-text', {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  })

  // Spaceship animation
  if (spaceshipSvg) {
    const spaceship = document.querySelector('.spaceship')
    const section = document.querySelector('.cta-section')

    if (spaceship && section) {
      const sectionRect = section.getBoundingClientRect()
      const shipRect = spaceship.getBoundingClientRect()

      const deltaX = sectionRect.width - shipRect.width / 2
      const deltaY = -(shipRect.top - sectionRect.top) - 100

      gsap.fromTo(
        spaceship,
        {
          opacity: 0,
          x: 320,
          y: deltaY,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power2.out',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        }
      )
    }
  }

  // CTA Button hover scale
  const btn = document.querySelector('.cta-button')
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power1.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.inOut' })
    })
  }

  // Intersection Observer for fade-in/out
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1,
    }
  )

  if (ctaSectionRef.value) {
    observer.observe(ctaSectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
})
</script>

<template>
  <section
    ref="ctaSectionRef"
    :class="['cta-section relative h-[69.625rem] overflow-hidden w-full transition-opacity duration-700', fadeClass]"
  >
    <div class="absolute inset-0 left-[10rem] h-full w-full">
      <div
        v-if="lineSvg"
        class="absolute top-0 w-[109.902rem] right-0 h-full bg-no-repeat bg-cover pointer-events-none select-none z-0"
        :style="`background-image: url('${lineSvg}');`"
      />
    </div>

    <div class="relative mx-auto max-w-7xl w-full z-10">
      <div class="relative flex justify-center items-center min-h-screen">
        <div class="relative z-10 top-[15.438rem] flex flex-col gap-[1.5rem] max-w-[37.125rem] max-h-[25.375rem]">
          <h2 class="cta-text font-bold text-[3rem] italic text-white leading-tight">
            {{ title }}
          </h2>

          <p
            v-if="description"
             class="font-light text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem]"
          >
            {{ description }}
          </p>

          <div v-if="ctaLabel" class="inline-block hover:scale-105 transition w-fit rounded-[0.75rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8] ">
            <Button
              :to="ctaTo"
              class=" px-[1.5rem] py-[0.625rem] 
                     text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1rem] 
                     rounded-[0.625rem] bg-black bg-opacity-90
                     transition hover:cursor-pointer 
                     text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] 
                       text-transparent bg-clip-text duration-300"
              >
                {{ ctaLabel }}
              </span>
            </Button>
          </div>

        </div>

        <div
          v-if="spaceshipSvg"
          class="absolute top-0 right-[-0px] pointer-events-none z-10"
          style="will-change: transform;"
        >
          <NuxtImg
            :src="spaceshipSvg"
            alt="Animated spaceship illustration"
            class="spaceship w lg:w-[33.375rem]"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.fade-in {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.7s ease;
}

.fade-out {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease;
}
</style>
