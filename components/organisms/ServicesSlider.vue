<template>
  <section
    ref="city"
    class="bg-black flex items-center overflow-hidden"
    :style="{ height: sectionHeight + 78.125 + 'rem' }" 
  >
    <div
      ref="scroller"
      class="scroller relative h-[36.3125rem] left-[7.1875rem] items-baseline-last flex gap-[4rem]"
      :style="{ width: totalWidth + 'rem' }"
    >
      <div class="w-[32.773rem] text-white h-[27rem]">
        <img
          src="/images/slider-first.png"
          class="h-[15.562rem] mb-[1.5625rem] w-[25.249rem]"
        />
        <div class="flex gap-[1.25rem] flex-col left-[3.648rem]">
          <h1 class="font-bold text-[1.75rem] max-w-[17.563rem]">Robuste Technologie</h1>
          <span class="max-w-[27.75rem]">
            <p class="text-[1.125rem]">
              Zuverlässige Technologien und Plattformen, die sicherstellen, dass
              eine Website nicht nur gut aussieht, sondern auch nahtlos
              funktioniert.
            </p>
          </span>
        </div>
      </div>

      <div class="w-[32.773rem] text-white h-[27rem]">
        <div class="mb-[1.5625rem] w-[38rem]">
          <img
            src="/images/slider2.png"
            class="h-[17.45rem] mb-[1.5625rem] w-[26.525rem]"
          />
        </div>
        <div class="flex gap-[1.25rem] flex-col left-[3.648rem]">
          <h1 class="font-bold text-[1.75rem] max-w-[17.563rem]">Innovatives Design</h1>
          <span class="max-w-[27.75rem]">
            <p class="text-[1.125rem]">
              Einzigartige und maßgeschneiderte Designs, die Marken repräsentieren und Visionen zum Leben erwecken.
            </p>
          </span>
        </div>
      </div>

      <div class="w-[32.773rem] text-white h-[27rem]">
        <img
          src="/images/sliderthird.png"
          class="h-[15.562rem] mb-[1.5625rem] w-[25.249rem]"
        />
        <div class="flex gap-[1.25rem] flex-col left-[3.648rem]">
          <h1 class="font-bold text-[1.75rem] max-w-[17.563rem]">Gesucht & Gefunden</h1>
          <span class="max-w-[27.75rem] ">
            <p class="text-[1.125rem]">
              Tappe nicht im Dunkeln. Gezielte Suchmaschinen-Optimierung lässt Dich heller strahlen als Deine Konkurrenz.
            </p>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const city = ref(null)
const scroller = ref(null)

const totalSlides = 3
const cardWidth = 524.3671875
const gap = 64
const leftOffset = 115

const totalWidth = totalSlides * cardWidth + (totalSlides - 1) * gap

const sectionHeight = ref(0)

onMounted(() => {
  const scrollLength = totalWidth - window.innerWidth + leftOffset
  sectionHeight.value = scrollLength + window.innerHeight

  gsap.to(scroller.value, {
    x: `-${scrollLength}px`,
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: city.value,
      start: 'center center',
      end: `+=${scrollLength}`,
      scrub: true,
      pin: true,
      anticipatePin: 2,
      invalidateOnRefresh: true,
      markers: false,
    },
  })
})
</script>


<style scoped>
.scroller {
  will-change: transform;
  transform: translate3d(0, 0, 0);
}
</style>
