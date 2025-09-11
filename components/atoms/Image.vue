<template>
    <img ref="imageElement" :src="name" alt="icon" :class="[iconClass]" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  defineProps<{
    name?: string;
    iconClass?: string;
  }>();
  
  const imageElement = ref<HTMLImageElement | null>(null);
  
  // Expose the image element to parent components
  defineExpose({
    imageElement
  });
  </script>
