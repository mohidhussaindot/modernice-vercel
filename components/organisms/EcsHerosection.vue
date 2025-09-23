<template>
  <div class="relative bg-black text-white overflow-hidden">
    <!-- Top background SVG -->
    <div class="absolute inset-0 w-full h-full z-0 pointer-events-none" v-html="svgbg"></div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] px-6 lg:px-[7.8125rem] pt-[10rem]">
        <div class="flex flex-col gap-[2rem] xl:w-[39.625rem]">
          <h1 class="text-4xl lg:text-5xl font-semibold leading-tight">
            Maximize online sales with our custom <br />
            <span class="text-amber-400">E-Commerce</span> strategy service.
          </h1>
          <p class="text-[1.125rem] font-light">
            Our e-commerce strategy service is designed to help businesses of all sizes and industries succeed in the world of online sales. Whether you're a B2C company looking to sell directly to consumers, or a B2B company looking to streamline your sales process, we can help you create a personalized e-commerce plan that meets your unique needs.
          </p>
        </div>
        <div class="w-full pt-[3rem]" v-html="Ecshero"></div>
      </section>

      <!-- "What's in store" Section -->
   <section class="pt-[6rem] px-6 lg:px-[7.8125rem] xl:px-[8rem] 2xl:px-[10rem]">
  <h2 class="text-4xl lg:text-5xl font-semibold mb-[2rem]">What's in store?</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 xl:gap-8 2xl:gap-10">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="p-4 lg:p-6 xl:p-8 2xl:p-10 border border-amber-500 bg-black rounded-xl flex flex-col items-center text-center gap-4"
    >
      <img
        :src="card.icon"
        :alt="card.alt"
        class="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] xl:w-[5rem] xl:h-[5rem] 2xl:w-[6rem] 2xl:h-[6rem] object-contain"
      />
      <p class="text-sm lg:text-base xl:text-lg 2xl:text-xl">{{ card.text }}</p>
    </div>
  </div>
