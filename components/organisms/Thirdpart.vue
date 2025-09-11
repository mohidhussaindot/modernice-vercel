<template>
      <div class="relative h-[768px] overflow-hidden">
    <div class=" absolute  gap-[36px] top-[12px] left-[107px] max-w-[34.188rem]">
      <h1 class="max-w-[21.064rem] font-bold text-[2.625rem] mb-[2.25rem]">
        Innovation durch Design und Technologie
      </h1>

      <p class="font-light text-[1.125rem] mb-[2.25rem]">
        In einer erfolgreichen Web-Lösung verschmelzen Design und Entwicklung zu einem harmonischen Ganzen. Die nahtlose Integration von Frontend und Backend, ergänzt durch den Einsatz modernster Technologien wie Künstlicher Intelligenz, Großen Sprachmodellen (LLM) und Machine Learning, ermöglicht die Schaffung von Produkten, die den Horizont des Möglichen erweitern und das Nutzererlebnis auf ein ungekanntes Niveau heben.
      </p>

      <span
        class="relative inline-block hover:scale-105 transition rounded-[0.5rem] p-[0.0625rem] bg-gradient-to-r from-[#FFE501] via-[#FFA901] to-[#FFE501] w-[16.25rem] h-[2.75rem]"
      >
        <Button
          class="w-full h-full hover:cursor-pointer    bg-black rounded-[0.4375rem] py-[0.5rem] px-[1rem] text-white font-semibold duration-300 hover:bg-yellow-500 hover:text-black border-none transition"
          type="button"
        >
          Schaffe Außergewöhnliches
        </Button>
      </span>
    </div>

<div class="relative top-[-20px]  left-[668px]">
    <div class="overflow-hidden" ref="moonImage" v-html="logo" />
</div>

  
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import logo from '@atoms/svgs/rocket-moon.svg?raw';

const moonImage = ref(null);
onMounted(() => {
  const moon = moonImage.value;

  if (moon) {
    const imgElement = moon.querySelector('svg');
    if (imgElement) {
      gsap.to(imgElement, {
        x: '+=5',
        y: '+=3',
        rotation: 4,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: 'sine.inOut',
      });
    }
  }
});
</script>