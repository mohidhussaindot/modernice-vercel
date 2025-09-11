<template>
  <section class="relative  text-white bg-[#020111]  ">
    <div class="fade-element h-[55.125rem]">
  <div
    class="absolute inset-0 bg-no-repeat bg-[length:100%] "
    style="background-image: url('/images/seo-second-bg.png');"
  ></div>

  <div
    class="absolute p-5 left-[46.3125rem] w-[26.6875rem] h-[27.875rem] top-[0.4375rem] "
    ref="seoquestionmarkone"
    v-html="Seoquestionmark"
    @mouseenter="onQuestionMarksMouseEnter"
    @mouseleave="onQuestionMarksMouseLeave"
  />

  <div class="absolute w-[37.4375rem] h-[18.5rem] top-[5.3125rem] left-[7.125rem] flex flex-col gap-[2rem] fade-left">
    <h1 class="italic font-semibold text-[2.5rem] ">
      <span class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent">
        Fundament des Erfolgs:
      </span><br />
      Warum technische SEO entscheidend ist
    </h1>

    <p class="text-[1.25rem] font-light">
      SEO ist mehr als kurzfristige Taktiken; es ist ein solides <br />
      technisches Fundament, das nachhaltiges Wachstum <br />
      ermöglicht.
    </p>
  </div>

  <div>
    <div class="absolute left-[6.9375rem] w-[25.375rem] h-[24.125rem] top-[28.3125rem] ">
      <div ref="SeoSecondref" class="absolute" v-html="seosecond" />
    </div>

    <div class="absolute font-light text-[1.25rem] w-[37.4375rem] top-[32.5625rem] left-[45.875rem] fade-right">
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

        <div>
          <Button
            class="px-[1.5rem] py-[0.625rem] text-[1.25rem] border border-[#3BB1FF] rounded 
                   hover:bg-[#3BB1FF] transition hover:border-none hover:cursor-pointer 
                   bg-transparent text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] 
                     text-transparent bg-clip-text duration-300 
                     hover:text-white"
            >
              Startbefehl geben
            </span>
          </Button>
        </div>

      </div>
    </div>
  </div>
</section>


<!-- 3rd part -->
<section class="relative overflow-hidden text-white bg-[#020111]">
 <div class="fade-element  h-[41.5625rem] ">
  <div class="absolute fade-left w-[37.4375rem] top-[8.75rem] left-[17.0625rem] flex flex-col gap-[1.5rem] h-[16.25rem]">
    
    <h1 class="italic text-[3.75rem] font-semibold">
      Unser <span class="bg-gradient-to-r to-[#01A3FF] from-[#25CDDA] bg-clip-text text-transparent">Prozess</span>
    </h1>

    <p class="text-[1.125rem] font-light">
      Durch den gezielten Einsatz von datenbasierten Analysen, technischer Expertise und innovativen Ansätzen schaffen wir maßgeschneiderte Lösungen, die deine Online-Präsenz stärken, die Sichtbarkeit erhöhen und letztlich dazu beitragen, deine Geschäftsziele zu erreichen.
    </p>
  </div>

  <div style="background-image: url('/images/seo-third-bg.png');" class="absolute inset-0  w-full bg-[length:100%] top-[15.875rem] bg-no-repeat"></div>
  </div>
</section>



<!-- 4rth part -->

<section class=" relative overflow-hidden text-white bg-[#020111]">
   <div class=" fade-element  h-[51.5rem]">
  <div
    style="background-image: url('/images/seo-fourth-bg.png');"
    class="absolute inset-0 bg-[length:100%] left-[2.875rem] bg-no-repeat"
  ></div>

  <div class="absolute top-[8.125rem] left-[48.75rem]">
    <NuxtImg
      src="/images/seo-fourth.png"
      alt="seo-fourth-image"
      style="width: 30.465rem; height: 28.2281rem;"
    ></NuxtImg>
  </div>

  <div class="absolute w-[31.9375rem] h-[15.125rem] fade-left top-[14.0625rem] left-[7.5rem] flex flex-col gap-[1.25rem]">
    <h1 class="text-[2.5rem] italic font-semibold">Analyse des Ist-Zustands</h1>
    <p class="text-[1.125rem] font-light">
      Bei jeder SEO-Strategie, die wir entwickeln, beginnen wir mit einer gründlichen Analyse des aktuellen Zustands der Website.
      Dabei berücksichtigen wir technische Aspekte, inhaltliche Faktoren und das Nutzerverhalten, um Schwachstellen und Potenziale aufzudecken.
    </p>
  </div>
  </div>
</section>


