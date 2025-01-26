<template>
  <section class="my-16 md:my-24">
    <div class="container">
      <!-- Marquee Section -->
      <div class="relative h-[120px] overflow-hidden">
        <!-- Marquee for Statistics -->
        <NuxtMarquee :speed="50" :pauseOnHover="false" :gradient="true" gradientColor="white" :gradientWidth="100" class="w-full h-full">
          <!-- Duplicate the content to create a seamless loop -->
          <div class="flex items-center justify-center">
            <!-- Clients -->
            <div class="flex flex-col items-center text-center px-12">
              <div class="flex items-center gap-2">
                <p class="text-[40px] md:text-[50px] font-bold leading-none text-dark">
                  100+
                </p>
              </div>
              <div class="flex flex-row items-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                </svg>
                <p class="text-dark/60 text-lg">Clients satisfaits</p>
              </div>
            </div>

            <!-- Renovations -->
            <div class="flex flex-col items-center text-center px-12">
              <div class="flex items-center gap-2">
                <p class="text-[40px] md:text-[50px] font-bold leading-none text-dark">
                  200+
                </p>
              </div>
              <div class="flex flex-row items-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                </svg>
                <p class="text-dark/60 text-lg">Rénovations terminées</p>
              </div>
            </div>

            <!-- Quotes -->
            <div class="flex flex-col items-center text-center px-12">
              <div class="flex items-center gap-2">
                <p class="text-[40px] md:text-[50px] font-bold leading-none text-dark">
                  300+
                </p>
              </div>
              <div class="flex flex-row items-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-11h-3V6l3 3z" />
                </svg>
                <p class="text-dark/60 text-lg">Devis réalisés</p>
              </div>
            </div>

            <!-- Projects -->
            <div class="flex flex-col items-center text-center px-12">
              <div class="flex items-center gap-2">
                <p class="text-[40px] md:text-[50px] font-bold leading-none text-dark">
                  50+
                </p>
              </div>
              <div class="flex flex-row items-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6H5v-4h4v4zm8-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                <p class="text-dark/60 text-lg">Projets en cours</p>
              </div>
            </div>

          </div>
        </NuxtMarquee>
      </div>
    </div>
  </section>
</template>

