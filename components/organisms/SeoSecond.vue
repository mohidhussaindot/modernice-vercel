<template>
<section class="relative h-[1082px] overflow-x-hidden text-white bg-[#020111]">
  <!-- Background SVG injected -->
 <div
  class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
  v-html="responsiveBg"
></div>


<div class="relative z-10 flex flex-col px-6 pt-10 gap-20 xl:gap-16 max-w-7xl mx-auto">

    <div class="flex  items-center xl:flex-row gap-10 xl:gap-6">
      <div class="flex flex-col justify-start xl:w-1/2 gap-8 xl:gap-4 fade-left">
        <h1 class="italic font-semibold text-[2.5rem] leading-snug">
          <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
            Fundament des Erfolgs:
          </span><br />
          Warum technische SEO entscheidend ist
        </h1>
        <p class="text-[1.25rem] font-light">
          SEO ist mehr als kurzfristige Taktiken; es ist ein solides<br />
          technisches Fundament, das nachhaltiges Wachstum<br />
          ermöglicht.
        </p>
      </div>

      <div
        class="p-5 xl:w-[26.6875rem] xl:h-[27.875rem]"
        ref="seoquestionmarkone"
        v-html="Seoquestionmark"
        @mouseenter="onQuestionMarksMouseEnter"
        @mouseleave="onQuestionMarksMouseLeave"
      ></div>
    </div>

    <!-- Second Row -->
    <div class="flex xl:flex-row  gap-10 xl:gap-[13.5625rem]">
      <!-- Second Graphic -->
      <div class="xl:w-[25.375rem] xl:h-[24.125rem]" ref="SeoSecondref" v-html="seosecond"></div>

      <!-- Text Block -->
      <div class="font-light text-[1.25rem] flex items-center w-[599px] fade-right">
        <p>
          Die besten SEO-Maßnahmen basieren auf einer starken technischen Infrastruktur,
          die sich leicht anpassen lässt, um aktuellen und zukünftigen
          Suchmaschinenanforderungen gerecht zu werden.
        </p>
      </div>
    </div>

  </div>
</section>



<!-- 2nd part -->
  <section class="relative overflow-hidden text-white  bg-[#020111] h-[52.3125rem]">
  <div class="flex justify-center items-center fade-element h-full">
    <div class="relative p-[0.0625rem] bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] rounded shadow-[0_0_0.9375rem_0.25rem_#25CDDA]">
      
      <div class="h-[38.5rem] p-[2.625rem] w-[56.3125rem] flex flex-col gap-[2rem] bg-[#020111] rounded">
       
        <h1 class="italic text-[3rem] w-[37.5625rem] font-semibold">
          <span class="bg-gradient-to-r to-[#01A3FF] from-[#25CDDA] text-transparent bg-clip-text">
            Kostenfreie
          </span>
          Suchmaschinenoptimierung
        </h1>
        
        <p class="w-[51.0625rem] text-[1.125rem] font-light">
          Für optimale SEO-Ergebnisse muss das technische SEO stets integraler Bestandteil des Webdesign- und Entwicklungsprozesses sein. Es darf nicht als optionales Extra angesehen werden, sondern als Grundpfeiler einer erfolgreichen Webseite.
        </p>

        <p class="w-[51.0625rem] text-[1.125rem] font-light">
          Daher ist die technische SEO ein fundamentaler Teil unserer Website-Design- und -Strategieangebote. Jede von uns gestaltete und entwickelte Webseite profitiert automatisch von einer umfassenden technischen SEO-Optimierung. Hierbei nehmen wir alle Facetten des technischen SEO in den Blick, von der Verbesserung der Website-Geschwindigkeit bis zur effizienten Strukturierung von Daten.
        </p>

        <div
              class="mt-[2rem] inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#01A3FF]  to-[#25CDDA] hover:from-[#25CDDA] hover:to-[#01A3FF]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#01A3FF]  to-[#25CDDA] text-transparent bg-clip-text duration-300"
                  >Website Strategie planen</span
                >
              </Button>
            </div>
      


      </div>
    </div>
  </div>
</section>


