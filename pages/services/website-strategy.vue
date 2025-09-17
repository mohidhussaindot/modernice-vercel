<template>
  <div class="">
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services',  },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Let’s Talk"
      cta-to="/contact"
      logo-src="/images/services-navbar.png"
         cta-from="#38EF61"
  cta-to-color="#44E5C8"
    />

    <ServicesHero />
    <ServicesSecond />
 
    <ServicesSlider />
       <Servicesmain/>
   
 <SiteFooter bg-color="#020111"  textcolor="#38EF61" quote="The Rules Dont apply you" author="-Sigma Rule #15"/>
</div>
</template>

<script setup>
import Navbar from '@organisms/Navbar.vue'
import ServicesHero from '@organisms/Serviceshero.vue'
import ServicesSecond from '@organisms/Servicessecond.vue'
import ServicesSlider from '@organisms/ServicesSlider.vue'
import Servicesmain from '@organisms/Servicesmain.vue'

import SiteFooter from '@organisms/SiteFooter.vue'
</script>
