
<template>
  <section class="flex h-[100vh] md:h-[60vh] 4xl:h-[40vh] mt-36">
    <div class="container flex items-center space-y-12">
      <div class="w-full flex flex-col items-end lg:flex-row lg:justify-between ">
        <!-- Text Content -->
        <div class="space-y-8 lg:max-w-[550px] text-center lg:text-left">
          <h1>Obtenez un devis instantané en ligne avec un suivi personnalisé sous 24h.
          </h1>
          <p>Prêt à donner vie à votre projet ?</p>
          <BaseButton variant="orange" to="/calculateur">Cliquez ici</BaseButton>
        </div>
        <!-- Image -->
        <nuxt-img
          src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/08/Kitchen-decor-ideas-2023-Drew-F-1024x753.jpg"
          class="w-full lg:max-w-[380px] 2xl:max-w-[500px] mt-12 rounded-2xl"
          loading="lazy"
          alt="portrait"
        />
      </div>
    </div>
  </section>
</template>
