<template>
  <section class="bg-black text-white relative w-full overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-6 lg:px-12">
      <div
        class="absolute inset-0 hidden md:flex z-0 w-full h-full pointer-events-none"
        v-html="appdevlines"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center lg:flex-row h-[49.375rem] gap-12 lg:gap-0 mb-32"
      >
        <div class="lg:w-1/2 flex items-center">
          <div
            class="w-full text-center max-w-[41.1875rem] flex flex-col gap-6 mt-36 lg:text-start px-4 lg:px-0"
          >
            <h1 class="text-5xl italic font-bold leading-tight">
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#D539D3] bg-clip-text text-transparent"
                >App</span
              >solute Genius. Custom
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
                >App Development</span
              >
              Services for Your Business.
            </h1>
            <p class="text-lg leading-relaxed max-w-[600px]">
              Looking for a cost-effective and convenient way to develop your hybrid app? Our hybrid
              app development service combines the best of both worlds – the reach of a native app
              with the ease of development of a web app.
            </p>
          </div>
        </div>

        <!-- Right Side -->
        <div class="lg:w-1/2 items-center">
          <div class="w-full max-w-[37.5rem]" v-html="appdevhero"></div>
        </div>
      </div>

      <div class="relative z-10 flex flex-col 2xl:top-15 lg:flex-row gap-16 lg:gap-24 mb-32">
        <div class="lg:w-1/2 hidden lg:flex justify-center">
          <div class="w-full flex max-w-[37.5rem] 2xl:max-w-[50rem]" v-html="appdevhero2"></div>
        </div>

        <div
          class="fade-up lg:w-[32.5625rem] mt-[40rem] md:mt-0 flex flex-col text-center gap-6 mx-auto pt-3 lg:pt-12 xl:pt-36"
        >
          <h1 class="text-2xl 2xl:text-4xl font-semibold">
            <span class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
              >Hybrid?</span
            >
            What does that mean?
          </h1>
          <p class="text-lg 2xl:text-xl font-light max-w-[32.5rem] 2xl:max-w-[40rem] mx-auto">
            Don’t worry, the term hybrid within app development actually stands for a good thing.
            You see, unlike hybrid cars which combine the worst aspects of petrol and electric cars
            hybrid apps actually combine the best aspects of app and web development. This means you
            will be able to use your lightning fast apps across all devices you can think of!
          </p>
        </div>
      </div>

      <!-- Sections 1-5: Discovery, Design, etc. -->
      <div class="flex flex-col gap-15">
        <!-- Section 1 -->
        <div class="flex flex-col z-10 lg:flex-row justify-center items-center gap-16 lg:gap-24">
          <div class="fade-left flex flex-col gap-10 max-w-[31.625rem] text-white">
            <h1 class="text-3xl font-bold">
              Our
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
                >App</span
              >roach
            </h1>
            <h2 class="text-2xl font-semibold">1. Discovery</h2>
            <p class="font-light text-lg">
              During the discovery phase, we work with you to understand your business goals and
              needs, as well as gather requirements and specifications for your hybrid app.
            </p>
          </div>
          <div class="max-w-[37.5rem] pt-20 lg:pt-0" v-html="appdevsection2"></div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-col z-10 lg:flex-row justify-center items-center gap-16 lg:gap-24">
          <div class="max-w-[37.5rem] hidden lg:flex" v-html="appdevmiddle1"></div>
          <div class="fade-right flex flex-col gap-8 max-w-[31.625rem] text-white">
            <h2 class="text-2xl font-semibold">2. Design</h2>
            <p class="font-light text-lg">
              Next, our team of designers creates wireframes and mockups to visualise the user flow
              and layout of the app. We work with you to ensure the design aligns with your brand
              guidelines and meets the needs of your users.
            </p>
          </div>
          <div>
          </div>
        </div>

        <!-- Section 3 -->
        <div class="flex flex-col z-10 lg:flex-row justify-center items-center gap-16 lg:gap-24">
          <div class="fade-left flex flex-col gap-8 max-w-[31.625rem] text-white">
            <h2 class="text-2xl font-semibold">3. Development</h2>
            <p class="font-light text-lg">
              Using the latest tools and technologies, such as Flutter, we begin building the hybrid
              app according to the approved design. Our developers ensure that the app functions
              smoothly and provides a seamless user experience on both iOS and Android platforms.
            </p>
          </div>
          <div class="max-w-[37.5rem] hidden md:flex" v-html="appdevmiddle2"></div>
        </div>

      <div class="flex flex-col z-10 lg:flex-row justify-center items-center gap-16 lg:gap-24">
    <!-- Rocket SVG -->
    <div v-html="appdevlast2"></div>

  

  <div class="fade-right flex flex-col gap-8 max-w-[31.625rem] text-white">
    <h2 class=" text-2xl font-semibold">4. Testing and Launch</h2>
    <p class="font-light text-lg">
      Before launching the app, we conduct thorough testing to ensure that it is stable and
      bug-free. Once the app is ready, we help you with the submission process and launch it
      on the App Store and Google Play.
    </p>
  </div>
