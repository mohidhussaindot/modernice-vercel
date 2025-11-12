<template>
  <div>
    <Navbar
      :nav-links="[
        { label: $t('nav.brand'), to: '/' },
        { label: $t('nav.services') },
        { label: $t('nav.work'), to: '/work' }
      ]"
      :cta-label="$t('button.talk2')"
      cta-to="/appointment"
      logo-src="/images/app-dev-logo.png"
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
