<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  // Import ONLY page-specific components
  import Firstpage from '@/components/organisms/Firstpage.vue'
  import Serviceshero from '@/components/organisms/Serviceshero.vue'
  import Servicessecond from '@/components/organisms/Servicessecond.vue'
  import ServicesSlider from '@/components/organisms/ServicesSlider.vue'
  import Servicesmain from '@/components/organisms/Servicesmain.vue'

  // Keep the mobile view logic here if it only affects the Services components
  const isMobileView = ref(false)
  
  const updateIsMobileView = () => {
    if (typeof window === 'undefined') return
    isMobileView.value = window.innerWidth < 640
  }

  onMounted(() => {
    updateIsMobileView()
    window.addEventListener('resize', updateIsMobileView)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateIsMobileView)
  })
</script>

<template>
  <div>
    <Firstpage />
    
    <div v-if="!isMobileView">
      <Serviceshero />
      <Servicessecond />
      <ServicesSlider />
      <Servicesmain />
    </div>
  </div>
</template>