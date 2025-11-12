<!-- Header.vue -->
<template>
  <!-- Desktop Header -->
  <header
    ref="headerRef"
    :class="[
      'fixed z-[9999] h-[2.8281rem] md:px-3 sm:block hidden top-[3.46125rem] transition-opacity duration-500 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/1',
      'w-full max-w-[74.875rem] 2xl:max-w-[90rem]',
      { 'opacity-0 pointer-events-none': hidden }
    ]"
  >
    <div class="flex justify-between items-center w-full relative z-[9999]">
      <!-- Logo -->
      <span>
        <NuxtLink v-if="logoSrc" :to="localePath('/')" aria-label="Modernise home">
          <NuxtImg :src="logoSrc" alt="Logo" class="select-none w-[2.8306rem] h-[2.8306rem]" />
        </NuxtLink>
      </span>

      <!-- Desktop Navigation -->
      <nav
        class="relative grid grid-flow-col auto-cols-max items-center gap-[2rem] sm:gap-[3rem] md:gap-[4rem] text-white 2xl:text-[1.3rem] xl:text-[1rem] font-light"
        aria-label="Primary"
      >
        <template v-for="(link, index) in navLinks" :key="index">
          <!-- Dropdown -->
          <div
            v-if="['services', 'leistungen'].includes(link.label.toLowerCase())"
            class="relative"
            @mouseenter="openDropdown"
            @mouseleave="scheduleCloseDropdown"
          >
            <button class="hover:underline cursor-pointer focus:outline-none">
              {{ link.label }}
            </button>

            <!-- Services Dropdown -->
            <div
              v-show="dropdownOpen"
              class="absolute left-0 mt-2 w-[13rem] rounded-lg shadow-lg border border-gray-700 overflow-hidden z-[9999]"
              :style="{ background: `linear-gradient(135deg, ${ctaFrom}, ${ctaToColor})` }"
            >
              <NuxtLink
                v-for="service in services"
                :key="service.to"
                :to="localePath(service.to)"
                class="block px-4 py-2 text-sm transition-colors duration-200"
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
          <NuxtLink v-else :to="localePath(link.to)" class="hover:underline">
            {{ link.label }}
          </NuxtLink>
        </template>

        <!-- Language Switcher -->
        <div class="relative group">
          <button
            class="font-semibold text-white hover:underline focus:outline-none flex items-center gap-1"
          >
            <span v-if="locale === 'en'" class="fi fi-gb"></span>
            <span v-else-if="locale === 'de'" class="fi fi-de"></span>
            <svg
              class="w-3 h-3 inline-block ml-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <!-- Language Dropdown -->
          <div
            class="absolute left-0 mt-2 w-[6rem] rounded-lg shadow-lg bg-[#0B061F] border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <button
              v-for="loc in availableLocales"
              :key="loc"
              @click="switchLanguage(loc)"
              class="block w-full px-3 py-2 text-left text-white flex items-center gap-2 transition-colors duration-200"
              :class="{
                'bg-[#1a1234]': locale === loc,
                'hover:bg-[#1a1234]': locale !== loc
              }"
            >
              <span v-if="loc === 'en'" class="fi fi-gb"></span>
              <span v-else-if="loc === 'de'" class="fi fi-de"></span>
              <span>{{ loc.toUpperCase() }}</span>
            </button>
          </div>
        </div>

        <!-- CTA Button -->
        <NuxtLink
          v-if="ctaLabel"
          :to="localePath(ctaTo)"
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

  <!-- Mobile Header -->
  <header
    class="sm:hidden fixed top-0 left-0 z-[9999] w-full bg-[#0B061F] px-4 py-3 flex justify-between items-center"
  >
    <!-- Logo -->
    <NuxtLink v-if="logoSrc" :to="localePath('/')" aria-label="Modernise home">
      <NuxtImg :src="logoSrc" alt="Logo" class="w-10 h-10 select-none" />
    </NuxtLink>

    <!-- Hamburger -->
    <button @click="toggleMenu" aria-label="Open menu" class="focus:outline-none">
      <svg
        class="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        ref="mobileMenuRef"
        class="fixed top-0 right-0 h-full w-64 bg-[#0B061F] z-[9999] shadow-lg transition-transform px-6 py-8"
      >
        <div class="flex justify-between items-center mb-6">
          <span class="text-white text-lg font-semibold">Menü</span>
          <button @click="toggleMenu" aria-label="Close menu">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Links -->
        <nav class="flex flex-col gap-5 text-white">
          <template v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              v-if="!['services', 'leistungen'].includes(link.label.toLowerCase())"
              :to="localePath(link.to)"
              class="text-base hover:underline"
              @click="toggleMenu"
            >
              {{ link.label }}
            </NuxtLink>

            <div v-else class="flex flex-col gap-2">
              <span class="font-semibold">{{ link.label }}</span>
              <NuxtLink
                v-for="service in services"
                :key="service.to"
                :to="localePath(service.to)"
                class="text-sm ml-2 hover:underline"
                @click="toggleMenu"
              >
                {{ service.label }}
              </NuxtLink>
            </div>
          </template>
        </nav>

        <!-- Language Switcher (Mobile) -->
        <div class="mt-6 border-t border-gray-700 pt-4">
          <span class="text-white font-semibold mb-2 block">Language</span>
          <div class="flex flex-col gap-2">
            <button
              v-for="loc in availableLocales"
              :key="loc"
              @click="switchLanguage(loc)"
              class="flex items-center gap-2 px-3 py-2 text-white rounded-md transition-colors duration-200"
              :class="{
                'bg-[#1a1234]': locale === loc,
                'hover:bg-[#1a1234]': locale !== loc
              }"
            >
              <span v-if="loc === 'en'" class="fi fi-gb"></span>
              <span v-else-if="loc === 'de'" class="fi fi-de"></span>
              <span>{{ loc.toUpperCase() }}</span>
            </button>
          </div>
        </div>

        <!-- CTA -->
        <div v-if="ctaLabel" class="mt-6">
          <NuxtLink
            :to="localePath(ctaTo)"
            class="inline-block w-full text-center py-3 rounded-lg text-white font-semibold transition-transform duration-300 hover:scale-105"
            :style="`background: linear-gradient(135deg, ${ctaFrom}, ${ctaToColor})`"
            @click="toggleMenu"
          >
            {{ ctaLabel }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import 'flag-icons/css/flag-icons.min.css'

  import { useLocalePath } from '#i18n'

  // Locale-aware path helper
  const localePath = useLocalePath()

  // Props
  const props = defineProps({
    navLinks: { type: Array, required: true },
    ctaLabel: String,
    ctaTo: String,
    logoSrc: { type: String, required: true },
    ctaFrom: String,
    ctaVia: String,
    ctaToColor: String
  })

  // Router & i18n
  const route = useRoute()
  const { locale, availableLocales, setLocale } = useI18n()

  // Persist locale
  onMounted(() => {
    const saved = localStorage.getItem('locale')
    if (saved && locale.value !== saved) {
      locale.value = saved
    }
  })

  // Switch language
  const switchLanguage = code => {
    setLocale(code)
    localStorage.setItem('locale', code)
  }

  // Header logic
  const headerRef = ref(null)
  const mobileMenuRef = ref(null)
  const hidden = ref(false)
  const dropdownOpen = ref(false)
  const menuOpen = ref(false)
  let closeTimeout = null

  const openDropdown = () => {
    if (closeTimeout) clearTimeout(closeTimeout)
    dropdownOpen.value = true
  }

  const scheduleCloseDropdown = () => {
    closeTimeout = setTimeout(() => {
      dropdownOpen.value = false
    }, 200)
  }

  // Services links
  const services = [
    { label: 'Website Strategy', to: '/services/website-strategy' },
    { label: 'AI Consulting', to: '/services/aiconsulting' },
    { label: 'SEO', to: '/services/seo' },
    { label: 'E-commerce', to: '/services/ecs' },
    { label: 'App Development', to: '/services/appdevelopment' }
  ]

  // Check active route (locale-aware)
  const isActive = path => route.path.endsWith(path)

  // Mobile menu toggle
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
    if (menuOpen.value) {
      document.body.style.overflow = 'hidden'
      nextTick(() => {
        setTimeout(() => document.addEventListener('click', handleClickOutside), 50)
      })
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('click', handleClickOutside)
    }
  }

  const handleClickOutside = e => {
    const menuEl = mobileMenuRef.value
    if (menuOpen.value && menuEl && !menuEl.contains(e.target)) {
      toggleMenu()
    }
  }

  // Hide header on scroll
  let lastScrollY = 0
  const onScroll = () => {
    const current = window.scrollY || window.pageYOffset
    hidden.value = current > lastScrollY && current > 100
    lastScrollY = current
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', handleClickOutside)
    document.body.style.overflow = ''
  })
</script>
