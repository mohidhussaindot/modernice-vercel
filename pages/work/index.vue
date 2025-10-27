<template>
  <div>
    <Work class="hidden md:block" />
    <Projects class="block md:hidden" />
  </div>
</template>

<script setup>
  import Projects from './projects.vue'
  import Work from '@organisms/Work.vue'
</script>
