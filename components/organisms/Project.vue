<template>
  <div class="relative">
    <!-- Floating Work Button -->
    <div
      class="fixed md:flex hidden bottom-6 right-6 md:bottom-10 md:right-12 z-[9999] flex items-center gap-3 text-white/70"
    >
      <RouterLink to="/work">
        <Button
          aria-label="Go to Work"
          class="p-2 rounded-md bg-white/20 border border-white/20 hover:bg-white/30 transition hover:cursor-pointer backdrop-blur-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </Button>
      </RouterLink>
    </div>

    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-t from-[#000]/0 via-[#000]/50 to-[#000] backdrop-blur-sm"
      @mouseenter="isNavbarHovered = true"
      @mouseleave="isNavbarHovered = false"
    >
      <div
        class="max-w-[90rem] mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 relative"
      >
        <!-- Mobile Menu Button -->
        <button
          class="text-white sm:hidden p-2 rounded-md bg-white/10 border border-white/20"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Left Nav (hidden on mobile) -->
        <div class="hidden sm:flex items-center gap-3 sm:gap-6">
          <!-- Services Dropdown -->
          <div
            class="relative flex items-center"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            <div
              class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:cursor-pointer group"
            >
              <span
                class="absolute top-0 left-[-100%] w-full h-full bg-blue-100 transition-all duration-300 ease-in-out group-hover:left-0"
              ></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
                Services
              </span>
            </div>

            <!-- Dropdown -->
            <div
              v-show="dropdownOpen"
              class="absolute top-full left-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
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

          <!-- Other Links -->
          <a
            href="/about"
            class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-sm sm:text-base hover:text-black hover:bg-blue-100 transition"
          >
            About
          </a>

          <a
            href="/blog"
            class="relative inline-block px-3 py-1 rounded-2xl text-white font-medium overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-sm sm:text-base hover:text-black hover:bg-blue-100 transition"
          >
            Blog
          </a>
        </div>

        <!-- Center Logo -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-light text-lg sm:text-xl cursor-pointer whitespace-nowrap"
        >
          <a href="/">Modernice.Design</a>
        </div>

        <!-- Right Contact -->
        <a
          href="/appointment"
          class="hidden sm:inline-block relative px-3 py-1 rounded-2xl text-white font-medium overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-sm sm:text-base hover:text-black hover:bg-blue-100 transition"
        >
          Contact
        </a>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="sm:hidden bg-black/90 border-t border-white/10 backdrop-blur-md"
        >
          <div class="flex flex-col items-center py-4 space-y-3 text-white">
            <div class="relative" @click="toggleMobileServices">
              <span class="cursor-pointer">Services</span>
              <div
                v-if="mobileServicesOpen"
                class="mt-2 bg-white text-black rounded-md shadow-lg w-40 text-center overflow-hidden"
              >
                <a
                  v-for="service in services"
                  :key="service.to"
                  :href="service.to"
                  class="block py-1 hover:bg-blue-100"
                >
                  {{ service.label }}
                </a>
              </div>
            </div>

            <a href="/about" class="hover:text-blue-100">About</a>
            <a href="/blog" class="hover:text-blue-100">Blog</a>
            <a href="/appointment" class="hover:text-blue-100">Contact</a>
          </div>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <div
      class="bg-black min-h-screen text-white flex justify-center items-center px-3 md:pt-30 sm:px-8"
      @mousemove="updateMouse"
    >
      <div
        ref="mainContent"
        class="w-full max-w-8xl overflow-hidden relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <!-- Table Headers -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 px-2 sm:px-4 gap-x-6 sm:gap-x-20 md:gap-x-40 lg:gap-x-60 text-xs sm:text-sm md:text-lg border-b border-white/20 pb-2 mb-4 font-semibold uppercase tracking-wider"
        >
          <div>Company</div>
          <div>Stack</div>
          <div class="hidden sm:block">Project Type</div>
          <div class="hidden sm:block">Year</div>
        </div>

        <!-- Projects List -->
        <div
          v-for="(project, index) in imageLinks"
          :key="index"
          class="relative group"
          @click="goToProject(project.url)"
          @mouseenter="hoveredProject = project"
          @mouseleave="hoveredProject = null"
          style="cursor: pointer"
        >
          <div
            class="grid grid-cols-2 sm:grid-cols-4 items-center gap-x-4 sm:gap-x-20 md:gap-x-40 lg:gap-x-60 px-2 sm:px-4 py-3 sm:py-4 border-b border-white/20 hover:bg-blue-100 rounded-lg hover:text-black transition duration-300 ease-in-out text-xs sm:text-sm md:text-base"
          >
            <div>{{ project.name }}</div>
            <div>{{ project.role }}</div>
            <div class="hidden sm:block md:truncate">{{ project.description }}</div>
            <div class="hidden sm:block">{{ project.year }}</div>
          </div>
        </div>
      </div>

      <!-- Hover Preview Image -->
      <transition name="fade">
        <img
          v-if="hoveredProject && !isMobile"
          :src="'/work/' + hoveredProject.image"
          alt="Preview"
          class="fixed w-[160px] sm:w-[220px] md:w-[280px] lg:w-[300px] rounded-xl shadow-lg object-cover pointer-events-none transition-all duration-500 ease-out hidden sm:block"
          :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
  import Button from '@atoms/Button.vue'
  import { ref, onMounted, computed } from 'vue'

  const isNavbarHovered = ref(false)
  const dropdownOpen = ref(false)
  const mobileMenuOpen = ref(false)
  const mobileServicesOpen = ref(false)
  let dropdownTimeout = null

  const isMobile = computed(() => window.innerWidth < 640)

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
    dropdownTimeout = setTimeout(() => (dropdownOpen.value = false), 150)
  }
  const toggleMobileServices = () => {
    mobileServicesOpen.value = !mobileServicesOpen.value
  }

  // Hover + Mouse tracking
  const hoveredProject = ref(null)
  const mouseX = ref(0)
  const mouseY = ref(0)
  const imageWidth = 300
  const imageHeight = 200
  const padding = 20

  const updateMouse = e => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    let x = e.clientX + padding
    let y = e.clientY
    if (x + imageWidth > vw - padding) x = e.clientX - imageWidth - padding
    if (x < padding) x = padding
    if (y + imageHeight / 2 > vh - padding) y = vh - imageHeight / 2 - padding
    if (y - imageHeight / 2 < padding) y = imageHeight / 2 + padding
    mouseX.value = x
    mouseY.value = y - imageHeight / 2
  }

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
      year: 2023
    }
  ]

  const goToProject = url => {
    if (url) window.open(url, '_blank')
  }

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
