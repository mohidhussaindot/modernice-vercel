<template>
  <div
    class="w-full h-[400px] bg-black bg-no-repeat bg-cover bg-center"
    style="background-image: url('/images/services-third.png');"
  ></div>

  <section ref="containerRef" class="bg-black lg:h-[3717px] relative text-white overflow-hidden">
    <div class="svg-wrapper w-full h-full pointer-events-none select-none transition-all duration-300">
      <div v-html="servicesMainBg"></div>
    </div>

    <!-- Header -->
    <div class="fade-left absolute flex flex-col top-0 left-[273px] text-white max-w-[42.125rem] 
                text-center md:text-left mx-auto md:mx-0">
      <h1 class="text-[2.5rem] font-serif font-lightbold">Phasen des Erfolgs</h1>
      <div class="mt-[2rem]">
        <p class="text-[1.25rem] font-light">
          Wir lassen uns nicht von vorgefertigten Abläufen leiten, sondern gestalten den Weg gemeinsam mit Dir - so vielseitig und einzigartig wie Dein Projekt es erfordert. Dabei durchlaufen wir verschiedene Stationen, um sicherzustellen, dass Deine Website funktional und wirkungsvoll ist.
        </p>
      </div>
    </div>

    <!-- Section 1 -->
    <div class="absolute  top-[403px]">
      <div class="flex flex-col lg:gap-[14px] md:px-[3rem]  lg:px-[3rem] xl:px-[7.5rem] text-white relative">
        <div class="flex lg:gap-0 xl:gap-[143px] items-start">
        
  <div
  class="pt-[152px] fade-left flex flex-col gap-[1.5rem]
  md:text-center lg:text-start ,md:items-center         w-full max-w-full px-4
         md:max-w-[640px] md:px-6
         lg:max-w-[27.13rem] xl:max-w-[32.13rem]">


            <h1 class="font-lightbold text-[2rem] font-serif">Quellen der Inspiration</h1>
            <p class="font-light text-[1.13rem]">
              Hinter jeder beeindruckenden Website steht eine kraftvolle Idee. In der Anfangsphase werden die Visionen und Ziele ausgelotet und so der Grundstein für ein kreatives und zielführendes Webkonzept gelegt.
            </p>
          </div>

<div class="relative  pt-[71px] w-[32.94rem] h-[32.94rem] hidden md:hidden lg:flex">

            <img
              src="/images/services4shine.png"
              alt="services4thimage"
              class="absolute left-[62px] z-0 w-[27.53rem] h-[22rem] object-contain"
              style="transform: rotate(-29.69deg);"
            />
            <div v-html="servicesfourth" ref="servicesFourthContainer" class="relative z-10 w-full h-full"></div>
          </div>
        </div>

        <div class="flex relative pt-[72px] justify-between lg:gap-1 xl:gap-[4rem] flex-col  md:flex-row">
          <!-- Image -->
          <div class="w-[32.88rem] h-[30.5rem]  hidden md:hidden lg:flex" v-html="servicesfourth2" ref="servicesFourth2Container"></div>

          <!-- Text -->
           <div
  class="pt-[152px] fade-right flex flex-col gap-[1.5rem]
  md:text-center lg:text-start ,md:items-center         w-full max-w-full px-4
         md:max-w-[640px] md:px-6
         lg:max-w-[27.13rem] xl:max-w-[32.13rem]">
            <h1 class="font-lightbold text-[2rem] font-serif">Routenplanung</h1>
            <p class="font-light text-[1.13rem]">
              Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die sowohl das Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit eine zielgerichtete Entwicklung ermöglicht.
            </p>
          </div>
        </div>
      </div>
    </div>

  <!-- Section 2 -->
