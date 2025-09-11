<template>
  <!-- SECTION 1 -->
  <section class="relative h-[56.375rem] bg-black overflow-hidden">
    <div
      class="absolute bg-no-repeat inset-0  bg-[length:100%]"
      style="background-image: url('/images/services5bg.png');"
    ></div>

    <div>
      <div
        class="absolute text-white left-[7.25rem] h-[14.75rem] flex flex-col w-[37.125rem] top-[8.8125rem] gap-[2rem]"
      >
        <h1 class="font-lightbold text-[2rem] font-serif">Routenplanung</h1>
        <p class="font-light text-[1.125rem] w-[31.4375rem]">
          Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die sowohl das
          Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit eine zielgerichtete Entwicklung
          ermöglicht.
        </p>
      </div>

      <div class="absolute left-[49.625rem] h-[28.787rem] top-[-0.812rem] z-10 w-[34.946rem]">
        <NuxtImg src="/images/services5-1.png" alt="Visual representation of route planning" />
      </div>
    </div>

    <div>
      <div
        class="absolute text-white left-[45.4375rem] h-[16.875rem] flex flex-col w-[31.625rem] top-[32.75rem] gap-[1.5rem]"
      >
        <h1 class="font-lightbold text-[2rem] font-serif">Routenplanung</h1>
        <p class="font-light text-[1.125rem] w-[31.4375rem]">
          Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die sowohl das
          Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit eine zielgerichtete Entwicklung
          ermöglicht.
        </p>
      </div>

      <div class="absolute left-[5.9375rem] h-[29.5625rem] top-[28.875rem] z-10 w-[31.125rem]">
        <NuxtImg src="/images/services-5-2.png" alt="Illustration supporting route planning details" />
      </div>
    </div>
  </section>

  <!-- SECTION 2 -->
  <section ref="sectionRef" class="relative h-[64.0625rem] bg-black overflow-hidden">
    
    <div
      class="absolute bg-no-repeat inset-0  bg-[length:100%]"
      style="background-image: url('/images/services5-2-bg.png');"
    ></div>

    <div>
      <div
        class="absolute text-white left-[7.5rem] h-[14.75rem] flex flex-col w-[31.375rem] top-[9.563rem] gap-[1.5rem]"
      >
        <h1 class="font-lightbold text-[2rem] font-serif">Live-Schaltung [WIP]</h1>
        <p class="font-light text-[1.125rem] w-[31.375rem]">
          Nach sorgfältiger Vorbereitung und Optimierung geht sie live und nimmt ihren Platz in der digitalen
          Landschaft ein. Von diesem Moment an beginnt sie, die Nutzer zu begeistern, wichtige Verbindungen zu knüpfen
          und Deine Botschaft effektiv zu kommunizieren.
        </p>
      </div>

      <div class="absolute left-[49.375rem] h-[29.812rem] top-[0.4375rem] z-10 w-[33.117rem]">
        <div class="absolute left-[5.8rem]  w-full top-[14rem] pointer-events-none">
          <canvas ref="burstCanvas" class="w-full  h-[10rem]"></canvas>
        </div>
        <div ref="svgContainer" v-html="svgContent" class="relative w-full h-full"></div>
      </div>
    </div>

    <div>
      <div
        class="absolute text-white left-[45.875rem] h-[14.75rem] flex flex-col w-[33.563rem] top-[43.25rem] gap-[1.5rem]"
      >
        <h1 class="font-lightbold text-[2rem] font-serif">Perfektion durch Iteration</h1>
        <p class="font-light text-[1.125rem] max-w-[33.563rem]">
          Mit der erfolgreichen Veröffentlichung muss die Reise nicht enden. Kontinuierliche Optimierungen und
          datenbasierte Analysen können dafür sorgen, dass Deine Website stets eine hohe Sichtbarkeit und
          Leistungsfähigkeit aufweist, um ihr Wachstum weiter voranzutreiben.
        </p>
      </div>

      <div class="absolute left-[5.4375rem] h-[30.1875rem] top-[34.5625rem] z-10 w-[31.125rem]">
        <NuxtImg src="/images/services-5-d-2.png" alt="Illustration showing continuous website optimization" />
      </div>
    </div>
  </section>

  <!-- SECTION 3 -->
  <section class="relative bg-black flex items-center overflow-hidden h-[37.5rem]">
    <div
      class="absolute bg-no-repeat bg-center inset-0  bg-[length:100%]"
      style="background-image: url('/images/services-last-bg.png');"
    ></div>

    <div class="absolute w-[53.6875rem] bg-black h-[27.9375rem] left-[18.125rem] border border-green-500">
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
          <h2
            class="text-[2rem] italic font-bold bg-gradient-to-r from-[#38EF61] to-[#44E5C8] bg-clip-text text-transparent"
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
import gsap from 'gsap'
import svgContent from '@atoms/svgs/servicesfifth.svg?raw'

