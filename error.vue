<template>
  <div>
    <!-- 404 Error Page -->
    <template v-if="error?.statusCode === 404">
      <NuxtLayout name="404">
        <div
          class="min-h-[100dvh] bg-gradient-to-br from-[#2e0354] to-[#1a023b] flex flex-col items-center justify-center relative overflow-hidden"
        >
          <!-- Decorative Circles -->
          <div
            ref="circles"
            class="absolute top-0 left-0 w-40 h-40 bg-[#5F0A87] rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div
            ref="circles"
            class="absolute bottom-0 right-0 w-40 h-40 bg-[#5F0A87] rounded-full opacity-30 translate-x-1/2 translate-y-1/2"
          ></div>

          <!-- <FilledLogo class="scale-120" /> -->

          <h1 ref="title" class="text-5xl mt-9 md:text-7xl bold_intro font-[1000]">
            Coming Soon
          </h1>

          <p class="text-lg md:text-xl mt-4 md:mt-6 px-9 font-mono text-center text-gray-300">
            <span v-for="(char, i) in textChars" :key="i" ref="chars" class="inline-block">
              {{ char }}
            </span>
          </p>

          <BaseButton
            ref="button"
            @click="goBack"
            class="bg-[var(--yellowish)] text-black font-bold px-6 py-2 rounded transition mx-auto mt-5 cur"
          >
            Go Back
          </BaseButton>
        </div>
      </NuxtLayout>
    </template>

    <!-- Other Errors -->
    <template v-else>
      <div
        class="min-h-[100dvh] bg-gray-900 text-white flex flex-col items-center justify-center text-center p-6"
      >
        <h1 class="text-4xl font-bold mb-4">Error {{ error?.statusCode }}</h1>
        <p class="text-lg mb-6">{{ error?.message || 'Something went wrong.' }}</p>
        <BaseButton
          @click="goBack"
          class="bg-[var(--yellowish)] text-black font-bold px-6 py-2 rounded transition"
        >
          Go Back
        </BaseButton>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { BaseButton } from '@atoms'
  //import { FilledLogo } from '@organisms'
  import { onMounted, ref, nextTick } from 'vue'
  import { useRouter, useRoute, useError } from 'nuxt/app'
  import { gsap } from 'gsap'

  const router = useRouter()
  const route = useRoute()
  const error = useError()

  const goBack = () => {
    if (route.params === 'buy') {
      router.push('/')
    } else {
      router.back()
    }
  }

  const title = ref(null)
  const chars = ref([])
  const button = ref(null)
  const circles = ref([])

  // 404 animation text
  const fullText = "We're building something amazing - Stay tuned!"
  const textChars = fullText.split('').map(c => (c === ' ' ? '\u00A0' : c))

  onMounted(async () => {
    if (error?.statusCode !== 404) return

    await nextTick()

    // Heading glow pulse
    gsap.to(title.value, {
      textShadow: '0px 0px 20px #00f7ff, 0px 0px 40px #00f7ff',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power2.inOut'
    })

    // Animate each char
    gsap.from(chars.value, {
      opacity: 0,
      y: 20,
      stagger: 0.04,
      delay: 0.5,
      duration: 0.5,
      ease: 'power2.out'
    })

    // Animate button
    gsap.from(button.value, {
      opacity: 0,
      y: 40,
      delay: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })

    // Floating background circles
    gsap.to(circles.value, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut',
      stagger: 0.5
    })
  })
</script>

<style scoped>
  h1 {
    text-shadow: 0 0 5px #00f7ff;
  }
</style>
