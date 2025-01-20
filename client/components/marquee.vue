<template>
  <section class="my-16 md:my-24">
    <div class="container">
      <!-- Marquee Section -->
      <div class="relative h-[120px] overflow-hidden">
        <!-- Marquee for Statistics -->
        <NuxtMarquee speed="50" pauseOnHover="false" class="w-full h-full">
          <div class="flex items-center justify-between gap-[8-px] md:gap-[120px]">
            <!-- Clients -->
            <div class="flex flex-col items-center text-center">
              <p class="text-[40px] md:text-[60px] font-bold leading-none text-dark">
                100+
              </p>
              <p class="text-gray text-lg">Clients satisfaits</p>
            </div>

            <!-- Renovations -->
            <div class="flex flex-col items-center text-center">
              <p class="text-[40px] md:text-[60px] font-bold leading-none text-dark">
                200+
              </p>
              <p class="text-gray text-lg">Rénovations terminées</p>
            </div>

            <!-- Quotes -->
            <div class="flex flex-col items-center text-center">
              <p class="text-[40px] md:text-[60px] font-bold leading-none text-dark">
                300+
              </p>
              <p class="text-gray text-lg">Devis réalisés</p>
            </div>

            <!-- Projects -->
            <div class="flex flex-col items-center text-center">
              <p class="text-[40px] md:text-[60px] font-bold leading-none text-dark">
                50+
              </p>
              <p class="text-gray text-lg">Projets en cours</p>
            </div>
          </div>
        </NuxtMarquee>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure text behaves consistently across screen sizes */
.flex-col p:first-child {
  font-size: 40px;
}
@media (min-width: 768px) {
  .flex-col p:first-child {
    font-size: 60px;
  }
}

/* Maintain consistent spacing between marquee items */
.nuxt-marquee .flex {
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 144px; /* Consistent spacing between all items */
}
</style>
