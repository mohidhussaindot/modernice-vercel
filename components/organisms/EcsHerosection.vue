<template>
  <div class="relative bg-black text-white overflow-hidden">
    <!-- Top background SVG -->
    <div
      class="absolute inset-0 w-full h-full hidden  2xl:left-[10%] xl:-left-[8%] lg:flex z-0 pointer-events-none"
      v-html="svgbg" style="scale: 1.4;"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section
        class="flex xl:gap-[8rem] md:items-center px-6 xl:px-0 max-w-7xl mx-auto lg:px-[7.8125rem] pt-30 md:pt-[8rem] lg:pt-[10rem]"
      >
        <div
          class="flex flex-col gap-[2rem] 2xl:w-[40rem] lg:w-[120rem] md:w-[30rem] xl:w-[90.625rem]"
        >
          <h1 class="text-[2rem] xl:text-5xl lg:text-4xl font-semibold leading-tight">
            Maximize online sales with our custom <br />
            <span class="bg-gradient-to-r from-[#FFE501] to-[#FFA901] text-transparent bg-clip-text"
              >E-Commerce</span
            >
            strategy service.
          </h1>
          <p class="xl:text-[1.5rem] lg:text-[1rem] font-semilight">
            Our e-commerce strategy service is designed to help businesses of all sizes and
            industries succeed in the world of online sales. Whether you're a B2C company looking to
            sell directly to consumers, or a B2B company looking to streamline your sales process,
            we can help you create a personalized e-commerce plan that meets your unique needs.
          </p>
        </div>
        <div class="2xl:w-100 lg:w-450 pt-[3rem] hidden md:block" v-html="Ecshero"></div>
      </section>

      <!-- "What's in store" Section -->
      <section class="pt-[6rem] max-w-7xl lg:px-0 px-2 mx-auto">
        <h2 class="text-4xl lg:text-5xl font-semibold mb-[2rem]">What's in store?</h2>
        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 xl:gap-8 2xl:gap-10"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col items-center text-center gap-4 bg-black"
            :style="{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderImageSlice: 1,
              borderImageSource: 'linear-gradient(to top, #FFC60108, #FFCC01)',
              borderRadius: '1rem'
            }"
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

      <section class="relative  lg:px-0 px-2  w-full text-white overflow-hidden pt-10">
        <div class="relative z-10 flex flex-col items-center">
          <div class="text-center w-full max-w-[39.625rem] text-[2.875rem] font-semibold">
            <h1>
              Ready to see how we do <br />
              <span class="text-yellow-400">E-Commerce</span>?
            </h1>
          </div>

          <div
            class="w-full max-w-7xl rounded-[0.75rem] bg-gradient-to-b from-[#FFB6013D]/24 to-[#FFB801A8]/26 border mt-10 border-amber-400 overflow-hidden"
          >
            <div
              class="h-[2.5rem] flex items-center bg-gradient-to-b from-[#13121E] to-[#07052761] px-[0.5rem]"
            >
              <img src="/images/ecs-circles.png" height="1.25rem" alt="ecs" />
            </div>

            <div
              class="bg-black flex flex-col md:flex-row items-center justify-between gap-[1rem] lg:gap-[3rem] px-4 py-6"
            >
              <div class="flex items-center gap-2">
                <img
                  src="/images/modernice-logoecs.png"
                  alt="modernice logo"
                  class="h-[1.2rem] lg:h-[2.5rem]"
                />
                <h1 class="text-sm lg:text-xl font-semibold">modernice.shop</h1>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:phone" class="w-5 h-5 text-white" />
                <span class="text-sm">0800 - 123 456 789</span>
              </div>
              <div class="flex items-center bg-[#1A1A1A] px-2 py-1 rounded">
                <input
                  type="text"
                  placeholder="Search..."
                  class="bg-transparent text-white text-sm outline-none placeholder-gray-400"
                />
                <Icon name="mdi:magnify" class="w-4 h-4 text-white" />
              </div>
              <div>
                <Icon name="mdi:cart" class="w-8 h-8 text-white" />
              </div>
            </div>

            <div class="flex text-[10px] lg:text-sm bg-[#020111]">
              <div
                class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer"
                >Category 1</div
              >
              <div
                class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer"
                >Category 2</div
              >
              <div
                class="flex-1 text-center py-3 font-semibold border-r border-amber-400 hover:bg-amber-400 cursor-pointer"
                >Our Process</div
              >
              <div
                class="flex-1 text-center py-3 border-r border-amber-400 hover:bg-amber-400 cursor-pointer"
                >Category 4</div
              >
              <div class="flex-1 text-center py-3 hover:bg-amber-400 cursor-pointer"
                >Category 5</div
              >
            </div>

            <div class="hidden lg:flex justify-center mt-8">
              <div
                class="flex justify-between items-center w-full max-w-[75rem] px-6 py-2 bg-[#020111] rounded"
              >
                <!-- View mode buttons (grid / list / compact) -->
                <div class="flex gap-2" role="tablist" aria-label="View mode">
                  <button
                    @click="setView('grid')"
                    :aria-pressed="viewMode === 'grid'"
                    :class="viewButtonClass('grid')"
                    class="rounded"
                    title="Grid view"
                  >
                    <Icon name="mdi:view-grid" class="w-5 h-5" />
                  </button>

                  <button
                    @click="setView('list')"
                    :aria-pressed="viewMode === 'list'"
                    :class="viewButtonClass('list')"
                    class="rounded"
                    title="List view"
                  >
                    <Icon name="mdi:view-list" class="w-5 h-5" />
                  </button>

                  <button
                    @click="setView('masonry')"
                    :aria-pressed="viewMode === 'masonry'"
                    :class="viewButtonClass('masonry')"
                    class="rounded"
                    title="Compact grid"
                  >
                    <Icon name="gridicons:grid" class="w-5 h-5" />
                  </button>
                </div>

                <div
                  class="flex items-center gap-2 bg-[#0E0D1A] border border-[#F2C94C] px-3 py-1 rounded cursor-pointer"
                >
                  <Icon name="mdi:chevron-down" class="w-4 h-4 text-white opacity-70" />
                  <span>Relevance</span>
                </div>
              </div>
            </div>

            <!-- Product Cards -->
            <div class="mt-6">
              <!-- GRID / MASONRY VIEW -->
              <div
                v-if="viewMode === 'grid' || viewMode === 'masonry'"
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center px-6 py-10"
              >
                <div
                  v-for="(card, index) in serviceCards"
                  :key="index"
                  class="bg-[#0E0D1A] border text-start border-[#FFA901]/50 p-6 rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div v-html="card.html" class="mx-auto mb-4"></div>
                  <h2 class="text-[1rem] lg:text-2xl flex font-bold">{{ card.title }}</h2>
                  <p class="text-[0.8rem] lg:text-sm opacity-70">{{ card.description }}</p>
                  <div class="flex justify-between items-center mt-4">
                    <span class="text-sm lg:text-xl font-medium"
                      >420,00 <span class="text-amber-400">€</span></span
                    >
                    <div class="flex items-center gap-2">
                      <button
                        class="flex items-center gap-1 px-3 py-1 text-sm border border-white/10 bg-[#0E0D1A] rounded"
                      >
                        <Icon name="mdi:cart-outline" class="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button>
                        <Icon
                          name="mdi:heart-outline"
                          class="w-5 h-5 text-white opacity-60 hover:opacity-100 transition"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="viewMode === 'list'" class="flex flex-col gap-6 px-6 py-10">
                <div
                  v-for="(card, index) in serviceCards"
                  :key="index"
                  class="bg-[#0E0D1A] border border-[#FFA901]/50 rounded-lg overflow-hidden p-6 flex gap-6 items-start"
                >
                  <div class="w- flex-shrink-0" v-html="card.html"></div>

                  <div class="flex-1 pl-20 flex flex-col max-w-[900px]">
                    <h2 class="text-4xl font-bold pt-10 mb-1">{{ card.title }}</h2>
                    <p class="text-xl opacity-70 mb-4">{{ card.description }}</p>

                    <div class="flex justify-between items-center">
                      <span class="text-xl font-medium"
                        >420,00 <span class="text-amber-400">€</span></span
                      >
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-1 px-3 py-1 text-sm border border-white/10 bg-[#0E0D1A] rounded"
                        >
                          <Icon name="mdi:cart-outline" class="w-4 h-4" />
                          Add to Cart
                        </button>
                        <button>
                          <Icon
                            name="mdi:heart-outline"
                            class="w-5 h-5 text-white opacity-60 hover:opacity-100 transition"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="hidden lg:flex relative bg-black justify-center items-center overflow-hidden h-[37.5rem]"
      >
        <div
          class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
          style="background-image: url('/images/ecs-bglines.png')"
        ></div>

        <div
          class="absolute w-[53.6875rem] 2xl:w-[56rem] 2xl:h-[32rem] bg-black h-[27.9375rem] flex justify-center border border-amber-600 rounded"
        >
          <div
            class="absolute h-[12.5rem] text-white w-[45.6875rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]"
          >
            <h1 class="italic font-semibold text-[2.25rem]">Get in Touch</h1>
            <p class="max-w-[45.6875rem] max-h-[9rem] text-[1.25rem] font-light">
              Now that you've learned about our process, why not take the next step and let us help
              you take your online presence to the next level? Don't wait – schedule a call with us
              today and let's discuss how we can give your business the recognition it deserves.
            </p>
          </div>

          <div
            class="absolute flex w-[45.6875rem] h-[4.9375rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white"
          >
            <span>
              <p class="text-[1.125rem] mb-[0.625rem]">Drop us a message at</p>
              <h2
                class="text-[2rem] italic font-bold bg-gradient-to-r from-[#FCD265] to-[#E56731] bg-clip-text text-transparent"
              >
                hello@modernice.design
              </h2>
            </span>

            <span>
              <p class="text-[1.125rem] mb-[0.625rem]">Or talk to us directly</p>
              <h2
                class="text-[2rem] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent italic font-bold"
              >
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
  import { ref } from 'vue'
  import Ecshero from '@atoms/svgs/ecs-hero.svg?raw'
  import Ecsmain1 from '@atoms/svgs/ecs-main1.svg?raw'
  import Ecsmain2 from '@atoms/svgs/ecs-main2.svg?raw'
  import Ecsmain3 from '@atoms/svgs/ecs-main3.svg?raw'
  import Ecsmain4 from '@atoms/svgs/ecs-main4.svg?raw'
  import svgbg from '@atoms/svgs/ecsbgline.svg?raw'

  // --- static data (copied from your original file) ---
  const cards = [
    {
      icon: '/images/map.png',
      alt: 'Map icon',
      text: 'A Personalized plan tailored to your business'
    },
    {
      icon: '/images/Store.png',
      alt: 'Store icon',
      text: 'A user friendly appealing online store'
    },
    {
      icon: '/images/microchip.png',
      alt: 'Chip icon',
      text: 'The most up to date e-commerce technologies'
    },
    {
      icon: '/images/comments.png',
      alt: 'Comments icon',
      text: 'Ongoing support to ensure success of your store'
    }
  ]

  const serviceCards = [
    {
      title: '1. Discovery & Strategy',
      description:
        'The first step in our e-commerce strategy process is to gain a thorough understanding of your business goals and target audience. This includes conducting market research and analyzing your competitors to determine the most effective e-commerce strategy for your business.',
      html: Ecsmain1
    },
    {
      title: '2. Design & Development',
      description:
        'Once we have developed a personalized e-commerce strategy for your business, our team will begin working on the design and development of your online store. This includes creating a visually appealing and user-friendly website, as well as implementing the necessary e-commerce tools and technologies.',
      html: Ecsmain2
    },
    {
      title: '3. Testing & Launch',
      description:
        'Before launching your online store, we will conduct thorough testing to ensure that everything is functioning properly. This includes testing the user experience, payment processes, and overall functionality of your website. Once we are confident that your online store is ready for launch, we will help you get your business up and running in the digital world.',
      html: Ecsmain3
    },
    {
      title: '4. Optimize for Growth',
      description:
        'Our work doesnt end once your online store is launched. We will continue to monitor and analyze the performance of your e-commerce platform, making ongoing adjustments and optimizations as needed. We also provide ongoing support and maintenance to ensure that your online store continues to function smoothly and effectively',
      html: Ecsmain4
    }
  ]

  const viewMode = ref('grid')

  function setView(mode) {
    viewMode.value = mode
  }

  function viewButtonClass(mode) {
    return {
      'flex items-center justify-center w-9 h-9': true,
      'bg-[#0E0D1A] border border-[#F2C94C] text-[#F2C94C] shadow-sm': viewMode.value === mode,
      'bg-[#0E0D1A] text-white opacity-60 hover:opacity-100': viewMode.value !== mode
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.18s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(6px);
  }
  /* small helper to make the toggle feel snappy */
  button.rounded {
    transition:
      box-shadow 0.12s ease,
      transform 0.08s ease;
  }
</style>
