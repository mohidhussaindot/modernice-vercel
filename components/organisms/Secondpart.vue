<template >
  <section class="relative text-white w-full h-auto grid place-items-center">
    <div class="" ref="cityRef">
      <div
        class="relative w-[65.9375rem] h-[61rem] my-[7.375rem] bg-no-repeat bg-contain bg-center bg-[url('/first-three-sect-img/city.png')]"
       
      >
        <div class="absolute top-[4.563rem] inset-0 grid place-items-center ">
          <div class="">
            <h1 class="text-[3.25rem] font-bold mb-[1rem]">
              KI-gesteuerte Geschäftslösungen
            </h1>

            <div class="max-w-[43.25rem] mx-auto grid gap-[1.875rem]">
              <p class="text-[1.188rem]">
                Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz (KI),
                Großen Sprachmodellen (LLMs) und Maschinellem Lernen (ML). Diese Technologien
                verändern die Art und Weise, wie wir arbeiten und wachsen.
              </p>

             <span
  class="relative inline-block rounded-[0.5rem] p-[0.0625rem] bg-gradient-to-r from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] w-fit h-[2.75rem] mx-auto text-[1rem]"
>
  <Button
    type="button"
    class="relative w-full h-full rounded-[0.4375rem] py-[0.5rem] px-[1rem] 
           bg-black font-semibold border-none transition duration-300 
           hover:bg-[#AFE639] hover:scale-105 hover:cursor-pointer"
  >
    <span
      class="bg-gradient-to-r  hover:text-black from-[#3BE8E8] via-[#AFE639] to-[#3BE8E8] 
             bg-clip-text text-transparent"
    >
      Prozessoptimierung durch KI
    </span>
  </Button>
</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
</template>
<script setup>
import Button from '@atoms/Button.vue';

import logo from '@atoms/svgs/rocket-moon.svg?raw';


import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cityRef = ref(null);
const moonImage = ref(null);
onMounted(() => {
  const city = cityRef.value;
  const moon = moonImage.value;

  if (!city) return;

  const cityTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: city,
      start: "top+=190 top", 
      end: "+=60%",         
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: false,
    }
  });

  cityTimeline.fromTo(
    city,
    { scale: 0.85 },
    {
      scale: 1,
      ease: "power3.out",
      duration: 0.4,
    }
  );

  const textContent = city.querySelector('h1').parentElement;
  if (textContent) {
    cityTimeline.fromTo(
      textContent,
      { opacity: 0, y: 20, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1.1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }

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
