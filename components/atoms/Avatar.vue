<template>
    <div class="flex items-center">
        <img :src="src" :alt="alt" class=" rounded-full" :width="size" :height="size" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string;
    alt?: string;
    size?: string;
}>();
</script>