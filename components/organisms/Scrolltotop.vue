<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const showScrollTop = ref(false)

  const checkScroll = () => {
    showScrollTop.value = window.scrollY > 300
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })
</script>

<template>
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    aria-label="Scroll to top"
    class="fixed bottom-8 right-8 z-[9999] bg-black p-3 rounded-md shadow-md shadow-white/50 transition-opacity duration-300 opacity-90 hover:opacity-100 hover:cursor-pointer"
    style="width: 48px; height: 48px; box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.6)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mx-auto text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="stroke: white"
    >
      <path d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>
