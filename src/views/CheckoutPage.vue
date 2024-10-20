<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Résumé du Panier</h1>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Produit</th>
          <th scope="col">Description</th>
          <th scope="col">Quantité</th>
          <th scope="col">Prix HT</th>
          <th scope="col">Total HT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.titre }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.prix }} €</td>
          <td>{{ item.prix * item.quantity }} €</td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 text-right">
      <p>Total HT : <strong>{{ cartTotalHT }} €</strong></p>
      <p>Frais de livraison :<strong>5.99 €</strong> </p>
      <p>Total TTC : <strong>{{ cartTotalTTC }} €</strong></p>
      <button class="btn btn-custom btn-lg mt-3" @click="showPaymentModal = true">
        Paiement
      </button>
    </div>
    <payment-modal v-if="showPaymentModal" @close="showPaymentModal = false" />
  </div>
</template>

<script>
import PaymentModal from '@/components/PaymentModal.vue';
export default {
   data() {
    return {
      showPaymentModal: false // Utilisé pour afficher/masquer la fenêtre de paiement
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotalHT() {
      return this.$store.getters.cartTotalHT;
    },
    cartTotalTTC() {
      return this.$store.getters.cartTotalTTC;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.commit('REMOVE_FROM_CART', id);
    },
  },
  components: {
    PaymentModal
  },
};
</script>

<style scoped>
/* Style personnalisé pour le bouton */
.btn-custom {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-custom:hover {
  background-color: grey;
}
</style>