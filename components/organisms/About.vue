<template>
  <section class="bg-black text-white min-h-screen flex flex-col">
    <!-- Header Section -->
    <div class="flex flex-col pt-33 justify-center text-center items-center px-4 max-w-7xl mx-auto">
      <h1 class="text-xl md:text-2xl">
        {{ $t('about.title') }}
      </h1>
      <h2 class="text-3xl md:text-5xl font-semibold mt-4 max-w-3xl leading-tight">
        {{ $t('about.heading') }}
      </h2>
    </div>

    <!-- Image Section -->
    <div class="flex justify-center mt-10 px-4">
      <NuxtImg
        src="/images/about.jpeg"
        alt="About Modernice"
        class="w-full max-w-5xl h-64 md:h-96 object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Stats Section -->
    <div
      class="bg-white text-black rounded-3xl md:max-w-7xl mx-auto mt-16 px-6 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">100+</h3>
        <p class="text-lg font-semibold mt-1">{{ $t('about.stats.employees') }}</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">50+</h3>
        <p class="text-lg font-semibold mt-1">{{ $t('about.stats.projects') }}</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">430+</h3>
        <p class="text-lg font-semibold mt-1">{{ $t('about.stats.deals') }}</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">38+</h3>
        <p class="text-lg font-semibold mt-1">{{ $t('about.stats.inhouse') }}</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">19+</h3>
        <p class="text-lg font-semibold mt-1">{{ $t('about.stats.stacks') }}</p>
      </div>
    </div>

    <!-- Story Section -->
    <div class="text-white max-w-5xl mx-auto mt-20 px-6 text-center flex flex-col gap-6 pb-20">
      <h3 class="text-2xl font-bold">{{ $t('about.story.title') }}</h3>
      <h2 class="text-4xl font-extrabold leading-tight">{{ $t('about.story.heading') }}</h2>
      <p class="text-lg leading-relaxed">
        {{ $t('about.story.paragraph') }}
      </p>
    </div>
  </section>
</template>

<script setup>
  defineOptions({
    name: 'AboutPage'
  })
</script>
