<template>
  <div class="text-white bg-[#020111]">
    <!-- First Part -->
    <div
      ref="firstPart"
      :class="[isFirstPartVisible ? 'fade-in' : 'fade-out']"
      class="relative w-full overflow-hidden"
    >
      <div class="w-full" v-html="bghero"></div>
      <div
        ref="stripesDiv"
        class="absolute inset-0 pointer-events-none z-10"
        v-html="stripessvg"
      ></div>

      <div class="flex justify-center">
        <div
          class="absolute z-30 inset-0 flex xl:pt-[290px] lg:pt-[180px] pl-4 sm:pl-6 md:pl-[3rem] lg:pl-[5rem] xl:pl-[7.1875rem]"
        >
          <div
            class="text-white flex flex-col w-full max-w-none sm:max-w-[32rem] md:max-w-[29rem] xl:max-w-[34.875rem]"
          >
            <h1
              class="font-bold leading-tight text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.375rem] 2xl:text-[4.5rem] w-full xl:w-[34.0625rem]"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[#5CCEFF] via-[#B75CFF] to-[#FF5CDE]"
              >
                Entdecke<br />Neue Horizonte
              </span>
            </h1>

            <p
              class="mt-[1.5rem] font-light leading-relaxed text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.5rem] w-full xl:w-[34.875rem]"
            >
              Kreatives Webdesign, meisterhafte Softwareentwicklung und
              bahnbrechende AI-Technologien, die dein Geschäft auf die
              Überholspur bringen.
            </p>

            <div
              class="mt-[2rem] inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] hover:from-[#6BE0FF] hover:to-[#3BB1FF]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text duration-300"
                  >Erzähl mir mehr.</span
                >
              </Button>
            </div>
          </div>
       <div class="float-moon w-full" v-html="moonSVGRaw"></div>

        </div>
      </div>
    </div>

    <!-- Second Part: City -->
    <div
      ref="cityRef"
      :class="[
        'relative text-white overflow-hidden w-full grid place-items-center px-1 sm:px-1.5 transition-opacity duration-700',
      
      ]"
    >
      <div class="w-full max-w-[65.9375rem]">
      <div
  ref="cityImage"
  class="relative w-full  xl:h-[61rem] lg:h-[50rem] bg-no-repeat bg-contain bg-center bg-[url('/first-three-sect-img/city.png')] transition-opacity duration-1000 ease-in-out image-fade"
