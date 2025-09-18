<template>
  <section
    class="bg-[#020111] relative overflow-hidden py-24 px-6 md:px-16 lg:px-10 xl:px-23"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-no-repeat bg-cover z-0"
      style="background-image: url('/images/seo-hero-bg.png')"
    ></div>

    <!-- Container -->
    <div
      class="relative z-10 max-w-[64rem] flex flex-col lg:flex-row items-center justify-between lg:gap-3 xl:gap-12"
    >
      <!-- Text Content -->
      <div class="text-white flex-1 lg:z-10 flex flex-col gap-8">
        <h1
          class="text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] italic font-lightbold leading-tight"
        >
          Bereit für den
          <span
            class="bg-gradient-to-r from-[#01A3FF] to-[#25CDDA] bg-clip-text text-transparent"
            >Startschuss</span
          >
          nach
          <span
            class="bg-gradient-to-r from-[#25CDDA] via-[#01A3FF] to-[#1EC5E1] bg-clip-text text-transparent"
            >Oben?</span
          >
        </h1>

        <p class="font-light text-[1.125rem] md:text-[1.25rem] max-w-[37.5rem]">
          Vertraue auf einen bedachten und strategischen Prozess, der von Anfang
          an effektive SEO-Maßnahmen in die Entwicklung mit einbezieht. SEO muss
          kein <em>after-thought</em> sein.
        </p>

        <div>
          <Button
            class="px-6 py-2.5 text-[1.25rem] border border-[#3BB1FF] rounded hover:bg-[#3BB1FF] transition hover:border-none hover:cursor-pointer bg-transparent text-white hover:text-white"
          >
            <span
              class="bg-gradient-to-r from-[#3BB1FF] via-[#6BE0FF] to-[#3BB1FF] text-transparent bg-clip-text duration-300 hover:text-white"
            >
              Startbefehl geben
            </span>
          </Button>
        </div>
      </div>

      <!-- SeoCharacter: visible inline on small, becomes bg on lg -->
      <div class="relative flex-1 w-full max-w-[31.25rem]">
        <div
          ref="seocharacter"
          v-html="Seocharacter"
          class="w-full h-auto xl:relative xl:top-0 xl:left-0 lg:absolute lg:left-[-12.5rem] lg:top-[-16.875rem] lg:z-0 pointer-events-none"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import Button from "@atoms/Button.vue";
import Seocharacter from "@atoms/svgs/seo-character.svg?raw";
import { useGSAP } from "~/composables/useGSAP";

const seocharacter = ref(null);
const { gsap, createAnimation } = useGSAP();

onMounted(async () => {
  await nextTick();

  if (seocharacter.value) {
    const characterElement = seocharacter.value.querySelector("#Character");

    if (characterElement) {
      // Use the composable for better performance and cleanup
      createAnimation(() => {
        return gsap.to(characterElement, {
          y: -15,
          repeat: -1,
          duration: 0.5,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
  }
});
</script>