</div>
        <!-- Section 5 -->
        <div class="flex flex-col z-10 lg:flex-row justify-center items-center gap-16 lg:gap-24">
          <div class="fade-right flex flex-col gap-8 max-w-[31.625rem] text-white">
            <h2 class="text-2xl font-semibold">5. Optimize for Growth</h2>
            <p class="font-light text-lg">
              After the app is launched, we provide ongoing support and maintenance to ensure that
              it continues to function smoothly and meet the changing needs of your business. We
              also offer optimization services to help increase user engagement and drive growth.
            </p>
          </div>
            <div class="relative max-w-[37.5rem]" ref="rocketContainer">

          <div class="max-w-[37.5rem]" v-html="appdevlast1"></div>
            <!-- Burst Canvas Overlay -->
    <canvas
      ref="burstCanvas"
      class="absolute top-0 z-10 pl-37 pt-5 inset-0 w-full h-full pointer-events-none"
    ></canvas>
    </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end section aka get in touch -->
  <!-- SECTION 3 (Responsive Version) -->
  <section
    class="relative bg-black lg:flex hidden lg:justify-center items-center overflow-hidden h-[37.5rem]"
  >
    <div
      class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
      style="background-image: url('/images/appdev-bglines.png')"
    ></div>

    <div
      class="absolute w-[53.6875rem] bg-black 2xl:w-[56rem] 2xl:h-[32rem] h-[27.9375rem] flex justify-center border border-[#A138E0] rounded"
    >
      <div
        class="absolute h-[12.5rem] text-white w-[45.6875rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]"
      >
        <h1 class="italic font-semibold text-[2.25rem]">Get in Touch</h1>
        <p class="max-w-[45.6875rem] max-h-[9rem] text-[1.25rem] font-light">
          Now that you've learned about our process, why not take the next step and let us help you
          take your online presence to the next level? Don't wait – schedule a call with us today
          and let's discuss how we can give your business the recognition it deserves.
        </p>
      </div>

      <div
        class="absolute flex w-[45.6875rem] h-[4.9375rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white"
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
            class="text-[2rem] bg-gradient-to-r from-[#FFE401] to-[#FFB401] bg-clip-text text-transparent italic font-bold"
          >
            Schedule a Call
          </h2>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
  import appdevhero from '@atoms/svgs/appdevhero.svg?raw'
  import appdevhero2 from '@atoms/svgs/appdevhero2.svg?raw'
  import appdevsection2 from '@atoms/svgs/appdevsection2.svg?raw'
  import appdevmiddle1 from '@atoms/svgs/appdevmiddle (1).svg?raw'
  import appdevmiddle2 from '@atoms/svgs/appdevmiddle (2).svg?raw'
  import appdevlast1 from '@atoms/svgs/appdev/appdevlast (1).svg?raw'
  import appdevlast2 from '@atoms/svgs/appdev/appdevlast (2).svg?raw'
  import appdevlines from '@atoms/svgs/appdevlines.svg?raw'
  import { onMounted, onBeforeUnmount, ref } from "vue";

const rocketContainer = ref(null);
const burstCanvas = ref(null);

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
  const perSec = 25;
  let toSpawn = perSec * dt;
  while (toSpawn-- > 0) {
    particles.push({
      x: canvas.width / 2 / devicePixelRatio,
      y: (canvas.height * 0.7) / devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.5,
      vy: 1 + Math.random() * 0.5,
      life: 700 + Math.random() * 400,
      age: 0,
      r: 2 + Math.random() * 2,
    });
  }
}
function tick(t, canvas) {
  const dt = t - last;
  last = t;

  if (isBursting) {
    spawn(dt / 1000, canvas);
  }

  // Optional: fill canvas with transparent background if needed
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.age += dt;
    if (p.age > p.life) {
      particles.splice(i, 1);
      continue;
    }

    p.x += p.vx * dt * 0.05;
    p.y += p.vy * dt * 0.05;

    const alpha = 1 - p.age / p.life;
    const r = p.r * (1 + 0.5 * alpha);

    // PINK PARTICLE GLOW
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
    g.addColorStop(0, `rgba(213,57,211,${0.6 * alpha})`); // #D539D3
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
    ctx.fill();

    // PINK PARTICLE CORE
    ctx.fillStyle = `rgba(213,57,211,${0.8 * alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (isVisible || particles.length > 0) {
    rafId = requestAnimationFrame((time) => tick(time, canvas));
  }
}

function stopBurst(canvas) {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  particles = []
  isBursting = false
}

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
    ctx = canvas.getContext("2d")
    fitCanvas(canvas)

    rocketEl = container.querySelector('#optamizerocket')
    if (rocketEl) {
      rocketEl.style.animation = 'none'
      rocketEl.style.transform = `translateY(${lowerPosition})`
    }

    last = performance.now()
    rafId = requestAnimationFrame((time) => tick(time, canvas))

    // Visibility observer for rocket container
    const containerObserver = new IntersectionObserver(
      (entries) => {
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
                rafId = requestAnimationFrame((time) => tick(time, canvas))
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


<style >

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
</style>