<!-- 5th part -->
<section class=" relative overflow-hidden text-white bg-[#020111]">
  <div class="fade-element h-[74.5rem] ">
  <div
    style="background-image: url('/images/seo-fifth-bg.png');"
    class="absolute inset-0 bg-[length:100%] left-[2.875rem] bg-no-repeat"
  ></div>

  <div class="absolute left-[1.4375rem] w-[32.9375rem] h-[31.875rem] top-[2.25rem]">
    <div
      ref="SeoFifthref"
      class="absolute"
      v-html="seofifth"
    />
  </div>

  <div class="absolute w-[38.1875rem] fade-right h-[17.25rem] top-[6.75rem] left-[45.625rem] flex flex-col gap-[1.25rem]">
    <h1 class="text-[2.5rem] italic font-semibold">Technische SEO-Optimierung</h1>
    <p class="text-[1.125rem] font-light">
      Egal ob bei der Gestaltung einer neuen Website oder der Verbesserung einer bestehenden,
      die technische SEO steht im Zentrum unserer Arbeit. Bei neuen Projekten 
      sorgen wir von Anfang an für eine optimale Suchmaschinenfreundlichkeit. 
      Bei der Optimierung bestehender Websites verbessern wir die technische
      Grundlage, um die Sichtbarkeit in den Suchergebnissen zu erhöhen.
    </p>
  </div>

  <div class="absolute top-[41.375rem] left-[47.4375rem]">
    <NuxtImg
      src="/images/seo-fifth-second.png"
      alt="seo-fifth-second-image"
      style="width: 30.9375rem; height: 25.6875rem;"
    ></NuxtImg>
  </div>

  <div class="absolute w-[35.75rem] fade-left h-[21.25rem] top-[47.8125rem] left-[8.25rem] flex flex-col gap-[2rem]">
    <h1 class="text-[2.5rem] italic font-semibold">Keyword- und Wettbewerbsanalyse</h1>
    <p class="text-[1.125rem] font-light">
      Im nächsten Schritt identifizieren wir die Schlüsselbegriffe, 
      welche die Zielgruppe zur Suche nach relevanten Produkten oder Dienstleistungen verwendet.
      Parallel dazu analysieren wir die Wettbewerbssituation, um die Marktposition zu 
      verstehen und wirksame Strategien zur Verbesserung der Platzierung zu entwickeln.
    </p>
  </div>
  </div>
</section>

<!-- 6 section -->
<section class="h-[97.3125rem] relative overflow-hidden text-white bg-[#020111]">
<div class=" h-full ">
  <div class="absolute flex flex-col fade-left gap-[2rem] top-[9.8125rem] left-[7.5rem] w-[35.75rem]">
    
    <h1 class="text-[2.5rem] italic font-semibold">Strategieentwicklung</h1>
    <p class="text-[1.125rem] font-light">
      Basierend auf unseren umfangreichen Analysen erstellen wir eine maßgeschneiderte SEO-Strategie, die genau auf die Ziele und das Publikum des Unternehmens zugeschnitten ist. In diesem Stadium legen wir Ziele fest, planen Maßnahmen und definieren KPIs, um den Erfolg unserer Bemühungen messbar zu machen.
    </p>
  </div>

  <NuxtImg
    src="/images/seo-fifth-second.png"
    alt="Strategieentwicklung"
    class="absolute fade-left top-[2.8125rem] left-[49.8125rem] w-[30.9375rem] h-[25.6875rem]"
  />
</div>

<div class=" h-full">
  <div class="absolute flex flex-col fade-right gap-[2rem] top-[39.5rem] left-[7.5rem] w-[35.75rem]">
    <h1 class="text-[2.5rem] italic font-semibold">Umsetzung</h1>
    <p class="text-[1.125rem] font-light">
      Mit der entwickelten Strategie geht es in die Umsetzungsphase. Dabei umfasst unsere Arbeit sowohl technische Optimierungen an der Website als auch die Erstellung von qualitativ hochwertigem Content, der sowohl die Zielgruppe anspricht als auch von den Suchmaschinen positiv bewertet wird.
    </p>
  </div>

  <NuxtImg
    src="/images/seo-fifth-second.png"
    alt="Umsetzung"
    class="absolute fade-right top-[32.5rem] left-[49.8125rem] w-[30.9375rem] h-[25.6875rem]"
  />
</div>
  <div class="absolute flex fade-left flex-col gap-[2rem] top-[69.1875rem] left-[7.5rem] w-[35.75rem]">
    <h1 class="text-[2.5rem] italic font-semibold">Monitoring & Optimierung</h1>
    <p class="text-[1.125rem] font-light">
      Da SEO ein dynamischer Prozess ist, überwachen wir ständig die Performance der Website, analysieren die gewonnenen Daten und nehmen bei Bedarf Anpassungen vor. Durch unser kontinuierliches Monitoring und die gezielte Optimierung stellen wir sicher, dass die Website stets den aktuellen SEO-Best-Practices entspricht und bestmögliche Ergebnisse liefert.
    </p>
  </div>

  <NuxtImg
    src="/images/seo-fifth-second.png"
    alt="Monitoring und Optimierung"
    class="absolute top-[62.25rem] fade-left left-[49.8125rem] w-[30.9375rem] h-[25.6875rem]"
  />
</section>

<!-- that div -->
<div class="relative h-[27.6875rem]  w-full text-white bg-[#020111]">
  <div class="absolute left-[6.4375rem] fade-element top-[2.1875rem] w-[35.75rem] h-[6.375rem]">
    <p class="text-[1.125rem] font-light">
      Durch die Kombination aus Datenanalyse, technischer Expertise und kreativer Arbeit streben wir an, die Online-Präsenz unserer Kunden zu verbessern und deren Geschäftsziele zu erreichen.
    </p>
  </div>
</div>


  <!-- SEO last Get in touch -->
<section class="relative bg-black flex items-center overflow-hidden h-[37.5rem]">

  <div
    class="absolute bg-no-repeat bg-center inset-0 bg-[length:100%]"
    style="background-image: url('/images/seo-footer-bg.png');"
  ></div>

  <div class="absolute w-[53.6875rem] bg-black h-[27.9375rem] left-[18.125rem] border rounded border-[#01A3FF]">
    
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
import Seoquestionmark from '@atoms/svgs/seo-second-first.svg?raw'

const SeoFifthref = ref(null)
const SeoSecondref = ref(null)
const seoquestionmarkone = ref(null)

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
