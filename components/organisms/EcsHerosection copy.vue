<template>
  <div class="relative bg-black text-white overflow-hidden">
    <!-- Top background SVG -->
    <div class="absolute inset-0 w-full h-full z-0 pointer-events-none" v-html="svgbg"></div>

    <!-- Content -->
    <div class="relative z-10">
      <section
        class="grid grid-cols-1 min-h-screen lg:grid-cols-2 gap-[2rem] lg:items-center px-6 lg:px-[7.8125rem] pt-[10rem]"
      >
        <div class="flex flex-col gap-[2rem] xl:w-[39.625rem]">
          <h1 class="text-4xl lg:text-5xl font-semibold leading-tight">
            Maximize online sales with our custom <br />
            <span class="bg-gradient-to-r from-[#FFE501] to-[#FFA901] text-transparent bg-clip-text"
              >E-Commerce</span
            >
            strategy service.
          </h1>
          <p class="text-[1.125rem] font-light">
            Our e-commerce strategy service is designed to help businesses of all sizes and
            industries succeed in the world of online sales. Whether you're a B2C company looking to
            sell directly to consumers, or a B2B company looking to streamline your sales process,
            we can help you create a personalized e-commerce plan that meets your unique needs.
          </p>
        </div>
        <div class="w-full pt-[3rem]" v-html="Ecshero"></div>
      </section>

      <!-- slider: replace the whole inner block with this -->
      <div ref="wrapper" class="outer-wrapper hidden lg:flex items-center overflow-hidden bg-black">
        <div class="relative inner-container">
          <div ref="scroller" class="scroller flex items-start">
            <div ref="slide1" class="slide">
              <div class="rounded-xl shadow-2xl p-4">
                <img class="p-20" src="/images/Store.png" alt="store" />
              </div>
              <div class="text-content">
                <p>A user friendly appealing online store</p>
              </div>
            </div>

            <div ref="slide2" class="slide">
              <div class="rounded-xl shadow-2xl p-4">
                <img class="p-20" src="/images/map.png" alt="plan" />
              </div>
              <div class="text-content">
                <p>A Personalized plan tailored to your business</p>
              </div>
            </div>

            <div ref="slide3" class="slide">
              <div class="rounded-xl shadow-2xl p-4">
                <img class="p-20" src="/images/microchip.png" alt="technology" />
              </div>
              <div class="text-content">
                <p>The most up to date e-commerce technologies</p>
              </div>
            </div>

            <div ref="slide4" class="slide">
              <div class="rounded-xl shadow-2xl p-4">
                <img class="p-20" src="/images/comments.png" alt="Comments icon" />
              </div>
              <div class="text-content">
                <p>Ongoing support to ensure success of your store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- E-Commerce Demo Section -->
      <section class="relative w-full text-white overflow-hidden pt-10">
        <div class="relative z-10 flex flex-col items-center px-6">
          <div class="text-center w-full max-w-[39.625rem] text-[2.875rem] font-semibold">
            <h1>
              Ready to see how we do <br />
              <span class="text-yellow-400">E-Commerce</span>?
            </h1>
          </div>

          <div
            class="w-full max-w-[82.4375rem] rounded-[0.75rem] bg-gradient-to-b from-[#FFB6013D]/24 to-[#FFB801A8]/26 border mt-10 border-amber-400 overflow-hidden"
          >
            <div
              class="h-[2.5rem] flex items-center bg-gradient-to-b from-[#13121E] to-[#07052761] px-[0.5rem]"
            >
              <img src="/images/ecs-circles.png" height="1.25rem" alt="ecs" />
            </div>

            <div class="bg-black flex items-center justify-between gap-[3rem] px-4 py-6">
              <div class="flex items-center gap-2">
                <img src="/images/modernice-logoecs.png" alt="modernice logo" class="h-[2.5rem]" />
                <h1 class="text-xl font-semibold">modernice.shop</h1>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:phone" class="w-5 h-5 text-white" />
                <span>0800 - 123 456 789</span>
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

            <div class="flex text-sm bg-[#020111]">
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

            <div class="flex justify-center mt-8">
              <div
                class="flex justify-between items-center w-full max-w-[75rem] px-6 py-2 bg-[#020111] rounded"
              >
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
                <div
                  class="flex items-center gap-2 bg-[#0E0D1A] border border-[#F2C94C] px-3 py-1 rounded cursor-pointer"
                >
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
                class="bg-[#0E0D1A] border text-start border-[#FFA901]/50 p-6 rounded-lg overflow-hidden flex flex-col justify-between"
              >
                <div v-html="card.html" class="mx-auto mb-4"></div>
                <h2 class="text-2xl flex font-bold">{{ card.title }}</h2>
                <p class="text-sm opacity-70">{{ card.description }}</p>
                <div class="flex justify-between items-center mt-4">
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
      </section>

      <!-- Get in Touch Section -->
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
  import Ecshero from '@atoms/svgs/ecs-hero.svg?raw'
  import Ecsmain1 from '@atoms/svgs/ecs-main1.svg?raw'
  import Ecsmain2 from '@atoms/svgs/ecs-main2.svg?raw'
  import Ecsmain3 from '@atoms/svgs/ecs-main3.svg?raw'
  import Ecsmain4 from '@atoms/svgs/ecs-main4.svg?raw'
  import svgbg from '@atoms/svgs/ecsbgline.svg?raw'
  //

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

  import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const wrapper = ref(null)
  const scroller = ref(null)
  const slide1 = ref(null)
  const slide2 = ref(null)
  const slide3 = ref(null)
  const slide4 = ref(null)
  let triggers = []

  const initAnimation = async () => {
    await nextTick()

    // Kill existing triggers to avoid duplicates
    triggers.forEach(t => {
      try {
        t.kill?.()
      } catch (e) {}
    })
    triggers = []

    const slides = [slide1.value, slide2.value, slide3.value, slide4.value]
    if (!scroller.value || !wrapper.value) return

    const windowWidth = window.innerWidth
    const scrollerWidth = slides.length * windowWidth

    gsap.set(scroller.value, { width: scrollerWidth })

    const scrollDistance = scrollerWidth - windowWidth

    const horiz = gsap.to(scroller.value, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper.value,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    })
    triggers.push(horiz)

    slides.forEach(s => {
      gsap.set(s, { opacity: 0.35, scale: 0.92, transformOrigin: 'center center' })
    })

    const watcher = ScrollTrigger.create({
      trigger: wrapper.value,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      scrub: true,
      onUpdate: () => {
        const vw = window.innerWidth
        const vwCenter = vw / 2
        const minOpacity = 0.35
        const maxOpacity = 1
        const minScale = 0.92
        const maxScale = 1.05

        slides.forEach(slide => {
          const rect = slide.getBoundingClientRect()
          const slideCenter = rect.left + rect.width / 2
          const dist = Math.abs(slideCenter - vwCenter)

          const normalized = Math.min(dist / (vw / 2), 1)
          const easeFactor = 1 - normalized

          const opacity = minOpacity + easeFactor * (maxOpacity - minOpacity)
          const scale = minScale + easeFactor * (maxScale - minScale)

          gsap.set(slide, { opacity, scale })
        })
      }
    })
    triggers.push(watcher)

    ScrollTrigger.refresh()
  }

  onMounted(() => {
    initAnimation()
    window.addEventListener('resize', initAnimation)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', initAnimation)
    triggers.forEach(t => {
      try {
        t.kill?.()
      } catch (e) {}
    })
    triggers = []
  })
</script>

<style scoped>
  .outer-wrapper {
    position: relative;
    height: 130vh;
  }

  .scroller {
    display: flex;
    will-change: transform;
    /* width is now set dynamically in JS */
  }

  .slide {
    flex: 0 0 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transform: scale(0.92);
    transform-origin: center center;
  }

  .slide img {
    height: 18rem;
    width: 24rem;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  .text-content {
    max-width: 29rem;
    text-align: center;
    color: white;
  }

  .text-content p {
    font-size: 1.195rem;
    line-height: 1.6;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .slide img {
      height: 10rem;
      width: 14rem;
    }

    .text-content h1 {
      font-size: 1.25rem;
    }

    .text-content p {
      font-size: 0.9rem;
    }
  }
</style>
