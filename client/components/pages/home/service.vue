<template>
    <!-- Start Services -->
    <section class="bg-purple/5 py-24">
        <div class="container">
                <div class="flex flex-col items-center text-center">
                    <h2 class="max-w-[708px] leading-tight">Réinventez votre chez-vous avec nos solutions de rénovation</h2>
                    <p class="mt-5 text-black  mx-auto">
                        Transformez vos espaces de vie avec nos services de rénovation. <br> Obtenez un devis instantané adapté à vos besoins.                    </p>
                </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
                <!-- Service 1 -->
                <div class="p-7 space-y-5 rounded-lg shadow-lg text-center bg-white">
                   
                    <h4>Rénovation de Cuisine</h4>
                    <p>
                        Transformez votre cuisine en un espace moderne et fonctionnel. Nous vous accompagnons dans le choix des matériaux et l'optimisation de l'agencement.
                    </p>
                </div>
                <!-- Service 2 -->
                <div class="service">
                
                    <h4>Rénovation de Salle de Bain</h4>
                    <p>
                        Offrez à votre salle de bain un design contemporain et des équipements modernes pour plus de confort et d’élégance.
                    </p>
                </div>
                <!-- Service 3 -->
                <div class="service">
                    
                    <h4>Aménagement de Sous-Sol</h4>
                    <p>
                        Transformez votre sous-sol en un espace fonctionnel et accueillant, que ce soit pour un bureau, une salle de jeux ou un espace détente.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Services -->
</template>

<style lang="scss" scoped> 
.service{
    @apply p-7 space-y-5 rounded-lg shadow-lg  text-center bg-white;
}
</style>

