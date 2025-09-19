<template>
  <section class="bg-black text-white overflow-hidden relative w-full">

    <div class="w-full absolute top-[6.321rem]   z-0" v-html="aiherobg"></div> 
    <div class="w-full absolute left-[34.008rem]  z-0" v-html="aiherobg2"></div> 

    <div class="relative z-10 flex   w-full h-[49.375rem]"> 
      <div class=" flex items-center   w-full  xl:px-[6.438rem] lg:px-[1.188rem] "> 
        <div class="xl:w-[40.5rem] lg:[25rem] md:text-center lg:text-start flex flex-col gap-[1.875rem]  text-left "> 
          <h1 class="text-[2.5rem] italic font-semibold leading-tight"> 
           
            <span class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent">
            Der Wegweiser zur KI-Revolution: <br/>   Strategische Beratung für dein Unternehmen
            </span> 
          </h1>
          <p class="text-[1.25rem] leading-relaxed">
            Die KI-Revolution steht vor der Tür. Bist du bereit, Künstliche Intelligenz zu deinem Vorteil zu nutzen?
            Mit uns wird die KI-Integration zur nahtlosen Reise, von der ersten Idee bis zur vollen Umsetzung.
            Starte jetzt. Sei innovativ. Sei effizient. Sei revolutionär.
          </p>
           <div class="">
          <Button
            class="px-[1.5rem] py-[0.625rem] 
                   text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 
                   border border-[#3BE8E8] rounded 
               transition hover:cursor-pointer 
                   bg-transparent text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#AFE639] via-[#3BE8E8] to-[#3BE8E8] 
                     text-transparent bg-clip-text duration-300 
                     hover:text-white"
            >
              Erzähl mir mehr.
            </span>
          </Button>
        </div>
        </div>
      </div>

      <div class="w-full md:hidden lg:flex items-center">
        <div class="w-full max-w-[37.5rem]" v-html="aiheroimg"></div> 
      </div>
    </div>

    <!-- Hybrid Section -->
    <div class="relative z-10 flex lg:flex-row md:flex-col w-full xl:px-[2rem] lg:px-0"> 
            <div class="w-full absolute  z-[-1]" v-html="aisecondbg"></div>
<div class="absolute bottom-0 h-[17.5rem] xl:flex md:hidden  right-0 z-[-1]" v-html="aisecondbg2"></div >

      <div class="w-1/2 flex md:justify-center">
        <div class="w-full max-w-[37.5rem]" v-html="aisecondimg"></div> 
      </div>

      <div
        class="w-[32.56rem]  flex flex-col md:text-center gap-[2rem] md:mx-auto md:pt-10 lg:pt-[3.125rem] xl:pt-[9.063rem]"
      >
        <h1 class="text-[2rem] font-semibold">
          <span class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent">
            Hybrid?
          </span> What does that mean?
        </h1>
        <p class="text-[1.125rem] flex font-light"> 
          Don’t worry, the term hybrid within app development actually stands for a good thing. You see, unlike hybrid cars which combine the worst aspects of petrol and electric cars hybrid apps actually combine the best aspects of app and web development. This means you will be able to use your lightning fast apps across all devices you can think of!
        </p>
      </div>
    </div>
  </section>

<!-- Discovery + Design (One Section) -->
<section class=" md:hidden lg:flex bg-black relative overflow-hidden">
  <!-- Shared Background -->
<div class="absolute top-0 h-full w-full z-[10]" v-html="aimainbg1"></div>
<div class="absolute top-0  h-full w-full z-[10]" v-html="aimainbg"></div>

  <div class="relative z-20 flex lg:flex-row xl:flex-col lg:gap-4 xl:gap-[7.5rem] lg:px-[1.875rem] xl:px-[6.813rem] pt-20 ">
    <!-- Discovery -->
    <div class="flex flex-col xl:flex-row items-center xl:gap-[6.5rem]">
      <div class="text-white xl:min-w-[39.625rem] flex-shrink-0 flex flex-col gap-[2rem]">
        <h1 class="text-[2.625rem] font-bold"> 
          Our <span class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent">Approach</span>
        </h1>
        <h2 class="text-[2rem] font-semibold">1. Discovery</h2> 
        <p class="font-light w-[30.625rem] text-[1.125rem]"> 
          During the discovery phase, we work with you to understand your business goals and needs,
          as well as gather requirements and specifications for your hybrid app.
        </p>
      </div>
            <div class="flex-shrink-0 w-full xl:max-w-[37.5rem] pt-[2.5rem]" v-html="aiourapproach"></div> 

    </div>

    <!-- Design -->
    <div class="flex flex-col xl:flex-row  items-center xl:gap-[6.5rem]">
      <div class="w-full flex xl:max-w-[37.5rem] " v-html="aidesign"></div>
      <div class="text-white xl:min-w-[39.625rem] lg:pt-10 flex-shrink-0 flex flex-col gap-[2rem]">
        <h2 class="text-[2rem] font-semibold">2. Design</h2>
        <p class="font-light w-[30.625rem] text-[1.125rem]">
          Next, our team of designers creates wireframes and mockups to visualise the user flow and layout of the app.
          We work with you to ensure the design aligns with your brand guidelines and meets the needs of your users.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Development + Testing Section (Styled like Discovery + Design) -->
<section class="bg-black hidden lg:flex relative overflow-hidden">
  <!-- Shared Background -->
  <div class="absolute top-0 left-0 h-full w-full z-[10]  xl:flex md:hidden" v-html="aimainbg2"></div>

  <div class="relative z-20 flex flex-col gap-[7.5rem] w-full lg:px-[1.875rem] xl:px-[6.813rem] pt-20 pb-20">

    <!-- Development -->
    <div class="flex  xl:flex-row items-center  lg:gap-4 xl:gap-[6.5rem]">
      <div class="text-white xl:min-w-[39.625rem] flex-shrink-0 flex flex-col gap-[2rem]">
        <h2 class="text-[2rem] font-semibold">3. Development</h2>
        <p class="font-light w-[30.625rem] text-[1.125rem]">
          Using the latest tools and technologies, such as Flutter, we begin building the hybrid app according to the approved design.
          Our developers ensure that the app functions smoothly and provide a seamless user experience on both iOS and Android platforms.
        </p>
      </div>
      <div class="flex-shrink-0 w-full xl:max-w-[37.5rem]" v-html="aidevelopment"></div>
    </div>

    <!-- Testing -->
    <div class="flex xl:flex-row items-center lg:gap-4 xl:gap-[6.5rem]">
      <div class="w-full xl:max-w-[37.5rem]" v-html="aitesting"></div>
      <div class="text-white xl:min-w-[39.625rem] flex-shrink-0 flex flex-col gap-[2rem]">
        <h2 class="text-[2rem] font-semibold">4. Testing and Launch</h2>
        <p class="font-light w-[30.625rem] text-[1.125rem]">
          Before launching the app, we conduct thorough testing to ensure that it is stable and bug-free.
          Once the app is ready, we help you with the submission process and launch it on the App Store and Google Play.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- Optimize (Own Section) -->
<section class=" bg-black md:hidden lg:flex relative overflow-hidden">
  <div class="absolute top-0 left-0 w-full z-0"></div>
  <div class="absolute top-0   w-full z-[10]" v-html="ailastbg"></div>
  <div class="relative flex flex-col lg:flex-row items-center lg:gap-30 xl:gap-[10.875rem] z-20 lg:px-[1.875rem] xl:px-[11.625rem] py-20">
    <div class="text-white lg:w-[25rem] xl:w-[30.625rem] flex-shrink-0 flex flex-col gap-[2rem]">
      <h2 class="text-[2rem] font-semibold">5. Optimize for Growth</h2>
      <p class="font-light w-[30.625rem] text-[1.125rem]">
        After the app is launched, we provide ongoing support and maintenance to ensure that it continues to function smoothly
        and meet the changing needs of your business. We also offer optimization services to help increase user engagement and drive growth.
      </p>
    </div>
    <div class="w-full flex" v-html="aioptamize"></div>
  </div>
</section>

<section class="relative bg-black lg:flex lg:justify-center xl:flex xl:justify-center items-center overflow-hidden h-[37.5rem]">
  <div
    class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
    style="background-image: url('/images/ai-bglines.png');"
  ></div>

  <div class="absolute w-[53.688rem] bg-black h-[27.938rem] flex justify-center border border-[#A138E0] rounded">
    <div class="absolute h-[12.5rem] text-white w-[45.688rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]">
      <h1 class="italic font-semibold text-[2.25rem]">Get in Touch</h1> 
      <p class="max-w-[45.688rem] max-h-[9rem] text-[1.25rem] font-light">
        Now that you've learned about our process, why not take the next step and let us help you take your online
        presence to the next level? Don't wait – schedule a call with us today and let's discuss how we can give your
        business the recognition it deserves.
      </p>
    </div>

    <div class="absolute flex w-[45.688rem] h-[4.938rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white">
      <span>
        <p class="text-[1.125rem] mb-[0.625rem]">Drop us a message at</p>
        <h2
          class="text-[2rem] italic font-bold bg-gradient-to-r from-[#A138E0] to-[#7137EC] bg-clip-text text-transparent"
        >
          hello@modernice.design
        </h2>
      </span>

      <span>
        <p class="text-[1.125rem] mb-[0.625rem]">Or talk to us directly</p>
        <h2
          class="text-[2rem] bg-gradient-to-r from-[#FCD265] to-[#E56731] bg-clip-text text-transparent italic font-bold"
        >
          Schedule a Call
        </h2>
      </span>
    </div>
  </div>
</section>

<section class="bg-black  lg:hidden flex  text-white  flex-col items-center justify-center md:gap-[3.125rem] md:px-6 md:py-10 md:text-center">
  <div class="text-[2.5rem] font-medium"> 
    Our <span class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent">App</span>roach
  </div>

  <div>
    <h1 class="text-[2.188rem] font-semibold">1. Discovery</h1> 
    <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2"> 
During the discovery phase, we work with you to 
understand your business goals and needs, as well as gather requirements and specifications for your hybrid app.    </p>
  </div>

  <div>
    <h1 class="text-[2.188rem] font-semibold">2. Design</h1>
    <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
Next, our team of designers creates wireframes and mockups to visualise the user flow and layout of the app. We work
 with you to ensure the design aligns with your brand guidelines and meets the needs of your users.
    </p>
  </div>

  <div>
    <h1 class="text-[2.188rem] font-semibold">3. Development</h1>
    <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
Using the latest tools and technologies, such as Flutter, we begin building the hybrid app according to the approved design. Our
 developers ensure that the app functions smoothly and provides a seamless user experience on both iOS and Android platforms.
    </p>
  </div>

  <div>
    <h1 class="text-[2.188rem] font-semibold">4. Testing and Launch</h1>
    <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
Before launching the app, we conduct thorough testing to ensure that it is stable and bug-free. 
Once the app is ready, we help you with the submission process and launch it on the App Store and Google Play.    </p>
  </div>

  <div>
    <h1 class="text-[2.188rem] font-semibold">5. Optimize for Growth</h1>
    <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
After the app is launched, we provide ongoing support and maintenance to ensure that it continues to function smoothly and meet the changing needs 
of your business. We also offer optimization services to help increase user engagement and drive growth.    </p>
  </div>
</section>
</template>

<script setup>
import Button from '@atoms/Button.vue'
import aiherobg from '@atoms/svgs/aiherobg (1).svg?raw'
import aiherobg2 from '@atoms/svgs/aiherobg (2).svg?raw'
import aiheroimg from '@atoms/svgs/aiheroimg.svg?raw'
import aisecondbg from '@atoms/svgs/aisecondbg.svg?raw'
import aisecondbg2 from '@atoms/svgs/aisecondbg (2).svg?raw'
import aimainbg1 from '@atoms/svgs/aimainbg (1).svg?raw'
import aimainbg2 from '@atoms/svgs/aimainbg (2).svg?raw'
import aimainbg from '@atoms/svgs/aimainbg.svg?raw'
import aisecondimg from '@atoms/svgs/aisecondimg.svg?raw'
import aiourapproach from '@atoms/svgs/aiourapproach.svg?raw'
import aidesign from '@atoms/svgs/aidesign.svg?raw'
import aidevelopment from '@atoms/svgs/aidevelopment.svg?raw'
import aitesting from '@atoms/svgs/aitesting.svg?raw'
import aioptamize from '@atoms/svgs/aioptamize.svg?raw'
import ailastbg from '@atoms/svgs/ailastbg.svg?raw'
</script>
