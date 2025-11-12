<template>
  <div
    class="min-h-screen bg-black text-white flex flex-col justify-between px-6 py-32 sm:px-20 leading-relaxed font-sans"
  >
    <main class="max-w-3xl mx-auto">
      <h1
        class="text-center text-4xl sm:text-5xl font-semibold tracking-widest mb-4 uppercase text-white"
      >
        {{ $t('privacy_policy.title') }}
      </h1>
      <p class="intro text-center text-gray-400 max-w-xl mx-auto mb-10 text-lg">
        {{ $t('privacy_policy.intro') }}
      </p>

      <section
        v-for="(section, key) in sections"
        :key="key"
        class="mb-10 pl-4 border-l-4 border-cyan-400"
      >
        <h2 class="text-cyan-400 uppercase tracking-widest font-semibold text-2xl mb-2">
          {{ $t(`privacy_policy.sections.${key}.title`) }}
        </h2>
        <p class="text-gray-300 text-base">
          {{ $t(`privacy_policy.sections.${key}.text`) }}
          <template v-if="key === 'your_rights'">
            <a
              :href="`mailto:${$t('privacy_policy.sections.your_rights.email')}`"
              class="text-cyan-300 font-semibold hover:text-cyan-400 underline transition"
            >
              {{ $t('contact.message.email').replace(' [at] ', '@') }}
            </a>
          </template>
        </p>
      </section>
    </main>

    <footer class="text-center py-8 text-gray-500 border-t border-gray-800 font-semibold text-base">
      &copy; <span>{{ currentYear }}</span> <strong>Modernice</strong>.
      {{ $t('privacy_policy.footer') }}
    </footer>
  </div>
</template>

<script setup>
  const currentYear = new Date().getFullYear()

  // Define section keys in order for iteration
  const sections = {
    info_collect: {},
    use_info: {},
    data_security: {},
    cookies: {},
    your_rights: {},
    terms: {}
  }
</script>
