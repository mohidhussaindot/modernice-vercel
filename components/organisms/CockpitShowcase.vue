<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from '@atoms/Button.vue'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  bgImage: string
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
const blackoutRef = ref<HTMLElement | null>(null)
const warpFxRef = ref<HTMLElement | null>(null)
const lightspeedRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const cockpit = cockpitRef.value
  if (!cockpit) return

  const bg = cockpit.querySelector('.cockpit-bg')
  const textContent = cockpit.querySelector('.cockpit-text')
  const cardImage = cockpit.querySelector('.cockpit-card')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cockpit,
      start: 'top+=200 top',
      end: '+=150%',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: false
    }
  })

  if (bg) {
    tl.fromTo(
      bg,
      { scale: 1 },
      { scale: 1.1, transformOrigin: 'center center', ease: 'none', duration: 1 }
    )
  }

  if (cardImage) {
    tl.fromTo(
      cardImage,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'none' },
      '<'
    )
  }

  if (textContent) {
    tl.fromTo(
      textContent,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'none' },
      '<'
    )
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
const tl = gsap.timeline({
  defaults: { ease: 'power2.inOut' }
});

// Final scale is 19.6, halfway would be:
const halfwayScale = 1.4; // 9.8 (or customize as needed)

// Phase 1: Zoom in halfway (2s)
tl.to(cockpit, {
  scale: halfwayScale ,
  transformOrigin: `${originX}px ${originY}px`,
  duration: 2
});

// Phase 2: Hold that scale (2s pause)
tl.to(cockpit, {
  scale: halfwayScale, // stays the same
  duration: 2
});

// Phase 3: Zoom in to full (2s)
tl.to(cockpit, {
  scale: 1.7,
  duration: 2,
  ease: 'power3.inOut'
});

// Phase 4: Zoom out + fade everything (0.35s)
tl.to([cockpit, bg, card, text], {
  scale: 0,

  duration: 0.55,
  ease: 'power2.out',
    opacity: 0,
});


tl.add(() => {
  if (props.onShowServices) props.onShowServices()
}, '+=0.05')

}


</script>
<template>
  <section
    ref="cockpitRef"
    class="cockpit-section relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-700 scale-[1]"
  >
    <div class="relative w-full max-w-full aspect-[1437/1540] flex items-center justify-center">
      <div
        class="cockpit-bg absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none select-none will-change-transform"
        :style="`background-image: url('${props.bgImage}')`"
      ></div>

      <div ref="warpFxRef" class="warpfx absolute inset-0 z-30 pointer-events-none"></div>
      <div ref="lightspeedRef" class="lightspeed absolute inset-0"></div>

      <div class="absolute left-0 right-0 mx-auto max-w-[90.25rem] h-[40.375rem]" style="display: grid; place-items: start center;">
        <div class="flex justify-center items-center gap-[4rem] w-[90rem] max-w-[90rem]">
          <div v-if="props.cardImage" class="flex-shrink-0">
            <NuxtImg
              :src="props.cardImage"
              alt="Illustrative cockpit interface card"
              class="cockpit-card w-[14rem] h-[12rem] object-contain drop-shadow-xl will-change-transform"
            />
          </div>

          <div class="cockpit-text gap-[1rem] h-auto text-left flex flex-col justify-center max-w-[31.625rem] will-change-transform">
            <h3 class="text-white italic font-lightbold max-w-[23.8125rem] text-[2rem] leading-tight">
              {{ props.title }}
            </h3>

            <p v-if="props.description" class="text-white/70 max-w-[31.625rem] text-base leading-relaxed">
              {{ props.description }}
            </p>

            <div v-if="props.ctaLabel">
              <Button
                @click="handleClick"
                class="cta-button hover:scale-105 inline-block px-8 py-3 rounded-xl font-semibold 
                       border-2 border-green-500 text-green-500 
                       bg-transparent transition-all duration-300
                       hover:bg-green-500 hover:text-black 
                       hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]"
              >
                {{ props.ctaLabel }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      ref="blackoutRef"
      class="blackout absolute inset-0 bg-black z-40 pointer-events-none"
      style="opacity: 0;"
    />
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
