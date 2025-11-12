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
      logo-src="/images/ai-logo.png"
      cta-from="#3BE8E8"
      cta-to-color="#AFE639"
    />
    <ScrollToTopButton />
    <Aiconsulting />

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
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'

  import Navbar from '@organisms/Navbar.vue'
  import Aiconsulting from '@organisms/Aiconsulting.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
</script>
