<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center py-40 px-6 sm:px-10">
    <!-- Header -->
    <div class="max-w-3xl w-full text-center mb-10 px-4">
      <h1 class="text-4xl sm:text-5xl font-medium tracking-wide mb-2">
        {{ $t('appointment.title') }}
      </h1>
      <p class="text-gray-400 text-lg sm:text-xl">
        {{ $t('appointment.subtitle') }}
      </p>
    </div>

    <!-- Form -->
    <form
      @submit.prevent="submitForm"
      class="bg-gray-900 rounded-3xl shadow-lg max-w-3xl w-full px-8 py-10 flex flex-col gap-7"
    >
      <!-- Row 1 -->
      <div class="flex flex-col sm:flex-row gap-6">
        <div class="flex flex-col flex-1 min-w-0">
          <label for="name" class="mb-2 font-semibold text-gray-300">
            {{ $t('appointment.form.nameLabel') }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            :placeholder="$t('appointment.form.namePlaceholder')"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>

        <div class="flex flex-col flex-1 min-w-0">
          <label for="email" class="mb-2 font-semibold text-gray-300">
            {{ $t('appointment.form.emailLabel') }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :placeholder="$t('appointment.form.emailPlaceholder').replace(' [at] ', '@')"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col sm:flex-row gap-6">
        <div class="flex flex-col flex-1 min-w-0">
          <label for="phone" class="mb-2 font-semibold text-gray-300">
            {{ $t('appointment.form.phoneLabel') }}
          </label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            :placeholder="$t('appointment.form.phonePlaceholder')"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>

        <div class="flex flex-col flex-1 min-w-0">
          <label for="date" class="mb-2 font-semibold text-gray-300">
            {{ $t('appointment.form.dateLabel') }}
          </label>
          <input
            id="date"
            v-model="form.date"
            type="date"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>
      </div>

      <!-- Full Width -->
      <div class="flex flex-col">
        <label for="message" class="mb-2 font-semibold text-gray-300">
          {{ $t('appointment.form.messageLabel') }}
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          :placeholder="$t('appointment.form.messagePlaceholder')"
          class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500 resize-y"
        ></textarea>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="self-start bg-white text-black font-medium rounded-xl px-8 py-3 shadow-md hover:bg-gray-200 transition"
      >
        {{ $t('appointment.form.submit') }}
      </button>

      <!-- Success message -->
      <p
        v-if="successMessage"
        class="mt-6 text-green-400 font-semibold text-center text-lg tracking-wide"
      >
        {{ successMessage }}
      </p>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  defineOptions({ name: 'AppointmentPage' })

  const { t } = useI18n()

  const form = ref({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })

  const successMessage = ref('')

  function submitForm() {
    successMessage.value = t('appointment.success', {
      name: form.value.name,
      date: form.value.date
    })
    form.value = {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    }
  }
</script>
