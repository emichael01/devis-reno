<template>
  <section class="flex h-[100vh] mt-[45%] sm:mt-auto">
    <div class="container flex flex-col md:flex-row items-center space-y-12">
      <!-- Text Content -->
      <div class="space-y-6 max-w-[570px] text-center sm:text-left">
        <h1>Freelance Web Developer</h1>
        <p>Vous ne savez pas par où commencer?</p>
        <BaseButton variant="raspberry">Cliquez ici</BaseButton>
      </div>
      <!-- Image -->
      <nuxt-img 
        src="/images/hero.png" 
        class="w-full lg:max-w-[380px] 2xl:max-w-[520px]" 
        loading="lazy" 
        alt="portrait" 
      />
    </div>
  </section>
</template>
