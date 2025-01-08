<template>
    <div class="container  my-[10%] space-y-12">
      <h1 class="text-2xl font-bold">Questionnaire pour {{ categoryName }}</h1>
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
    cuisines: 'Cuisine',
    salles_de_bain: 'Salles de Bain',
    toitures: 'Toitures',
    sous_sols: 'Sous-sols',
    portes: 'Portes',
    piscines: 'Piscines',
    fenetres: 'Fenêtres',
    chauffe_eau: 'Chauffe-eau'
  };
  return mapping[categorySlug] || 'Rénovation';
});

</script>
