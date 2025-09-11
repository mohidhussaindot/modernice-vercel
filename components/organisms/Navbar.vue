<template>
  <header
    class="fixed z-[9999] h-[2.8281rem] w-[74.875rem] mx-[7.5625rem] top-[3.46125rem]"
  >
    <div class="flex bg-transparent justify-between items-center">
      <span>
        <NuxtLink to="/" aria-label="Modernise home">
          <NuxtImg
            :src="logoSrc"
            alt="Logo"
            class="select-none w-[2.8306rem] h-[2.8306rem]"
          />
        </NuxtLink>
      </span>

      <nav
        class="grid grid-flow-col auto-cols-max items-center gap-[4rem] text-white text-[1rem] font-light"
        aria-label="Primary"
      >
        <template v-for="(link, index) in navLinks" :key="index">
          <template v-if="link.navLinks">
            <NuxtLink :to="link.to" class="hover:underline">
              {{ link.label }}
            </NuxtLink>
            <template
              v-for="(subLink, subIndex) in link.navLinks"
              :key="subIndex"
            >
              <NuxtLink :to="subLink.to" class="hover:underline">
                {{ subLink.label }}
              </NuxtLink>
            </template>
          </template>
          <template v-else>
            <NuxtLink :to="link.to" class="hover:underline">
              {{ link.label }}
            </NuxtLink>
          </template>
        </template>

        <div
          v-if="ctaLabel"
          class="relative inline-block rounded-[0.5rem] p-[0.0625rem] bg-gradient-to-r from-[#01A3FF] via-[#25CDDA] to-[#01A3FF] w-[6.8125rem] h-[2.75rem]"
        >
          <Button
            class="w-full h-full bg-black rounded-[0.4375rem] py-[0.5rem] px-[1rem] font-semibold duration-300 hover:scale-105 hover:bg-[#01A3FF] border-none transition text-white"
            :to="ctaTo"
          >
            <span
              class="bg-gradient-to-r from-[#01A3FF] via-[#25CDDA] to-[#01A3FF] bg-clip-text text-transparent duration-300 hover:cursor-pointer hover:text-white"
            >
              {{ ctaLabel }}
            </span>
          </Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from "@atoms/Button.vue";

type NavLink = {
  label: string;
  to: string;
  navLinks?: NavLink[];
};

defineProps<{
  ctaLabel?: string;
  ctaTo?: string;
  logoSrc: string;
}>();
</script>