// Refs
const svgContainer = ref(null)
const burstCanvas = ref(null)

// Canvas / Particle State
let ctx
let particles = []
let last = 0
let rafId

let rocket, svgburst

let rocketTl
let observer

// ------------------- Canvas Setup -------------------
function fitCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1
  canvas.width = canvas.clientWidth * ratio
  canvas.height = canvas.clientHeight * ratio
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
}

// ------------------- Particle / Burst Logic -------------------
function spawn(dt, canvas) {
  const perSec = 25
  let toSpawn = perSec * dt
  while (toSpawn-- > 0) {
    particles.push({
      x: canvas.width / 2 / devicePixelRatio,
      y: canvas.height * 0.7 / devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.5,
      vy: 1 + Math.random() * 0.5,
      life: 700 + Math.random() * 400,
      age: 0,
      r: 2 + Math.random() * 2,
    })
  }
}

function tick(t, canvas) {
  const dt = t - last
  last = t

  spawn(dt / 1000, canvas)
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
    g.addColorStop(0, `rgba(80,255,160,${0.6 * alpha})`)
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = `rgba(120,255,180,${0.8 * alpha})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  rafId = requestAnimationFrame((time) => tick(time, canvas))
}

// ------------------- Animations -------------------
function initAnimations() {
  const svgEl = svgContainer.value
  if (!svgEl) return

  const getById = (id) =>
    Array.from(svgEl.querySelectorAll(`#${id}`)).find(
      (el) => el.closest('svg') === svgEl.querySelector('svg')
    )

  rocket = getById('rocket')
  svgburst = getById('burst')

  if (!rocket || !svgburst) return

  svgburst.style.opacity = 0
  gsap.set(rocket, { y: 100 }) // starting position (offscreen)

  rocketTl = gsap.timeline({ paused: true })
  rocketTl
    .to(rocket, {
      y: -1,
      duration: 3,
      ease: 'power2.inOut',
      onStart: () => {
        // Start burst
        svgburst.style.opacity = 0
        const canvas = burstCanvas.value
        if (canvas) {
          ctx = canvas.getContext('2d')
          fitCanvas(canvas)
          last = performance.now()
          rafId = requestAnimationFrame((time) => tick(time, canvas))
        }
      },
    })
    .to(rocket, {
      y: '-=1',
      rotation: '+=1',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 1.2,
    })
}

// ------------------- IntersectionObserver -------------------
function setupObserver() {
  const container = svgContainer.value
  if (!container) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('🎯 Rocket entered viewport')
          setTimeout(() => rocketTl.restart(true), 500)
        } else {
          console.log('🚫 Rocket left viewport')

          rocketTl.pause(0)
          gsap.set(rocket, { y: 100 }) // reset to original y

          svgburst.style.opacity = 0

          cancelAnimationFrame(rafId)
          if (ctx && burstCanvas.value) {
            ctx.clearRect(0, 0, burstCanvas.value.width, burstCanvas.value.height)
          }
          particles = []
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(container)
}

// ------------------- Lifecycle -------------------
onMounted(() => {
  initAnimations()
  setupObserver()
})

onBeforeUnmount(() => {
  if (observer && svgContainer.value) observer.unobserve(svgContainer.value)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
canvas {
  display: block;
}
</style>