<!-- 3rd part -->
<section class="relative overflow-hidden text-white bg-[#020111]">
  <div class="h-[41.5625rem] relative">
    <!-- Background SVG injected -->
    <div
      class="absolute inset-0 w-full h-full pointer-events-none z-0"
      v-html="seothirdpartlines"
    ></div>

    <!-- Text Content -->
    <div class="absolute fade-left w-[37.4375rem] top-[8.75rem]   lg:left-[14.0625rem] xl:left-[17.0625rem]flex flex-col gap-[1.5rem] h-[16.25rem] z-10">
      <h1 class="italic text-[3.75rem] font-semibold">
        Unser <span class="bg-gradient-to-r to-[#01A3FF] from-[#25CDDA] bg-clip-text text-transparent">Prozess</span>
      </h1>

      <p class="text-[1.125rem] font-light">
        Durch den gezielten Einsatz von datenbasierten Analysen, technischer Expertise und innovativen Ansätzen schaffen wir maßgeschneiderte Lösungen, die deine Online-Präsenz stärken, die Sichtbarkeit erhöhen und letztlich dazu beitragen, deine Geschäftsziele zu erreichen.
      </p>
    </div>
  </div>
</section>




<section class="relative overflow-hidden 2xl:h-[2200.495361328125px] lg:h-[2050.495361328125px] text-white bg-[#020111] bg-no-repeat bg-[length:100%]">

    <!-- Shared SVG Background -->
<div class="absolute inset-0 pointer-events-none h-full left-[100px] z-0 w-full" v-html="svgmainlines"></div>

  <div class="relative z-10 flex flex-col 2xl:gap-[270px]  lg:gap-[200px]  pt-24 pb-16 max-w-[1440px] mx-auto">

      <!-- First Row: Analyse des Ist-Zustands -->
      <div class="flex flex-col lg:flex-row items-center  gap-[400px]">
        <div class="w-full xl:w-[32rem] fade-left flex flex-col gap-5">
          <h1 class="text-[2.5rem] italic font-semibold">Analyse des Ist-Zustands</h1>
          <p class="text-[1.125rem] font-light">
            Bei jeder SEO-Strategie, die wir entwickeln, beginnen wir mit einer gründlichen Analyse des aktuellen
            Zustands der Website. Dabei berücksichtigen wir technische Aspekte, inhaltliche Faktoren und das
            Nutzerverhalten, um Schwachstellen und Potenziale aufzudecken.
          </p>
        </div>

        <div class="w-full xl:w-auto">
          <NuxtImg
            src="/images/seo-fourth.png"
            alt="seo-fourth-image"
            class="w-[30.465rem] h-[28.2281rem] object-contain"
          />
        </div>
      </div>

      <!-- Second Row: Technische SEO-Optimierung -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div class="w-full max-w-[32.9375rem]" ref="SeoFifthref" v-html="seofifth"></div>

        <div class="w-full max-w-[38.1875rem] fade-right flex flex-col gap-5">
          <h1 class="text-[2.5rem] italic font-semibold">Technische SEO-Optimierung</h1>
          <p class="text-[1.125rem] font-light">
            Egal ob bei der Gestaltung einer neuen Website oder der Verbesserung einer bestehenden,
            die technische SEO steht im Zentrum unserer Arbeit. Bei neuen Projekten 
            sorgen wir von Anfang an für eine optimale Suchmaschinenfreundlichkeit. 
            Bei der Optimierung bestehender Websites verbessern wir die technische
            Grundlage, um die Sichtbarkeit in den Suchergebnissen zu erhöhen.
          </p>
        </div>
      </div>

      <!-- Third Row: Keyword- und Wettbewerbsanalyse -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div class="w-full max-w-[35.75rem] fade-right flex flex-col gap-8">
          <h1 class="text-[2.5rem] italic font-semibold">Keyword- und Wettbewerbsanalyse</h1>
          <p class="text-[1.125rem] font-light">
            Im nächsten Schritt identifizieren wir die Schlüsselbegriffe, 
            welche die Zielgruppe zur Suche nach relevanten Produkten oder Dienstleistungen verwendet.
            Parallel dazu analysieren wir die Wettbewerbssituation, um die Marktposition zu 
            verstehen und wirksame Strategien zur Verbesserung der Platzierung zu entwickeln.
          </p>
        </div>

        <div class="w-full max-w-[30.9375rem] ">
          <NuxtImg
            src="/images/seo-fifth-second.png"
            alt="seo-fifth-second-image"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  </section>



