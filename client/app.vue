<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: "EM Design"
  }
});
</script>
