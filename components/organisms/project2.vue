<template>
  <div class="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden min-h-screen">
    <div class="absolute top-0 left-0 w-full z-0 pointer-events-none opacity-60" v-html="bghero"></div>
    <div class="relative z-10 flex flex-col items-center justify-center pt-52 mb-5 text-center">
      <h1
        class="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-0"
        ref="heroTitle">
        Modernice Projects
      </h1>
      <p class="text-gray-400 mt-4 text-lg opacity-0" ref="heroSubtitle">
        Crafted with precision, passion & performance.
      </p>
    </div>
    <div class="relative  z-20 hidden md:flex justify-center  mx-auto mb-12">
      <Button @click="toggleView"
        class="text-lg font-medium text-white tracking-wide hover:cursor-pointer px-6 py-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300">
        {{ isGrid ? 'Column View' : 'Grid View' }}
      </Button>
    </div>
    <div class="relative z-10 transition-all duration-700 ease-in-out"
      :class="isGrid ? 'opacity-100 scale-100' : 'opacity-100 scale-100'">
      <div v-if="isGrid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 px-8 md:px-16 pb-20">
        <div v-for="(project, index) in imageLinks" :key="index"
          class="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 border border-white/10 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500">
          <a :href="project.url" target="_blank" rel="noopener noreferrer">
            <img :src="`/work/${project.image}`" :alt="project.name"
              class="object-fit w-full h-64 rounded-3xl transition-transform duration-700 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end pb-6 transition-opacity duration-500">
              <h2 class="text-xl font-semibold mb-1">{{ project.name }}</h2>
              <p class="text-sm text-gray-400">{{ project.year }}</p>
            </div>
          </a>
        </div>
      </div>
      <div v-else>
        <section v-for="(project, index) in imageLinks" :key="index" ref="sections"
          class="md:min-h-screen mt-30 md:mt-0 flex flex-col items-center justify-center text-center px-6 md:px-16 gap-8">
          <div
            class="relative group overflow-hidden rounded-3xl shadow-2xl md:image-wrapper border border-white/10 bg-zinc-900/40 backdrop-blur-md">
            <a :href="project.url" target="_blank" rel="noopener noreferrer" class="block">
              <img :src="`/work/${project.image}`" :alt="project.name"
                class="project-image w-[340px] md:w-[520px] lg:w-[900px] lg:h-[500px] rounded-3xl object-fit transform scale-90 opacity-0" />
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <p class="text-lg font-semibold text-white">
                  Visit {{ project.name }}
                </p>
              </div>
            </a>
          </div>
          <div class="max-w-md opacity-0 info-block">
            <h2
              class="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {{ project.name }}
            </h2>
            <p class="text-gray-400 mb-4 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex items-center justify-center gap-4 text-sm text-gray-500 uppercase tracking-wide">
              <span>{{ project.role }}</span>
              <span>•</span>
              <span>{{ project.year }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Button from '@atoms/Button.vue'
import bghero from '@atoms/svgs/bghero.svg?raw'
import { useGSAP, useGSAPAnimations } from '../../composables/useGSAP'
const isGrid = ref(false)
const sections = ref([])
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const { ScrollTrigger, cleanup } = useGSAP()
const { fadeIn, onScroll } = useGSAPAnimations()
const toggleView = async () => {
  if (window.innerWidth < 768) {
    isGrid.value = false
    return
  }
  isGrid.value = !isGrid.value
  await nextTick()
  if (!isGrid.value) animateSections()
}
const animateSections = () => {
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (window.innerWidth < 768) return
  sections.value.forEach(section => {
    const image = section.querySelector('.project-image')
    const textBlock = section.querySelector('.info-block')
    if (image) {
      onScroll(image, {
        from: { scale: 0.9, autoAlpha: 0 },
        to: { scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power3.out' }
      }, {
        trigger: section,
        start: 'top 80%'
      })
    }
    if (textBlock) {
      onScroll(textBlock, {
        from: { x: 100, autoAlpha: 0 },
        to: { x: 0, autoAlpha: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      }, {
        trigger: section,
        start: 'top 75%'
      })
    }
  })
}
onMounted(async () => {
  const isMobile = window.innerWidth < 768
  if (isMobile) {
    if (heroTitle.value) heroTitle.value.style.opacity = 1
    if (heroSubtitle.value) heroSubtitle.value.style.opacity = 1
    await nextTick()
    document.querySelectorAll('.project-image').forEach(img => {
      img.style.opacity = 1
      img.style.transform = 'scale(1)'
    })
    document.querySelectorAll('.info-block').forEach(info => {
      info.style.opacity = 1
      info.style.transform = 'none'
    })
  } else {
    fadeIn(heroTitle.value, { duration: 1, y: 0 })
    fadeIn(heroSubtitle.value, { duration: 1, delay: 0.3, y: 0 })
    animateSections()
  }
})
onBeforeUnmount(() => {
  cleanup()
})
 const imageLinks = [
    {
      image: 'adobelino.png',
      name: 'Adobelino',
      url: 'https://adobelino.com',
      description: 'A digital store for purchasing original software & licenses',
      role: 'Fullstack',
      year: 2023
    },
    {
      image: 'crovillas.png',
      name: 'Crovillas',
      url: 'https://crovillas.com/',
      description: 'Luxury villa rentals with pool and sea views.',
      role: 'Fullstack',
      year: 2024
    },
     {
      image: 'wiresoft.png',
      name: 'Wiresoft',
      url: 'https://www.wiresoft.com',
      description: "discounted licensed business software's online.",
      role: 'Fullstack',
      year: 2024
    },
    {
      image: 'cube.expert.png',
      name: 'Cube.expert',
      url: 'https://cubee.expert/en',
      description: 'Vehicle appraisals and damage assessments',
      role: 'Fullstack',
      year: 2022
    },
    {
      image: 'depositdirect.png',
      name: 'Depositdirect',
      url: 'https://depositdirect.net',
      description: 'Rent without a cash deposit with a rental guarantee',
      role: 'Fullstack',
      year: 2023
    },
    {
      image: 'epass.png',
      name: 'Epass',
      url: 'https://Epass.gg',
      description: 'Identity verification and KYC platform',
      role: 'Fullstack',
      year: 2025
    },
    {
      image: 'prestige-cars.png',
      name: 'Prestige Cars',
      url: 'https://prestige.cars',
      description: 'Luxury & exotic car rental platform',
      role: 'Fullstack',
      year: 2024
    },
    {
      image: 'tzone.png',
      name: 'Tzone',
      url: 'https://T.zone',
      description: 'Tournament organizer and monetization platform',
      role: 'Fullstack',
      year: 2025,
    }
  ]
</script>
<style scoped>
.image-wrapper img {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
</style>
