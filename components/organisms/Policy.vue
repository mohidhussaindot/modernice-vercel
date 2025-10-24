<template>
  <div
    class="min-h-screen bg-black text-white flex flex-col justify-between px-6 py-32 sm:px-20 leading-relaxed font-sans"
  >
    <main class="max-w-3xl mx-auto">
      <h1
        class="text-center text-4xl sm:text-5xl font-semibold tracking-widest mb-4 uppercase text-white"
      >
        Privacy & Policy
      </h1>
      <p class="intro text-center text-gray-400 max-w-xl mx-auto mb-10 text-lg">
        At <strong>Modernice</strong>, your privacy is our priority. This policy explains how we
        collect, use, and protect your information.
      </p>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          1. Information We Collect
        </h2>
        <p class="text-gray-300 text-base">
          We collect only the necessary information to provide our services efficiently, including
          personal data such as your name, email, and usage data.
        </p>
      </section>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          2. How We Use Your Information
        </h2>
        <p class="text-gray-300 text-base">
          Your information helps us improve our website, communicate updates, and ensure a
          personalized experience.
        </p>
      </section>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          3. Data Security
        </h2>
        <p class="text-gray-300 text-base">
          We implement robust security measures to protect your data from unauthorized access or
          disclosure.
        </p>
      </section>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          4. Cookies
        </h2>
        <p class="text-gray-300 text-base">
          Our website uses cookies to enhance user experience. You can disable cookies via your
          browser settings if preferred.
        </p>
      </section>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          5. Your Rights
        </h2>
        <p class="text-gray-300 text-base">
          You have the right to access, modify, or delete your personal data. Contact us at
          <a
            href="mailto:privacy@modernice.com"
            class="text-cyan-300 font-semibold hover:text-cyan-400 underline transition"
            >privacy@modernice.com</a
          >
          for any requests.
        </p>
      </section>

      <section class="mb-10 pl-4 border-l-4 border-cyan-400">
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          6. Terms of Service
        </h2>
        <p class="text-gray-300 text-base">
          By using Modernice services, you agree to comply with our terms and conditions, ensuring
          respectful and lawful usage.
        </p>
      </section>
    </main>

    <footer class="text-center py-8 text-gray-500 border-t border-gray-800 font-semibold text-base">
      &copy; <span>{{ currentYear }}</span> <strong>Modernice</strong>. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>
