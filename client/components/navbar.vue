<template>
  <div :class="[
      'flex fixed top-0 z-50 w-full py-7 transition-all duration-300 ease-linear',
      // hasScrolled ? 'bg-white shadow-md border-gray/5 z-10' : ''
    ]">
    <div class="container">
      <div :class="[
          'flex items-center justify-between md:block rounded-full px-8 py-4 transition-all duration-300 ease-linear bg-white/80 backdrop-blur-md shadow-md',
          // hasScrolled ? '' : ''
        ]">
        <!-- Logo and navigation links -->
        <div class="flex items-center justify-between w-full">
          <div class="z-40">
            <NuxtLink to="/" class="flex items-end">
              <img src="/images/logo.png" alt="Logo" class="h-8 md:h-10 mr-2 opacity-60" />
              <p class="text-xl lg:text-3xl text-gray">Reno</p>
              <p class="text-orange font-bold text-xl lg:text-3xl">Direct</p>
            </NuxtLink>
          </div>
          <div class="flex items-center gap-5 lg:hidden">
            <ButtonMobileToggle ref="buttonMobileToggle" />
          </div>
          
          <div :class="['hidden lg:flex space-x-12 items-center', hasScrolled ? '' : 'mr-40']"  ref="navLinks">
            <div
              v-for="item in menuItems"
              :key="item.href"
              :href="item.href"
            >
              <NuxtLink
                :to="item.href"
                :class="[ 'link hover:cursor-pointer', { 'active-link': isActive(item.href) } ]"
              >
                {{ item.text }}
              </NuxtLink>
            </div>
            <BaseButton v-if="hasScrolled" ref="quoteButton" class=""
            variant="orange" to="/calculateur">
            Obtenez un devis
          </BaseButton>
          </div>
        </div>
      </div>
    </div>    
  </div>

  <!-- Mobile Menu -->
  <div
    :class="{ 'translate-x-0': menuVisible, 'translate-x-full': !menuVisible && isClosing }"
    class="lg:hidden mobile-menu fixed py-20 top-0 left-0 w-full h-full bg-white  z-40 transition-transform duration-300 ease-in-out"
    ref="mobileMenu"
  >
    <div class="h-full px-5 py-12 overflow-y-auto no-scrollbar">
      <ul class="flex flex-col w-full h-full">
        <li
          v-for="item in menuItems"
          :key="item.href"
          class="border-b border-primary-gray1"
        >
          <NuxtLink
            :to="item.href"
            @click="handleMenuItemClick(item.href)"
            :class="[
              'w-full text-left uppercase text-[2.75em] font-bold text-gray  flex cursor-pointer my-8',
              { 'active-link-mobile': isActive(item.href) }
            ]"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

// Navigation items
const menuItems = [
  { text: 'Calculateur', href: '/calculateur' },
  { text: 'Projets', href: '/projets' },
  { text: 'Blog', href: '/blog' },
  { text: 'Contact', href: '/contact' }
];

const quoteButton = ref(null);
const navLinks = ref(null);
const route = useRoute();
const menuVisible = ref(false);
const isClosing = ref(false);
const hasScrolled = ref(false);
const mobileMenu = ref(null);
const buttonMobileToggle = ref(null);

const isActive = (href) => route.path === href;

const handleMenuItemClick = (href) => {
  if (buttonMobileToggle.value) {
    buttonMobileToggle.value.closeMenuAnimation();
  }
  isClosing.value = true;
  gsap.to(mobileMenu.value, {
    x: '-100%',
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      menuVisible.value = false;
      isClosing.value = false;
    }
  });
};

const disableScroll = () => document.body.classList.add('no-scroll');
const enableScroll = () => document.body.classList.remove('no-scroll');

const checkScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

watch(menuVisible, (visible) => {
  visible ? disableScroll() : enableScroll();
});

// GSAP timeline setup
const tl = gsap.timeline({
  paused: true, // Control this timeline manually based on scroll position
  defaults: { ease: "none" }
});

const maxScroll = 300; // Defines where the animation should be fully completed

// Combined scroll event handler
const handleScroll = () => {
  const scrollY = window.scrollY;
  hasScrolled.value = scrollY > 0;
  const progress = scrollY / maxScroll;
  tl.progress(Math.min(progress, 1));
};

// Set up animations and event listeners
onMounted(() => {
  tl.fromTo(quoteButton.value, { x: '70%' }, { x: '0%' }, 0)
    .fromTo(navLinks.value, { x: '36%' }, { x: '3%' }, 0);

  window.addEventListener('scroll', handleScroll);
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Watch for visibility changes to handle scrolling
watch(menuVisible, (visible) => {
  visible ? disableScroll() : enableScroll();
});
</script>



<style scoped>
.transition-all {
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.3s ease, backdrop-filter 0.3s ease;
}

.link {
  @apply text-dark overflow-hidden tracking-normal hover:text-orange;
  transition: color 0.3s ease, font-weight 0.5s ease;
}

.active-link,
.active-link-mobile {
  color: #e9523d !important; /* Orange color for active link */
  transition: color 0.3s ease, font-weight 0.3s ease;
}

.mobile-menu {
  transform: translateX(-100%);
}

.translate-x-0 {
  transform: translateX(0%);
}



.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: hidden;
}

/* Disable scrolling on body when mobile menu is open */
body.no-scroll {
  overflow: hidden !important;
}
</style>