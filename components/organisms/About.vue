<template>
  <section class="bg-black text-white min-h-screen flex flex-col">
    <!-- Header Section -->
    <div class="flex flex-col pt-33 justify-center text-center items-center px-4 max-w-7xl mx-auto">
      <h1 class="text-xl md:text-2xl">
        About <span class="text-3xl md:text-4xl font-bold">Modernice</span>
      </h1>
      <h2 class="text-3xl md:text-5xl font-semibold mt-4 max-w-3xl leading-tight">
        Bring your vision to life <br />
        with Expertise and Dedication
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
        <p class="text-lg font-semibold mt-1">Employees</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">50+</h3>
        <p class="text-lg font-semibold mt-1">Ongoing Projects</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">430+</h3>
        <p class="text-lg font-semibold mt-1">Deals Closed</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">38+</h3>
        <p class="text-lg font-semibold mt-1">Inhouse Projects</p>
      </div>
      <div class="text-center flex flex-col items-center min-w-[120px]">
        <h3 class="text-3xl font-bold">19+</h3>
        <p class="text-lg font-semibold mt-1">Stacks Used</p>
      </div>
    </div>

    <!-- Story Section -->
    <div class="text-white max-w-5xl mx-auto mt-20 px-6 text-center flex flex-col gap-6 pb-20">
      <h3 class="text-2xl font-bold">Crafting Excellence</h3>
      <h2 class="text-4xl font-extrabold leading-tight"> The Vision Crafters Journey Story </h2>
      <p class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis quidem ducimus?
        Earum dolorum sit tenetur magnam debitis itaque expedita fugiat quibusdam! Dignissimos quo
        pariatur quidem maxime, nam est doloribus! Vel in voluptate voluptates, voluptas et odit
        suscipit nihil dolor dolores delectus facilis optio rerum nemo repellendus, explicabo minima
        eius veritatis? Provident commodi necessitatibus repudiandae ratione illo pariatur veritatis
        earum? Facere aspernatur dolore aliquam. Tempora doloribus odio ea mollitia voluptas nam
        aliquid ullam veniam rerum. Quidem, in veniam, rem aspernatur facere consectetur fugiat hic,
        ab maxime iste ea! Reprehenderit, in.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutPage'
  }
</script>
