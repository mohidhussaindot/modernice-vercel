<template>
  <div class="">
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services', to: '/services' },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Let’s Talk"
      cta-to="/contact"
      logo-src="/images/services-navbar.png"
    />

    <ServicesHero />
    <ServicesSecond />
    <ServicesSlider />
    <ServicesThird />
    <ServicesFourth />
    <ServicesFifth />
 <SiteFooter bg-color="#020111"  textcolor="#38EF61" quote="The Rules Dont apply you" author="-Sigma Rule #15"/>
</div>
</template>

<script setup>
import Navbar from '@organisms/Navbar.vue'
import ServicesHero from '@organisms/Serviceshero.vue'
import ServicesSecond from '@organisms/Servicessecond.vue'
import ServicesSlider from '@organisms/ServicesSlider.vue'
import ServicesThird from '@organisms/servicesthird.vue'
import ServicesFourth from '@organisms/Servicesfourth.vue'
import ServicesFifth from '@organisms/servicesfifth.vue'
import SiteFooter from '@organisms/SiteFooter.vue'
</script>
