<script setup lang="ts">
import { ref } from "vue";

import Navbar from "@organisms/Navbar.vue";
import HeroSection from "@organisms/Herosection.vue";
import SiteFooter from "@organisms/SiteFooter.vue";

import ServicesHero from "@organisms/Serviceshero.vue";
import ServicesSecond from "@organisms/Servicessecond.vue";
import ServicesSlider from "@organisms/ServicesSlider.vue";
import Servicesmain from "@organisms/Servicesmain.vue";
import ScrollToTopButton from '@organisms/Scrolltotop.vue'

const showServices = ref(false);

const handleShowServices = () => {
  setTimeout(() => {
    showServices.value = true;
  }, 2000);
};
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

<HeroSection @show-services="handleShowServices"/>

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
      <ServicesHero />
      <ServicesSecond />
      <ServicesSlider />
      <Servicesmain />
      <SiteFooter
        bg-color="#020111"
        textcolor="#38EF61"
        quote="The Rules Don’t Apply to You"
        author="- Sigma Rule #15"
      />
    </div>
  </div>
</template>
