<template>
  <div :class="containerClass" @click="focusInput">
    <label v-if="showLabel" :class="labelClass">{{ labelText }}</label>
    <div :class="inputWrapperClass">
      <span v-for="(tag, index) in tags" :key="index" :class="tagClass">
        {{ tag }}
        <span :class="removeTagClass" @click.stop="removeTag(index)"> × </span>
      </span>
      <input
        ref="inputRef"
        v-model="newTag"
        @keydown.enter.prevent="addTag"
        @keydown.backspace="handleBackspace"
        @blur="addTag"
        :placeholder="tags?.length === 0 ? placeholder : ''"
        :class="inputClass"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    tags: {
      type: Array as () => string[],
      required: true
    },
    containerClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    inputWrapperClass: {
      type: String,
      default: ''
    },
    tagClass: {
      type: String,
      default: ''
    },
    removeTagClass: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Add tags...'
    },
    labelText: {
      type: String,
      default: 'Tags'
    },
    showLabel: {
      type: Boolean,
      default: true
    }
  })

  const emit = defineEmits(['update:tags'])

  const inputRef = ref<HTMLInputElement | null>(null)
  const newTag = ref('')

  const focusInput = () => {
    inputRef.value?.focus()
  }

  const addTag = () => {
    const trimmedTag = newTag.value.trim()
    if (trimmedTag && !props.tags.includes(trimmedTag)) {
      const updatedTags = [...props.tags, trimmedTag]
      emit('update:tags', updatedTags)
      newTag.value = ''
    }
  }

  const handleBackspace = () => {
    if (newTag.value === '' && props.tags?.length > 0) {
      const updatedTags = props.tags.slice(0, -1)
      emit('update:tags', updatedTags)
    }
  }

  const removeTag = (index: number) => {
    const updatedTags = props.tags.filter((_, i) => i !== index)
    emit('update:tags', updatedTags)
    focusInput()
  }
</script>
