<template>
  <div class="">
    <Navbar
      :nav-links="[
        { label: 'modernice.design', to: '/' },
        { label: 'Services', },
        { label: 'Work', to: '/work' }
      ]"
      cta-label="Boost Sales"
      cta-to="/contact"
      logo-src="/images/ecs-logo.png"
       cta-from="#FFE501"
  cta-to-color="#FFA901"
    />
         <ScrollToTopButton />
         <component/>
    <EcsHerosection/>
        <SiteFooter bg-color="#020111"  textcolor="#FFB401"  quote="Stop putting my name under  quotes
I didn’t say." author="- Sun Tzu, the art of war"/>


</div>
</template>

<script setup>
import EcsHerosection from '@organisms/EcsHerosection.vue';
import Navbar from '@organisms/Navbar.vue'
import SiteFooter from '@organisms/SiteFooter.vue';
import ScrollToTopButton from '@organisms/Scrolltotop.vue'

</script>
