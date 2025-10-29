<template>
  <!-- mobile -->

  <section class="bg-black lg:hidden text-white overflow-hidden relative w-full px-6 py-40">
    <div class="max-w-[800px] mx-auto flex flex-col gap-12">
      <!-- Hero Section -->
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col max-w-[400px] gap-8 text-left">
          <h1 class="text-[2rem] italic font-semibold leading-tight">
            <span
              class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent"
            >
              Der Wegweiser zur KI-Revolution: <br />
              Strategische Beratung für dein Unternehmen
            </span>
          </h1>
          <p class="text-[0.9rem] leading-relaxed mx-auto">
            Die KI-Revolution steht vor der Tür. Bist du bereit, Künstliche Intelligenz zu deinem
            Vorteil zu nutzen? Mit uns wird die KI-Integration zur nahtlosen Reise, von der ersten
            Idee bis zur vollen Umsetzung. Starte jetzt. Sei innovativ. Sei effizient. Sei
            revolutionär.
          </p>
          <div
            class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
          >
            <Button
              class="px-[1rem] py-[0.425rem] text-[0.9rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
              >
                KI-Beratung starten.
              </span>
            </Button>
          </div>
        </div>
        <div>
          <img
            src="@atoms/svgs/aidev/aiheroimg.svg"
            alt="AI Hero"
            class="w-full max-w-[300px] mx-auto mt-6"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse items-center gap-10">
        <!-- Text -->
        <div class="md:w-1/2 text-center md:text-left flex flex-col gap-6">
          <h2 class="text-2xl font-semibold">
            <span class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent"
              >Hybrid?</span
            >
            What does that mean?
          </h2>
          <p class="text-base font-light">
            Don’t worry, the term hybrid within app development actually stands for a good thing.
            Hybrid apps combine the best of app and web development, letting your lightning-fast app
            run on all devices.
          </p>
        </div>
        <!-- SVG -->
        <div class="md:w-[400px] w-full">
          <img src="@atoms/svgs/aidev/aisecondimg.svg" alt="" />
        </div>
      </div>

      <!-- Our Approach Section -->
      <div class="flex flex-col gap-12 mt-12">
        <!-- Discovery -->
        <div class="flex items-center gap-4">
          <div class="flex w-[400px] gap-5 flex-col">
            <h1 class="text-2xl font-bold">
              Our
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] bg-clip-text text-transparent"
                >Approach</span
              >
            </h1>
            <h2 class="text-xl font-semibold">1. Discovery</h2>
            <p class="font-light text-base">
              During the discovery phase, we work with you to understand your business goals and
              needs, as well as gather requirements and specifications for your hybrid app.
            </p>
          </div>
          <div>
            <img
              src="@atoms/svgs/aidev/aiourapproach.svg"
              alt="Our Approach"
              class="w-full max-w-[400px]"
            />
          </div>
        </div>

        <!-- Design -->
        <div class="flex items-center gap-4">
          <div>
            <img src="@atoms/svgs/aidev/aidesign.svg" alt="Design" class="w-full max-w-[400px]" />
          </div>
          <div class="flex w-[400px] gap-5 flex-col">
            <h2 class="text-xl font-semibold">2. Design</h2>
            <p class="font-light text-base">
              Next, our team of designers creates wireframes and mockups to visualise the user flow
              and layout of the app. We work with you to ensure the design aligns with your brand
              guidelines and meets the needs of your users.
            </p>
          </div>
        </div>

        <!-- Development -->
        <div class="flex items-center gap-4">
          <div class="flex w-[400px] gap-5 flex-col">
            <h2 class="text-xl font-semibold">3. Development</h2>
            <p class="font-light text-base">
              Using the latest tools and technologies, such as Flutter, we begin building the hybrid
              app according to the approved design. Our developers ensure that the app functions
              smoothly and provides a seamless user experience on both iOS and Android platforms.
            </p>
          </div>
          <div>
            <img
              src="@atoms/svgs/aidev/aidevelopment.svg"
              alt="Development"
              class="w-full max-w-[400px]"
            />
          </div>
        </div>

        <!-- Testing and Launch -->
        <div class="flex items-center gap-4">
          <div>
            <img
              src="@atoms/svgs/aidev/aitesting.svg"
              alt="Testing and Launch"
              class="w-full max-w-[400px]"
            />
          </div>
          <div class="flex w-[400px] gap-5 flex-col">
            <h2 class="text-xl font-semibold">4. Testing and Launch</h2>
            <p class="font-light text-base">
              Before launching the app, we conduct thorough testing to ensure that it is stable and
              bug-free. Once the app is ready, we help you with the submission process and launch it
              on the App Store and Google Play.
            </p>
          </div>
        </div>

        <!-- Optimize for Growth -->
        <div class="flex items-center gap-4 mb-12 relative">
          <div class="flex w-[400px] gap-5 flex-col">
            <h2 class="text-xl font-semibold">5. Optimize for Growth</h2>
            <p class="font-light text-base">
              After the app is launched, we provide ongoing support and maintenance to ensure that
              it continues to function smoothly and meet the changing needs of your business. We
              also offer optimization services to help increase user engagement and drive growth.
            </p>
          </div>
          <div>
            <img
              src="@atoms/svgs/aidev/aioptamize.svg"
              alt="Optimize for Growth"
              class="w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#1a1a1a] p-6 rounded-xl border border-[#A138E0] text-center mt-10">
      <h2 class="italic font-semibold text-2xl mb-4">Get in Touch</h2>
      <p class="text-base font-light mb-6">
        Let us help take your online presence to the next level. Schedule a call today and let's
        talk about growing your business.
      </p>

      <div class="flex flex-col gap-4">
        <div>
          <p class="text-sm">Drop us a message at</p>
          <h3
            class="text-lg font-bold italic bg-gradient-to-r from-[#A138E0] to-[#7137EC] bg-clip-text text-transparent"
          >
            hello@modernice.design
          </h3>
        </div>
        <div>
          <p class="text-sm">Or talk to us directly</p>
          <h3
            class="text-lg italic font-bold bg-gradient-to-r from-[#FFE401] to-[#FFB401] bg-clip-text text-transparent"
          >
            Schedule a Call
          </h3>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black hidden lg:flex text-white overflow-hidden relative w-full">
    <div
      class="absolute inset-0 md:flex hidden z-0 bg-no-repeat bg-cover pointer-events-none"
      :style="{ backgroundImage: `url('${lines}')` }"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div
        class="lg:flex flex-col hidden md:flex lg:flex-row 2xl:pt-50 items-center h-[49.375rem] gap-8 2xl:gap-76 xl:justify-center"
      >
        <div class="flex flex-col gap-7 text-left w-full lg:mx-0 lg:pr-0">
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
          <div
            class="inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
          >
            <Button
              class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
            >
              <span
                class="bg-gradient-to-r from-[#3BE8E8] to-[#AFE639] text-transparent bg-clip-text duration-300"
                >KI-Beratung starten.</span
              >
            </Button>
          </div>
        </div>

        <div class="w-full md:hidden lg:flex justify-center xl:max-w-[450px] lg:ml-0">
          <div class="w-full" v-html="aiheroimg"></div>
        </div>
      </div>

      <!-- Hybrid Section -->
      <div
        class="flex flex-col 2xl:mt-60 mx-auto max-w-6xl lg:flex-row gap-16 lg:gap-10 mt-20 items-center"
      >
        <div class="flex justify-center w-full max-w-[600px] lg:mx-0">
          <div class="w-full md:flex hidden" v-html="aisecondimg"></div>
        </div>

        <div class="flex fade-up text-center flex-col gap-8 max-w-6xl mx-auto lg:mx-0">
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
      <div class="flex flex-col gap-y-20 max-w-6xl mx-auto mt-20">
        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center justify-between w-full"
        >
          <!-- Text Block -->
          <div class="fade-left text-white max-w-[600px] flex-shrink-0">
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

          <!-- Illustration -->
          <div
            class="hidden md:flex max-w-[600px] w-full flex-shrink-0"
            v-html="aiourapproach"
          ></div>
        </div>

        <!-- Step 2: Design -->
        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center w-full max-w-6xl mx-auto mt-20 px-4 md:px-6 lg:px-0"
        >
          <!-- Illustration -->
          <div class="max-w-[600px] w-full" v-html="aidesign"></div>

          <!-- Text -->
          <div class="fade-right text-white w-full max-w-[600px] pt-10 lg:pt-0 mx-auto lg:mx-0">
            <h2 class="text-2xl font-semibold">2. Design</h2>
            <p class="font-light text-lg mt-2">
              Next, our team of designers creates wireframes and mockups to visualise the user flow
              and layout of the app. We work with you to ensure the design aligns with your brand
              guidelines and meets the needs of your users.
            </p>
          </div>
        </div>

        <!-- Step 3: Development -->
        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center w-full max-w-6xl mx-auto mt-20 px-4 md:px-6 lg:px-0"
        >
          <!-- Text -->
          <div class="fade-left text-white w-full max-w-[600px] mx-auto lg:mx-0 pt-10 lg:pt-0">
            <h2 class="text-2xl font-semibold">3. Development</h2>
            <p class="font-light text-lg mt-2">
              Using the latest tools and technologies, such as Flutter, we begin building the hybrid
              app according to the approved design. Our developers ensure that the app functions
              smoothly and provides a seamless user experience on both iOS and Android platforms.
            </p>
          </div>

          <!-- Illustration -->
          <div class="max-w-[600px] w-full mx-auto lg:mx-0" v-html="aidevelopment"></div>
        </div>

        <!-- Step 4: Testing and Launch -->
        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center w-full max-w-6xl mx-auto mt-20 px-4 md:px-6 lg:px-0"
        >
          <!-- Illustration -->
          <div class="max-w-[600px] w-full flex-shrink-0 mx-auto lg:mx-0" v-html="aitesting"></div>

          <!-- Text -->
          <div class="text-white fade-right pt-10 lg:pt-0 flex-1">
            <h2 class="text-2xl font-semibold">4. Testing and Launch</h2>
            <p class="font-light text-lg mt-2">
              Before launching the app, we conduct thorough testing to ensure that it is stable and
              bug-free. Once the app is ready, we help you with the submission process and launch it
              on the App Store and Google Play.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-x-10 xl:gap-x-24 items-center max-w-6xl mx-auto w-full mb-20"
        >
          <div class="fade-left text-white max-w-[600px] flex-shrink-0 mx-auto lg:mx-0">
            <h2 class="text-2xl font-semibold">5. Optimize for Growth</h2>
            <p class="font-light text-lg mt-2">
              After the app is launched, we provide ongoing support and maintenance to ensure that
              it continues to function smoothly and meet the changing needs of your business. We
              also offer optimization services to help increase user engagement and drive growth.
            </p>
          </div>
          <div class="relative max-w-[37.5rem]" ref="rocketContainer">
            <div
              class="max-w-[600px] hidden lg:flex w-full flex-shrink-0 mx-auto lg:mx-0"
              v-html="aioptamize"
            ></div>
            <canvas
              ref="burstCanvas"
              class="absolute top-0 z-10 pl-45 pt-5 inset-0 w-full h-full pointer-events-none"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative bg-black lg:flex lg:justify-center xl:flex xl:justify-center hidden items-center overflow-hidden h-[37.5rem]"
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
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Button from '@atoms/Button.vue'

  // SVGs as raw HTML for inline injection
  import aiheroimg from '@atoms/svgs/aidev/aiheroimg.svg?raw'
  import aisecondimg from '@atoms/svgs/aidev/aisecondimg.svg?raw'
  import aiourapproach from '@atoms/svgs/aidev/aiourapproach.svg?raw'
  import aidesign from '@atoms/svgs/aidev/aidesign.svg?raw'
  import aidevelopment from '@atoms/svgs/aidev/aidevelopment.svg?raw'
  import aitesting from '@atoms/svgs/aidev/aitesting.svg?raw'
  import aioptamize from '@atoms/svgs/aidev/aioptamize.svg?raw'
  import lines from '@atoms/svgs/aidev/aiconsultinglines.svg'

  // Refs
  const burstCanvas = ref(null)
  const rocketContainer = ref(null)

  let ctx, rafId, last
  let particles = []
  let rocketEl = null
  let isVisible = false
  let isBursting = false
  let burstTimeout = null
  let landingTimeout = null
  const lowerPosition = '40px'

  // Make canvas retina-safe
  function fitCanvas(canvas) {
    const ratio = window.devicePixelRatio || 1
    canvas.width = canvas.clientWidth * ratio
    canvas.height = canvas.clientHeight * ratio
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  }
  function spawn(dt, canvas) {
    const perSec = 25
    let toSpawn = perSec * dt
    while (toSpawn-- > 0) {
      particles.push({
        x: canvas.width / 2 / devicePixelRatio,
        y: (canvas.height * 0.7) / devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 1 + Math.random() * 0.5,
        life: 700 + Math.random() * 400,
        age: 0,
        r: 2 + Math.random() * 2
      })
    }
  }
  function tick(t, canvas) {
    const dt = t - last
    last = t

    if (isBursting) {
      spawn(dt / 1000, canvas)
    }

    // Optional: fill canvas with transparent background if needed
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.age += dt
      if (p.age > p.life) {
        particles.splice(i, 1)
        continue
      }

      p.x += p.vx * dt * 0.05
      p.y += p.vy * dt * 0.05

      const alpha = 1 - p.age / p.life
      const r = p.r * (1 + 0.5 * alpha)

      // GREEN PARTICLE GLOW
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6)
      g.addColorStop(0, `rgba(175,230,57,${0.6 * alpha})`) // #AFE639
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2)
      ctx.fill()

      // GREEN PARTICLE CORE
      ctx.fillStyle = `rgba(175,230,57,${0.8 * alpha})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    if (isVisible || particles.length > 0) {
      rafId = requestAnimationFrame(time => tick(time, canvas))
    }
  }

  function stopBurst(canvas) {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    particles = []
    isBursting = false
  }

  // Run after mount
  onMounted(() => {
    // Fade in observer
    const fadeElements = document.querySelectorAll('.fade-left, .fade-right, .fade-up')
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-out')
          } else {
            entry.target.classList.remove('fade-in')
            entry.target.classList.add('fade-out')
          }
        })
      },
      { threshold: 0.2 }
    )
    fadeElements.forEach(el => fadeObserver.observe(el))

    // Canvas and rocket setup
    const canvas = burstCanvas.value
    const container = rocketContainer.value
    if (canvas && container) {
      ctx = canvas.getContext('2d')
      fitCanvas(canvas)

      rocketEl = container.querySelector('#optamizerocket')
      if (rocketEl) {
        rocketEl.style.animation = 'none'
        rocketEl.style.transform = `translateY(${lowerPosition})`
      }

      last = performance.now()
      rafId = requestAnimationFrame(time => tick(time, canvas))

      // Visibility observer for rocket container
      const containerObserver = new IntersectionObserver(
        entries => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            // Enter view
            if (!isVisible) {
              isVisible = true
              if (rocketEl) {
                rocketEl.style.animation = 'none'
                rocketEl.style.transform = 'translateY(0px)'
              }
              burstTimeout = setTimeout(() => {
                if (isVisible && rocketEl) {
                  rocketEl.style.animation = 'floatRocket 3s ease-in-out infinite'
                  isBursting = true
                  particles = []
                  last = performance.now()
                  rafId = requestAnimationFrame(time => tick(time, canvas))
                }
              }, 2000)
            }
          } else {
            // Exit view
            if (isVisible) {
              isBursting = false
              isVisible = false
              clearTimeout(burstTimeout)
              clearTimeout(landingTimeout)
              if (rocketEl) {
                rocketEl.style.animation = 'none'
              }
              landingTimeout = setTimeout(() => {
                if (rocketEl) {
                  rocketEl.style.transform = `translateY(${lowerPosition})`
                }
              }, 500)
            }
          }
        },
        { threshold: 0.5 }
      )
      containerObserver.observe(container)
    }
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
    clearTimeout(burstTimeout)
    clearTimeout(landingTimeout)
    const canvas = burstCanvas.value
    stopBurst(canvas)
    isVisible = false
    if (rocketEl) {
      rocketEl.style.animation = 'none'
      rocketEl.style.transform = `translateY(${lowerPosition})`
    }
  })
</script>

<style>
  .fade-left,
  .fade-right,
  .fade-up {
    opacity: 0;
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
  }

  .fade-left {
    transform: translateX(-40px);
  }
  .fade-right {
    transform: translateX(40px);
  }
  .fade-up {
    transform: translateY(40px);
  }

  .fade-in {
    opacity: 1 !important;
    transform: translateX(0) translateY(0) !important;
  }

  .fade-out.fade-left {
    transform: translateX(-40px);
  }
  .fade-out.fade-right {
    transform: translateX(40px);
  }
  .fade-out.fade-up {
    transform: translateY(40px);
  }

  .fade-out {
    opacity: 0 !important;
  }

  @keyframes floatRocket {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  #optamizerocket {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 2s ease-out;
  }
  canvas {
    display: block;
  }
</style>
