<template>
  <header
    ref="headerRef"
    :class="[
      'fixed z-[9999] h-[2.8281rem] xl:w-[74.875rem] sm:w-full sm:px-6 md:mx-[0.9375rem] lg:mx-[1.0625rem] xl:mx-[6.25rem] px-4 top-[3.46125rem] transition-opacity duration-500',
      { 'opacity-0 pointer-events-none': hidden }
    ]"
  >
    <div class="flex bg-transparent justify-between items-center">
      <span>
        <NuxtLink v-if="logoSrc" to="/" aria-label="Modernise home">
          <NuxtImg
            :src="logoSrc"
            alt="Logo"
            class="select-none w-[2.8306rem] h-[2.8306rem]"
          />
        </NuxtLink>
      </span>

      <nav
        class="relative grid grid-flow-col auto-cols-max items-center gap-[2rem] sm:gap-[3rem] md:gap-[4rem] text-white text-[1rem] font-light"
        aria-label="Primary"
      >
        <template v-for="(link, index) in navLinks" :key="index">
          <div v-if="['services', 'leistungen'].includes(link.label.toLowerCase())" class="relative group">
    <!-- Trigger -->
<NuxtLink :to="link.to" class="hover:underline cursor-pointer">

    {{ link.label }}
    </NuxtLink>

            <div
              class="absolute left-0 mt-2 w-[13rem] bg-[#0B061F] border border-gray-700 rounded-lg shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transform transition-all duration-300"
            >
              <NuxtLink
                v-for="service in filteredServices"
                :key="service.to"
                :to="service.to"
                class="block px-4 py-2 text-sm hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg"
              >
                {{ service.label }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            v-else
            :to="link.to"
            class="hover:underline"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

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

          <!-- Button text with gradient -->
          <span
  class="relative z-10"
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
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

const filteredServices = computed(() => {
  return services.filter(service => service.to !== route.path)
})
</script>
