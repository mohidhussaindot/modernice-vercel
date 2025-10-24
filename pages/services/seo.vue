<template>
  <div>
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services' },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Startbefehl geben"
      cta-to="/appointment"
      logo-src="/images/SEO-logo.png"
      cta-from="#01A3FF"
      cta-to-color="#25CDDA"
    />
    <ScrollToTopButton />
    <SeoHero />
    <SeoSecond />

    <SiteFooter
      bg-color="#020111"
      textcolor="#1AC1E6"
      quote="Opportunities don’t happen,You create them."
      author="- Steve Ballmer"
    />
  </div>
</template>

<script>
  import Navbar from '@organisms/Navbar.vue'
  import SeoHero from '@organisms/SeoHero.vue'
  import SeoSecond from '@organisms/SeoSecond.vue'
  import SiteFooter from '@organisms/SiteFooter.vue'
  import ScrollToTopButton from '@organisms/Scrolltotop.vue'

  export default {
    name: 'SeoPage',
    components: {
      Navbar,
      SeoHero,
      SeoSecond,
      SiteFooter,
      ScrollToTopButton
    }
  }
</script>
