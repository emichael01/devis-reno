<template>
    <div class="container my-[10%]">
      <h1 class="text-center mb-6">Calculateur de Rénovation</h1>
      <p class="text-center mb-8">
        Choisissez une catégorie ci-dessous pour obtenir un devis instantané pour votre projet de rénovation.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Category Cards -->
        <div
          v-for="category in categories"
          :key="category.slug"
          class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition"
          @click="navigateToCategory(category.slug)"
        >
          <img :src="category.icon" :alt="category.name" class="w-16 h-16 mx-auto mb-4" />
          <h2 class="text-lg font-bold text-center">{{ category.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Define the categories
const categories = [
  { name: 'Cuisine', slug: 'cuisines', icon: '/icons/kitchen.svg' },
  { name: 'Salles de Bain', slug: 'salles_de_bain', icon: '/icons/bathroom.svg' },
  { name: 'Toitures', slug: 'toitures', icon: '/icons/roof.svg' },
  { name: 'Sous-sols', slug: 'sous_sols', icon: '/icons/basement.svg' },
  { name: 'Portes', slug: 'portes', icon: '/icons/door.svg' },
  { name: 'Piscines', slug: 'piscines', icon: '/icons/pool.svg' },
  { name: 'Fenêtres', slug: 'fenetres', icon: '/icons/window.svg' },
  { name: 'Chauffe-eau', slug: 'chauffe_eau', icon: '/icons/water-heater.svg' }
];


// Navigate to the selected category's questionnaire
const navigateToCategory = (slug) => {
  router.push(`/calculateur/${slug}`);
};
</script>
