<template>
  <div class="flex flex-col-reverse md:flex-row container mx-auto px-0 py-6 gap-8">
    <!-- Gauche : Progression et Questions Répondues -->
    <div class="w-full md:w-1/4 p-4 rounded-lg shadow-md">
      <h2 class="text-lg font-bold">Devis rénovation</h2>
      <!-- Barre de progression -->
      <div class="mb-4">
        <p class="text-sm font-medium mb-2">
          {{ currentQuestionIndex === 0 ? '0 Complété' : `${currentQuestionIndex}/${questions.length} Complétés` }}
        </p>
          <div
            class="bg-blue-500 h-2 w-full rounded"
            :style="{ width: progressPercentage + '%' }"
          ></div>
      </div>
      <ul class="space-y-4">
        <li
          v-for="(question, index) in answeredQuestions"
          :key="index"
          class="flex items-start"
        >
          <span class="font-bold mr-2">{{ index + 1 }}</span>
          <div>
            <p class="font-medium">{{ question.question }}</p>
            <p class="text-gray-600">{{ question.answer }}</p>
          </div>
        </li>
      </ul>
      
    </div>

    <!-- Droite : Questionnaire -->
<div class="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
  <div v-if="!isCompleted">
    <h5 class="mb-6">
      {{ currentQuestion.question }}
    </h5>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        v-for="option in currentQuestion.options"
        :key="option.text"
        @click="selectAnswer(option.value, option.text)"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {{ option.text }}
      </button>
    </div>
  </div>

  <!-- Formulaire de Contact Après Complétion -->
  <div v-else-if="!isPaymentPage && isCompleted && !isContactFormSubmitted">
    <h2 class="text-2xl font-bold mb-4">Votre Total : {{ totalCost }} $</h2>
    <p class="mb-6">
      Veuillez remplir le formulaire ci-dessous pour finaliser votre devis et être contacté par notre équipe.
    </p>
    <form @submit.prevent="goToPayment">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            v-model="form.firstName"
            type="text"
            id="firstName"
            class="mt-1 p-2 block w-full border rounded"
          />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            v-model="form.lastName"
            type="text"
            id="lastName"
            class="mt-1 p-2 block w-full border rounded"
          />
        </div>
      </div>
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div class="mt-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Numéro de Téléphone</label>
        <input
          v-model="form.phone"
          type="text"
          id="phone"
          class="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <button
        type="submit"
        class="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Soumettre
      </button>
    </form>
  </div>

    <!-- Page de Paiement -->
    <div v-else-if="isPaymentPage">
      <h2 class="text-2xl font-bold mb-4">Paiement</h2>
        <p class="mb-6">Veuillez saisir vos informations de paiement :</p>
        <form @submit.prevent="handlePayment">
          <div class="mt-4">
            <label for="cardName" class="block text-sm font-medium text-gray-700">Nom sur la Carte</label>
            <input
              v-model="paymentDetails.cardName"
              type=text
              id="cardName"
              class="mt-1 p-2 block w-full border rounded"
            />
          </div>
          <div class="mt-4">
            <label for="cardNumber" class="block text-sm font-medium text-gray-700">Numéro de Carte</label>
            <input
              v-model="paymentDetails.cardNumber"
              type=text
              id="cardNumber"
              class="mt-1 p-2 block w-full border rounded"
            />
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label for="expDate" class="block text-sm font-medium text-gray-700">Date d'Expiration</label>
              <input
                v-model="paymentDetails.expDate"
                type=text
                id="expDate"
                placeholder="MM/AA"
                class="mt-1 p-2 block w-full border rounded"
              />
            </div>
            <div>
              <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
              <input
                v-model="paymentDetails.cvv"
                type=text
                id="cvv"
                class="mt-1 p-2 block w-full border rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            class="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Valider le Paiement
          </button>
        </form>
        <p v-if="paymentSuccess" class="text-green-500 font-bold mt-4">Paiement Réussi !</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// Données du Questionnaire
