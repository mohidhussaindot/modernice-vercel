<template>
  <div>
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services', to: '/services' },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Let’s Talk"
      cta-to="/contact"
      logo-src="/images/SEO-logo.png"
    />

    <SeoHero />
    <SeoSecond />
    <SiteFooter bg-color="#020111"  textcolor="#1AC1E6"  quote="Opportunities don’t happen,You create them." author="- Steve Ballmer"/>
  </div>
</template>

<script>
import Navbar from '@organisms/Navbar.vue';
import SeoHero from '@organisms/SeoHero.vue';
import SeoSecond from '@organisms/SeoSecond.vue';
import SiteFooter from '@organisms/SiteFooter.vue';
export default {
  name: 'SeoPage',
  components: {
    Navbar,
    SeoHero,
    SeoSecond,
    SiteFooter
  }
};
</script>
