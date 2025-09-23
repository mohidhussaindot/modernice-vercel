<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      to: string
      label: string
    }>(),
    {}
  )
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
  >
    {{ props.label }}
  </NuxtLink>
</template>
