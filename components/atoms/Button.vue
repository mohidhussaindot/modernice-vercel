<script setup lang="ts">
  import { computed } from 'vue'

  type Variant = 'primary' | 'ghost'
  type Size = 'md' | 'lg'

  const props = withDefaults(
    defineProps<{
      as?: 'button' | 'link'
      href?: string
      variant?: Variant
      size?: Size
    }>(),
    {
      as: 'button',
      variant: 'primary',
      size: 'md'
    }
  )

  const sizeClass = computed(() =>
    props.size === 'lg' ? 'px-6 py-3 text-base rounded-xl' : 'px-4 py-2.5 text-sm rounded-lg'
  )

  const variantClass = computed(() =>
    props.variant === 'primary'
      ? 'bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple text-black hover:opacity-90 shadow-neon'
      : 'border border-white/15 text-white/85 hover:bg-white/5'
  )
</script>

<template>
  <component
    :is="props.as === 'link' ? 'NuxtLink' : 'button'"
    :to="props.as === 'link' ? props.href : undefined"
    :href="props.as === 'link' ? props.href : undefined"
    class="inline-flex items-center justify-center font-medium transition-all active:scale-[0.98]"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </component>
</template>
