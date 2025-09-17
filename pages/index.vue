<script setup lang="ts">
import { ref } from "vue";

import Navbar from "@organisms/Navbar.vue";
import HeroSection from "@organisms/Herosection.vue";
import SecondPart from "@organisms/Secondpart.vue";
import ThirdPart from "@organisms/Thirdpart.vue";
import LeftFeatureCta from "@organisms/LeftFeatureCta.vue";
import CockpitShowcase from "@organisms/CockpitShowcase.vue";
import SiteFooter from "@organisms/SiteFooter.vue";

import ServicesHero from "@organisms/Serviceshero.vue";
import ServicesSecond from "@organisms/Servicessecond.vue";
import ServicesSlider from "@organisms/ServicesSlider.vue";
import Servicesmain from "@organisms/Servicesmain.vue";

const showServices = ref(false);

const handleShowServices = () => {
  showServices.value = true;
};
</script>

<template>
  <div>
    <div v-if="!showServices">
      <Navbar
        :nav-links="[
          { label: 'modernice.design', to: '/' },
          {
            label: 'Services',
            to: '',
          },

          { label: 'Work', to: '/work' },
        ]"
        cta-label="Let’s Talk"
        cta-to="/contact"
        logo-src="/first-three-sect-img/navbar-img.png"
           cta-from="#01A3FF"
  cta-to-color="#25CDDA"
      />

      <HeroSection />

      <div class="bg-[#020111] text-white min-h-screen">
        <SecondPart />
        <ThirdPart />

        <LeftFeatureCta
          title="Sei der Wandel, den du in deiner Branche sehen möchtest."
          description="Wir transformieren Daten in Einblicke, Herausforderungen in Chancen. Mit unserer Strategie werden Künstliche Intelligenz und deine Ambitionen zu treibenden Kräften. Lass die Zukunft nicht warten."
          cta-label="KI-Beratung"
          cta-to="#"
          line-svg="/images/Lines.svg"
          spaceship-svg="/images/Frame.svg"
        />

        <CockpitShowcase
          bg-image="/images/BG.png"
          card-image="/images/Hero - Illustration.svg"
          title="Ready to take your  Online Presence to the next level?"
          description="We'll work with you to plan and create a website that aligns with your business goals and resonates with your target audience. Only if we become friends of course!"
          cta-label="Get a Website Strategy"
          :onShowServices="handleShowServices"
        />

        <SiteFooter
          bg-color="#020111"
          textcolor="#FCD265"
          quote="A goal without a plan is just a wish"
          author="– Antoine deww Saint-Exupéryee"
        />
      </div>
    </div>

    <div v-else class="bg-[#020111] text-white min-h-screen">
      <ServicesHero />
      <ServicesSecond />
      <ServicesSlider />
     
      <Servicesmain/>
      <SiteFooter
        bg-color="#020111"
        textcolor="#38EF61"
        quote="The Rules Dont apply you"
        author="-Sigma Rule #15"
      />
    </div>
  </div>
</template>
