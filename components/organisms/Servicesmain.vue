<template class="overflow-hidden">
  
  <div
    class="w-full   bg-black overflow-hidden hidden lg:flex bg-no-repeat bg-cover bg-center"
     >
  <img style="scale: 1 ; rotate: 2deg;" src="/images/services-third.png" alt="img" ></img>
</div>

  <section
    ref="containerRef"
    class="bg-black hidden lg:flex lg:h-[3717px] relative text-white overflow-hidden"
  >
    <div 
      class="svg-wrapper w-full h-full -left-10  scale pointer-events-none select-none transition-all duration-300"
    >
      <div v-html="servicesMainBg"></div>
    </div>

    <div
      class="fade-left absolute top-0 left-1/2 -translate-x-1/2 flex flex-col text-white text-center md:text-left max-w-7xl lg:px-4 xl:px-0 md:px-6"
    >
      <h1 class="text-[2.5rem] font-serif font-lightbold">Phasen des Erfolgs</h1>
      <div class="mt-[2rem]">
        <p class="text-[1.25rem] font-light">
          Wir lassen uns nicht von vorgefertigten Abläufen leiten, sondern gestalten den Weg
          gemeinsam mit Dir – so vielseitig und einzigartig wie Dein Projekt es erfordert. Dabei
          durchlaufen wir verschiedene Stationen, um sicherzustellen, dass Deine Website funktional
          und wirkungsvoll ist.
        </p>
      </div>
    </div>

    <<!-- Section 1 -->
    <div class="absolute top-[403px] w-full">
      <div class="max-w-7xl mx-auto flex flex-col lg:gap-[14px] text-white relative">
        <div class="flex justify-between items-center">
          <div
            class="pt-[152px] fade-left flex flex-col gap-[1.5rem] md:text-center lg:text-start w-full max-w-full lg:px-4 xl:px-0 md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem]"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Quellen der Inspiration</h1>
            <p class="font-light text-[1.13rem]">
              Hinter jeder beeindruckenden Website steht eine kraftvolle Idee. In der Anfangsphase
              werden die Visionen und Ziele ausgelotet und so der Grundstein für ein kreatives und
              zielführendes Webkonzept gelegt.
            </p>
          </div>

          <div class="relative pt-[71px] w-[32.94rem] h-[32.94rem] hidden md:hidden lg:flex">
            <NuxtImg
              src="/images/services4shine.png"
              alt="services4thimage"
              class="absolute left-[62px] z-0 w-[27.53rem] h-[22rem] object-contain"
              style="transform: rotate(-29.69deg)"
            />
            <div
              v-html="servicesfourth"
              ref="servicesFourthContainer"
              class="relative z-10 w-full h-full"
            ></div>
          </div>
        </div>

        <div
          class="flex relative pt-[130px] justify-between lg:gap-1 xl:gap-[4rem] flex-col md:flex-row"
        >
          <!-- Image -->
          <div
            class="w-[39.88rem] h-[30.5rem] hidden md:hidden lg:flex"
            v-html="servicesfourth2"
            ref="servicesFourth2Container"
          ></div>

          <!-- Text -->
          <div
            class="pt-[152px] fade-right flex flex-col gap-[1.5rem] md:text-center lg:text-start ,md:items-center w-full max-w-full lg:px-4 xl:px-0 md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem]"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Routenplanung</h1>
            <p class="font-light text-[1.13rem]">
              Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die
              sowohl das Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit
              eine zielgerichtete Entwicklung ermöglicht.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section -->
    <div class="absolute top-[1490px] w-full">
      <div class="max-w-7xl mx-auto flex flex-col lg:gap-[14px] text-white relative">
        <!-- First Row -->
        <div class="flex justify-between items-center">
          <div
            class="pt-[152px] flex flex-col gap-[1.5rem] md:text-center lg:text-start md:items-center w-full max-w-full lg:px-4 xl:px-0 md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem]"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Sterne zum Leuchten bringen [WIP]</h1>
            <p class="font-light text-[1.125rem]">
              In dieser Phase kommt unsere kreative und technische Expertise zum Einsatz, um eine
              lebendige und funktionale Website zu gestalten. Hierbei steht die Verbindung von
              ästhetischer Erscheinung und solider technischer Basis im Vordergrund.
            </p>
          </div>

          <!-- Image -->
          <div class="relative pt-[71px] w-[34.946rem] h-[29.787rem] hidden md:hidden lg:flex">
            <NuxtImg
              src="/images/services5-1.png"
              alt="Visual representation of route planning"
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex relative justify-between lg:gap-1 xl:gap-[4rem] flex-col md:flex-row">
          <div class="w-[31.125rem] h-[29.5625rem] hidden md:hidden lg:flex pt-2">
            <NuxtImg
              src="/images/services-5-2.png"
              alt="Illustration supporting route planning details"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Text -->
          <div
            class="pt-[152px] flex flex-col gap-[1.5rem] md:text-center lg:text-start fade-right w-full max-w-full lg:px-4 xl:px-0 md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem]"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Qualität im Fokus</h1>
            <p class="font-light text-[1.125rem]">
              Durch ausgiebige Tests wird sichergestellt, dass Deine Website in allen Bereichen –
              von der Nutzererfahrung bis hin zur Performance und Darstellung auf verschiedenen
              Endgeräten – reibungslos funktioniert. Gezielte Optimierungen gewährleisten hierbei
              die bestmögliche Umsetzung.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="absolute top-[2372px] w-full">
      <div class="max-w-7xl mx-auto flex  flex-col gap-[6rem]">
        <!-- Row 1 -->
        <div class="flex flex-col md:flex-row gap-[13rem] pt-[120px] text-white">
          <!-- Text -->
          <div
            class="pt-[152px] flex flex-col gap-[1.5rem] text-start lg: lg:px-4 xl:px-0 w-full max-w-full fade-left md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem] mx-auto md:mx-0"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Live-Schaltung [WIP]</h1>
            <p class="font-light text-[1.125rem]">
              Nach sorgfältiger Vorbereitung und Optimierung geht sie live und nimmt ihren Platz in
              der digitalen Landschaft ein. Von diesem Moment an beginnt sie, die Nutzer zu
              begeistern, wichtige Verbindungen zu knüpfen und Deine Botschaft effektiv zu
              kommunizieren.
            </p>
          </div>

          <!-- SVG/Image -->
          <div class="relative h-[29.812rem] pt-[0.4375rem] hidden md:hidden lg:block mx-auto">
            <div class="absolute left-[5.8rem] w-full top-[14rem] pointer-events-none">
              <canvas ref="burstCanvas" class="w-full h-[10rem]"></canvas>
            </div>
            <div ref="svgContainer" v-html="svgContent" class="relative w-full h-full z-10"></div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex flex-col  md:flex-row justify-between  text-white">
          <!-- Image -->
          <div class="w-full max-w-[33.438rem] h-[30.1875rem] hidden md:hidden lg:block">
            <NuxtImg
              src="/images/services-5-d-2.png"
              alt="Illustration showing continuous website optimization"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Text -->
          <div
            class="xl:pt-[152px] lg:pt-[80px] flex flex-col gap-[1.5rem] md:text-center lg:text-start w-full max-w-full fade-right md:max-w-[640px] lg:max-w-[27.13rem] xl:max-w-[32.13rem] mx-auto md:mx-0"
          >
            <h1 class="font-lightbold text-[2rem] font-serif">Perfektion durch Iteration</h1>
            <p class="font-light text-[1.125rem]">
              Mit der erfolgreichen Veröffentlichung muss die Reise nicht enden. Kontinuierliche
              Optimierungen und datenbasierte Analysen können dafür sorgen, dass Deine Website stets
              eine hohe Sichtbarkeit und Leistungsfähigkeit aufweist, um ihr Wachstum weiter
              voranzutreiben.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative hidden lg:flex bg-black md:hidden lg:justify-center xl:flex xl:justify-center items-center overflow-hidden h-[37.5rem]"
  >
    <div
      class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
      style="background-image: url('/images/services-last-bg.png')"
    ></div>

    <div
      class="absolute w-[53.6875rem] 2xl:w-[62rem] 2xl:h-[37rem] bg-black h-[27.9375rem] border border-green-500 rounded"
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

  <!-- ✅ Mobile-Only Version -->
  <section
    class="block lg:hidden pt-[4.5rem] md:flex md:flex-col md:justify-center bg-black text-white"
  >
    <!-- Section Header -->
    <div>
      <div class="absolute">
        <img src="@atoms/svgs/seoherobg.svg" alt="Background SVG" class="w-full h-[450px]" />
      </div>
      <div class="py-[4.5rem] text-center">
        <h1 class="text-[2rem] md:text-[3rem] italic font-semibold">
          Phasen des <span class="text-[#00FFB3]">Erfolgs</span>
        </h1>
        <p class="mt-6 text-[0.9rem] px-10 md:px-30 font-semilight leading-relaxed">
          Wir lassen uns nicht von vorgefertigten Abläufen leiten, sondern gestalten den Weg
          gemeinsam mit Dir – so vielseitig und einzigartig wie Dein Projekt es erfordert. Dabei
          durchlaufen wir verschiedene Stationen, um sicherzustellen, dass Deine Website funktional
          und wirkungsvoll ist.
        </p>
      </div>
    </div>

    <!-- Section 1 -->

    <div class="py-[4.5rem] px-5 items-center overflow-hidden flex text-center">
      <div class="hidden md:block">
        <img
          src="@atoms/svgs/servicesfourth.svg"
          class="w-200 h-auto object-contain"
          alt="service fourth"
        />
      </div>
      <div class="flex flex-col">
        <h1 class="text-[2rem] italic font-semibold">
          <span class="text-[#00FFB3]">Quellen</span> der Inspiration
        </h1>
        <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
          Hinter jeder beeindruckenden Website steht eine kraftvolle Idee. In der Anfangsphase
          werden die Visionen und Ziele ausgelotet und so der Grundstein für ein kreatives und
          zielführendes Webkonzept gelegt.
        </p>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="py-[4.5rem] px-5 flex items-center text-center">
      <div class="flex flex-col">
        <h1 class="text-[2rem] italic font-semibold">
          <span class="text-[#00FFB3]">Routen</span>planung
        </h1>
        <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
          Mit den definierten Zielen und Anforderungen wird eine klare Roadmap erstellt, die sowohl
          das Nutzererlebnis als auch die technischen Aspekte berücksichtigt und somit eine
          zielgerichtete Entwicklung ermöglicht.
        </p>
      </div>
      <div class="hidden md:block">
        <img
          src="@atoms/svgs/servicesfourthsecond.svg"
          class="w-200 h-auto object-contain"
          alt="service fourth"
        />
      </div>
    </div>

    <div>
      <!-- Section 3 -->
      <div
        class="py-[4.5rem] px-5 items-center overflow-hidden flex text-center flex-col md:flex-row"
      >
        <div class="hidden md:block">
          <img
            src="/images/services5-1.png"
            alt="Visual representation of route planning"
            class="w-200 h-full object-contain"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-[2rem] italic font-semibold">
            Sterne zum <span class="text-[#00FFB3]">Leuchten</span> bringen
          </h1>
          <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
            In dieser Phase kommt unsere kreative und technische Expertise zum Einsatz, um eine
            lebendige und funktionale Website zu gestalten. Hierbei steht die Verbindung von
            ästhetischer Erscheinung und solider technischer Basis im Vordergrund.
          </p>
        </div>
      </div>

      <!-- Section 4 -->
      <div
        class="py-[4.5rem] px-5 items-center overflow-hidden flex text-center flex-col md:flex-row-reverse"
      >
        <div class="hidden md:block">
          <img
            src="/images/services-5-2.png"
            class="w-250 h-auto object-contain"
            alt="service fourth"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-[2rem] italic font-semibold">
            <span class="text-[#00FFB3]">Qualität</span> im Fokus
          </h1>
          <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
            Durch ausgiebige Tests wird sichergestellt, dass Deine Website in allen Bereichen – von
            der Nutzererfahrung bis hin zur Performance und Darstellung auf verschiedenen Endgeräten
            – reibungslos funktioniert. Gezielte Optimierungen gewährleisten hierbei die
            bestmögliche Umsetzung.
          </p>
        </div>
      </div>

      <!-- Section 5 -->
      <div
        class="relative py-[4.5rem] px-5 items-center overflow-hidden flex text-center flex-col md:flex-row"
      >
        <div class="absolute hidden md:block">
          <img src="@atoms/svgs/seoherobg.svg" alt="Background SVG" class="w-[900px] h-[400px]" />
        </div>
        <div class="hidden md:block z-10">
          <img
            src="@atoms/svgs/servicesfifth.svg"
            class="w-200 h-auto object-contain"
            alt="service fifth"
          />
        </div>
        <div class="flex flex-col z-10">
          <h1 class="text-[2rem] italic font-semibold">
            <span class="text-[#00FFB3]">Live-</span>Schaltung
            <span class="text-[#00FFB3]">[WIP]</span>
          </h1>
          <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
            Nach sorgfältiger Vorbereitung und Optimierung geht sie live und nimmt ihren Platz in
            der digitalen Landschaft ein. Von diesem Moment an beginnt sie, die Nutzer zu
            begeistern, wichtige Verbindungen zu knüpfen und Deine Botschaft effektiv zu
            kommunizieren.
          </p>
        </div>
      </div>

      <!-- Section 6 -->
      <div
        class="py-[4.5rem] px-5 items-center overflow-hidden flex text-center flex-col md:flex-row-reverse"
      >
        <div class="hidden md:block">
          <img
            src="/images/services-5-d-2.png"
            class="w-200 h-auto object-contain"
            alt="service sixth"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-[2rem] italic font-semibold">
            Perfektion durch <span class="text-[#00FFB3]">Iteration</span>
          </h1>
          <p class="mt-6 text-[0.9rem] px-10 font-semilight leading-relaxed">
            Mit der erfolgreichen Veröffentlichung muss die Reise nicht enden. Kontinuierliche
            Optimierungen und datenbasierte Analysen können dafür sorgen, dass Deine Website stets
            eine hohe Sichtbarkeit und Leistungsfähigkeit aufweist, um ihr Wachstum weiter
            voranzutreiben.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import servicesMainBg from '@atoms/svgs/services-mainbg.svg?raw'
  import servicesfourth from '@atoms/svgs/servicesfourth.svg?raw'
  import servicesfourth2 from '@atoms/svgs/servicesfourthsecond.svg?raw'
  import svgContent from '@atoms/svgs/servicesfifth.svg?raw'
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useGSAP } from '../../composables/useGSAP'

  const { gsap, cleanup } = useGSAP()

  const servicesFourthContainer = ref<HTMLElement | null>(null)
  const servicesFourth2Container = ref<HTMLElement | null>(null)
  const svgContainer = ref<HTMLElement | null>(null)
  const burstCanvas = ref<HTMLCanvasElement | null>(null)

  let ctx: CanvasRenderingContext2D | null = null
  let rafId: number
  let last = 0
  let particles: any[] = []
  let rocket: any, svgburst: any, rocketTl: gsap.core.Timeline
  let observer: IntersectionObserver | null = null
  let fadeObserver: IntersectionObserver | null = null

  const fitCanvas = (canvas: HTMLCanvasElement) => {
    const ratio = window.devicePixelRatio || 1
    canvas.width = canvas.clientWidth * ratio
    canvas.height = canvas.clientHeight * ratio
    ctx?.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  const spawn = (dt: number, canvas: HTMLCanvasElement) => {
    const perSec = 18
    let toSpawn = perSec * dt
    while (toSpawn-- > 0) {
      particles.push({
        x: canvas.width / 2 / devicePixelRatio,
        y: (canvas.height * 0.7) / devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 1 + Math.random() * 0.5,
        life: 600 + Math.random() * 300,
        age: 0,
        r: 2 + Math.random() * 2
      })
    }
  }

  const tick = (t: number, canvas: HTMLCanvasElement) => {
    const dt = t - last
    last = t
    spawn(dt / 1000, canvas)
    ctx?.clearRect(0, 0, canvas.width, canvas.height)

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
      const g = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6)
      g.addColorStop(0, `rgba(80,255,160,${0.6 * alpha})`)
      g.addColorStop(1, 'transparent')
      ctx!.fillStyle = g
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, r * 6, 0, Math.PI * 2)
      ctx!.fill()
      ctx!.fillStyle = `rgba(120,255,180,${0.8 * alpha})`
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx!.fill()
    }
    rafId = requestAnimationFrame(time => tick(time, canvas))
  }

  const initAnimations = () => {
    const svgEl = svgContainer.value
    if (!svgEl) return
    const getEl = (id: string) => svgEl.querySelector(`#${id}`)
    rocket = getEl('rocket')
    svgburst = getEl('burst')
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
            rafId = requestAnimationFrame(time => tick(time, canvas))
          }
        }
      })
      .to(rocket, {
        y: '-=1',
        rotation: '+=1',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 1.2
      })
  }

  const pulseStroke = (el: SVGElement | null, from: string, to: string) => {
    if (!el) return
    el.removeAttribute('style')
    el.setAttribute('stroke-width', '2.5')
    el.setAttribute('stroke', from)
    gsap.to(el, {
      stroke: to,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }

  const setupObserver = () => {
    const container = svgContainer.value
    if (!container) return
    observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setTimeout(() => rocketTl.restart(true), 400)
        } else {
          rocketTl.pause()
          gsap.to(rocket, {
            y: 100,
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
              svgburst.style.opacity = '0'
            }
          })
          cancelAnimationFrame(rafId)
          ctx?.clearRect(0, 0, burstCanvas.value?.width || 0, burstCanvas.value?.height || 0)
          particles = []
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(container)
  }

  onMounted(() => {
    initAnimations()
    setupObserver()
    const plant = servicesFourthContainer.value?.querySelector('#Plant') as SVGElement | null
    const shadow1 = servicesFourthContainer.value?.querySelector('#Shadow') as SVGElement | null
    const shadow2 = servicesFourth2Container.value?.querySelector('#Shadow') as SVGElement | null
    if (plant) {
      gsap.to(plant, {
        rotate: 7,
        transformOrigin: 'bottom center',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
    pulseStroke(shadow1, '#38EF61', '#44E5C8')
    pulseStroke(shadow2, '#38EF61', '#44E5C8')
    fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('fade-in', entry.isIntersecting)
          entry.target.classList.toggle('fade-out', !entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )
    document
      .querySelectorAll('.fade-left, .fade-right, .fade-up')
      .forEach(el => fadeObserver!.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    fadeObserver?.disconnect()
    cancelAnimationFrame(rafId)
    cleanup()
  })
</script>

<style scoped>
  .svg-wrapper {
    position: relative;
    height: 100%;
    overflow: visible;
  }

  .svg-wrapper > div {
    display: inline-block;
    transform: translateX(-120px); /* shift svg left */
    vertical-align: top;
  }

  /* ✅ Fade logic */
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

  @media screen and (min-width: 2040px) {
    .scale {
      scale: 1.4;
      margin-left: auto;
      margin-right: auto;
      top: 40rem;
      left: 40rem;
    }
  }
</style>
