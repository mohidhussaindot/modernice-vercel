<script setup lang="ts">
  import { ref } from 'vue'

  import Navbar from '@organisms/Navbar.vue'
  import HeroSection from '@organisms/Herosection.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'

  import ServicesHero from '@organisms/Serviceshero.vue'
  import ServicesSecond from '@organisms/Servicessecond.vue'
  import ServicesSlider from '@organisms/ServicesSlider.vue'
  import Servicesmain from '@organisms/Servicesmain.vue'
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'
import HerosectionCopy from '@organisms/Herosection copy.vue'

  const showServices = ref(false)

  const handleShowServices = () => {
    showServices.value = true
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
</script>
<template>
  <div>
    <div v-if="!showServices">
      <ScrollToTopButton />

      <Navbar
        :nav-links="[
          { label: 'modernice.design', to: '/' },
          { label: 'Services', to: '' },
          { label: 'Work', to: '/work' }
        ]"
        cta-label="Let’s Talk"
        cta-to="/contact"
        logo-src="/first-three-sect-img/navbar-img.png"
        cta-from="#01A3FF"
        cta-to-color="#25CDDA"
      />

      <HerosectionCopy @show-services="handleShowServices" />

      <div class="bg-[#020111] text-white">
        <SiteFooter
          bg-color="#020111"
          textcolor="#FCD265"
          quote="A goal without a plan is just a wish"
          author="– Antoine de Saint-Exupéry"
        />
      </div>
    </div>

    <div v-else class="bg-[#020111] text-white min-h-screen">
      <Transition name="fade" mode="out-in">
        <div v-if="!showServices" key="hero" class="relative">
          <ScrollToTopButton />
          <Navbar
            :nav-links="[
              { label: 'modernice.design', to: '/' },
              { label: 'Services', to: '' },
              { label: 'Work', to: '/work' }
            ]"
            cta-label="Let's Talk"
            cta-to="/contact"
            logo-src="/images/services-navbar.png"
            cta-from="#38EF61"
            cta-to-color="#44E5C8"
          />
          <SiteFooter
            bg-color="#020111"
            textcolor="#38EF61"
            quote="The Rules Don't Apply to You"
            author="- Sigma Rule #15"
          />
        </div>
        <div v-else key="services" class="relative">
          <ScrollToTopButton />
          <Navbar
            :nav-links="[
              { label: 'modernice.design', to: '/' },
              { label: 'Services', to: '' },
              { label: 'Work', to: '/work' }
            ]"
            cta-label="Let's Talk"
            cta-to="/contact"
            logo-src="/images/services-navbar.png"
            cta-from="#38EF61"
            cta-to-color="#44E5C8"
          />
          <ServicesHero />
          <ServicesSecond />
          <ServicesSlider />
          <Servicesmain />
          <SiteFooter
            bg-color="#020111"
            textcolor="#38EF61"
            quote="The Rules Don't Apply to You"
            author="- Sigma Rule #15"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
