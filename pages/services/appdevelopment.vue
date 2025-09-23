<template>
  <div>
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services' },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Get responsive"
      cta-to="/contact"
      logo-src=""
      cta-from="#DD39D1"
      cta-to-color="#7137EC"
    />
    <ScrollToTopButton />
    <Appdevhero />
    <SiteFooter
      bg-color="#020111"
      textcolor="#DE39D0"
      quote="Developers! Developers! Developers!
Developers! Developers! Developers!
Developers! Developers! Developers!"
      author="- Steve Ballmer"
    />
  </div>
</template>

<script setup>
  import Appdevhero from '@organisms/Appdevhero.vue'
  import Navbar from '@organisms/Navbar.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'
</script>
