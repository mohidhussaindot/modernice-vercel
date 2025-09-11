<template>
  <div :class="cn('rounded-md animate-pulse bg-gray-600 w-full h-10',props.class)"></div>
</template>

<script setup lang="ts">
import {cn} from '@atoms/variants';

const props = defineProps<{
  class?: string;
}>()
</script>
