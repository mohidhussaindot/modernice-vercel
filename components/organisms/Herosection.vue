<template>
  <section class="w-full xl:h-[64rem] lg:h-[64rem] md:h-[43.75rem] relative overflow-hidden">

    <div class="absolute inset-0 w-full h-full -z-10">
      <div
        class="absolute inset-0 bg-[#020111] bg-no-repeat bg-[length:100%]"
        style="background-image: url('/first-three-sect-img/bg-stars.png');"
      ></div>
    </div>

    <div
      class="absolute inset-0 bg-no-repeat bg-[length:100%] select-none pointer-events-none"
      style="background-image: url('/first-three-sect-img/stripes.png');"
    ></div>

    <div
      ref="moonImage"
      class="absolute pointer-events-auto moon-position
             top-[6rem] left-[6rem]
             sm:top-[8rem] sm:left-[12rem]
             md:top-[9rem] md:left-[16rem]
             lg:top-[11rem] lg:left-[26rem]
             xl:top-[12.149rem] xl:left-[35.475rem]"
      :class="[
        'w-[15.625rem] h-[15.313rem]',              
        'sm:w-[21.875rem] sm:h-[20.625rem]',        
        'md:w-[43.75rem] md:h-[31.25rem]',         
        'lg:w-[46.875rem] lg:h-[40.625rem]',        
        'xl:w-[45.313rem] xl:h-[44.459rem]'       
      ]"
      v-html="moonSVGRaw"
    />

    <div class="xl:mt-[18.563rem] lg:mt-[13.125rem] md:mt-[10.625rem] h-full px-4 sm:px-6 md:px-[3rem] lg:px-[5rem] xl:px-[7.1875rem]">
      <div
        class="text-white flex flex-col 
               w-full 
               max-w-none sm:max-w-[32rem] md:max-w-[29rem] xl:max-w-[34.875rem]
               h-auto xl:h-[20.875rem]"
      >
        <!-- Heading -->
        <h1 class="font-bold leading-tight 
                   text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.375rem] 
                   w-full xl:w-[34.0625rem]">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]">
            Entdecke<br />Neue Horizonte
          </span>
        </h1>

        <p class="mt-[1.5rem] font-light leading-relaxed 
                  text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem]
                  w-full xl:w-[34.875rem]">
          Kreatives Webdesign, meisterhafte Softwareentwicklung und bahnbrechende
          AI-Technologien, die dein Geschäft auf die Überholspur bringen.
        </p>

        <div class="mt-[2rem] inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] hover:from-[#6BE0FF] hover:to-[#3BB1FF]">
          <Button
            class="px-[1.5rem] py-[0.625rem] 
                   text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 
                   rounded-[0.625rem] bg-black bg-opacity-90
                   transition hover:cursor-pointer 
                   text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] 
                     text-transparent bg-clip-text duration-300"
            >
              Erzähl mir mehr.
            </span>
          </Button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import moonSVGRaw from '@atoms/svgs/rocket-moon-hero.svg?raw';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import Button from '@atoms/Button.vue';
import ScrollTrigger from 'gsap/ScrollTrigger';

const moonImage = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const container = moonImage.value;
  if (!container) return;

  const svgElement = container.querySelector('svg');
  if (!svgElement) return;

  svgElement.classList.add('w-full', 'h-full', 'block'); 

  const floatAnim = gsap.to(svgElement, {
    y: '+=30',
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'sine.inOut',
  });
});
</script>

<style scoped>
@media (min-width: 1000px) and (max-width: 1250px) {
  .moon-position {
    top: 7.5rem !important;
    left: 28rem !important;
  }
}
</style>
