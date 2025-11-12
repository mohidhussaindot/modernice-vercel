<template>
  <div>
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

    <Blog />

    <SiteFooter />
  </div>
</template>

<script setup>
  import Blog from '@organisms/Blog.vue'
  import Navbar from '@organisms/Navbar.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
</script>