>

          <div class="absolute inset-0 grid place-items-center">
            <div
              ref="textContent"
              class=" items-center text-center flex flex-col  px-0.125 sm:px-0.25 max-w-full opacity-0"
            >
              <h1
                class="text-[1.25rem]  sm:text-[1.5rem]   2xl:text-[3.45rem] lg:text-[3rem] font-bold mb-[0.5rem] leading-snug"
              >
                KI-gesteuerte Geschäftslösungen
              </h1>
              <div class="mx-auto grid ">
                <p
                  class="text-[0.95rem]  2xl:text-[1.2rem] sm:text-[1.05rem] md:text-[1.125rem] xl:max-w-[50.25rem]  lg:w-[800px] lg:text-[1rem]"
                >
                  Die Zukunft des Geschäfts liegt in der Künstlichen Intelligenz
                  (KI), Großen Sprachmodellen (LLMs) und Maschinellem Lernen
                  (ML). Diese Technologien verändern die Art und Weise, wie wir
                  arbeiten und wachsen.
                </p>
                   <div
              class=" inline-block mx-auto mt-[2rem]  hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#3BE8E8]  to-[#AFE639] hover:from-[#AFE639] hover:to-[#3BE8E8]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#3BE8E8]  to-[#AFE639] text-transparent bg-clip-text duration-300"
                  >Prozessoptimierung durch KI</span
                >
              </Button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      ref="sectionRef"
      :class="[
        'flex 2xl:mt-[-10rem] xl:mt-[-15rem] overflow-visible xl:px-[7.1875rem] px-4  md:pl-10  gap-12 md:gap-0 lg:gap-0 transition-opacity duration-700 relative z-20',
        fadeClassSection,
      ]"
    >
      <div
        class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-full xl:min-w-[500px] lg:w-[597px]"
      >
        <h1
          class="font-semibold italic text-[1.75rem] sm:text-[2.125rem] md:text-[2.375rem] lg:text-[2.625rem] leading-tight"
        >
          Innovation <br />
          durch Design und Technologie
        </h1>
        <p
          class="font-light  2xl:text-[1.2rem]  lg:text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem]"
        >
          In einer erfolgreichen Web-Lösung verschmelzen Design und Entwicklung
          zu einem harmonischen Ganzen. Die nahtlose Integration von Frontend
          und Backend, ergänzt durch den Einsatz modernster Technologien wie
          Künstlicher Intelligenz, Großen Sprachmodellen (LLM) und Machine
          Learning, ermöglicht die Schaffung von Produkten, die den Horizont des
          Möglichen erweitern und das Nutzererlebnis auf ein ungekanntes Niveau
          heben.
        </p>
         <div
              class=" inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#FFE501]  to-[#FFA901] hover:from-[#FFA901] hover:to-[#FFE501]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#FFA901]  to-[#FFE501] text-transparent bg-clip-text duration-300"
                  >Schaffe Außergewöhnliches</span
                >
              </Button>
            </div>
          </div>
      <div class="w-full flex justify-center items-center">
        <img
          src="/images/rocketmoon.png"
          alt="Rocket Moon"
          class="xl:w-[650.4355025557797px] 2xl:w-[750.4355025557797px]  w-full h-full right-left object-contain select-none pointer-events-none"
        />
      </div>
    </div>

    <div
      ref="ctaSectionRef"
      :class="[
      `cta-section mt-[-10rem] relative h-[69.625rem] overflow-hidden w-full`,
      fadecta]"

    >
      <div
        class="absolute inset-0 flex justify-center pt-[5.5%] pl-[10%] pointer-events-none select-none z-0"
        style="transform: scale(3) rotate(2.9deg); transform-origin: center"
        v-html="bglines"
      ></div>

      <div class="relative mx-auto max-w-7xl w-full z-10">
        <div class="relative flex justify-center items-center">
          <div
            class="relative z-10 md:top-[19.438rem]  xl:top-[23.438rem] 2xl:top-[25.438rem]  flex flex-col gap-[1.5rem] xl:w-[37.125rem] lg:w-[30rem] max-h-[25.375rem]"
          >
            <h2
              class="font-bold italic text-white leading-tight text-[2.25rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[2.2rem] 2xl:text-[3rem] xl:text-[2.7rem]"
            >
              Sei der Wandel, den du in deiner Branche sehen möchtest.
            </h2>

            <p
              class="font-light   2xl:text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.24rem]"
            >
              Wir transformieren Daten in Einblicke, Herausforderungen in
              Chancen. Mit unserer Strategie werden Künstliche Intelligenz und
              deine Ambitionen zu treibenden Kräften. Lass die Zukunft nicht
              warten.
            </p>

             <div
              class=" inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#AFE639]  to-[#3BE8E8] hover:from-[#3BE8E8] hover:to-[#AFE639]"
            >
              <Button
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#AFE639]  to-[#3BE8E8] text-transparent bg-clip-text duration-300"
                  >KI-Beratung</span
                >
              </Button>
            </div>
          </div>

          <div
            class="absolute md:w-[350.5314333374696px] md:pt-10 2xl:pt-4 xl:pt-2 xl:w-[534.5314333374696px] right-0 top-0 pointer-events-none z-10 spaceship-wrapper"
            style="will-change: transform"
            v-html="rocket"
          ></div>
        </div>
      </div>
    </div>

    <!-- fourth section -->
    <div
  ref="cockpitRef"
  :class="['cockpit-section relative w-full flex items-center justify-center overflow-hidden', fadeClassCockpit]"
