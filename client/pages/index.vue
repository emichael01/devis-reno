<template>
  <div>
    <!-- Main Sections -->
    <section>
      <PagesHomeHero />
    </section>
    <section>
      <Marquee />
    </section>
    <div class="space-y-36">
      <section>
        <PagesHomeService />
      </section>
      <section>
        <PagesHomeBlog />
      </section>
      <section>
        <PagesHomeTestimonials />
      </section>
    </div>

  </div>
</template>

<script setup>
import { onUnmounted } from 'vue';

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
