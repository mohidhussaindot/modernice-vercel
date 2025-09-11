<template>
  <div class="flex items-center gap-3 accent-[#85E642]" :class="mainClass">
    <input
        class="form-checkbox h-4 w-4 bg-black border-gray-700 rounded cursor-pointer"
        type="checkbox"
        :id="id"
        :checked="isChecked"
        @change="onChange"
        :value="value"
    />
    <label :for="id" :class="labelClass" class="cursor-pointer text-lg">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
  label: string;
  id: string;
  labelClass?: string;
  mainClass?: string;
  modelValue: boolean | string[];
  value?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string[]): void;
}>();

const isChecked = computed(() => {
  return Array.isArray(props.modelValue)
      ? props.modelValue.includes(props.value ?? '')
      : props.modelValue;
});

function onChange(event: Event) {
  const input = event.target as HTMLInputElement;

  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    const index = newValue.indexOf(props.value ?? '');

    if (input.checked && index === -1) {
      newValue.push(props.value ?? '');
    } else if (!input.checked && index > -1) {
      newValue.splice(index, 1);
    }

    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', input.checked);
  }
}
</script>
