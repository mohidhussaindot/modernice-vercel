<template>
  <div :class="mainClass">
    <div class="flex items-center space-x-2">
      <Image v-if="isIcon" :src="iconSrc" class="iconClass"/>
      <p :class="labelClass">
        {{ label }}
      </p>
    </div>

    <Select :selectClass="selectClass" :options="options" v-model="internalValue" @update:modelValue="updateValue"
            @blur="$emit('blur')"/>
  </div>
</template>
<script lang="ts" setup>
import {Select} from '@atoms';
import {ref, watch} from 'vue'

const props = defineProps<{
  label?: string;
  value?: string;
  options: { value: string; label: string }[];
  selectClass?: string;
  inputClass?: string;
  labelClass?: string;
  mainClass?: string;
  isIcon?: boolean;
  iconClass?: string;
  iconSrc?: string;
  modelValue?: string;
}>();

const internalValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    (newVal) => {
      internalValue.value = newVal
    }
)


const emit = defineEmits<{
  (e: 'update:value', value: string): void;
  (e: 'update:modelValue', value: string): void;
  (e: 'blur'): void;
}>();


const updateValue = (newValue: string) => {
  emit('update:value', newValue);
  emit('update:modelValue', newValue)
};
</script>
