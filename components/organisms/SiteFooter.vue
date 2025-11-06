<template>
  <footer
    class="text-white/70 pt-12 px-2 md:px-0 pb-8 border-t border-white/10"
    :style="{ backgroundColor: props.bgColor }"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 class="uppercase tracking-wide text-xs font-semibold mb-3 text-white/60">messages</h3>
          <p class="font-semibold text-white mb-2">Reach us</p>
          <p class="mb-1">hello@modernice.design</p>
          <p class="hover:text-white cursor-pointer">Schedule a Call</p>
        </div>

        <div>
          <h3 class="uppercase tracking-wide text-xs font-semibold mb-3 text-white/60">Find us</h3>
          <p>Senator-Braun-Allee 13</p>
          <p>31135 Hildesheim, Germany</p>
        </div>

        <div class="italic text-right">
          <p :style="{ color: props.textcolor }" class="font-semibold text-lg leading-snug">
            “{{ props.quote }}”
          </p>
          <p class="mt-2 text-sm text-white/60">{{ props.author }}</p>
        </div>
      </div>

      <div
        class="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p>© 2023 MODERNICE LIMITED</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <NuxtLink to="/policy" class="hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink to="/about" class="hover:text-white">About</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
  type Props = {
    bgColor?: string
    textcolor?: string
    quote?: string
    author?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    bgColor: '#030718',
    textcolor: '#fffff',
    quote: 'A goal without a plan is just a wish',
    author: 'Antoine de Saint-Exupéry'
  })
</script>
