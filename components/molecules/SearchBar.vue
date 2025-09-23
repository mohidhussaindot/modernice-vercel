<template>
  <div class="relative h-[52px]">
    <div class="absolute bottom-0.5 left-4 h-full flex items-center">
      <Image name="/svg/tournament/search_icon.svg" iconClass="text-[16px]" />
    </div>

    <Input
      type="text"
      placeholder="Search for games..."
      class="w-full pl-12 rounded-[11px] border-[#000000] border-[1px] bg-[#EAEBF4] placeholder:text-[#0000005C] placeholder:text-base h-full text-black"
    />
  </div>
</template>

<script setup>
  import { Input, Image } from '@atoms'
</script>