<div class="absolute top-[1490px]">
  <div class="flex flex-col lg:gap-[14px] md:px-[3rem] lg:px-[3rem] xl:px-[7.5rem] text-white relative">
    
    <div class="flex lg:gap-0 xl:gap-[143px] items-start">
      <div
        class="pt-[152px] flex flex-col gap-[1.5rem]
  md:text-center lg:text-start ,md:items-center    fade-left           w-full max-w-full px-4
               md:max-w-[640px] md:px-6
               lg:max-w-[27.13rem] xl:max-w-[32.13rem]">
        <h1 class="font-lightbold text-[2rem] font-serif">Sterne zum Leuchten bringen [WIP]</h1>
        <p class="font-light text-[1.125rem]">
          In dieser Phase kommt unsere kreative und technische Expertise zum Einsatz, um eine lebendige und funktionale Website zu gestalten. Hierbei steht die Verbindung von ästhetischer Erscheinung und solider technischer Basis im Vordergrund.
        </p>
      </div>

      <!-- Image -->
      <div class="relative pt-[71px] w-[34.946rem] h-[28.787rem] hidden md:hidden lg:flex">
        <NuxtImg src="/images/services5-1.png" alt="Visual representation of route planning" class="w-full h-full object-contain" />
      </div>
    </div>

    <div class="flex relative justify-between lg:gap-1 xl:gap-[4rem] flex-col md:flex-row">
      <div class="w-[31.125rem] h-[29.5625rem] hidden md:hidden lg:flex pt-2">
        <NuxtImg src="/images/services-5-2.png" alt="Illustration supporting route planning details" class="w-full h-full object-contain" />
      </div>

      <!-- Text -->
      <div
        class="pt-[152px] flex flex-col gap-[1.5rem]
               md:text-center lg:text-start ,md:items-center fade-right
               w-full max-w-full px-4
               md:max-w-[640px] md:px-6
               lg:max-w-[27.13rem] xl:max-w-[32.13rem]">
        <h1 class="font-lightbold text-[2rem] font-serif">Qualität im Fokus</h1>
        <p class="font-light text-[1.125rem]">
          Durch ausgiebige Tests wird sichergestellt, dass Deine Website in allen Bereichen – von der Nutzererfahrung bis hin zur Performance und Darstellung auf verschiedenen Endgeräten – reibungslos funktioniert. Gezielte Optimierungen gewährleisten hierbei die bestmögliche Umsetzung.
        </p>
      </div>
    </div>

  </div>
</div>


   
    <!-- Section 3 -->
<div class="absolute top-[2372px] w-full flex flex-col gap-[6rem]">
  <!-- Row 1 -->
  <div class="flex flex-col md:flex-row justify-between gap-[3rem] pt-[120px] px-4 md:px-[3rem] lg:px-[3.5rem] text-white">
    <!-- Text -->
    <div
      class="pt-[152px] flex flex-col gap-[1.5rem]
             md:text-center lg:text-start ,md:items-center
             w-full max-w-full px-4 fade-left
             md:max-w-[640px] md:px-6
             lg:max-w-[27.13rem] xl:max-w-[32.13rem] mx-auto md:mx-0">
      <h1 class="font-lightbold text-[2rem] font-serif">Live-Schaltung [WIP]</h1>
      <p class="font-light text-[1.125rem]">
        Nach sorgfältiger Vorbereitung und Optimierung geht sie live und nimmt ihren Platz in der digitalen
        Landschaft ein. Von diesem Moment an beginnt sie, die Nutzer zu begeistern, wichtige Verbindungen zu knüpfen
        und Deine Botschaft effektiv zu kommunizieren.
      </p>
    </div>

    <!-- SVG/Image -->
    <div class="relative w-full max-w-[33.117rem] h-[29.812rem] pt-[0.4375rem] hidden md:hidden lg:block mx-auto">
      <div class="absolute left-[5.8rem] w-full top-[14rem] pointer-events-none">
        <canvas ref="burstCanvas" class="w-full h-[10rem]"></canvas>
      </div>
      <div ref="svgContainer" v-html="svgContent" class="relative w-full h-full z-10"></div>
    </div>
  </div>

  <!-- Row 2 -->
  <div class="flex flex-col md:flex-row justify-start gap-[9rem] px-4 md:px-[3rem] lg:px-[2.5rem] text-white">
    <!-- Image -->
    <div class="w-full max-w-[33.438rem] h-[30.1875rem] hidden md:hidden lg:block ">
      <NuxtImg
        src="/images/services-5-d-2.png"
        alt="Illustration showing continuous website optimization"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Text -->
    <div
      class="xl:pt-[152px] lg:pt-[80px]  flex flex-col gap-[1.5rem]
             md:text-center lg:text-start ,md:items-center
             w-full max-w-full px-4 fade-right
             md:max-w-[640px] md:px-6
             lg:max-w-[27.13rem] xl:max-w-[32.13rem] mx-auto md:mx-0">
      <h1 class="font-lightbold text-[2rem]  font-serif">Perfektion durch Iteration</h1>
      <p class="font-light text-[1.125rem]">
        Mit der erfolgreichen Veröffentlichung muss die Reise nicht enden. Kontinuierliche Optimierungen und
        datenbasierte Analysen können dafür sorgen, dass Deine Website stets eine hohe Sichtbarkeit und
        Leistungsfähigkeit aufweist, um ihr Wachstum weiter voranzutreiben.
      </p>
    </div>
  </div>
