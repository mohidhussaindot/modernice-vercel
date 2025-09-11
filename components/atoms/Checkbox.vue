<template>
    <input
        type="checkbox"
        :id="id"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="form-checkbox h-4 w-4 text-green-500 bg-black border-gray-700 rounded cursor-pointer"
    />
</template>

<script setup lang="ts">
defineProps<{
    id: string;
    modelValue?: boolean;
}>();

defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
}>();
</script>
