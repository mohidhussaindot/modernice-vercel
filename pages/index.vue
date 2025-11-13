<script script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  import Navbar from '@organisms/Navbar.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
  import Servicessecond from '@organisms/Servicessecond.vue'
  import ServicesSlider from '@organisms/ServicesSlider.vue'
  import Servicesmain from '@organisms/Servicesmain.vue'
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'
  import HerosectionCopy2 from '@organisms/Herosection copy 2.vue'
  import Serviceshero from '@organisms/Serviceshero.vue'


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
    <div>
      <ScrollToTopButton />

      <Navbar
        :nav-links="[
          { label: $t('nav.brand'), to: '/' },
          { label: $t('nav.services') },
          { label: $t('nav.work'), to: '/work' }
        ]"
        :cta-label="$t('button.talk')"
        cta-to="/appointment"
        logo-src="/first-three-sect-img/navbar-img.png"
        cta-from="#01A3FF"
        cta-to-color="#25CDDA"
      />

      <HerosectionCopy2 />
      <div v-if="!isMobileView">
        <Serviceshero />
        <Servicessecond />
        <ServicesSlider />
        <Servicesmain />
      </div>

      <div class="bg-[#020111] text-white">
        <SiteFooter
          bg-color="#020111"
          textcolor="#FCD265"
          quote="A goal without a plan is just a wish"
          author="– Antoine de Saint-Exupéry"
        />
      </div>
    </div>
  </div>
</template>