<!-- 6th Section -->
<section class="min-h-screen overflow-hidden text-white pt-5 bg-[#020111]">
  <div class="flex flex-col gap-24 max-w-7xl mx-auto px-6">

    <!-- Row 1: Text left / Image right -->
    <div class="flex flex-row justify-between items-center gap-12 fade-left">
      <div class="w-full max-w-[35.75rem] flex flex-col gap-8">
        <h1 class="text-[2.5rem] italic font-semibold">Strategieentwicklung</h1>
        <p class="text-[1.125rem] font-light">
          Basierend auf unseren umfangreichen Analysen erstellen wir eine maßgeschneiderte SEO-Strategie,
          die genau auf die Ziele und das Publikum des Unternehmens zugeschnitten ist. In diesem Stadium
          legen wir Ziele fest, planen Maßnahmen und definieren KPIs, um den Erfolg unserer Bemühungen
          messbar zu machen.
        </p>
      </div>
      <NuxtImg
        src="/images/seo-fifth-second.png"
        alt="Strategieentwicklung"
        class="w-[30.9375rem] h-[25.6875rem] object-contain fade-left"
      />
    </div>

    <div class="flex flex-row justify-between items-center gap-12 fade-right">
      <div class="w-full max-w-[35.75rem] flex flex-col gap-8">
        <h1 class="text-[2.5rem] italic font-semibold">Umsetzung</h1>
        <p class="text-[1.125rem] font-light">
          Mit der entwickelten Strategie geht es in die Umsetzungsphase. Dabei umfasst unsere Arbeit sowohl
          technische Optimierungen an der Website als auch die Erstellung von qualitativ hochwertigem Content,
          der sowohl die Zielgruppe anspricht als auch von den Suchmaschinen positiv bewertet wird.
        </p>
      </div>
      <NuxtImg
        src="/images/seo-fifth-second.png"
        alt="Umsetzung"
        class="w-[30.9375rem] h-[25.6875rem] object-contain fade-right"
      />
    </div>

    <div class="flex flex-row justify-between items-center gap-12 fade-left">
      <div class="w-full max-w-[35.75rem] flex flex-col gap-8">
        <h1 class="text-[2.5rem] italic font-semibold">Monitoring & Optimierung</h1>
        <p class="text-[1.125rem] font-light">
          Da SEO ein dynamischer Prozess ist, überwachen wir ständig die Performance der Website,
          analysieren die gewonnenen Daten und nehmen bei Bedarf Anpassungen vor. Durch unser kontinuierliches
          Monitoring und die gezielte Optimierung stellen wir sicher, dass die Website stets den aktuellen
          SEO-Best-Practices entspricht und bestmögliche Ergebnisse liefert.
        </p>
      </div>
      <NuxtImg
        src="/images/seo-fifth-second.png"
        alt="Monitoring und Optimierung"
        class="w-[30.9375rem] h-[25.6875rem] object-contain fade-left"
      />
    </div>

  </div>
</section>


<div class="relative h-[27.6875rem] w-full text-white bg-[#020111]">
  <div class="flex lg:items-center max-w-7xl pt-10 mx-auto xl:justify-start xl:items-start lg:justify-center h-full">
    <div class="fade-element w-full max-w-[35.75rem] px-6 text-center lg:text-left">
      <p class="text-[1.125rem] font-light">
        Durch die Kombination aus Datenanalyse, technischer Expertise und kreativer Arbeit streben wir an,
        die Online-Präsenz unserer Kunden zu verbessern und deren Geschäftsziele zu erreichen.
      </p>
    </div>
  </div>
</div>

<section class="relative bg-black lg:flex lg:justify-center xl:flex md:hidden xl:justify-center items-center overflow-hidden h-[37.5rem]">

  <div
    class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
    style="background-image: url('/images/seo-footer-bg.png');"
  ></div>

  <div class="absolute lg:w-[53.6875rem] bg-black 2xl:w-[56rem] 2xl:h-[32rem] lg:h-[27.9375rem] flex justify-center  border rounded border-[#01A3FF]">
    
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
        <h2 class="text-[2rem] italic font-bold bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
          hello@modernice.design
        </h2>
      </span>

      <span>
        <p class="text-[1.125rem] mb-[0.625rem]">Or talk to us directly</p>
        <h2 class="text-[2rem] bg-gradient-to-r from-[#FCD265] to-[#E56731] bg-clip-text text-transparent italic font-bold">
          Schedule a Call
        </h2>
      </span>

    </div>
  </div>
</section>



</template>

