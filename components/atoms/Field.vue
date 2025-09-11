<template>
  <div>
    <div class="mb-2" v-if="label">
      <label class="text-white font-medium text-[17.76px]">
        {{ label }}<span class="text-red-500" v-if="required"> *</span>
      </label>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>
