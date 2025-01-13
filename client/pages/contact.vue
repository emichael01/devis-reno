<template>
  <!-- Start Contact Form Section -->
  <section class="py-16 md:py-36 bg-gray-50 dark:bg-gray-900">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Contactez-Nous
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto">
          Vous avez un projet en tête ? Partagez vos idées avec nous et nous vous aiderons à les concrétiser.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Full Name -->
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="fullName"
                class="form-input mt-2 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Votre nom complet"
                required
              />
            </div>
            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="form-input mt-2 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Votre adresse email"
                required
              />
            </div>
          </div>
          <div class="mt-6">
            <!-- Subject -->
            <label
              for="subject"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              class="form-input mt-2 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Sujet de votre message"
              required
            />
          </div>
          <div class="mt-6">
            <!-- Message -->
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="form-textarea mt-2 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <div class="mt-8 text-center">
            <button
              type="submit"
              class="px-6 py-3 text-white bg-purple rounded-lg hover:bg-purple-600 transition-colors"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- End Contact Form Section -->
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.form-input,
.form-textarea {
  background-color: white;
  border: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  color: #374151;
}
.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
}
</style>
