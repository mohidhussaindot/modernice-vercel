<template>
    <div>
         <Navbar
  :nav-links="[
    { label: 'modernice.design', to: '/' },
    { label: 'Leistungen', to: '/Leistungen' },
    { label: 'Referenzen', to: '/Referenzen' }
  ]"
  cta-label="KI-Beratung"
  cta-to="/contact"
  logo-src=""
cta-from="#3BE8E8"
  cta-to-color="#AFE639"
/>

<Aiconsulting/>

 <SiteFooter bg-color="#020111"  textcolor="#DE39D0"  quote="Developers! Developers! Developers!
Developers! Developers! Developers!
Developers! Developers! Developers!" author="- Steve Ballmer"/>
    </div>
     
</template>

<script setup>
import Navbar from '@organisms/Navbar.vue';
import Aiconsulting from '@organisms/Aiconsulting.vue';
import SiteFooter from '@organisms/SiteFooter.vue';
</script>