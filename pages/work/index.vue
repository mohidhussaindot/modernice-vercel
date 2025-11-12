<template>
  <div>
    <Project2 />
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
    <SiteFooter
      bg-color="#020111"
      textcolor="#FCD265"
      quote="A goal without a plan is just a wish"
      author="– Antoine de Saint-Exupéry"
    />
  </div>
</template>

<script setup>
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'
  import Project2 from '@organisms/project2.vue'
  import Navbar from '@organisms/Navbar.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
</script>
