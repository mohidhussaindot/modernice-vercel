<template>
  <section class="bg-black w-full lg:h-[64.625rem] xl:h-[65.875rem] md:h-[82.75rem] overflow-hidden relative">
  <div
    class="w-full"
    ref="ecsbg"
    v-html="Ecsbg"
    style="transform: translateY(5.25rem); z-index: 0;"
  ></div>
  <div class="absolute top-0 left-0">
    <div class="grid grid-cols-2 lg:gap-[0.625rem] md:gap-[0.625rem] xl:gap-[9.375rem]">
      <div class="flex flex-col gap-[2rem] pt-[15.3125rem] h-[23.625rem] lg:w-auto md:w-auto xl:w-[39.625rem] md:pl-[0.125rem] lg:pl-[0.125rem] xl:pl-[7.8125rem] text-white">
        <h1 class="text-5xl font-semibold">Maximize online sales with our custom <br /><span class="text-amber-400">E-Commerce</span> strategy service.</h1>
        <p class="text-[1.125rem] font-light">Our e-commerce strategy service is designed to help businesses of all sizes and industries succeed in the world of online sales. Whether you're a B2C company looking to sell directly to consumers, or a B2B company looking to streamline your sales process, we can help you create a personalized e-commerce plan that meets your unique needs.</p>
      </div>

      <div class="w-full pt-[12.9375rem]" ref="ecsbg" v-html="Ecshero"></div>
    </div>

    <div class="text-white lg:pl-[0.125rem] xl:pl-[7.8125rem] pt-[4.375rem]">
      <h1 class="text-5xl font-semibold mb-[2rem]">What's in store?</h1>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="w-[13.75rem] lg:w-[15rem] xl:w-[17.8125rem] h-[10rem] lg:h-[10.9375rem] xl:h-[12.375rem] p-[0.75rem] lg:p-[0.875rem] xl:p-[1rem] border border-amber-500 rounded-[0.875rem] lg:rounded-[1rem] xl:rounded-[1.125rem] flex flex-col items-center justify-center gap-[0.625rem] lg:gap-[0.75rem] xl:gap-[1rem] bg-black">
          <img src="/images/map.png" alt="Map icon" class="w-[3.125rem] lg:w-[3.75rem] xl:w-[4.375rem] h-[3.75rem] lg:h-[4.5rem] xl:h-[5.25rem] object-contain" />
          <p class="text-white text-center text-[0.8125rem] lg:text-[0.875rem] xl:text-[1rem] leading-snug">
            A Personalized plan tailored to your business
          </p>
        </div>

        <!-- Card 2 -->
        <div class="w-[13.75rem] lg:w-[15rem] xl:w-[17.8125rem] h-[10rem] lg:h-[10.9375rem] xl:h-[12.375rem] p-[0.75rem] lg:p-[0.875rem] xl:p-[1rem] border border-amber-500 rounded-[0.875rem] lg:rounded-[1rem] xl:rounded-[1.125rem] flex flex-col items-center justify-center gap-[0.625rem] lg:gap-[0.75rem] xl:gap-[1rem] bg-black">
          <img src="/images/Store.png" alt="Store icon" class="w-[3.125rem] lg:w-[3.75rem] xl:w-[4.375rem] h-[3.75rem] lg:h-[4.5rem] xl:h-[5.25rem] object-contain" />
          <p class="text-white text-center text-[0.8125rem] lg:text-[0.875rem] xl:text-[1rem] leading-snug">
            A user friendly appealing online store
          </p>
        </div>

        <!-- Card 3 -->
        <div class="w-[13.75rem] lg:w-[15rem] xl:w-[17.8125rem] h-[10rem] lg:h-[10.9375rem] xl:h-[12.375rem] p-[0.75rem] lg:p-[0.875rem] xl:p-[1rem] border border-amber-500 rounded-[0.875rem] lg:rounded-[1rem] xl:rounded-[1.125rem] flex flex-col items-center justify-center gap-[0.625rem] lg:gap-[0.75rem] xl:gap-[1rem] bg-black">
          <img src="/images/microchip.png" alt="Chip icon" class="w-[3.125rem] lg:w-[3.75rem] xl:w-[4.375rem] h-[3.75rem] lg:h-[4.5rem] xl:h-[5.25rem] object-contain" />
          <p class="text-white text-center text-[0.8125rem] lg:text-[0.875rem] xl:text-[1rem] leading-snug">
            The most up to date e-commerce technologies
          </p>
        </div>

        <!-- Card 4 -->
        <div class="w-[13.75rem] lg:w-[15rem] xl:w-[17.8125rem] h-[10rem] lg:h-[10.9375rem] xl:h-[12.375rem] p-[0.75rem] lg:p-[0.875rem] xl:p-[1rem] border border-amber-500 rounded-[0.875rem] lg:rounded-[1rem] xl:rounded-[1.125rem] flex flex-col items-center justify-center gap-[0.625rem] lg:gap-[0.75rem] xl:gap-[1rem] bg-black">
          <img src="/images/comments.png" alt="Comments icon" class="w-[3.125rem] lg:w-[3.75rem] xl:w-[4.375rem] h-[3.75rem] lg:h-[4.5rem] xl:h-[5.25rem] object-contain" />
          <p class="text-white text-center text-[0.8125rem] lg:text-[0.875rem] xl:text-[1rem] leading-snug">
            Ongoing support to ensure success of your store
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="relative h-[131.5rem] bg-black text-white w-full overflow-hidden">
  <div class="absolute inset-0 z-0" ref="ecsbg2" v-html="Ecssecondbg"></div>

  <div class="absolute top-0 left-0 w-full flex justify-center pt-[4.0625rem] z-10">
    <div class="text-center w-[39.625rem] text-[2.875rem] font-semibold">
      <h1>
        Ready to see how we do <br />
        <span class="text-yellow-400">E-Commerce</span>?
      </h1>
    </div>
  </div>

  <div class="absolute top-0 pt-[14.25rem] left-1/2 transform -translate-x-1/2 z-10">
    <div class="lg:w-[62.5rem] xl:w-[82.4375rem] rounded-[0.75rem] border border-amber-400" style="background: linear-gradient(to bottom , rgba(19, 18, 30, 0.95) 0%, rgba(19, 18, 30, 0.6) 35%, rgba(0, 0, 0, 0.15) 100%);">
      <div class="h-[2.5rem] items-center bg-gradient-to-b from-[#13121E] to-[#07052761] rounded-[0.75rem] px-[0.5rem] flex">
        <img src="/images/ecs-circles.png" height="1.25rem" alt="ecs">
      </div>

      <div class="bg-black flex items-center justify-center gap-[3.125rem] lg:gap-[5rem] xl:gap-[9.3125rem] h-[4.0781rem] px-[1rem] text-white">
        <div class="flex items-center gap-[0.5rem]">
          <img src="/images/modernice-logoecs.png" alt="modernice logo" class="h-[2.1875rem] lg:h-[2.5rem] xl:h-[2.8281rem]" />
          <h1 class="text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-semibold">modernice.shop</h1>
        </div>

        <div class="flex items-center gap-[0.5rem]">
          <Icon name="mdi:phone" class="w-[1rem] h-[1.25rem] text-white" />
          <h1 class="text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem]">0800 - 123 456 789</h1>
        </div>

        <div class="flex items-center gap-[0.5rem] bg-[#1A1A1A] px-[0.5rem] py-[0.25rem] rounded">
          <input type="text" placeholder="Search..." class="bg-transparent outline-none text-sm placeholder-gray-400 text-white" />
          <Icon name="mdi:magnify" class="w-[1rem] h-[1rem] text-white" />
        </div>

        <div class="flex items-center">
          <Icon name="mdi:cart" class="w-[2rem] h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] xl:w-[2.5rem] xl:h-[2.5rem] text-white" />
        </div>
      </div>

      <!-- Categories Bar -->
      <div class="lg:w-[60rem] xl:w-[82.3125rem] h-[3.4375rem] lg:h-[3.75rem] xl:h-[4.0625rem] flex bg-[#020111] rounded-[0.5rem] text-sm lg:text-base">
        <div class="flex-1 relative text-white flex items-center justify-center hover:cursor-pointer hover:bg-amber-400 border-amber-400">
          Category 1
        </div>
        <div class="flex-1 relative text-white flex items-center justify-center hover:cursor-pointer hover:bg-amber-400 border-l border-amber-400">
          Category 2
        </div>
        <div class="flex-1 relative text-white font-semibold flex items-center justify-center hover:cursor-pointer hover:bg-amber-400 border-l border-amber-400">
          Our Process
        </div>
        <div class="flex-1 relative text-white flex items-center justify-center hover:cursor-pointer hover:bg-amber-400 border-l border-amber-400">
          Category 4
        </div>
        <div class="flex-1 relative text-white flex items-center justify-center hover:cursor-pointer hover:bg-amber-400 border-l border-amber-400 rounded-tr-[0.5rem]">
          Category 5
        </div>
      </div>

      <!-- View & Sort Controls -->
      <div class="flex justify-center pt-[2rem]">
        <div class="flex items-center justify-between h-[3.125rem] lg:h-[3.25rem] xl:h-[3.375rem] w-[90%] lg:w-[62.5rem] xl:w-[75rem] rounded-[0.5rem] px-[1.25rem] lg:px-[1.75rem] xl:px-[2rem] py-[0.5rem] lg:py-[0.625rem] xl:py-[0.75rem] bg-[#020111]">
          <div class="flex items-center gap-[0.375rem] lg:gap-[0.5rem]">
            <!-- Grid View (Active) -->
            <div class="bg-[#0E0D1A] border border-[#F2C94C] px-[0.25rem] lg:px-[0.375rem] py-[0.125rem] lg:py-[0.25rem] rounded-[0.25rem] flex items-center gap-[0.25rem]">
              <Icon name="mdi:view-grid" class="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] text-[#F2C94C]" />
            </div>
            <!-- List View (Inactive) -->
            <div class="bg-[#0E0D1A] px-[0.25rem] lg:px-[0.375rem] py-[0.125rem] lg:py-[0.25rem] rounded-[0.25rem] flex items-center gap-[0.25rem]">
              <Icon name="mdi:view-list" class="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] text-white opacity-50 hover:opacity-100 transition" />
            </div>
            <!-- Gridicons Grid Icon -->
            <div class="bg-[#0E0D1A] px-[0.25rem] lg:px-[0.375rem] py-[0.125rem] lg:py-[0.25rem] rounded-[0.25rem] flex items-center gap-[0.25rem]">
              <Icon name="gridicons:grid" class="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] text-white opacity-50 hover:opacity-100 transition" />
            </div>
          </div>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-[0.375rem] lg:gap-[0.5rem] bg-[#0E0D1A] border border-[#F2C94C] px-[0.5rem] lg:px-[0.75rem] py-[0.125rem] lg:py-[0.25rem] rounded-[0.25rem] text-white text-[0.75rem] lg:text-[0.875rem] cursor-pointer">
            <Icon name="mdi:chevron-down" class="w-[0.875rem] lg:w-[1rem] h-[0.875rem] lg:h-[1rem] text-white opacity-70" />
            <span class="text-white">Relevance</span>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="flex justify-center py-[1.4375rem]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem]">

          <!-- Cards -->
          <div v-for="(card, index) in cards" :key="index" class="flex flex-col w-[90%] lg:w-[28.75rem] xl:w-[36.5rem] shadow-amber-600 shadow-sm rounded-[0.5rem] border border-white/10 p-[1.25rem] lg:p-[1.75rem] xl:p-[2rem] gap-[0.75rem] lg:gap-[1rem]">
            <div v-html="card.html" class="overflow-hidden"></div>
            <h2 class="text-white text-[1.375rem] lg:text-[1.75rem] xl:text-[2rem] font-bold">{{ card.title }}</h2>
            <p class="text-white text-[0.875rem] lg:text-[0.9375rem] xl:text-[1rem] opacity-70">{{ card.description }}</p>
            <div class="flex items-center justify-between mt-auto">
              <span class="text-white text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-medium">420,00 <span class="text-amber-400">€</span></span>
              <div class="flex items-center gap-[0.375rem] lg:gap-[0.5rem]">
                <button class="flex items-center gap-[0.25rem] lg:gap-[0.375rem] px-[0.5rem] lg:px-[0.75rem] py-[0.25rem] lg:py-[0.375rem] bg-[#0E0D1A] text-white text-[0.75rem] lg:text-[0.875rem] rounded-[0.25rem] border border-white/10">
                  <Icon name="mdi:cart-outline" class="w-[0.875rem] lg:w-[1rem] h-[0.875rem] lg:h-[1rem]" />
                  Add to Cart
                </button>
                <button>
                  <Icon name="mdi:heart-outline" class="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] text-white opacity-60 hover:opacity-100 transition" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section class="relative bg-black flex md:hidden lg:flex lg:justify-center items-center overflow-hidden h-[37.5rem]">
  <div
    class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
    style="background-image: url('/images/ecs-bglines.png');"
  ></div>

  <div class="absolute w-[53.6875rem] bg-black h-[27.9375rem] flex justify-center border border-amber-600 rounded">
    <div class="absolute h-[12.5rem] text-white w-[45.6875rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]">
      <h1 class="italic font-semibold text-[2.25rem]">Get in Touch</h1>
      <p class="max-w-[45.6875rem] max-h-[9rem] text-[1.25rem] font-light">
        Now that you've learned about our process, why not take the next step and let us help you take your online
        presence to the next level? Don't wait – schedule a call with us today and let's discuss how we can give your
        business the recognition it deserves.
      </p>
    </div>

    <div class="absolute flex w-[45.6875rem] h-[4.9375rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white">
      <span>
        <p class="text-[1.125rem] mb-[0.625rem]">Drop us a message at</p>
        <h2 class="text-[2rem] italic font-bold bg-gradient-to-r from-[#FCD265] to-[#E56731] bg-clip-text text-transparent">
          hello@modernice.design
        </h2>
      </span>

      <span>
        <p class="text-[1.125rem] mb-[0.625rem]">Or talk to us directly</p>
        <h2 class="text-[2rem] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent italic font-bold">
          Schedule a Call
        </h2>
      </span>
    </div>
  </div>
</section>



</template>

<script setup>
import Ecsbg from '@atoms/svgs/ecs-bg.svg?raw'
import Ecshero from '@atoms/svgs/ecs-hero.svg?raw'
import Ecssecondbg from '@atoms/svgs/ecs-secondbg.svg?raw'
import Ecsmain1 from '@atoms/svgs/ecs-main1.svg?raw'
import Ecsmain2 from '@atoms/svgs/ecs-main2.svg?raw'
import Ecsmain3 from '@atoms/svgs/ecs-main3.svg?raw'
import Ecsmain4 from '@atoms/svgs/ecs-main4.svg?raw'

const cards = [
  {
    title: '1. Discovery & Strategy',
    description: 'The first step in our e-commerce strategy process...',
    html: Ecsmain4,
  },
  {
    title: '2. Design & Development',
    description: 'Once we have developed a personalized e-commerce strategy...',
    html: Ecsmain2,
  },
  {
    title: '3. Launch',
    description: 'Before launching your online store...',
    html: Ecsmain1,
  },
  {
    title: '4. Optimization',
    description: 'Our work doesn’t end once your store is launched...',
    html: Ecsmain3,
  }
];
</script>

<style scoped>
div[ref="ecsbg"] svg {
  width: 100%;
  height: auto;
  display: block;
}


</style>
