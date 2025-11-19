<template>
  <section class="bg-black hidden lg:block text-white relative w-full overflow-hidden">
    <div class="   ">
      <div
        class="absolute inset-0 hidden md:flex z-0 w-full h-full pointer-events-none appdev-lines"
        v-html="appdevlines"
      ></div>

      <div
        class="relative z-10 flex justify-center flex-col items-center lg:flex-row h-[49.375rem] gap-12 lg:gap-0 mb-32 max-w-7xl mx-auto"
      >
        <!-- Left Side -->
        <div class="lg:w-1/2 items-center">
          <div class="w-full text-center flex flex-col gap-6 mt-36 lg:text-start">
            <h1 class="text-5xl italic font-bold leading-tight">
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#D539D3] bg-clip-text text-transparent"
              >
                {{ $t('appdevhero.highlight1') }}</span
              >solute Genius. Custom
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
                >{{ $t('appdevhero.highlight2') }}</span
              >
              {{ $t('appdevhero.servicesline') }}
            </h1>
            <p class="text-lg leading-relaxed max-w-[600px]">
              {{ $t('appdevhero.paragraph') }}
            </p>
          </div>
        </div>

        <!-- Right Side -->
        <div class="lg:w-1/2 items-center">
          <div class="w-full max-w-[37.5rem]" v-html="appdevhero"></div>
        </div>
      </div>

      <div
        class="relative z-10 flex flex-col 2xl:top-15 lg:flex-row gap-10 max-w-7xl mx-auto lg:gap-0 mb-32"
      >
        <div class="lg:w-1/2 hidden lg:flex justify-center">
          <div class="w-full 2xl:max-w-[50rem]" v-html="appdevhero2"></div>
        </div>

        <div
          class="fade-up w-full mt-[40rem] md:mt-0 flex flex-col text-center gap-6 pt-3 lg:pt-12 xl:pt-36"
        >
          <h1 class="text-2xl 2xl:text-4xl font-semibold">
            <span
              class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
            >
              {{ $t('hybrid.title1') }}</span
            >
            {{ $t('hybrid.title2') }}
          </h1>
          <p class="text-lg 2xl:text-xl font-light">
            {{ $t('hybrid.description') }}
          </p>
        </div>
      </div>

      <!-- Sections 1-5: Discovery, Design, etc. -->
      <div class="flex flex-col max-w-7xl mx-auto gap-15">
        <!-- Section 1 -->
        <div class="flex flex-col z-10 lg:flex-row items-center justify-between">
          <div class="fade-left flex flex-col gap-10 text-white">
            <h1 class="text-3xl font-bold">
              {{ $t('approach.title1') }}
              <span
                class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
                >{{ $t('approach.title2') }}</span
              >
            </h1>
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.1.title') }}</h2>
            <p class="font-light w-[500px] text-lg">
              {{ $t('approach.steps.1.description') }}
            </p>
          </div>
          <div class="max-w-[37.5rem] pt-20 lg:pt-0" v-html="appdevsection2"></div>
        </div>

        <!-- Section 2 -->
        <div
          class="flex flex-col z-10 lg:flex-row max-w-7xl justify-between items-center gap-16 lg:gap-38"
        >
          <div class="max-w-[37.5rem] hidden lg:flex" v-html="appdevmiddle1"></div>
          <div class="fade-right flex flex-col gap-8 text-white">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.2.title') }}</h2>
            <p class="font-light w-[500px] text-lg">
              {{ $t('approach.steps.2.description') }}
            </p>
          </div>
        </div>

        <!-- Section 3 -->
        <div class="flex flex-col z-10 lg:flex-row max-w-7xl items-center justify-between">
          <div class="fade-left flex flex-col gap-8 text-white">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.3.title') }}</h2>
            <p class="font-light w-[500px] text-lg">
              {{ $t('approach.steps.3.description') }}
            </p>
          </div>
          <div class="max-w-[37.5rem] hidden md:flex" v-html="appdevmiddle2"></div>
        </div>

        <div class="flex flex-col z-10 lg:flex-row max-w-7xl items-center justify-between">
          <!-- Rocket SVG -->
          <div v-html="appdevlast2"></div>

          <div class="fade-right flex flex-col gap-8 text-white">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.4.title') }}</h2>
            <p class="font-light w-[500px] text-lg">
              {{ $t('approach.steps.4.description') }}
            </p>
          </div>
        </div>
        <!-- Section 5 -->
        <div class="flex flex-col z-10 lg:flex-row max-w-7xl justify-between items-center">
          <div class="fade-right flex flex-col gap-8 text-white">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.5.title') }}</h2>
            <p class="font-light w-[500px] text-lg">
              {{ $t('approach.steps.5.description') }}
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
      class="absolute w-[53.6875rem] bg-black 2xl:w-[62rem] 2xl:h-[37rem] h-[27.9375rem] flex justify-center border border-[#A138E0] rounded"
    >
      <div
        class="absolute h-[12.5rem] text-white w-[45.6875rem] flex flex-col gap-[1rem] top-[3.5rem] mx-[4rem]"
      >
        <h1 class="italic font-semibold text-[2.25rem]">{{ $t('contact.title') }}</h1>
        <p class="max-w-[45.6875rem] max-h-[9rem] text-[1.25rem] font-light">
          {{ $t('contact.description') }}
        </p>
      </div>

      <div
        class="absolute flex w-[45.6875rem] h-[4.9375rem] gap-[4rem] mx-[4rem] top-[19.5rem] text-white"
      >
        <span>
          <p class="text-[1.125rem] mb-[0.625rem]">{{ $t('contact.message.label') }}</p>
          <h2
            class="text-[2rem] italic font-bold bg-gradient-to-r from-[#A138E0] to-[#7137EC] bg-clip-text text-transparent"
          >
            {{ $t('contact.message.email').replace(' [at] ', '@') }}
          </h2>
        </span>

        <span>
          <p class="text-[1.125rem] mb-[0.625rem]"> {{ $t('contact.call.label') }}</p>
          <h2
            class="text-[2rem] bg-gradient-to-r from-[#FFE401] to-[#FFB401] bg-clip-text text-transparent italic font-bold"
          >
            {{ $t('contact.call.action') }}
          </h2>
        </span>
      </div>
    </div>
  </section>

  <!-- mobile -->
  <section class="block lg:hidden pt-30 bg-black text-white relative w-full overflow-hidden px-6">
    <div class="max-w-[1440px] mx-auto flex flex-col gap-16">
      <!-- HERO Section -->
      <div class="flex flex-col md:flex-row items-center gap-5">
        <!-- Text -->
        <div class="md:w-[800px] text-center md:text-left flex flex-col gap-6">
          <h1 class="text-4xl font-bold italic leading-tight">
            <span
              class="bg-gradient-to-r from-[#D539D3] to-[#D539D3] bg-clip-text text-transparent"
            >
              {{ $t('appdevhero.highlight1') }}
            </span>
            {{
              $t('appdevhero.heading')
                .split('Appsolute Genius. Custom ')[1]
                ?.split(' Services for Your Business.')[0]
            }}
            <span
              class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
            >
              {{ $t('appdevhero.highlight2') }}
            </span>
            {{ $t('appdevhero.servicesline') }}
          </h1>

          <p class="text-base leading-relaxed">
            {{ $t('appdevhero.paragraph') }}
          </p>
        </div>

        <!-- SVG -->
        <div class="w-full">
          <img src="@atoms/svgs/appdevhero.svg" alt="hero" />
        </div>
      </div>

      <!-- What is Hybrid Section -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-10">
        <!-- Text -->
        <div class="md:w-1/2 text-center md:text-left flex flex-col gap-6">
          <h2 class="text-2xl font-semibold">
            <span
              class="bg-gradient-to-r from-[#D539D3] to-[#7137EC] bg-clip-text text-transparent"
            >
              {{ $t('hybrid.title1') }}</span
            >
            {{ $t('hybrid.title2') }}
          </h2>
          <p class="text-base font-light">
            {{ $t('hybrid.description') }}
          </p>
        </div>
        <!-- SVG -->
        <div class="md:w-[400px] w-full">
          <img src="@atoms/svgs/appdevhero2.svg" alt="cuz" />
        </div>
      </div>

      <!-- 5 Steps -->
      <div class="flex flex-col gap-16">
        <!-- 1. Discovery -->
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/2 flex flex-col gap-4">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.1.title') }}</h2>
            <p class="text-base font-light">
              {{ $t('approach.steps.1.description') }}
            </p>
          </div>
          <div class="md:w-1/2 w-full">
            <img src="@atoms/svgs/appdevsection2.svg" alt="appdevsectionsecond" />
          </div>
        </div>

        <!-- {{ $t('approach.steps.2.title') }} -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-10">
          <div class="md:w-1/2 flex flex-col gap-4">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.2.title') }}</h2>
            <p class="text-base font-light">
              {{ $t('approach.steps.2.description') }}
            </p>
          </div>
          <div class="md:w-1/2 w-full">
            <img src="@atoms/svgs/appdevmiddle (1).svg" alt="appdevmiddle1" />
          </div>
        </div>

        <!-- {{ $t('approach.steps.3.title') }} -->
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/2 flex flex-col gap-4">
            <h2 class="text-2xl font-semibold">{{ $t('approach.steps.3.title') }}</h2>
            <p class="text-base font-light">
              {{ $t('approach.steps.3.description') }}
            </p>
          </div>
          <div class="md:w-1/2 w-full">
            <img src="@atoms/svgs/appdevmiddle (2).svg" alt="" />
          </div>
        </div>

        <!-- 4. Testing & Launch -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-10">
          <div class="md:w-1/2 flex flex-col gap-4">
            <h2 class="text-2xl font-semibold"> {{ $t('approach.steps.4.title') }}</h2>
            <p class="text-base font-light">
              {{ $t('approach.steps.4.description') }}
            </p>
          </div>
          <div class="md:w-1/2 w-full">
            <img src="@atoms/svgs/appdev/appdevrocket.svg" alt="appdevlast" />
          </div>
        </div>

        <!-- 5. Optimize for Growth -->
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/2 flex flex-col gap-4">
            <h2 class="text-2xl font-semibold"> {{ $t('approach.steps.5.title') }}</h2>
            <p class="text-base font-light">
              {{ $t('approach.steps.5.description') }}
            </p>
          </div>
          <div class="md:w-1/2 w-full">
            <img src="@atoms/svgs/appdev/appdevlast (1).svg" alt="appdevlast" />
          </div>
        </div>
      </div>

      <!-- CTA: {{ $t('contact.title') }} -->
      <div class="bg-[#1a1a1a] p-6 rounded-xl border border-[#A138E0] text-center mt-10">
        <h2 class="italic font-semibold text-2xl mb-4">{{ $t('contact.title') }}</h2>
        <p class="text-base font-light mb-6">
          {{ $t('contact.description') }}
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm">{{ $t('contact.message.label') }}</p>
            <h3
              class="text-lg font-bold italic bg-gradient-to-r from-[#A138E0] to-[#7137EC] bg-clip-text text-transparent"
            >
              {{ $t('contact.message.email').replace(' [at] ', '@') }}
            </h3>
          </div>
          <div>
            <p class="text-sm"> {{ $t('contact.call.label') }}</p>
            <h3
              class="text-lg italic font-bold bg-gradient-to-r from-[#FFE401] to-[#FFB401] bg-clip-text text-transparent"
            >
              {{ $t('contact.call.action') }}
            </h3>
          </div>
        </div>
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
  import appdevlast2 from '@atoms/svgs/appdev/appdevrocket.svg?raw'
  import appdevlines from '@atoms/svgs/appdevlines.svg?raw'
  import { onMounted, onBeforeUnmount, ref } from 'vue'

  const rocketContainer = ref(null)
  const burstCanvas = ref(null)

  let ctx, rafId, last
  let particles = []
  let rocketEl = null
  let isVisible = false
  let isBursting = false
  let burstTimeout = null
  let landingTimeout = null
  let fadeObserver = null
  let containerObserver = null
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
    if (!ctx || !canvas) return

    if (isBursting) spawn(dt / 1000, canvas)

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
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6)
      g.addColorStop(0, `rgba(213,57,211,${0.6 * alpha})`)
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = `rgba(213,57,211,${0.8 * alpha})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    if (isVisible || particles.length > 0) {
      rafId = requestAnimationFrame(time => tick(time, canvas))
    }
  }

  function stopBurst(canvas) {
    if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles = []
    isBursting = false
  }

  onMounted(() => {
    const fadeElements = document.querySelectorAll('.fade-left, .fade-right, .fade-up')
    fadeObserver = new IntersectionObserver(
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

    const canvas = burstCanvas.value
    const container = rocketContainer.value
    if (!canvas || !container) return

    ctx = canvas.getContext('2d')
    fitCanvas(canvas)

    rocketEl = container.querySelector('#optamizerocket')
    if (rocketEl) {
      rocketEl.style.animation = 'none'
      rocketEl.style.transform = `translateY(${lowerPosition})`
    }

    last = performance.now()
    rafId = requestAnimationFrame(time => tick(time, canvas))

    containerObserver = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
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
          if (isVisible) {
            isBursting = false
            isVisible = false
            clearTimeout(burstTimeout)
            clearTimeout(landingTimeout)
            if (rocketEl) rocketEl.style.animation = 'none'
            landingTimeout = setTimeout(() => {
              if (rocketEl) rocketEl.style.transform = `translateY(${lowerPosition})`
            }, 500)
          }
        }
      },
      { threshold: 0.5 }
    )
    containerObserver.observe(container)
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
    clearTimeout(burstTimeout)
    clearTimeout(landingTimeout)
    if (fadeObserver) fadeObserver.disconnect()
    if (containerObserver) containerObserver.disconnect()
    stopBurst(burstCanvas.value)
    if (rocketEl) {
      rocketEl.style.animation = 'none'
      rocketEl.style.transform = `translateY(${lowerPosition})`
    }
  })
</script>

<style>
  .appdev-lines {
    left: 0; /* Default position for small screens */
  }

  /* 2XL screens (≥1536px) */
  @media (min-width: 1536px) {
    .appdev-lines {
      left: 8rem; /* move slightly left */
    }
  }

  @media (min-width: 1920px) {
    .appdev-lines {
      left: 32rem; /* move further left */
      transform: scale(1.2); /* zoom in more */
      top: 22rem;
    }
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
