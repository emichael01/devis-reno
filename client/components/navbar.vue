<template>
  <div class="fixed top-0 z-50 w-full py-7 transition-colors duration-300 ease" >
    <div class="container">
      <div class="flex items-center justify-between md:block rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm shadow-md border-gray/5 border">
        <div class="flex items-center justify-between w-full">
          <div class="z-40">
            <NuxtLink to="/" class="flex items-end">
              <img src="/images/logo.png" alt="Logo" class="h-8 md:h-10 mr-2 opacity-60" />
                <p class="text-3xl text-gray">Reno</p>
                <p class="text-orange font-bold text-3xl">Direct</p>
            </NuxtLink>
              
          </div>
          <!-- Mobile Toggle Button -->
          <div class="flex items-center gap-5 lg:hidden">
            <ButtonMobileToggle />
          </div>
          <!-- Desktop Menu -->
          <div class="hidden lg:flex space-x-7">
        <div
            class="flex items-center"
            v-for="item in menuItems"
            :key="item.href"
            :class="{
              'active-link': isActive(item.href) && item.text !== 'Calculateur',
              '': item.text === 'Calculateur'
            }"
          >
            <NuxtLink
              :to="item.href"
              class="link hover:cursor-pointer"
            >
              {{ item.text }}
            </NuxtLink>
          </div>
        </div>

        </div>
      </div>
      </div>
    </div>

  <!-- Mobile Menu -->
  <div :class="{ 'translate-x-0': menuVisible, 'translate-x-full': !menuVisible && isClosing }"
    class="lg:hidden mobile-menu fixed py-20 top-0 left-0 w-full h-full bg-white dark:bg-dark z-40 transition-transform duration-300 ease-in-out"
    ref="mobileMenu">
    <div class="border-b border-primary-gray1">
      <a href="/">
        <!-- Logo for Light and Dark Mode -->
        <img src="@/assets/images/logo-dark.svg" alt="Logo"
          class="fixed top-8 left-5 h-8 md:h-10 z-40 block dark:hidden" />
        <img src="@/assets/images/logo-light.svg" alt="Logo"
          class="fixed top-8 left-5 h-8 md:h-10 z-40 hidden dark:block" />
      </a>
    </div>

    <div class="h-full px-5 overflow-y-auto no-scrollbar">
  <ul class="flex flex-col w-full h-full">
    <li v-for="item in menuItems" :key="item.href" class="border-b border-primary-gray1">
      <NuxtLink
        @click="handleMenuItemClick(item.href)"
        :to="item.href"
        class="w-full text-left uppercase text-[1.75em] font-bold flex cursor-pointer my-8"
        :class="{ 'active-link-mobile': isActive(item.href) }"
      >
        {{ item.text }}
      </NuxtLink>
    </li>
  </ul>
</div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Define menu items
const menuItems = [
  { text: 'Calculateur', href: '/calculateur' },
  { text: 'Projets', href: '/projets' },
  { text: 'Blog', href: '/blog' },
  { text: 'Contact', href: '/contact' }
];

// Access current route
const route = useRoute();

// Check if the link is active
const isActive = (href) => route.path === href;
</script>


<style scoped>
.link {
  @apply text-dark  overflow-hidden tracking-normal hover:text-orange;
  transition: color 0.3s ease, font-weight 0.5s ease;
}

.active-link {
  color: #FFC41F !important;
  -webkit-text-stroke: 0.75px black;

}

.active-link-mobile {
  color: #FFC41F !important;
  -webkit-text-stroke: 0.75px black;
}

.mobile-menu {
  transform: translateX(-100%);
}

.translate-x-0 {
  transform: translateX(0%);
}

.translate-x-full {
  transform: translateX(100%);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: hidden;
}

body.no-scroll {
  overflow: hidden !important;
}
</style>
