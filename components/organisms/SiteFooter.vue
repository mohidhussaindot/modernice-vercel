<template>
  <footer
    class="text-white/70 pt-12 px-2 md:px-0 pb-8 border-t border-white/10"
    :style="{ backgroundColor: props.bgColor }"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 class="uppercase tracking-wide text-xs font-semibold mb-3 text-white/60">{{
            t('footer.messagesTitle')
          }}</h3>
          <p class="font-semibold text-white mb-2">{{ t('footer.reachUs') }}</p>
          <p class="mb-1">{{ t('footer.email').replace(' [at] ', '@') }}</p>
          <p class="hover:text-white cursor-pointer">{{ t('footer.scheduleCall') }}</p>
        </div>

        <div>
          <h3 class="uppercase tracking-wide text-xs font-semibold mb-3 text-white/60">{{
            t('footer.findUsTitle')
          }}</h3>
          <p>{{ t('footer.addressLine1') }}</p>
          <p>{{ t('footer.addressLine2') }}</p>
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
        <p>{{ t('footer.copyright') }}</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <NuxtLink to="/policy" class="hover:text-white">{{ t('footer.privacyPolicy') }}</NuxtLink>
          <NuxtLink to="/about" class="hover:text-white">About</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  type Props = {
    bgColor?: string
    textcolor?: string
    quote?: string
    author?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    bgColor: '#030718',
    textcolor: '#ffffff',
    quote: 'A goal without a plan is just a wish',
    author: 'Antoine de Saint-Exupéry'
  })
</script>
