<script setup lang="ts">
import { onMounted, ref } from 'vue'
import cockpit from '@atoms/svgs/cockpit.svg?raw'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from '@atoms/Button.vue'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  cardImage?: string
  title?: string
  description?: string
  ctaLabel?: string
  onShowServices?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  ctaLabel: '',
  onShowServices: undefined
})

const cockpitRef = ref<HTMLElement | null>(null)
const contentWrapperRef = ref<HTMLElement | null>(null)
const blackoutRef = ref<HTMLElement | null>(null)
const warpFxRef = ref<HTMLElement | null>(null)
const lightspeedRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const cockpit = cockpitRef.value
  const contentWrapper = contentWrapperRef.value
  if (!cockpit || !contentWrapper) return

  const bg = cockpit.querySelector('.cockpit-bg')
  const textContent = cockpit.querySelector('.cockpit-text')
  const cardImage = cockpit.querySelector('.cockpit-card')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrapper,
      start: "center center",
      end: "+=90%",
      pin: cockpit,
      scrub: true,
      anticipatePin: 1,
      markers: false
    }
  })

  if (bg) {
    tl.fromTo(bg, { scale: 1 }, { scale: 1.15, transformOrigin: "center center", ease: "none", duration: 1 })
  }
  if (cardImage) {
    tl.fromTo(cardImage, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.out", duration: 1 }, "<")
  }
  if (textContent) {
    tl.fromTo(textContent, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.out", duration: 1 }, "<")
  }
})

const handleClick = () => {
  const cockpit = cockpitRef.value
  const blackout = blackoutRef.value
  const warpFx = warpFxRef.value
  const lightspeed = lightspeedRef.value
  if (!cockpit) return

  const originX = cockpit.offsetWidth / 2
  const originY = cockpit.offsetHeight / 2
  const bg = cockpit.querySelector('.cockpit-bg')
  const card = cockpit.querySelector('.cockpit-card')
  const text = cockpit.querySelector('.cockpit-text')

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
  const halfwayScale = 1.4

  tl.to(cockpit, { scale: halfwayScale, transformOrigin: `${originX}px ${originY}px`, duration: 2 })
    .to(cockpit, { scale: halfwayScale, duration: 2 })
    .to(cockpit, { scale: 1.7, duration: 2, ease: 'power3.inOut' })
    .to([cockpit, bg, card, text], { scale: 0, duration: 0.55, ease: 'power2.out', opacity: 0 })
    .add(() => { if (props.onShowServices) props.onShowServices() }, '+=0.05')
}
</script>

<template>
  <section
    ref="cockpitRef"
    class="cockpit-section relative w-full min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div class="relative w-full max-w-full aspect-[1437/1540] flex items-center justify-center">

      <div
        class="cockpit-bg absolute inset-0 pointer-events-none select-none will-change-transform"
        v-html="cockpit"
      ></div>

      <div ref="warpFxRef" class="warpfx absolute inset-0 z-30 pointer-events-none"></div>
      <div ref="lightspeedRef" class="lightspeed absolute inset-0"></div>

      <div
        ref="contentWrapperRef"
        class="absolute left-0 right-0 xl:top-[15rem] lg:top-[4.5rem] md:top-[-0.0625rem] sm:top-[0.0625rem] mx-auto max-w-[90.25rem] h-[40.375rem] flex justify-center items-center"
      >
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-14 w-full max-w-[80rem] px-4">
          <div v-if="props.cardImage" class="flex-shrink-0">
            <NuxtImg
              :src="props.cardImage"
              alt="Illustrative cockpit interface card"
              class="cockpit-card w-[7rem] h-[6rem] md:w-[9rem] md:h-[7rem]  lg:w-[11rem] lg:h-[9rem] xl:w-[13.43rem] xl:h-[12.32rem] object-contain drop-shadow-xl will-change-transform"
            />
          </div>

          <div class="cockpit-text flex flex-col gap-4 text-left justify-center max-w-[26rem] will-change-transform">
            <h1 class="text-white italic font-semibold leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {{ props.title }}
            </h1>
            <p v-if="props.description" class="text-white font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              {{ props.description }}
            </p>

            <div v-if="props.ctaLabel" class="inline-block mt-1 rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#38EF61] to-[#44E5C8] hover:scale-105 transition w-fit">
              <Button
                @click="handleClick"
                class="px-3 py-1.5 text-xs sm:text-sm md:text-base rounded-lg font-medium
                       bg-black bg-opacity-90
                       text-white hover:text-white
                       transition-all duration-300 hover:cursor-pointer"
              >
                <span class="bg-gradient-to-r from-[#44E5C8] to-[#38EF61] text-transparent bg-clip-text">
                  {{ props.ctaLabel }}
                </span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div ref="blackoutRef" class="blackout absolute inset-0 bg-black z-40 pointer-events-none opacity-0" />
  </section>
</template>

<style scoped>
.cockpit-section {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
</style>
