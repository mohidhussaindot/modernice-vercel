<template>
    <input v-if="type !== 'textarea'" 
           :type="type" 
           :placeholder="placeholder" 
           :value="value" 
           :disabled="isDisabled"
           class="input" 
           :maxlength="maxLength"
           @input="$emit('update:value', $event.target.value)" />
    <textarea v-else
              :placeholder="placeholder"
              :value="value"
              :disabled="isDisabled"
              class="input textarea"
              :maxlength="maxLength"
              @input="$emit('update:value', $event.target.value)"
              rows="4"></textarea>
</template>

<script setup lang="ts">
defineProps<{
    type?: string;
    placeholder: string;
    value: string;
    isDisabled?: boolean;
    maxLength?: number;
}>();

defineEmits<{
    (e: 'update:value', value: string): void;
}>();
</script>

<style>
.input {
    /* your common input styles */
}

.textarea {
    /* additional textarea-specific styles if needed */
    resize: vertical; /* allows vertical resizing */
    min-height: 100px; /* default minimum height */
}
</style>