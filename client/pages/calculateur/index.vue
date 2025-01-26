<template>
    <div class="container my-[45%] md:my-[10%]">
      <h1 class="text-center mb-6">Calculateur de Rénovation</h1>
      <p class="text-center mb-8">
        Choisissez une catégorie ci-dessous pour obtenir un devis instantané pour votre projet de rénovation.
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Category Cards -->
        <div
          v-for="category in categories"
          :key="category.slug"
          class="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition group"
          @click="navigateToCategory(category.slug)"
          style="aspect-ratio: 1 / 1; height: 100%;"
        >
          <img :src="category.icon"
               :alt="category.name"
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <h2 class="text-lg font-bold text-white text-center">{{ category.name }}</h2>
          </div>
        </div>
      </div>
    </div>
</template>

  
  <script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Define the categories
const categories = [
  { name: 'Cuisine', slug: 'cuisine', icon: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/08/Kitchen-decor-ideas-2023-Drew-F-1024x753.jpg' },
  { name: 'Salle de Bain', slug: 'salle-de-bain', icon: 'https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d390b7c/www.decorilla.com/online-decorating/wp-content/uploads/2024/12/Smart-bathroom-interior-design-ideas-by-Decorilla-1-2048x1148.jpeg' },
  { name: 'Toiture', slug: 'toiture', icon: 'https://th.bing.com/th/id/OIP.FOXE03gn70B8_U1FXMDE1gHaE8?rs=1&pid=ImgDetMain' },
  { name: 'Sous-sol', slug: 'sous-sol', icon: 'https://sweeten.com/wp-content/uploads/2019/11/Cristiana-Basement-09.jpg' },
  { name: 'Porte', slug: 'porte', icon: 'https://th.bing.com/th/id/R.5ea234321a111a95823457413c6c7471?rik=1nHYYY2w67W8pw&riu=http%3a%2f%2fhowtobuildit.org%2fwp-content%2fuploads%2f2014%2f07%2f15-Gorgeous-Front-Door-Renovations10.jpg&ehk=fgJYbHfL4ATwKMwLjOZnPEf7COMZLMfD6TQfaU7s8Vc%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Patio', slug: 'patio', icon: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/1/15/0/OA16-Project-Groundwork_Modern-Seattle-Courtyard_6.jpg.rend.hgtvcom.616.411.suffix/1452882548470.jpeg' },
  { name: 'Fenêtre', slug: 'fenetre', icon: 'https://mydecorative.com/wp-content/uploads/2021/04/window-remodeling.jpg' },
  { name: 'Mur', slug: 'mur', icon: 'https://mglsrenovation.com/files/shutterstock/2019/06/1561657192213_shutterstock_1561657167_i9950119521.jpg?w=1440&h=1080&a=t' }
];


// Navigate to the selected category's questionnaire
const navigateToCategory = (slug) => {
  router.push(`/calculateur/${slug}`);
};
</script>