<script setup>
import Button from '@atoms/Button.vue'
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import seofifth from '@atoms/svgs/seo-fifth.svg?raw'
import seosecond from '@atoms/svgs/seo-second.svg?raw'
import seosecondbg from '@atoms/svgs/seosecondbg.svg?raw'
import Seoquestionmark from '@atoms/svgs/seo-second-first.svg?raw'
import svgmainlines from '@atoms/svgs/seomainlines.svg?raw'
import rawLines from '@atoms/svgs/seo3rdpartlines.svg?raw'


const SeoFifthref = ref(null)
const SeoSecondref = ref(null)
const seoquestionmarkone = ref(null)

const responsiveBg = seosecondbg
  .replace(/width="[^"]*"/, 'width="100%"')
  .replace(/height="[^"]*"/, 'height="100%"')
  .replace(
    /<svg([^>]*)>/,
    '<svg$1 preserveAspectRatio="xMidYMid slice">'
  )

const seothirdpartlines = rawLines
  .replace(/width="[^"]*"/, 'width="100%"')
  .replace(/height="[^"]*"/, 'height="100%"')
  .replace(
    /<svg([^>]*)>/,
    '<svg$1 preserveAspectRatio="xMidYMid slice">'
  )



let observer

function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

function onQuestionMarksMouseEnter() {
  const elements = seoquestionmarkone.value.querySelectorAll('.question-mark')
  elements.forEach((el) => {
    const randomX = randomRange(-10, 10)
    const randomY = randomRange(-10, 10)
    el.style.transition = 'transform 0.5s ease'
    el.style.transform = `translate(${randomX}px, ${randomY}px)`
  })
}

function onQuestionMarksMouseLeave() {
  const elements = seoquestionmarkone.value.querySelectorAll('.question-mark')
  elements.forEach((el) => {
    el.style.transition = 'transform 0.5s ease'
    el.style.transform = `translate(0, 0)`
  })
}

onMounted(async () => {
  const elements = document.querySelectorAll(
    '.fade-element, .fade-top, .fade-left, .fade-right'
  )

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
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

  elements.forEach((el) => observer.observe(el))

  await nextTick()

  const root2 = SeoSecondref.value
  if (root2) {
    const idselector1 = root2.querySelector('#triangle1')
    const idselector2 = root2.querySelector('#triangle2')
    const idselector3 = root2.querySelector('#triangle3')

    if (idselector1 && idselector2 && idselector3) {
      const lowOpacity = 0.2
      idselector1.style.opacity = lowOpacity
      idselector2.style.opacity = lowOpacity
      idselector3.style.opacity = lowOpacity

      const glowUp = async () => {
        idselector3.style.opacity = '1'
        await new Promise((r) => setTimeout(r, 400))

        idselector2.style.opacity = '1'
        await new Promise((r) => setTimeout(r, 400))

        idselector1.style.opacity = '1'
        await new Promise((r) => setTimeout(r, 400))

        idselector3.style.opacity = lowOpacity
        idselector2.style.opacity = lowOpacity
        idselector1.style.opacity = lowOpacity

        await new Promise((r) => setTimeout(r, 400))

        glowUp()
      }
      glowUp()
    }
  }

  const root = SeoFifthref.value
  if (root) {
    const seoGroup = root.querySelector('#SEO')
    if (seoGroup) {
      seoGroup.style.transition = 'filter 0.1s ease'

      const flicker = () => {
        seoGroup.style.filter = 'brightness(1000%)'
        setTimeout(() => {
          seoGroup.style.filter = 'none'
        }, 100)
      }

      const startFlickerLoop = () => {
        const delay = Math.random() * 3000 + 2000
        setTimeout(() => {
          flicker()
          startFlickerLoop()
        }, delay)
      }

      startFlickerLoop()
    }
  }

  if (seoquestionmarkone.value) {
    const questionMarks = seoquestionmarkone.value.querySelectorAll('g[id^="Question Mark"]')
    questionMarks.forEach((el) => {
      el.classList.add('question-mark')
    })
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.fade-element,
.fade-left,
.fade-right,
.fade-top {
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-element { transform: translateY(30px); }
.fade-top     { transform: translateY(-30px); }
.fade-left    { transform: translateX(-30px); }
.fade-right   { transform: translateX(30px); }

.fade-in {
  opacity: 1 !important;
  transform: translateX(0) translateY(0) !important;
}

.fade-out.fade-element { transform: translateY(30px); }
.fade-out.fade-top     { transform: translateY(-30px); }
.fade-out.fade-left    { transform: translateX(-30px); }
.fade-out.fade-right   { transform: translateX(30px); }

.fade-out {
  opacity: 0 !important;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
</style>
