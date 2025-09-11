<script setup lang="ts">
defineProps<{ asLink?: boolean }>()
</script>

<template>
  <NuxtLink v-if="asLink !== false" to="/" class="inline-flex items-center gap-2">
    <span class="relative block h-6 w-6 rounded-lg bg-gradient-to-br from-neon-cyan via-neon-green to-neon-purple shadow-neon"></span>
    <span class="text-gradient font-semibold tracking-wide">NeonVerse</span>
  </NuxtLink>
  <div v-else class="inline-flex items-center gap-2">
    <span class="relative block h-6 w-6 rounded-lg bg-gradient-to-br from-neon-cyan via-neon-green to-neon-purple shadow-neon"></span>
    <span class="text-gradient font-semibold tracking-wide">NeonVerse</span>
  </div>
</template>
