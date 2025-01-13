<template>
   <footer class="bg-nightsky text-white py-16">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo and Description -->
      <div class="space-y-12">
        <NuxtLink to="/" class="flex items-end">
              <img src="/images/logo.png" alt="Logo" class="h-8 md:h-10 mr-2 opacity-60" />
                <p class="text-3xl text-white">Reno</p>
                <p class="text-orange font-bold text-3xl">Direct</p>
            </NuxtLink>
       <!-- Social Icons -->
       <div class="flex  space-x-4">
        <!-- Facebook Icon -->
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-orange text-dark rounded-full hover:bg-dark hover:text-orange transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.675 0H1.325C.594 0 0 .593 0 1.326V22.675c0 .732.593 1.325 1.325 1.325H12.82v-9.852H9.692v-3.845h3.128V7.411c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.098 2.794.142v3.24h-1.918c-1.505 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.845h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.325V1.326C24 .593 23.406 0 22.675 0z"
            />
          </svg>
        </a>

        <!-- LinkedIn Icon -->
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-orange text-dark rounded-full hover:bg-dark hover:text-orange transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM8.337 19H5.511v-8.756h2.826V19zm-1.413-9.8c-.901 0-1.63-.73-1.63-1.63s.729-1.63 1.63-1.63 1.63.729 1.63 1.63-.729 1.63-1.63 1.63zM20.5 19h-2.827v-4.827c0-1.152-.043-2.635-1.606-2.635-1.606 0-1.851 1.255-1.851 2.55V19h-2.827v-8.756h2.716v1.195h.038c.379-.718 1.306-1.474 2.69-1.474 2.877 0 3.407 1.894 3.407 4.354V19z"
            />
          </svg>
        </a>

        <!-- Instagram Icon -->
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-12 h-12 bg-orange text-dark rounded-full hover:bg-dark hover:text-orange transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.96.24 2.413.4a4.926 4.926 0 0 1 1.748 1.013 4.927 4.927 0 0 1 1.012 1.748c.16.453.343 1.243.4 2.413.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.96-.4 2.413a4.927 4.927 0 0 1-1.013 1.748 4.926 4.926 0 0 1-1.748 1.013c-.453.16-1.243.343-2.413.4-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.96-.24-2.413-.4a4.926 4.926 0 0 1-1.748-1.013 4.927 4.927 0 0 1-1.012-1.748c-.16-.453-.343-1.243-.4-2.413C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.17.24-1.96.4-2.413a4.927 4.927 0 0 1 1.013-1.748 4.926 4.926 0 0 1 1.748-1.013c.453-.16 1.243-.343 2.413-.4 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.736 0 8.332.012 7.052.07 5.7.128 4.65.308 3.77.625a7.07 7.07 0 0 0-2.573 1.574A7.072 7.072 0 0 0 .623 4.772C.306 5.65.127 6.7.07 8.052.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.057 1.352.237 2.402.553 3.282a7.07 7.07 0 0 0 1.574 2.573 7.072 7.072 0 0 0 2.573 1.574c.88.316 1.93.496 3.282.553C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.352-.057 2.402-.237 3.282-.553a7.072 7.072 0 0 0 2.573-1.574 7.07 7.07 0 0 0 1.574-2.573c.316-.88.496-1.93.553-3.282.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.057-1.352-.237-2.402-.553-3.282a7.07 7.07 0 0 0-1.574-2.573 7.072 7.072 0 0 0-2.573-1.574c-.88-.316-1.93-.496-3.282-.553C15.668.012 15.264 0 12 0z"
            />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        </a>

        <!-- Phone Icon -->
        <a
          href="tel:5145832698"
          class="flex items-center justify-center w-12 h-12 bg-orange text-dark rounded-full hover:bg-dark hover:text-orange transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.62 10.79a15.05 15.05 0 006.57 6.57l2.2-2.2a1.2 1.2 0 011.26-.27 9.66 9.66 0 003.02.48c.66 0 1.2.54 1.2 1.2v3.65c0 .66-.54 1.2-1.2 1.2A19.2 19.2 0 014.8 4.8c0-.66.54-1.2 1.2-1.2H9.65c.66 0 1.2.54 1.2 1.2 0 1.03.16 2.06.48 3.02.15.49 0 1.02-.27 1.26l-2.2 2.21z"
            />
          </svg>
        </a>
      </div>
        <div class="space-y-4">
            <p>
              Courriel : <a href="mailto:contact@renodirect.com" class="hover:text-orange transition">contact@renodirect.com</a>
            </p>
            <p>
              Téléphone : <a href="tel:1234567890" class="hover:text-orange transition">1-800-RENODIR</a>
            </p>
        </div>
      </div>

      <!-- Nos Services -->
      <div class="flex flex-col h-full">
        <p class="text-lg font-bold">



            Nos Services</p>
        <ul class="">
            <li><a href="#">Devis en ligne</a></li>
            <li><a href="#">Réno Cuisine</a></li>
            <li><a href="#">Réno Salle de Bain</a></li>
            <li><a href="#">Réno Sous-sol</a></li>
        </ul>
        </div>


      <!-- À propos -->
      <div class="flex flex-col h-full">
        <p class="text-lg font-bold">
            À propos</p>
        <ul >
          <li><a href="#">Qui sommes-nous ?</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contactez-nous</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
        </ul>
      </div>
    </div>

   <div class="relative mt-12 pt-6 text-center">
  <div class="absolute inset-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
  <p class="text-sm text-white relative z-10">© 2025 RenoDirect. Tous droits réservés.</p>
</div>

  </div>
</footer>


  </template>
  
<style lang="scss" scoped>
ul{
    @apply space-y-6 mt-auto;
}
a{
    @apply text-white hover:text-orange transition ;
}
</style>