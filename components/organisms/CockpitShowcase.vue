<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
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

onMounted(async () => {
  await nextTick() // Ensure SVG is rendered

  const cockpitEl = cockpitRef.value
  const contentWrapper = contentWrapperRef.value
  if (!cockpitEl || !contentWrapper) return

  const bg = cockpitEl.querySelector('.cockpit-bg')
  const textContent = cockpitEl.querySelector('.cockpit-text')

  // === SCROLL ANIMATION ===
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrapper,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
      markers: false
    }
  })

  if (bg) {
    tl.fromTo(
      bg,
      { scale: 1 },
      { scale: 1.15, transformOrigin: 'center center', ease: 'none' },
      0
    )
  }
const card = cockpitEl.querySelector('.cockpit-card')

if (textContent && card) {
  tl.fromTo(
    [textContent, card],
    { scale: 0.9, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 1, ease: 'power3.out' },
    0
  )
}



})

const handleClick = () => {
  const cockpitEl = cockpitRef.value
  const blackout = blackoutRef.value
  const warpFx = warpFxRef.value
  const lightspeed = lightspeedRef.value
  if (!cockpitEl) return

  const originX = cockpitEl.offsetWidth / 2
  const originY = cockpitEl.offsetHeight / 2

  const bg = cockpitEl.querySelector('.cockpit-bg')
  const card = cockpitEl.querySelector('.cockpit-card')
  const text = cockpitEl.querySelector('.cockpit-text')

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
const emit = defineEmits(['show-services'])

  const halfwayScale = 1.4

  tl.to(cockpitEl, {
    scale: halfwayScale,
    transformOrigin: `${originX}px ${originY}px`,
    duration: 2,
    force3D: true
  })
    .to(cockpitEl, { scale: halfwayScale, duration: 1 })
    .to(cockpitEl, { scale: 1.7, duration: 2, ease: 'power3.inOut' })
    .to([cockpitEl, bg, card, text], {
      scale: 0,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .add(() => {
      if (props.onShowServices) props.onShowServices()
    }, '+=0.1')

      setTimeout(() => {
    emit('show-services')
  }, 1800)
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

      <div ref="warpFxRef" class="warpfx absolute inset-0 z-30 pointer-events-none will-change-transform"></div>
      <div ref="lightspeedRef" class="lightspeed absolute inset-0 will-change-transform"></div>

      <div
        ref="contentWrapperRef"
        class="content-wrapper absolute  mx-auto w-[72.9375rem] flex  top-[374px] "
      >
        <div class="flex justify-center lg:mt-[-100px] gap-6 md:gap-10 lg:gap-14 w-full  px-4">
          <div v-if="props.cardImage" class="flex-shrink-0">
            <NuxtImg
              :src="props.cardImage"
              alt="Illustrative cockpit interface card"
              class="cockpit-card w-[7rem] h-[6rem] md:w-[9rem] md:h-[7rem] lg:w-[11rem] lg:h-[9rem] xl:w-[13.43rem] xl:h-[12.32rem] object-contain drop-shadow-xl will-change-transform"
            />
          </div>

          <div class="cockpit-text   flex flex-col gap-4 text-left max-w-[26rem] will-change-transform">
            <h1 class="text-white italic font-semibold leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {{ props.title }}
            </h1>
            <p
              v-if="props.description"
              class="text-white font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {{ props.description }}
            </p>

            <div
              v-if="props.ctaLabel"
              class="inline-block mt-1 rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#38EF61] to-[#44E5C8] hover:scale-105 transition w-fit"
            >
              <Button
                @click="handleClick"
                class="px-3 py-1.5 text-xs sm:text-sm md:text-base rounded-lg font-medium bg-black bg-opacity-90 text-white hover:text-white transition-all duration-300 hover:cursor-pointer"
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
.content-wrapper {
  height: 36.375rem;
}

.cockpit-section {
  overflow-x: hidden;
  perspective: 1000px;
}



.will-change-transform {
  will-change: transform;
  transform: translateZ(0);
}
</style>
