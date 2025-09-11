<template>
    <div :class="[base, variant === 'primary' && greadient === true ? 'bg-gradient-to-r from-[#501696] to-[#6E1AB8]' : variant === 'primary' ? 'bg-[var(--bg-primary)]' : variant === 'secondary' ? 'bg-[var(--bg-secondary)]' : '']">
      <h3 v-if="title" class="text-lg font-bold mb-2">
       {{ title }}
      </h3>
        <slot name="content" />
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
      base?: string,
      title?: string,
      variant?: 'primary' | 'secondary',
      greadient?: boolean
  }>()
  </script>
  