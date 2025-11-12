<script script setup>
  import { ref } from 'vue'

  import Navbar from '@organisms/Navbar.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
  import Servicessecond from '@organisms/Servicessecond.vue'
  import ServicesSlider from '@organisms/ServicesSlider.vue'
  import Servicesmain from '@organisms/Servicesmain.vue'
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'
  import HerosectionCopy2 from '@organisms/Herosection copy 2.vue'
  import Serviceshero from '@organisms/Serviceshero.vue'
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
      <div class="hidden lg:block">
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
