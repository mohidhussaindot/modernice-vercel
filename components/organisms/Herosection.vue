<template>
  <section class="w-full  min-h-[85.7025rem] relative overflow-visible">
    <div class="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div
        class="absolute bg-[#020111] inset-0 bg-no-repeat bg-contain"
        style="background-image: url('/first-three-sect-img/bg-stars.png');"
      ></div>
    </div>

    <NuxtImg
      src="/first-three-sect-img/stripes.png"
      alt="stripes"
      class="absolute z-10 select-none pointer-events-none"
    />

    <div
      ref="moonImage"
      class="absolute z-[99] top-[12.14875rem] left-[42rem] pointer-events-auto"
      v-html="moonSVGRaw"
    ></div>

    <div class="relative z-10 pt-[18.5625rem] pl-[7.1875rem]">
      <div class="w-[34.875rem] h-[20.875rem] flex flex-col text-white">
        <h1 class="text-[3.375rem] w-[34.0625rem] leading-tight font-bold">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]"
          >
            Entdecke<br />Neue Horizonte
          </span>
        </h1>
        <p class="text-[1.25rem] w-[34.875rem] leading-relaxed mt-[1.5rem] font-light">
          Kreatives Webdesign, meisterhafte Softwareentwicklung und bahnbrechende
          AI-Technologien, die dein Geschäft auf die Überholspur bringen.
        </p>
       <div class="mt-[2rem]">
  <Button
    class="px-[1.5rem] py-[0.625rem] text-[1.25rem] border border-[#3BB1FF] rounded 
           hover:bg-[#3BB1FF] transition hover:border-none hover:cursor-pointer 
           bg-transparent text-white hover:text-white"
  >
    <span
      class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] 
             text-transparent bg-clip-text  duration-300 
          hover:text-white"
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

  svgElement.classList.add(
    'w-[45.3125rem]',
    'h-[44.4587rem]',
    'block'
  );

  const floatAnim = gsap.to(svgElement, {
    y: '+=30',
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'sine.inOut',
  });

  const slowDrift = gsap.to(svgElement, {
    y: '+=130',
    ease: 'none',
    paused: true,
  });

  ScrollTrigger.create({
    trigger: svgElement,
    start: 'bottom+=700 bottom',
    end: 'bottom 20%',
    scrub: true,
    animation: slowDrift,
    onEnter: () => {
      floatAnim.pause();
    },
    onLeaveBack: () => {
      floatAnim.resume();
      gsap.to(svgElement, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    },
    onLeave: () => {
      gsap.to(svgElement, {
        y: '+=1000',
        opacity: 0,
        duration: 1,
        ease: 'power4.in',
      });
    },
    onEnterBack: () => {
      gsap.to(svgElement, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          floatAnim.restart();
        }
      });
    }
  });
});


</script>