const categoryQuestions = ref({
  cuisine: [
    { question: "Quelle est la taille de votre cuisine ?", options: [{text: "Petite", value: 100}, {text: "Moyenne", value: 200}, {text: "Grande", value: 300}] },
    { question: "Votre cuisine a-t-elle besoin de nouveaux appareils électroménagers ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Préférez-vous des comptoirs en granit ou en quartz ?", options: [{text: "Granit", value: 200}, {text: "Quartz", value: 300}] },
    { question: "Quel type de sol préférez-vous ?", options: [{text: "Carrelage", value: 100}, {text: "Bois", value: 200}, {text: "Vinyle", value: 150}] },
    { question: "Souhaitez-vous un îlot central ?", options: [{text: "Oui", value: 250}, {text: "Non", value: 0}] },
    { question: "Combien de prises électriques souhaitez-vous ajouter ?", options: [{text: "1-3", value: 50}, {text: "4-6", value: 100}, {text: "Plus de 6", value: 150}] },
    { question: "Voulez-vous intégrer des solutions de rangement intelligentes ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] }
  ],

  'salle-de-bain': [
    { question: "Quel type de douche souhaitez-vous installer ?", options: [{text: "Cabine", value: 200}, {text: "Italienne", value: 300}] },
    { question: "Souhaitez-vous une baignoire ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Quel style de carrelage préférez-vous ?", options: [{text: "Moderne", value: 100}, {text: "Classique", value: 100}, {text: "Vintage", value: 100}] },
    { question: "Voulez-vous intégrer un système de chauffage au sol ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel est votre budget pour la rénovation ?", options: [{text: "Économique", value: 100}, {text: "Moyen", value: 200}, {text: "Luxueux", value: 300}] },
    { question: "Combien de lavabos souhaitez-vous ?", options: [{text: "Un", value: 50}, {text: "Deux ou plus", value: 100}] },
    { question: "Souhaitez-vous des installations spéciales comme des jets de massage ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] }
  ],

  toiture: [
    { question: "Quelle est la superficie de votre toiture ?", options: [{text: "Moins de 100m²", value: 100}, {text: "100m² - 200m²", value: 200}, {text: "Plus de 200m²", value: 300}] },
    { question: "Votre toiture nécessite-t-elle une isolation ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel type de matériel préférez-vous pour votre toiture ?", options: [{text: "Tuiles", value: 100}, {text: "Ardoise", value: 200}, {text: "Métal", value: 300}] },
    { question: "Votre toiture a-t-elle des problèmes de fuite ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Souhaitez-vous installer des panneaux solaires ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel est l'âge actuel de votre toiture ?", options: [{text: "Moins de 10 ans", value: 50}, {text: "10 à 20 ans", value: 150}, {text: "Plus de 20 ans", value: 250}] },
    { question: "Voulez-vous une toiture à faible impact environnemental ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] }
  ],

  'sous-sol': [
    { question: "Votre sous-sol est-il actuellement fini ?", options: [{text: "Oui", value: 0}, {text: "Non", value: 300}] },
    { question: "Souhaitez-vous un espace de jeu ou un home cinéma ?", options: [{text: "Espace de jeu", value: 200}, {text: "Home cinéma", value: 300}] },
    { question: "Avez-vous des problèmes d'humidité ou d'infiltration d'eau ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Quelle sera la principale fonction de votre sous-sol ?", options: [{text: "Espace de vie", value: 100}, {text: "Stockage", value: 50}, {text: "Bureau", value: 150}] },
    { question: "Voulez-vous installer un système de chauffage ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel type d'éclairage préférez-vous ?", options: [{text: "LED", value: 150}, {text: "Halogène", value: 100}] },
    { question: "Avez-vous besoin de solutions d'isolation acoustique ?", options: [{text: "Oui", value: 250}, {text: "Non", value: 0}] }
  ],

  porte: [
    { question: "Combien de portes extérieures souhaitez-vous remplacer ?", options: [{text: "1-3", value: 100}, {text: "4-6", value: 200}, {text: "7+", value: 300}] },
    { question: "Souhaitez-vous des portes avec isolation thermique ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Quel style de porte préférez-vous ?", options: [{text: "Moderne", value: 150}, {text: "Classique", value: 150}, {text: "Rustique", value: 150}] },
    { question: "Voulez-vous des portes sécurisées ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel matériau préférez-vous pour vos portes ?", options: [{text: "Bois", value: 100}, {text: "PVC", value: 200}, {text: "Aluminium", value: 300}] },
    { question: "Combien de portes intérieures souhaitez-vous installer ?", options: [{text: "Moins de 5", value: 50}, {text: "5 à 10", value: 100}, {text: "Plus de 10", value: 150}] },
    { question: "Souhaitez-vous des portes avec des vitres intégrées ?", options: [{text: "Oui", value: 250}, {text: "Non", value: 0}] }
  ],

  patio: [
    { question: "Quelle taille de patio envisagez-vous ?", options: [{text: "Petit", value: 100}, {text: "Moyen", value: 200}, {text: "Grand", value: 300}] },
    { question: "Quel matériau préférez-vous pour le patio ?", options: [{text: "Bois", value: 100}, {text: "Composite", value: 200}, {text: "Pierre", value: 300}] },
    { question: "Votre patio inclura-t-il une zone couverte ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Souhaitez-vous des équipements intégrés comme un barbecue ?", options: [{text: "Oui", value: 250}, {text: "Non", value: 0}] },
    { question: "Voulez-vous des installations pour le chauffage extérieur ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] },
    { question: "Quel est votre budget pour la construction du patio ?", options: [{text: "Économique", value: 100}, {text: "Standard", value: 200}, {text: "Premium", value: 300}] },
    { question: "Votre patio doit-il être accessible aux personnes à mobilité réduite ?", options: [{text: "Oui", value: 200}, {text: "Non", value: 0}] }
  ],

  fenetre: [
    { question: "Combien de fenêtres souhaitez-vous remplacer ?", options: [{text: "1-5", value: 100}, {text: "6-10", value: 200}, {text: "11+", value: 300}] },
    { question: "Quel type de vitrage préférez-vous ?", options: [{text: "Double", value: 200}, {text: "Triple", value: 300}] },
    { question: "Souhaitez-vous des fenêtres à haute efficacité énergétique ?", options: [{text: "Oui", value: 300}, {text: "Non", value: 0}] },
    { question: "Quel matériau de cadre préférez-vous ?", options: [{text: "Bois", value: 100}, {text: "PVC", value: 200}, {text: "Aluminium", value: 300}] },
    { question: "Vos nouvelles fenêtres doivent-elles inclure des ouvertures de ventilation ?", options: [{text: "Oui", value: 100}, {text: "Non", value: 0}] },
    { question: "Quel est votre budget pour le remplacement des fenêtres ?", options: [{text: "Limité", value: 100}, {text: "Modéré", value: 200 }] },
    { question: "Quel est votre budget pour le remplacement des fenêtres ?", options: [{ text: "Limité", value: 100 }, { text: "Modéré", value: 200 }, { text: "Élevé", value: 300 }] },
    { question: "Préférez-vous des fenêtres personnalisées ou standard ?", options: [{ text: "Personnalisées", value: 300 }, { text: "Standard", value: 100 }] }
  ],
    

  mur: [
    { question: "Quelle est la superficie totale des murs à rénover ?", options: [{ text: "Moins de 50 m²", value: 100 }, { text: "50 à 100 m²", value: 200 }, { text: "Plus de 100 m²", value: 300 }] },
    { question: "Souhaitez-vous peindre ou poser du papier peint ?", options: [{ text: "Peindre", value: 100 }, { text: "Papier peint", value: 200 }] },
    { question: "Voulez-vous des finitions spéciales comme des moulures ?", options: [{ text: "Oui", value: 300 }, { text: "Non", value: 0 }] },
    { question: "Avez-vous des préférences pour des matériaux écologiques ?", options: [{ text: "Oui", value: 300 }, { text: "Non", value: 0 }] },
    { question: "Les murs nécessitent-ils des réparations avant la rénovation ?", options: [{ text: "Oui", value: 200 }, { text: "Non", value: 0 }] },
    { question: "Souhaitez-vous intégrer de l'isolation phonique ?", options: [{ text: "Oui", value: 300 }, { text: "Non", value: 0 }] },
    { question: "Quel est votre budget pour la rénovation des murs ?", options: [{ text: "Économique", value: 100 }, { text: "Standard", value: 200 }, { text: "Luxueux", value: 300 }] }
  ]
});

const currentCategory = ref(route.params.category);
const questions = computed(() => categoryQuestions.value[currentCategory.value] || []);
const currentQuestionIndex = ref(0);
const answeredQuestions = ref([]);
const totalCost = ref(0);

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
});
const paymentDetails = ref({
  cardName: '',
  cardNumber: '',
  expDate: '',
  cvv: '',
});

const paymentSuccess = ref(false);
const isContactFormSubmitted = ref(false);
const isPaymentPage = ref(false);

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const isCompleted = computed(() => currentQuestionIndex.value >= questions.value.length);
const progressPercentage = computed(() => (answeredQuestions.value.length / questions.value.length * 100).toFixed(0));

const selectAnswer = (value, text) => {
  totalCost.value += value;
  answeredQuestions.value.push({ question: currentQuestion.value.question, answer: text });
  currentQuestionIndex.value++;
};

const goToPayment = () => {
  isContactFormSubmitted.value = true;
  // Delay setting isPaymentPage to true to ensure the form submission completes first
  setTimeout(() => {
    isPaymentPage.value = true;
  }, 100); // Delay can be adjusted as needed
};

const handlePayment = () => {
  paymentSuccess.value = true;
  console.log('Payment Details:', paymentDetails.value);
};
</script>

<style scoped>
.progress-bar {
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 4px;
}
.progress {
  height: 4px;
  background-color: #3b82f6;
  border-radius: 4px;
  transition: width 0.3s ease;
}
</style>





