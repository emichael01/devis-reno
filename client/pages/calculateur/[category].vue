<template>
    <div class="container  my-[45%] md:my-[10%] space-y-12">
      <h1 class="text-2xl text-center md:text-left font-bold">Questionnaire pour {{ categoryName }}</h1>
    <Questionnaire :category="categorySlug" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const categorySlug = route.params.category;

// Dynamically set category name based on slug
const categoryName = computed(() => {
  const mapping = {
    cuisine: 'Cuisine',
    'salle-de-bain': 'Salle de Bain',
    toiture: 'Toiture',
    'sous-sol': 'Sous-sols',
    porte: 'Porte',
    patio: 'Patio',
    fenetre: 'Fenêtre',
    mur: 'Mur'
  };
  return mapping[categorySlug] || 'Rénovation';
});

</script>
