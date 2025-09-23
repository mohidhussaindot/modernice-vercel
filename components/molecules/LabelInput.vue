<template>
  <div :class="mainClass">
    <div class="flex items-center space-x-2">
      <Image v-if="isIcon" :src="iconSrc" class="iconClass" />
      <p :class="labelClass">
        {{ label }}
      </p>
    </div>
    <Input
      :max-length="maxLength"
      :class="inputClass"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :is-disabled="isDisabled"
      @update:value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
<script lang="ts" setup>
  import { Input, Image } from '@atoms'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      label?: string
      type?: string
      placeholder?: string
      inputClass?: string
      labelClass?: string
      mainClass?: string
      isIcon?: boolean
      iconClass?: string
      iconSrc?: string
      isDisabled?: boolean
      maxLength?: number
    }>(),
    {
      isDisabled: false
    }
  )

  defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'blur'): void
  }>()
</script>
