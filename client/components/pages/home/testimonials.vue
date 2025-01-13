<template>
  <!-- Start Testimonial -->
  <section class="mb-36">
    <div class="container">
      <div class="grid grid-cols-1">
        <div class="items-end justify-between lg:flex space-y-7 lg:space-y-0">
          <div>
                      <h2 class="font-semibold text-[26px]/normal mt-7">Des témoignages inspirants de clients satisfaits</h2>
          </div>
          <div class="flex items-center justify-center gap-5 swiper-btn text-gray">
            <button @click="prevSlide" class="swiper-btn-prev border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-orange duration-300">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94995 2.44995L2.39995 6.99995L6.94995 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
              </svg>
            </button>
            <button @click="nextSlide" class="swiper-btn-next border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-orange duration-300">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.05005 2.44995L6.60005 6.99995L2.05005 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        :modules="modules"
        :navigation="navigationOptions"
        spaceBetween="30"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 }
        }"
        class="client-review-slider mt-14"
        dir="ltr"
        ref="swiper"
        :autoplay="{ delay: 3000 }"
        :loop="true"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="md:flex-row flex-col p-5 flex items-start gap-7 rounded">
            <!-- <div class="shrink-0">
              <img :src="testimonial.image" :alt="testimonial.clientName" />
            </div> -->
            <div>
              <p class="font-medium leading-8 italic">"{{ testimonial.feedback }}"</p>
              <p class="mt-8 font-semibold">{{ testimonial.clientName }}</p>
              <p class="mt-2 text-orange">{{ testimonial.company }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <!-- End Testimonial -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const navigationOptions = {
  nextEl: ".client-review .swiper-btn-next",
  prevEl: ".client-review .swiper-btn-prev",
};
const modules = ref([Autoplay, Pagination, Navigation, Autoplay]);

// Define Swiper instance
const swiperInstance = ref<Swiper | null>(null);

// Function to go to previous slide
const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

// Function to go to next slide
const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

// Données des témoignages
const testimonials = [
  {
    project: "Rénovation de cuisine - Montréal",
    clientName: "Sophie Tremblay",
    company: "Particulier",
    feedback:
      "L'équipe a transformé notre cuisine avec un design élégant et fonctionnel. Leur attention aux détails et leur écoute de nos besoins ont fait toute la différence. Nous sommes ravis du résultat !",
    image: "https://ui-avatars.com/api/?name=Sophie+Tremblay&background=random&size=64",
  },
  {
    project: "Réaménagement de salle de bain - Québec",
    clientName: "Jean Morel",
    company: "Particulier",
    feedback:
      "Grâce à leur expertise, ma salle de bain est maintenant moderne et pratique. Le processus a été fluide, et le résultat dépasse mes attentes. Merci pour ce magnifique travail !",
    image: "https://ui-avatars.com/api/?name=Jean+Morel&background=random&size=64",
  },
  {
    project: "Transformation de sous-sol - Laval",
    clientName: "Émilie Gagnon",
    company: "Particulier",
    feedback:
      "Une expérience incroyable du début à la fin. Mon sous-sol est devenu un espace de vie chaleureux et accueillant. L'équipe a su réaliser exactement ce que j'avais en tête.",
    image: "https://ui-avatars.com/api/?name=Emilie+Gagnon&background=random&size=64",
  },
];

</script>