>

      <div
        class="relative w-full max-w-full aspect-[1437/1540] flex items-center justify-center"
      >
        <div
          class="cockpit-bg absolute inset-0 pointer-events-none select-none will-change-transform h-[1557px]"
          v-html="cockpit"
        ></div>
        <div
          ref="warpFxRef"
          class="warpfx absolute inset-0 z-30 pointer-events-none will-change-transform"
        ></div>
        <div
          ref="lightspeedRef"
          class="lightspeed absolute inset-0 will-change-transform"
        ></div>

        <div
          ref="contentWrapperRef"
          class="content-wrapper  absolute mx-auto w-[72.9375rem] flex top-[374px]"
        >
          <div
            class="flex justify-center gap-6 md:gap-10 lg:gap-14 w-full px-4"
          >
            <div class="flex-shrink-0">
              <NuxtImg
                src="/images/Hero - Illustration.svg"
                alt="Illustrative cockpit interface card"
                class="cockpit-card w-[7rem] h-[6rem] md:w-[9rem] md:h-[7rem] lg:w-[11rem] lg:h-[9rem] xl:w-[13.43rem] xl:h-[12.32rem] object-contain drop-shadow-xl will-change-transform"
              />
            </div>

            <div
              class="cockpit-text flex flex-col gap-4 text-left max-w-[26rem] will-change-transform"
            >
              <h1
                class="text-white italic font-semibold leading-tight text-base sm:text-lg md:text-xl lg:text-xl xl:text-3xl"
              >
                Ready to take your Online Presence to the next level?
              </h1>
              <p
                class="text-white font-light text-xs sm:text-sm md:text-base lg:text-sm leading-relaxed"
              >
                We'll work with you to plan and create a website that aligns
                with your business goals and resonates with your target
                audience. Only if we become friends of course!
              </p>

            <div
              class=" inline-block hover:scale-105 transition w-fit rounded-[0.625rem] p-[0.125rem] bg-gradient-to-r from-[#38EF61]  to-[#44E5C8] hover:from-[#44E5C8] hover:to-[#38EF61]"
            >
              <Button
              @click="handleClick"
                class="px-[1.5rem] py-[0.625rem] text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1.25rem] 2xl:text-[1.45rem] rounded-[0.625rem] bg-black bg-opacity-90 transition hover:cursor-pointer text-white hover:text-white"
              >
                <span
                  class="bg-gradient-to-r from-[#38EF61]  to-[#44E5C8] text-transparent bg-clip-text duration-300"
                  >Get a Website Strategy</span
                >
              </Button>
            </div>
          </div>

          </div>
        </div>
      </div>

      <div
        ref="blackoutRef"
        class="blackout absolute inset-0 bg-black z-40 pointer-events-none opacity-0"
      />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
  defineEmits,
} from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "@atoms/Button.vue";
import moonSVGRaw from "@atoms/svgs/rocket-moon-hero.svg?raw";
import stripessvg from "@atoms/svgs/herosectionstripes.svg?raw";
import bghero from "@atoms/svgs/bghero.svg?raw";
import rocket from "@atoms/svgs/leftsectionsvg.svg?raw";
import bglines from "@atoms/svgs/Lines.svg?raw";
import cockpit from "@atoms/svgs/cockpit.svg?raw";

gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(["show-services"]);

const firstPart = ref(null);
const stripesDiv = ref(null);
const cityRef = ref(null);
const cityImage = ref(null);
const textContent = ref(null);
const sectionRef = ref(null);
const ctaSectionRef = ref(null);
const cockpitRef = ref(null);
const contentWrapperRef = ref(null);
const blackoutRef = ref(null);
const warpFxRef = ref(null);
const lightspeedRef = ref(null);

// Reactive states for fade classes
const isFirstPartVisible = ref(true);
const isCityVisible = ref(true);
const isSectionVisible = ref(true);
const isCTAVisible = ref(false);
const isCockpitVisible = ref(true);

const fadeClassCockpit = computed(() =>
  isCockpitVisible.value ? "fade-in" : "fade-out"
);

const fadeClassSection = computed(() =>
  isSectionVisible.value ? "fade-in" : "fade-out"
);

const fadecta = computed(() =>
  isCTAVisible.value ? "fade-in" : "fade-out"
);


let observers = [];

onMounted(() => {
  if (firstPart.value && stripesDiv.value) {
    const vector343 =
      stripesDiv.value.querySelector("#Vector\\ 343") ||
      stripesDiv.value.querySelector("#Vector343");
    if (vector343) {
      const vectorObserver = new IntersectionObserver(
        ([entry]) => {
          isFirstPartVisible.value = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      vectorObserver.observe(vector343);
      observers.push(vectorObserver);
    }
  }

  // City Section: Fade + GSAP Animations
  if (cityRef.value && cityImage.value && textContent.value) {
    const cssFadeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) cityImage.value.classList.add("opacity-100");
      },
      { threshold: 0.01 }
    );
    cssFadeObserver.observe(cityImage.value);
    observers.push(cssFadeObserver);

    gsap.fromTo(
      cityImage.value,
      { scale: 0.86 },
      {
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cityImage.value,
          start: "top bottom",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      textContent.value,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cityImage.value,
          start: "top 23%",
          toggleActions: "play none none reverse",
        },
      }
    );
gsap.to(cityRef.value, {
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: cityRef.value,
    start: "bottom 60%", // when the bottom of element hits 60% of viewport
    end: "bottom 100%",   // fully gone when bottom hits 90% of viewport
    scrub: true,
  },
});


 const observer = new IntersectionObserver(
    ([entry]) => {
      isCTAVisible.value = entry.isIntersecting;
    },
    {
      threshold: 0.3,
    }
  );
  if (ctaSectionRef.value) observer.observe(ctaSectionRef.value);


    const fadeObserver = new IntersectionObserver(
      ([entry]) => {
        isCityVisible.value = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    fadeObserver.observe(cityRef.value);
    observers.push(fadeObserver);
  }

  // Section fade in/out
  if (sectionRef.value) {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        isSectionVisible.value = entry.isIntersecting;
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px -100px 0px",
      }
    );
    sectionObserver.observe(sectionRef.value);
    observers.push(sectionObserver);
  }

  if (cockpitRef.value) {
  const cockpitObserver = new IntersectionObserver(
    ([entry]) => {
      isCockpitVisible.value = entry.isIntersecting;
    },
    {
      threshold: 0.1,
      rootMargin: "-100px 0px -100px 0px", // adjust sensitivity if needed
    }
  );
  cockpitObserver.observe(cockpitRef.value);
  observers.push(cockpitObserver);
}





  if (ctaSectionRef.value) {
    const section = ctaSectionRef.value;
    const spaceship = section.querySelector(".spaceship-wrapper");
    if (spaceship) {
      gsap.set(spaceship, { opacity: 1, x: 0, y: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const x = -200 * self.progress;
          const y = 100 * self.progress;
          gsap.to(spaceship, {
            x,
            y,
            ease: "none",
            overwrite: "auto",
            duration: 0.1,
          });
        },
      });
    }
  }

  nextTick(() => {
    const cockpitEl = cockpitRef.value;
    const contentWrapper = contentWrapperRef.value;
    if (!cockpitEl || !contentWrapper) return;

    const bg = cockpitEl.querySelector(".cockpit-bg");
    const textContentEl = cockpitEl.querySelector(".cockpit-text");
    const card = cockpitEl.querySelector(".cockpit-card");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentWrapper,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      })
      .fromTo(
        bg,
        { scale: 1 },
        { scale: 1.15, transformOrigin: "center center", ease: "none" },
        0
      )
      .fromTo(
        [textContentEl, card],
        { scale: 0.9, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out" },
        0
      );
  });
});

