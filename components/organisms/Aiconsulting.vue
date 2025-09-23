<template>
  <section class="bg-black text-white overflow-hidden relative w-full">
    <!-- Lines background - behind everything -->
    <div class="absolute inset-0 z-0 pointer-events-none" v-html="lines"></div>

    <!-- Wrapper container with responsive horizontal padding -->
    <div class="relative z-10 xl:mx-auto xl:px-6 2xl:px-12">
      <!-- Hero Section -->
      <div
        class="flex flex-col lg:flex-row 2xl:pt-50 items-center h-[49.375rem] gap-8 2xl:gap-76 xl:justify-center"
      >
        <div
          class="flex flex-col gap-7 text-left lg:max-w-[500px] xl:max-w-[800px] w-full mx-auto lg:mx-0 lg:pl-10 lg:pr-0"
        >
          <h1 class="text-[2.5rem] italic font-semibold leading-tight">
            <span
              class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent"
            >
              Der Wegweiser zur KI-Revolution: <br />
              Strategische Beratung für dein Unternehmen
            </span>
          </h1>
          <p class="text-[1.25rem] xl:max-w-[500px] leading-relaxed">
            Die KI-Revolution steht vor der Tür. Bist du bereit, Künstliche Intelligenz zu deinem
            Vorteil zu nutzen? Mit uns wird die KI-Integration zur nahtlosen Reise, von der ersten
            Idee bis zur vollen Umsetzung. Starte jetzt. Sei innovativ. Sei effizient. Sei
            revolutionär.
          </p>
          <div>
            <Button
              class="px-6 py-2.5 text-base sm:text-lg lg:text-xl border border-[#3BE8E8] rounded transition hover:cursor-pointer bg-transparent text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#AFE639] via-[#3BE8E8] to-[#3BE8E8] text-transparent bg-clip-text duration-300 hover:text-white"
              >
                Erzähl mir mehr.
              </span>
            </Button>
          </div>
        </div>

        <div
          class="w-full md:hidden lg:flex justify-center xl:max-w-[500px] lg:max-w-[100px] lg:mr-6 lg:ml-0"
        >
          <div class="w-full" v-html="aiheroimg"></div>
        </div>
      </div>

      <!-- Hybrid Section -->
      <div
        class="flex flex-col 2xl:mt-60 lg:flex-row gap-16 lg:gap-24 mt-20 justify-center items-center"
      >
        <div class="flex justify-center w-full max-w-[600px] mx-auto lg:mx-0 lg:pr-10">
          <div class="w-full" v-html="aisecondimg"></div>
        </div>

        <div
          class="flex flex-col gap-8 max-w-[600px] text-center lg:text-left mx-auto lg:mx-0 lg:pl-10"
        >
          <h1 class="text-2xl font-semibold">
            <span class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
              >Hybrid?</span
            >
            What does that mean?
          </h1>
          <p class="text-lg font-light">
            Don’t worry, the term hybrid within app development actually stands for a good thing.
            You see, unlike hybrid cars which combine the worst aspects of petrol and electric cars
            hybrid apps actually combine the best aspects of app and web development. This means you
            will be able to use your lightning fast apps across all devices you can think of!
          </p>
        </div>
      </div>

      <!-- Our Approach Section -->
      <div class="flex flex-col gap-y-20 max-w-[1440px] mx-auto mt-20 px-4 md:px-6 lg:px-10">
        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-center w-full"
        >
          <div class="text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0 lg:pr-8">
            <h1 class="text-[2.625rem] font-bold">
              Our
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent"
                >Approach</span
              >
            </h1>
            <h2 class="text-2xl font-semibold mt-4">1. Discovery</h2>
            <p class="font-light text-lg mt-2">
              During the discovery phase, we work with you to understand your business goals and
              needs, as well as gather requirements and specifications for your hybrid app.
            </p>
          </div>

          <div
            class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0 lg:pl-8"
            v-html="aiourapproach"
          ></div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-center w-full"
        >
          <div
            class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0 lg:pr-8"
            v-html="aidesign"
          ></div>

          <div class="text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0 lg:pl-8">
            <h2 class="text-2xl font-semibold">2. Design</h2>
            <p class="font-light text-lg mt-2">
              Our designers create wireframes and mockups to visualize the user flow and layout of
              the app. We ensure the design aligns with your brand and meets user needs.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-center w-full"
        >
          <div class="text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0 lg:pr-8">
            <h2 class="text-2xl font-semibold">3. Development</h2>
            <p class="font-light text-lg mt-2">
              Using the latest tools and technologies, such as Flutter, we begin building the hybrid
              app according to the approved design. Our developers ensure that the app functions
              smoothly and provide a seamless user experience on both iOS and Android platforms.
            </p>
          </div>

          <div
            class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0 lg:pl-8"
            v-html="aidevelopment"
          ></div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-center w-full"
        >
          <div
            class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0 lg:pr-8"
            v-html="aitesting"
          ></div>

          <div class="text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0 lg:pl-8">
            <h2 class="text-2xl font-semibold">4. Testing and Launch</h2>
            <p class="font-light text-lg mt-2">
              Before launching the app, we conduct thorough testing to ensure that it is stable and
              bug-free. Once the app is ready, we help you with the submission process and launch it
              on the App Store and Google Play.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-center w-full mb-20"
        >
          <div class="text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0 lg:pr-8">
            <h2 class="text-2xl font-semibold">5. Optimize for Growth</h2>
            <p class="font-light text-lg mt-2">
              After the app is launched, we provide ongoing support and maintenance to ensure that
              it continues to function smoothly and meet the changing needs of your business. We
              also offer optimization services to help increase user engagement and drive growth.
            </p>
          </div>

          <div
            class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0 lg:pl-8"
            v-html="aioptamize"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative bg-black lg:flex lg:justify-center xl:flex xl:justify-center items-center overflow-hidden h-[37.5rem]"
  >
    <div
      class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
      style="background-image: url('/images/ai-bglines.png')"
    ></div>

    <div
      class="absolute w-[53.688rem] bg-black h-[27.938rem] flex justify-center border border-[#A138E0] rounded"
    >
      <div
        class="absolute h-[12.5rem] text-white w-[45.688rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]"
      >
        <h1 class="italic font-semibold text-[2.25rem]">Get in Touch</h1>
        <p class="max-w-[45.688rem] max-h-[9rem] text-[1.25rem] font-light">
          Now that you've learned about our process, why not take the next step and let us help you
          take your online presence to the next level? Don't wait – schedule a call with us today
          and let's discuss how we can give your business the recognition it deserves.
        </p>
      </div>

      <div
        class="absolute flex w-[45.688rem] h-[4.938rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white"
      >
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

  <section
    class="bg-black lg:hidden flex text-white flex-col items-center justify-center md:gap-[3.125rem] md:px-6 md:py-10 md:text-center"
  >
    <div class="text-[2.5rem] font-medium">
      Our
      <span class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
        >App</span
      >roach
    </div>

    <div>
      <h1 class="text-[2.188rem] font-semibold">1. Discovery</h1>
      <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
        During the discovery phase, we work with you to understand your business goals and needs, as
        well as gather requirements and specifications for your hybrid app.
      </p>
    </div>

    <div>
      <h1 class="text-[2.188rem] font-semibold">2. Design</h1>
      <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
        Next, our team of designers creates wireframes and mockups to visualise the user flow and
        layout of the app. We work with you to ensure the design aligns with your brand guidelines
        and meets the needs of your users.
      </p>
    </div>

    <div>
      <h1 class="text-[2.188rem] font-semibold">3. Development</h1>
      <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
        Using the latest tools and technologies, such as Flutter, we begin building the hybrid app
        according to the approved design. Our developers ensure that the app functions smoothly and
        provides a seamless user experience on both iOS and Android platforms.
      </p>
    </div>

    <div>
      <h1 class="text-[2.188rem] font-semibold">4. Testing and Launch</h1>
      <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
        Before launching the app, we conduct thorough testing to ensure that it is stable and
        bug-free. Once the app is ready, we help you with the submission process and launch it on
        the App Store and Google Play.
      </p>
    </div>

    <div>
      <h1 class="text-[2.188rem] font-semibold">5. Optimize for Growth</h1>
      <p class="font-light max-w-[33.125rem] text-[1.375rem] mt-2">
        After the app is launched, we provide ongoing support and maintenance to ensure that it
        continues to function smoothly and meet the changing needs of your business. We also offer
        optimization services to help increase user engagement and drive growth.
      </p>
    </div>
  </section>
</template>

<script setup>
  import Button from '@atoms/Button.vue'
  import aiherobg from '@atoms/svgs/aiherobg (1).svg?raw'
  import aiherobg2 from '@atoms/svgs/aiherobg (2).svg?raw'
  import aiheroimg from '@atoms/svgs/aiheroimg.svg?raw'
  import aisecondb22g2 from '@atoms/svgs/ai2bg.svg?raw'
  import aibgmain from '@atoms/svgs/appdevbgmain.svg?raw'
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
  import lines from '@atoms/svgs/aiconsultinglines.svg?raw'

  const responsiveSvg = aisecondb22g2
    .replace(/width="[^"]*"/, 'width="100%"')
    .replace(/height="[^"]*"/, 'height="100%"')
    .replace(/<svg([^>]*)>/, '<svg$1 preserveAspectRatio="xMidYMid slice">')
</script>
