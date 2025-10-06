<template>
  <div>
    <header
      v-if="!loading"
      class="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-t from-[#000]/0 via-[#000]/50 to-[#000]"
      @mouseenter="isNavbarHovered = true"
      @mouseleave="isNavbarHovered = false"
    >
      <div class="max-w-[90rem] mx-auto flex items-center justify-between h-25 px-6 relative">
        <div class="flex items-center gap-6">
          <div
            class="relative flex items-center"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            <div
              class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20 hover:cursor-pointer"
            >
              <span
                class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
              ></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
                Services
              </span>
            </div>
            <div
              v-show="dropdownOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
            >
              <a
                v-for="service in services"
                :key="service.to"
                :href="service.to"
                class="block px-3 py-1 text-black hover:bg-blue-100"
              >
                {{ service.label }}
              </a>
            </div>
          </div>
          <a
            href="/about"
            class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span
              class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
            ></span>
            <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
              About
            </span>
          </a>
          <a
            href="/blog"
            class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span
              class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
            ></span>
            <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
              Blog
            </span>
          </a>
        </div>
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semilight text-xl cursor-pointer"
        >
          <a href="/">Modernice.Design</a>
        </div>
        <a
          href="/contact"
          class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span
            class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
          ></span>
          <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
            Contact
          </span>
        </a>
      </div>
    </header>
    <div
      class="bg-black min-h-screen text-white flex justify-center items-center  px-8 mt-10 "
      @mousemove="updateMouse"
    >
      <div
        ref="mainContent"
        class="w-full max-w-8xl overflow-hidden relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div
          class="grid grid-cols-4 px-4 gap-x-60 text-lg border-b border-white/20 pb-2 mb-4 font-semibold uppercase tracking-wider"
        >
          <div>Company</div>
          <div>Stack</div>
          <div>Project Type</div>
          <div>Year</div>
        </div>
        <div
          v-for="(project, index) in imageLinks"
          :key="index"
          class="relative group"
          @click="goToProject(project.url)"
          @mouseenter="hoveredProject = project"
          @mouseleave="hoveredProject = null"
          style="cursor: pointer;"
        >
          <div
            class="grid grid-cols-4 items-center gap-x-60 px-4 rounded py-4 border-b border-white/10 hover:bg-blue-100 hover:text-black transition duration-300 ease-in-out"
          >
            <div>{{ project.name.replace('.png', '').replace(/-/g, ' ') }}</div>
            <div>{{ project.role }}</div>
            <div class="w-[220px]">{{ project.description }}</div>
            <div>{{ project.year }}</div>
          </div>
        </div>
      </div>
      <transition name="fade">
       <img
  v-if="hoveredProject"
  :src="'/work/' + hoveredProject.name"
  alt="Preview"
  class="fixed w-[300px]  rounded-xl shadow-lg object-cover pointer-events-none transition-all duration-500 ease-out"
  :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
/>

      </transition>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const isNavbarHovered = ref(false)
const dropdownOpen = ref(false)
let dropdownTimeout = null

const services = [
  { label: 'App Development', to: '/services/appdevelopment' },
  { label: 'AI Consulting', to: '/services/aiconsulting' },
  { label: 'E-commerce', to: '/services/ecs' },
  { label: 'Website Strategy', to: '/services/website-strategy' },
  { label: 'SEO', to: '/services/seo' }
]

const openDropdown = () => {
  clearTimeout(dropdownTimeout)
  dropdownOpen.value = true
}
const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    dropdownOpen.value = false
  }, 150)
}

// Hover + Mouse tracking
const hoveredProject = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const imageWidth = 300
const imageHeight = 200
const padding = 20

const updateMouse = (e) => {
  const vw = window.innerWidth
  const vh = window.innerHeight

  let x = e.clientX + padding
  let y = e.clientY

  // Clamp horizontally so image doesn’t go off screen
  if (x + imageWidth > vw - padding) {
    x = e.clientX - imageWidth - padding
  }
  if (x < padding) x = padding

  // Clamp vertically
  if (y + imageHeight / 2 > vh - padding) {
    y = vh - imageHeight / 2 - padding
  }
  if (y - imageHeight / 2 < padding) {
    y = imageHeight / 2 + padding
  }

  mouseX.value = x
  mouseY.value = y - imageHeight / 2
}

// Projects
const imageLinks = [
  {
    name: 'Adobelino.png',
    url: 'https://adobelino.com',
    description: 'A digital store for purchasing original software & licenses',
    role: 'Fullstack',
    year: 2023
  },
  {
    name: 'Crovillas.png',
    url: 'https://crovillas.com/',
    description: 'Luxury villa rentals with pool and sea views.',
    role: 'Fullstack',
    year: 2024
  },
  {
    name: 'Cube.expert.png',
    url: 'https://cubee.expert/en',
    description: 'Vehicle appraisals and damage assessments',
    role: 'Fullstack',
    year: 2022
  },
  {
    name: 'Depositdirect.png',
    url: 'https://depositdirect.net',
    description: 'Rent without a cash deposit with a rental guarantee',
    role: 'Fullstack',
    year: 2023
  },
  {
    name: 'Epass.png',
    url: 'https://Epass.gg',
    description: 'Identity verification and KYC platform',
    role: 'Fullstack',
    year: 2025
  },
  {
    name: 'Prestige-cars.png',
    url: 'https://prestige.cars',
    description: 'Luxury & exotic car rental platform',
    role: 'Fullstack',
    year: 2024
  },
  {
    name: 'Tzone.png',
    url: 'https://T.zone',
    description: 'Tournament organizer and monetization platform',
    role: 'Fullstack',
    year: 2023
  }
]

const goToProject = (url) => {
  if (url) window.open(url, '_blank')
}

// Fade-in
const mainContent = ref(null)
onMounted(() => {
  setTimeout(() => {
    if (mainContent.value) {
      mainContent.value.classList.remove('opacity-0', 'translate-y-8')
      mainContent.value.classList.add('opacity-100', 'translate-y-0')
    }
  }, 50)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<style>
body {
  background-color: #000;
}
</style>
