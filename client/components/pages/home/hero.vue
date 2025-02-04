
<template>
  <section class="container h-[100vh] flex items-center justify-center">
        <div class="w-full flex flex-col justify-center mt-[12vh] lg:mt-0 lg:flex-row lg:justify-between items-center space-y-12 lg:space-y-0">
          <!-- Text Content -->
          <div class="space-y-8 lg:max-w-[550px] text-center lg:text-left">
            <h1>Obtenez un devis instantané en ligne avec un suivi personnalisé sous 24h.
            </h1>
            <p>Prêt à donner vie à votre projet ?</p>
            <BaseButton variant="green" to="/calculateur">Cliquez ici</BaseButton>
          </div>
          <!-- Image -->
          <nuxt-img
            src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/08/Kitchen-decor-ideas-2023-Drew-F-1024x753.jpg"
            class="w-full  lg:max-w-[400px] 2xl:max-w-[500px] rounded-2xl"
            loading="lazy"
            alt="portrait"
          />
        </div>
  </section>
</template>