</section>


      <section class="relative w-full text-white overflow-hidden pt-10  ">

        <div class="relative z-10 flex flex-col items-center px-6">
          <div class="text-center w-full max-w-[39.625rem] text-[2.875rem] font-semibold ">
            <h1>
              Ready to see how we do <br />
              <span class="text-yellow-400">E-Commerce</span>?
            </h1>
          </div>

          <div
            class="w-full max-w-[82.4375rem] rounded-[0.75rem] border border-amber-400 overflow-hidden"
            style="background: linear-gradient(to bottom, rgba(19, 18, 30, 0.95) 0%, rgba(19, 18, 30, 0.6) 35%, rgba(0, 0, 0, 0.15) 100%);"
          >
            <div class="h-[2.5rem] flex items-center bg-gradient-to-b from-[#13121E] to-[#07052761] px-[0.5rem]">
              <img src="/images/ecs-circles.png" height="1.25rem" alt="ecs" />
            </div>

            <div class="bg-black flex items-center justify-center gap-[3rem] px-4 py-6">
              <div class="flex items-center gap-2">
                <img src="/images/modernice-logoecs.png" alt="modernice logo" class="h-[2.5rem]" />
                <h1 class="text-xl font-semibold">modernice.shop</h1>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:phone" class="w-5 h-5 text-white" />
                <span>0800 - 123 456 789</span>
              </div>
              <div class="flex items-center bg-[#1A1A1A] px-2 py-1 rounded">
                <input type="text" placeholder="Search..." class="bg-transparent text-white text-sm outline-none placeholder-gray-400" />
                <Icon name="mdi:magnify" class="w-4 h-4 text-white" />
              </div>
              <div>
                <Icon name="mdi:cart" class="w-8 h-8 text-white" />
              </div>
            </div>

            <div class="flex text-sm bg-[#020111]">
              <div class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer">Category 1</div>
              <div class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer">Category 2</div>
              <div class="flex-1 text-center py-3 font-semibold border-r border-amber-400 hover:bg-amber-400 cursor-pointer">Our Process</div>
              <div class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer">Category 4</div>
              <div class="flex-1 text-center py-3 hover:bg-amber-400 cursor-pointer">Category 5</div>
            </div>

            <div class="flex justify-center mt-8">
              <div class="flex justify-between items-center w-full max-w-[75rem] px-6 py-2 bg-[#020111] rounded">
                <div class="flex gap-2">
                  <div class="bg-[#0E0D1A] border border-[#F2C94C] p-1 rounded">
                    <Icon name="mdi:view-grid" class="w-5 h-5 text-[#F2C94C]" />
                  </div>
                  <div class="bg-[#0E0D1A] p-1 rounded hover:opacity-100 opacity-50">
                    <Icon name="mdi:view-list" class="w-5 h-5 text-white" />
                  </div>
                  <div class="bg-[#0E0D1A] p-1 rounded hover:opacity-100 opacity-50">
                    <Icon name="gridicons:grid" class="w-5 h-5 text-white" />
                  </div>
                </div>
                <div class="flex items-center gap-2 bg-[#0E0D1A] border border-[#F2C94C] px-3 py-1 rounded cursor-pointer">
                  <Icon name="mdi:chevron-down" class="w-4 h-4 text-white opacity-70" />
                  <span>Relevance</span>
                </div>
              </div>
            </div>

            <!-- Product Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center px-6 py-10">
              <div
                v-for="(card, index) in serviceCards"
                :key="index"
                class="bg-[#0E0D1A] border border-white/10 p-6 rounded-lg flex flex-col justify-between"
              >
                <div v-html="card.html" class="mb-4"></div>
                <h2 class="text-2xl font-bold">{{ card.title }}</h2>
                <p class="text-sm opacity-70">{{ card.description }}</p>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-xl font-medium">420,00 <span class="text-amber-400">€</span></span>
                  <div class="flex items-center gap-2">
                    <button class="flex items-center gap-1 px-3 py-1 text-sm border border-white/10 bg-[#0E0D1A] rounded">
                      <Icon name="mdi:cart-outline" class="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button>
                      <Icon name="mdi:heart-outline" class="w-5 h-5 text-white opacity-60 hover:opacity-100 transition" />
                    </button>
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

  <div class="absolute w-[53.6875rem] 2xl:w-[56rem] 2xl:h-[32rem]   bg-black h-[27.9375rem] flex justify-center border border-amber-600 rounded">
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
    </div>
  </div>
</template>

<script setup>
import Ecshero from '@atoms/svgs/ecs-hero.svg?raw'
import Ecssecondbg from '@atoms/svgs/ecs-secondbg.svg?raw'
import Ecsmain1 from '@atoms/svgs/ecs-main1.svg?raw'
import Ecsmain2 from '@atoms/svgs/ecs-main2.svg?raw'
import Ecsmain3 from '@atoms/svgs/ecs-main3.svg?raw'
import Ecsmain4 from '@atoms/svgs/ecs-main4.svg?raw'

import svgbg from '@atoms/svgs/ecsbgline.svg?raw'

const cards = [
  {
    icon: "/images/map.png",
    alt: "Map icon",
    text: "A Personalized plan tailored to your business",
  },
  {
    icon: "/images/Store.png",
    alt: "Store icon",
    text: "A user friendly appealing online store",
  },
  {
    icon: "/images/microchip.png",
    alt: "Chip icon",
    text: "The most up to date e-commerce technologies",
  },
  {
    icon: "/images/comments.png",
    alt: "Comments icon",
    text: "Ongoing support to ensure success of your store",
  },
]

const serviceCards = [
  {
    title: 'Conversion Optimization',
    description: 'Improve your sales funnel through tailored design and performance strategies.',
    html: Ecsmain1,
  },
  {
    title: 'Payment Integration',
    description: 'We integrate modern, secure, and flexible payment gateways for global reach.',
    html: Ecsmain2,
  },
  {
    title: 'Custom UX/UI Design',
    description: 'Unique and user-focused design that drives engagement and brand trust.',
    html: Ecsmain3,
  },
  {
    title: 'Analytics & Support',
    description: 'Track sales and behavior, with ongoing support and improvements.',
    html: Ecsmain4,
  },
]
</script>
