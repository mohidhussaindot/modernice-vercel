<script setup lang="ts">
  const links = [
    { to: '#features', label: 'Features' },
    { to: '#solutions', label: 'Solutions' },
    { to: '#insights', label: 'Insights' },
    { to: '#contact', label: 'Contact' }
  ]
</script>

<template>
  <nav class="hidden md:flex items-center gap-1">
    <atoms-nav-link v-for="l in links" :key="l.to" :to="l.to" :label="l.label" />
  </nav>
</template>