</div>

  </section>
<section class="relative bg-black lg:flex md:hidden lg:justify-center xl:flex xl:justify-center items-center overflow-hidden h-[37.5rem]">
  <div
    class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
    style="background-image: url('/images/services-last-bg.png');"
  ></div>

  <div class="absolute w-[53.6875rem] bg-black h-[27.9375rem] xl:left-[18.125rem] border border-green-500 rounded">
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
 

<style scoped>
.svg-wrapper {
  position: relative;
  height: 100%;
  overflow: visible; 
}

.svg-wrapper > div {
  display: inline-block;
  transform: translateX(-120px); /* shift svg left */
  /* optional: to avoid inline-block whitespace issues */
  vertical-align: top;
}

.fade-left, .fade-right, .fade-up {
  opacity: 0;
  transform: translateY(30px);
  will-change: opacity, transform;
}

</style>
<script setup>
import servicesMainBg from '@atoms/svgs/services-mainbg.svg?raw'
import servicesfourth from '@atoms/svgs/servicesfourth.svg?raw'
import servicesfourth2 from '@atoms/svgs/servicesfourthsecond.svg?raw'
import svgContent from '@atoms/svgs/servicesfifth.svg?raw'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const servicesFourthContainer = ref(null)
const servicesFourth2Container = ref(null)
const svgContainer = ref(null)
const burstCanvas = ref(null)

let ctx
let particles = []
let last = 0
let rafId

let rocket, svgburst
let rocketTl
let observer

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
  gsap.set(rocket, { y: 100 })

  rocketTl = gsap.timeline({ paused: true })
  rocketTl
    .to(rocket, {
      y: -1,
      duration: 3,
      ease: 'power2.inOut',
      onStart: () => {
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

function setupObserver() {
  const container = svgContainer.value
  if (!container) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => rocketTl.restart(true), 500)
        } else {
          rocketTl.pause(0)
          gsap.set(rocket, { y: 100 })
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

onMounted(() => {
  initAnimations()
  setupObserver()

  // Animate Plant & Shadow
  const svg1 = servicesFourthContainer.value
  if (svg1) {
    const plant = svg1.querySelector('#Plant')
    const shadow = svg1.querySelector('#Shadow')

    if (plant) {
      gsap.to(plant, {
        rotate: '7deg',
        transformOrigin: 'bottom center',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (shadow) {
      shadow.removeAttribute('style')
      shadow.setAttribute('stroke-width', '2.5')
      shadow.setAttribute('stroke', '#38EF61')

      gsap.to(shadow, {
        stroke: '#44E5C8',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }

  // Animate Gears
  const svg2 = servicesFourth2Container.value
  if (svg2) {
    const gears = svg2.querySelector('#Gears')
    const shadow2 = svg2.querySelector('#Shadow')

    if (gears) {
      gsap.fromTo(
        gears,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svg2.closest('section'),
            start: 'CENTER',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    if (shadow2) {
      shadow2.removeAttribute('style')
      shadow2.setAttribute('stroke-width', '2.5')
      shadow2.setAttribute('stroke', '#38EF61')

      gsap.to(shadow2, {
        stroke: '#44E5C8',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }

  // ✅ Fade in/out animation for text & svgs
  const fadeElements = document.querySelectorAll('.fade-left, .fade-right, .fade-up')

  fadeElements.forEach((el) => {
    let x = 0
    let y = 0

    if (el.classList.contains('fade-left')) x = -60
    if (el.classList.contains('fade-right')) x = 60
    if (el.classList.contains('fade-up')) y = 40

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
          // markers: true, // for debug
        },
      }
    )
  })
})

onBeforeUnmount(() => {
  if (observer && svgContainer.value) observer.unobserve(svgContainer.value)
  cancelAnimationFrame(rafId)
})
</script>
