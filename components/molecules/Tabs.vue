<template>
  <div
    class="tabs-container flex gap-3 lg:gap-0 items-center flex-wrap lg:justify-between rounded-t-lg font-rajdhani font-medium"
  >
    <BaseButton
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab-item font-semibold text-base uppercase text-center tracking-wide py-2 lg:text-[24.01px] relative transition-colors duration-300"
      :class="{
        'text-opacity-100  text-white font-semibold border-b-2 border-[#85E642]':
          activeTab === index,
        'text-opacity-50 text-[#C7C7C7]': activeTab !== index
      }"
      @click="setActiveTab(index, $event)"
    >
      {{ tab }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { BaseButton } from '@atoms'
  import { ref, onMounted, watch } from 'vue'
  import { gsap } from 'gsap'

  // Define props for the tab items
  const props = defineProps<{
    tabs: string[]
    initialTab?: number // Optional prop to set initial active tab
  }>()

  // Define emits for the active tab change
  const emit = defineEmits<{
    (e: 'update:activeTab', value: number): void
  }>()

  // Manage the active tab state
  const activeTab = ref(props.initialTab || 0)
  const underline = ref<HTMLElement | null>(null)

  // Function to set the active tab and emit the change
  const setActiveTab = (index: number, event: Event) => {
    activeTab.value = index
    emit('update:activeTab', index)

    // Get the clicked tab element
    const target = event.currentTarget as HTMLElement
    if (underline.value && target) {
      // Animate the underline to the new tab using GSAP
      gsap.to(underline.value, {
        width: target.offsetWidth,
        x: target.offsetLeft,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Initialize the underline position on mount
  onMounted(() => {
    const firstTab = document.querySelector('.tab-item') as HTMLElement
    if (underline.value && firstTab) {
      gsap.set(underline.value, {
        width: firstTab.offsetWidth,
        x: firstTab.offsetLeft
      })
    }
  })

  // Watch for changes in activeTab to update the underline position
  watch(activeTab, newIndex => {
    const tabElement = document.querySelectorAll('.tab-item')[newIndex] as HTMLElement
    if (underline.value && tabElement) {
      gsap.to(underline.value, {
        width: tabElement.offsetWidth,
        x: tabElement.offsetLeft,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  })
</script>

<style scoped>
  .tabs-container {
    position: relative;
  }

  .underline {
    transition: none; /* GSAP will handle transitions */
  }
</style>
