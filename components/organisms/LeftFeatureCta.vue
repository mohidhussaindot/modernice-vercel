<script setup lang="ts">
  import Button from '@atoms/Button.vue'
  import rocket from '@atoms/svgs/leftsectionsvg.svg?raw'
  import bglines from '@atoms/svgs/Lines.svg?raw'

  import { onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

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

  const ctaSectionRef = ref<HTMLElement | null>(null)
  onMounted(() => {
    if (!ctaSectionRef.value) return

    const section = ctaSectionRef.value
    const spaceship = section.querySelector<HTMLElement>('.spaceship-wrapper')

    gsap.set(spaceship, { opacity: 1, x: 0, y: 0 }) // starting from base

    // Rocket takes off on scroll
    if (spaceship) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => {
          const x = -200 * self.progress
          const y = 100 * self.progress

          gsap.to(spaceship, {
            x,
            y,
            ease: 'none',
            overwrite: 'auto',
            duration: 0.1
          })
        }
      })
    }
  })
</script>

<template>
  <section
    ref="ctaSectionRef"
    class="cta-section relative h-[69.625rem] overflow-hidden w-full transition-opacity duration-700"
  >
    <div
      class="absolute inset-0 flex justify-center pt-[5.5%] pl-[10%] pointer-events-none select-none z-0"
      style="transform: scale(3) rotate(2.9deg); transform-origin: center"
      v-html="bglines"
    ></div>

    <div class="relative mx-auto max-w-7xl w-full z-10">
      <div class="relative flex justify-center items-center min-h-screen">
        <div
          class="relative z-10 top-[15.438rem] flex flex-col gap-[1.5rem] max-w-[37.125rem] max-h-[25.375rem]"
        >
          <h2
            class="font-bold text-[3rem] italic text-white leading-tight"
            style="--stagger-index: 0"
          >
            {{ title }}
          </h2>

          <p
            v-if="description"
            class="font-light text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem]"
            style="--stagger-index: 1"
          >
            {{ description }}
          </p>

          <div
            v-if="ctaLabel"
            class="inline-block hover:scale-105 transition w-fit rounded-[0.75rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
          >
            <Button
              :to="ctaTo"
              class="cta-button px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
              >
                {{ ctaLabel }}
              </span>
            </Button>
          </div>
        </div>

        <!-- Spaceship SVG -->
        <div
          class="absolute top-0 right-0 pointer-events-none z-10 spaceship-wrapper"
          style="will-change: transform"
          v-html="rocket"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .spaceship-wrapper {
    opacity: 1;
    transform: translateX(0px) translateY(0px);
  }

  /* Button hover scale with CSS */
  .cta-button {
    transition: transform 0.2s ease;
  }

  .cta-button:hover {
    transform: scale(1.05);
  }
</style>