onUnmounted(() => {
  observers.forEach((obs) => obs.disconnect());
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

const handleClick = () => {
  const cockpitEl = cockpitRef.value;
  const blackout = blackoutRef.value;
  const warpFx = warpFxRef.value;
  const lightspeed = lightspeedRef.value;
  if (!cockpitEl) return;

  const originX = cockpitEl.offsetWidth / 2;
  const originY = cockpitEl.offsetHeight / 2;

  const bg = cockpitEl.querySelector(".cockpit-bg");
  const card = cockpitEl.querySelector(".cockpit-card");
  const text = cockpitEl.querySelector(".cockpit-text");

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  tl.to(cockpitEl, {
    scale: 1.4,
    transformOrigin: `${originX}px ${originY}px`,
    duration: 2,
    force3D: true,
  })
    .to(cockpitEl, { scale: 1.4, duration: 1 })
    .to(cockpitEl, { scale: 1.7, duration: 2, ease: "power3.inOut" })
    .to([cockpitEl, bg, card, text], {
      scale: 0,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.out",
    })
    .add(() => {
      emit("show-services");
    }, "+=0.1");
};
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
.float-moon {
  animation: float 3s ease-in-out infinite;
  margin-top: -80px;
  
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
}
.fade-out {
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.cockpit-section {
  perspective: 2000px;
}

.cockpit-bg {
  transition: transform 0.8s ease-out;
}

.cockpit-card {
  will-change: transform, opacity;
}

.cockpit-text {
  will-change: transform, opacity;
}

.spaceship-wrapper {
  will-change: transform;
}

.image-fade {
  transition: opacity 1s ease-in-out;
}

@keyframes floatAndRotate {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(5px, 3px, 0) rotate(4deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}

.right-left {
  animation: floatAndRotate 3s ease-in-out infinite;
  display: inline-block;
  will-change: transform;
  transform-origin: center center;
}

/* Base (Mobile) */
.content-wrapper {
  top: 300px;
}

/* Small devices (≥640px) */

/* Large devices (≥1024px) */
@media (min-width: 1024px) {
  .content-wrapper {
    top: 260px;
  }
}

@media (min-width: 1060px) {
  .content-wrapper {
    top: 280px;
  }
}

@media (min-width: 1130px) {
  .content-wrapper {
    top: 300px;
  }
}

@media (min-width: 1120px) {
  .content-wrapper {
    top: 325px;
  }
}

@media (min-width: 1240px) {
  .content-wrapper {
    top: 350px;
  }
}

/* Extra Large devices (≥1280px) */
@media (min-width: 1280px) {
  .content-wrapper {
    top: 350px;
  }
}

@media (min-width: 1320px) {
  .content-wrapper {
    top: 370px;
  }
}


@media (min-width: 1360px) {
  .content-wrapper {
    
    top: 460px;
  }
}

@media (min-width: 1400px) {
  .content-wrapper {
    top: 420px;
  }
}

@media (min-width: 1500px) {
  .content-wrapper {
    top: 450px;
  }
}

@media (min-width: 1700px) {
  .content-wrapper {
    top: 560px;
  }
}
</style>
