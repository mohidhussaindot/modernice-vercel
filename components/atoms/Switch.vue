<template>
  <label class="inline-flex items-center cursor-pointer w-fit">
    <input
        type="checkbox"
        class="sr-only peer"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
    />
    <div
        :class="[
        'relative w-11 h-6 rounded-full peer transition-colors',
        'peer-focus:outline-none',
        'after:absolute after:top-[2px] after:start-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all',
        'dark:border-gray-600',
        'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full',
        bgClass,
        knobClass
      ]"
    ></div>
    <span v-if="label" class="ms-3 font-medium">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'purple',
    validator: (val) => ['purple', 'yellowish'].includes(val)
  }
});

const emit = defineEmits(['update:modelValue']);

const bgClass = computed(() => {
  return {
    purple: 'bg-[#374151] peer-checked:bg-purple-600',
    yellowish: 'bg-[#374151] peer-checked:bg-[#85E642]'
  }[props.variant];
});

const knobClass = computed(() => {
  return {
    purple: 'after:bg-white peer-checked:after:border-white',
    yellowish: 'after:bg-white peer-checked:after:bg-black'
  }[props.variant];
});
</script>
