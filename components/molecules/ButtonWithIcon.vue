<template>
    <button
    type="submit"
    :style="{
        padding: padding}"
     :class="[
        'rounded font-medium transition flex items-center cursor-pointer overflow-hidden', base,
        variant === 'primary' ? 'bg-[var(--header-primary)] text-[#FFFFFF]' :
            variant === 'secondary' ? 'bg-[#85E642] text-[#000000]' : '']">
        <div v-if="svg || label" class="flex items-center overflow-hidden" :class="[inner]">
            <img v-if="svg" :src="svg" :width="svgSize" :height="svgSize" alt="" class="cursor-pointer">
            <Icon v-if="icon" :class="[iconClass]" :name="icon" :width="svgSize" :height="svgSize" alt="" />
            <span v-if="label" class="text-nowrap w-full cursor-pointer" :class="[labelSize]">{{ label }}</span>
        </div>

        <!-- for additional content -->
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    svg?: string
    label?: string
    variant?: 'primary' | 'secondary'
    svgSize?: string
    base?: string,
    inner?: string,
    padding?: string,
    labelSize?: string,
    icon?: string,
    iconClass?: string,
    type?:string
}>(), {
    svgSize: '24px',
    padding: '12px 16px',
    labelSize: '15px',
})
</script>
