<template>
  <select :value="value" :class="selectClass" @change="$emit('update:value', $event.target.value)">
    <option disabled value="" :class="innerColor">{{ $t('select_option') }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value" :class="innerColor">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
  defineProps<{
    value?: string
    options: { value: string; label: string }[]
    selectClass?: string
    innerColor?: string
  }>()

  defineEmits<{
    (e: 'update:value', value: string): void
  }>()
</script>
