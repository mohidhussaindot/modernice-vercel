<template>
  <header
    ref="headerRef"
    :class="[ 
      'fixed z-[9999] h-[2.8281rem] top-[3.46125rem] transition-opacity duration-500 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/1',
      'w-full max-w-[74.875rem]', // Default max-width
      '2xl:max-w-[90rem]',        // For 2xl screens
      { 'opacity-0 pointer-events-none': hidden }
    ]"
  >
    <!-- Navbar Content -->
    <div class="flex bg-transparent justify-between items-center w-full relative z-[9999]">
      <!-- Logo -->
      <span>
        <NuxtLink v-if="logoSrc" to="/" aria-label="Modernise home">
          <NuxtImg
            :src="logoSrc"
            alt="Logo"
            class="select-none w-[2.8306rem] h-[2.8306rem]"
          />
        </NuxtLink>
      </span>

      <!-- Nav Links -->
      <nav
        class="relative grid grid-flow-col auto-cols-max items-center gap-[2rem] sm:gap-[3rem] md:gap-[4rem] text-white 2xl:text-[1.3rem] xl:text-[1rem] font-light"
        aria-label="Primary"
      >
        <template v-for="(link, index) in navLinks" :key="index">
          <!-- Services Hover Dropdown -->
        <div
  v-if="['services', 'leistungen'].includes(link.label.toLowerCase())"
  class="relative"
  @mouseenter="openDropdown"
  @mouseleave="scheduleCloseDropdown"
>
            <button class="hover:underline cursor-pointer focus:outline-none">
              {{ link.label }}
            </button>

            <!-- Dropdown Menu -->
            <div
              v-show="dropdownOpen"
              class="absolute left-0 mt-2 w-[13rem] rounded-lg shadow-lg border border-gray-700 overflow-hidden z-[9999]"
              :style="{ background: `linear-gradient(135deg, ${ctaFrom}, ${ctaToColor})` }"
            >
              <NuxtLink
                v-for="service in services"
                :key="service.to"
                :to="service.to"
                class="block px-4 py-2 text-sm rounded-t-lg first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                :class="{
                  'text-black': true,
                  'bg-[rgba(255,255,255,0.29)]': isActive(service.to),
                  'hover:bg-[rgba(255,255,255,0.29)]': true
                }"
              >
                {{ service.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Normal Link -->
          <NuxtLink
            v-else
            :to="link.to"
            class="hover:underline"
            :class="isActive(link.to) ? '' : ''"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

        <!-- CTA Button -->
        <NuxtLink
          v-if="ctaLabel"
          :to="ctaTo"
          class="relative inline-block px-[1.5rem] py-[0.5rem] font-semibold text-base rounded-[0.75rem] transition-transform duration-300 hover:scale-105"
        >
          <div
            class="absolute inset-0 rounded-[0.6875rem] p-[0.0625rem] pointer-events-none"
            :style="`background: linear-gradient(135deg, ${ctaFrom}, ${ctaToColor})`"
          >
            <div class="w-full h-full rounded-[0.625rem] bg-[#0B061F]"></div>
          </div>

          <span
            class="relative 2xl:text-[1.3rem] z-10"
            :style="`
              background-image: linear-gradient(135deg, ${ctaToColor}, ${ctaFrom});
              -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            `"
          >
            {{ ctaLabel }}
          </span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

type NavLink = {
  label: string
  to: string
}

defineProps<{
  navLinks: NavLink[]
  ctaLabel?: string
  ctaTo?: string
  logoSrc: string
  ctaFrom?: string
  ctaVia?: string
  ctaToColor?: string
}>()


const headerRef = ref<HTMLElement | null>(null)
const hidden = ref(false)
const dropdownOpen = ref(false)
let closeTimeout: ReturnType<typeof setTimeout> | null = null

const openDropdown = () => {
  if (closeTimeout) clearTimeout(closeTimeout)
  dropdownOpen.value = true
}

const scheduleCloseDropdown = () => {
  closeTimeout = setTimeout(() => {
    dropdownOpen.value = false
  }, 200) // Adjust delay as needed (e.g., 200ms)
}

let lastScrollY = 0

const onScroll = () => {
  const currentScrollY = window.scrollY || window.pageYOffset

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    hidden.value = true
  } else {
    hidden.value = false
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const route = useRoute()

const services = [
  { label: 'App Development', to: '/services/appdevelopment' },
  { label: 'AI Consulting', to: '/services/aiconsulting' },
  { label: 'E-commerce', to: '/services/ecs' },
  { label: 'Website Strategy', to: '/services/website-strategy' },
  { label: 'SEO', to: '/services/seo' }
]

const isActive = (path: string) => {
  return route.path === path
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}
</script>
