<template>
    <!-- Début Blog -->
    <section >
        <div class="container">
            <div class="grid grid-cols-1">
                <div class="text-center">
                    <h2 class="font-semibold text-[26px]/normal mt-7">Découvrez nos conseils et inspirations pour vos
                        rénovations.</h2>
                    <p class="mt-5 text-gray max-w-[708px] mx-auto">Nous partageons des astuces, des tendances et des
                        idées pour vous accompagner dans vos projets de rénovation.</p>
                </div>
                <div class="text-center mt-10">
                    <NuxtLink to="/blog"
                        class="relative inline-block px-8 py-3 text-lg font-medium text-orange rounded-md group overflow-hidden">
                        <span
                            class="absolute inset-0 w-full h-full bg-orange transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left rounded-md"></span>
                        <span
                            class="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                            Voir tous les blogs
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor"
                                class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5L19.5 12l-6 7.5M4.5 12h15" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
                <!-- Article 1 -->
                <div data-aos="fade-up">
                    <div class="relative overflow-hidden group rounded-lg">
                        <NuxtLink :to="'/blog/cuisine-moderne'">
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/08/Kitchen-decor-ideas-2023-Drew-F-1024x753.jpg"
                                class="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-110"
                                alt="Cuisine moderne">
                            <span
                                class="absolute top-2 right-2 p-2.5 rounded-lg bg-orange text-white text-xs">Cuisine</span>
                        </NuxtLink>
                    </div>
                    <div class="py-5">
                        <NuxtLink :to="'/blog/cuisine-moderne'"
                            class="inline-block font-semibold duration-300 text-xl/normal mt-7 hover:text-orange">
                            10 idées de rénovation pour une cuisine moderne et fonctionnelle
                        </NuxtLink>
                        <div class="flex items-center mt-6 gap-2.5">
                            <img src="https://ui-avatars.com/api/?name=Mathieu+Dupont&background=random&size=64"
                                class="rounded-full w-10 h-10" alt="Mathieu Dupont">
                            <div class="space-y-0.5">
                                <p class="font-semibold">Mathieu Dupont</p>
                                <p class="text-sm text-gray">01 Janvier 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Article 2 -->
                <div data-aos="fade-up">
                    <div class="relative overflow-hidden group rounded-lg">
                        <NuxtLink :to="'/blog/salle-de-bain'">
                            <img src="https://www.helloprojectusa.com/wp-content/uploads/2020/08/Main-S-Brm-scaled-e1598302740659.jpg"
                                class="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-110"
                                alt="Salle de bain">
                            <span class="absolute top-2 right-2 p-2.5 bg-orange rounded-lg text-white text-xs">Salle de
                                Bain</span>
                        </NuxtLink>
                    </div>
                    <div class="py-5">
                        <NuxtLink :to="'/blog/salle-de-bain'"
                            class="inline-block font-semibold duration-300 text-xl/normal mt-7 hover:text-orange">
                            5 tendances incontournables pour rénover votre salle de bain
                        </NuxtLink>
                        <div class="flex items-center mt-6 gap-2.5">
                            <img src="https://ui-avatars.com/api/?name=Sophie+Lambert&background=random&size=64"
                                class="rounded-full w-10 h-10" alt="Sophie Lambert">
                            <div class="space-y-0.5">
                                <p class="font-semibold">Sophie Lambert</p>
                                <p class="text-sm text-gray">01 Janvier 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Article 3 -->
                <div data-aos="fade-up">
                    <div class="relative overflow-hidden group rounded-lg">
                        <NuxtLink :to="'/blog/sous-sol'">
                            <img src="https://kowalske.com/wp-content/uploads/2019/08/Kowalske-Hartland-Basement-8.jpg"
                                class="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-110"
                                alt="Sous-sol">
                            <span
                                class="absolute top-2 right-2 rounded-lg p-2.5 bg-orange text-white text-xs">Sous-sol</span>
                        </NuxtLink>
                    </div>
                    <div class="py-5">
                        <NuxtLink :to="'/blog/sous-sol'"
                            class="inline-block font-semibold duration-300 text-xl/normal mt-7 hover:text-orange">
                            Astuces pour transformer votre sous-sol en espace de vie
                        </NuxtLink>
                        <div class="flex items-center mt-6 gap-2.5">
                            <img src="https://ui-avatars.com/api/?name=Jean+Morel&background=random&size=64"
                                class="rounded-full w-10 h-10" alt="Jean Morel">
                            <div class="space-y-0.5">
                                <p class="font-semibold">Jean Morel</p>
                                <p class="text-sm text-gray">01 Janvier 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
               


            </div>
        </div>
    </section>
    <!-- Fin Blog -->
</template>