<template>
  <section class="flex h-[100vh] mt-[45%] sm:mt-auto">
    <div class="container flex items-center space-y-12">
      <div class="w-full flex flex-col items-end md:flex-row md:justify-between ">
        <!-- Text Content -->
        <div class="space-y-6 max-w-[550px] text-center sm:text-left">
          <h1>Réglez vos problèmes juridiques de chez vous, sans compromis sur la qualité</h1>
          <p>Vous ne savez pas par où commencer?</p>
          <BaseButton variant="orange">Cliquez ici</BaseButton>
        </div>
        <!-- Image -->
        <nuxt-img
          src="/images/hero.png"
          class="w-full lg:max-w-[380px] 2xl:max-w-[500px]"
          loading="lazy"
          alt="portrait"
        />
      </div>
    </div>
  </section>
</template>
