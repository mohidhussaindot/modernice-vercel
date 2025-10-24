<template>
  <div>
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services', to: '' },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Let’s Talk"
      cta-to="/appointment"
      logo-src="/first-three-sect-img/navbar-img.png"
      cta-from="#01A3FF"
      cta-to-color="#25CDDA"
    />
    <Policy />

    <SiteFooter />
  </div>
</template>

<script setup>
  import Navbar from '@organisms/Navbar.vue'
  import Policy from '@organisms/Policy.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
</script>
