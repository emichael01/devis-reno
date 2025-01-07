<template>
  <div >

    <!-- Main Sections -->
    <section>
      <About />
    </section>
    <!-- <section id="services">
      <Services />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define reactive properties
const observer = ref(null);
const activeSection = ref('');

// Initialize intersection observer to track active sections
const initIntersectionObserver = () => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold for better sensitivity
  );

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.value.observe(section));
};

// Set up on page load
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out-sine',
    duration: 2000,
  });
  initIntersectionObserver();
});

// Clean up on unmount or when the component is unloaded
onUnmounted(() => {
  document.documentElement.style.overflow = ''; // Restore scrolling on html element
  document.body.style.overflow = ''; // Restore scrolling on body element
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
