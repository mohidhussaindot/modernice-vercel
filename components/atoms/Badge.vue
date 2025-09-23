<template>
  <h6 :class="cn(badgeVariants({ variant, size }), props.class)">
    <slot />
  </h6>
</template>

<script setup lang="ts">
  import { cn, badgeVariants } from '@atoms/variants'

  const props = defineProps<{
    class?: string
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'destructive' | 'yellowish'
    size?: 'default' | 'xs' | 'sm'
  }>()
</script>
