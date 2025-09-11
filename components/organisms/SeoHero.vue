<template>
   <section class="bg-[#020111] relative h-[52.3125rem]">
  <div class="absolute inset-0 bg-no-repeat bg-[length:100%]" style="background-image: url('/images/seo-hero-bg.png');"></div>

  <div class="absolute left-[39.6875rem] w-[46.6423rem] h-[43.3842rem] top-[6.5rem]">
    <div
      ref="seocharacter"
      class="absolute"
      v-html="Seocharacter"
    />
  </div>

  <div class="text-white absolute top-[11.1875rem] left-[8.375rem] flex flex-col gap-[2rem] w-[39.4375rem] h-[22.1875rem]">
    <h1 class="text-[3.75rem] italic font-lightbold">
      Bereit für den
      <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">Startschuss</span>
      nach
      <span class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent">Oben?</span>
    </h1>

    <p class="w-[37.4375rem] font-light text-[1.25rem]">
      Vertraue auf einen bedachten und strategischen Prozess, der von Anfang an effektive SEO-Maßnahmen in die Entwicklung mit einbezieht. SEO muss kein [after-thought] sein.
    </p>

    <div>
      <Button
        class="px-[1.5rem] py-[0.625rem] text-[1.25rem] border border-[#3BB1FF] rounded 
               hover:bg-[#3BB1FF] transition hover:border-none hover:cursor-pointer 
               bg-transparent text-white hover:text-white"
      >
        <span
          class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] 
                 text-transparent bg-clip-text duration-300 
                 hover:text-white"
        >
          Startbefehl geben
        </span>
      </Button>
    </div>
  </div>
</section>

</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Button from '@atoms/Button.vue';
import Seocharacter from '@atoms/svgs/seo-character.svg?raw';
import gsap from 'gsap';
const seocharacter = ref(null);

onMounted(async () => {
  await nextTick(); 
  if (seocharacter.value) {
    const idselector = seocharacter.value.querySelector('#Character');
   

      gsap.to(idselector , {
        y: -15,
        repeat: -1,
        duration: '0.5',
        yoyo: true,
        ease: 'sine.inOut'
      })

  }


});
</script>