<template>
  <div
    ref="sectionRef"
    :class="[
      'flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 xl:px-20 gap-12 lg:gap-20 overflow-hidden transition-opacity duration-700',
      fadeClass,
    ]"
  >
    <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-full lg:max-w-[34.188rem]">
      <h1
        class="font-bold text-[1.75rem] sm:text-[2.125rem] md:text-[2.375rem] lg:text-[2.625rem] leading-tight"
      >
        Innovation durch Design und Technologie
      </h1>

      <p
        class="font-light text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem]"
      >
        In einer erfolgreichen Web-Lösung verschmelzen Design und Entwicklung zu einem harmonischen Ganzen. Die nahtlose Integration von Frontend und Backend, ergänzt durch den Einsatz modernster Technologien wie Künstlicher Intelligenz, Großen Sprachmodellen (LLM) und Machine Learning, ermöglicht die Schaffung von Produkten, die den Horizont des Möglichen erweitern und das Nutzererlebnis auf ein ungekanntes Niveau heben.
      </p>
      
      <div class="inline-block hover:scale-105 transition w-fit rounded-[12px] p-[2px] bg-gradient-to-r from-[#FFE501] to-[#FFA901] hover:from-[#FFD700] hover:to-[#FFA901]">
        <Button
          class="px-[1.5rem] py-[0.625rem] 
                 text-[1rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.1875rem] xl:text-[1rem] 
                 rounded-[10px] bg-black bg-opacity-90
                 transition hover:cursor-pointer 
                 text-white hover:text-white"
        >
          <span
            class="bg-gradient-to-r from-[#FFA901] to-[#FFE501] 
                   text-transparent bg-clip-text duration-300"
          >
            Schaffe Außergewöhnliches
          </span>
        </Button>
      </div>
    </div>

    <div
      class="w-full xl:max-w-full lg:max-w-[450px] md:max-w-[500px] flex justify-center items-center moon-float"
      ref="moonImage"
      v-html="logo"
    />
  </div>
</template>

<script setup>
import Button from '@atoms/Button.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import logo from '@atoms/svgs/rocket-moon.svg?raw'

const sectionRef = ref(null)
const isVisible = ref(true)
const fadeClass = computed(() => (isVisible.value ? 'fade-in' : 'fade-out'))

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1,
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.fade-in {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.7s ease;
}

.fade-out {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease;
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

.moon-float {
  animation: floatAndRotate 3s ease-in-out infinite;
  display: inline-block;
  will-change: transform;
  transform-origin: center center;
}
</style>
