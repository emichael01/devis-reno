<template>
  <div class="flex container mx-auto px-0 py-6 gap-8">
    <!-- Gauche : Progression et Questions Répondues -->
    <div class="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
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
    <div class="w-3/4 bg-white p-6 rounded-lg shadow-md">
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
      <div v-else-if="!isPaymentPage">
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
    <div v-else>
        <h2 class="text-2xl font-bold mb-4">Paiement</h2>
        <p class="mb-6">Veuillez saisir vos informations de paiement :</p>
        <form @submit.prevent="handlePayment">
          <div class="mt-4">
            <label for="cardName" class="block text-sm font-medium text-gray-700">Nom sur la Carte</label>
            <input
              v-model="paymentDetails.cardName"
              type="text"
              id="cardName"
              class="mt-1 p-2 block w-full border rounded"
            />
          </div>
          <div class="mt-4">
            <label for="cardNumber" class="block text-sm font-medium text-gray-700">Numéro de Carte</label>
            <input
              v-model="paymentDetails.cardNumber"
              type="text"
              id="cardNumber"
              class="mt-1 p-2 block w-full border rounded"
            />
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label for="expDate" class="block text-sm font-medium text-gray-700">Date d'Expiration</label>
              <input
                v-model="paymentDetails.expDate"
                type="text"
                id="expDate"
                placeholder="MM/AA"
                class="mt-1 p-2 block w-full border rounded"
              />
            </div>
            <div>
              <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
              <input
                v-model="paymentDetails.cvv"
                type="text"
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
import { ref, computed } from 'vue';

// Données du Questionnaire
const questions = ref([
  { question: 'Quelle est la taille de votre cuisine ?', options: [{ text: 'Petite', value: 100 }, { text: 'Moyenne', value: 200 }, { text: 'Grande', value: 300 }] },
  { question: 'Quelle est la forme de votre cuisine ?', options: [{ text: 'En L', value: 100 }, { text: 'En U', value: 200 }, { text: 'En G', value: 300 }] },
  { question: 'Quelles parties souhaitez-vous rénover ?', options: [{ text: 'Placards', value: 100 }, { text: 'Sol', value: 200 }, { text: 'Plans de travail', value: 300 }] },
  { question: 'Combien de placards avez-vous ?', options: [{ text: 'Moins de 10', value: 100 }, { text: 'Entre 10 et 20', value: 200 }, { text: 'Plus de 20', value: 300 }] },
  { question: 'Quel type de sol préférez-vous ?', options: [{ text: 'Carrelage', value: 100 }, { text: 'Bois', value: 200 }, { text: 'Vinyle', value: 300 }] },
  { question: 'Quel est votre budget estimé ?', options: [{ text: 'Bas', value: 100 }, { text: 'Moyen', value: 200 }, { text: 'Élevé', value: 300 }] },
  { question: 'Avez-vous besoin d’une consultation design ?', options: [{ text: 'Oui', value: 100 }, { text: 'Non', value: 0 }] },
]);

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
const isPaymentPage = ref(false);

// Valeurs calculées
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const isCompleted = computed(() => currentQuestionIndex.value >= questions.value.length);
const progressPercentage = computed(() => ((answeredQuestions.value.length / questions.value.length) * 100).toFixed(0));

// Fonctions
const selectAnswer = (value, text) => {
  totalCost.value += value;
  answeredQuestions.value.push({ question: currentQuestion.value.question, answer: text });
  currentQuestionIndex.value++;
};

const goToPayment = () => {
  isPaymentPage.value = true;
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
