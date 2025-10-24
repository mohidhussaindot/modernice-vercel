<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center py-40 px-6 sm:px-10">
    <!-- Header -->
    <div class="max-w-3xl w-full text-center mb-10 px-4">
      <h1 class="text-4xl sm:text-5xl font-medium tracking-wide mb-2">
        Modernice Appointment Booking
      </h1>
      <p class="text-gray-400 text-lg sm:text-xl">
        Want to contact us? Book your appointment below and we'll get back to you ASAP.
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
          <label for="name" class="mb-2 font-semibold text-gray-300">Full Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your full name"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>

        <div class="flex flex-col flex-1 min-w-0">
          <label for="email" class="mb-2 font-semibold text-gray-300">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col sm:flex-row gap-6">
        <div class="flex flex-col flex-1 min-w-0">
          <label for="phone" class="mb-2 font-semibold text-gray-300">Phone Number</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="+123 456 7890"
            required
            class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500"
          />
        </div>

        <div class="flex flex-col flex-1 min-w-0">
          <label for="date" class="mb-2 font-semibold text-gray-300">Appointment Date</label>
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
        <label for="message" class="mb-2 font-semibold text-gray-300">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="Any special requests or notes"
          class="bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-white placeholder-gray-500 resize-y"
        ></textarea>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="self-start bg-white text-black font-medium rounded-xl px-8 py-3 shadow-md hover:bg-gray-200 transition"
      >
        Book Appointment
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

<script>
  export default {
    name: 'AppointmentPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          date: '',
          message: ''
        },
        successMessage: ''
      }
    },
    methods: {
      submitForm() {
        this.successMessage = `Thanks, ${this.form.name}! Your appointment is booked for ${this.form.date}. We'll contact you soon.`
        this.form = {
          name: '',
          email: '',
          phone: '',
          date: '',
          message: ''
        }
      }
    }
  }
</script>
