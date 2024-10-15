<!-- src/views/CartPage.vue -->
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Mon Panier</h1>
    <table class="table table-striped" v-if="cartItems.length > 0">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Produit</th>
          <th scope="col">Quantité</th>
          <th scope="col">Prix HT</th>
          <th scope="col">Total HT</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @remove-from-cart="removeFromCart"
        />
      </tbody>
    </table>

    <div v-else class="alert alert-info">Votre panier est vide.</div>

    <CartSummary v-if="cartItems.length > 0" :totalHT="cartTotalHT" :totalTTC="cartTotalTTC" @checkout="checkout" />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import CartSummary from '@/components/OrderSummary.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    CartItem,
    CartSummary
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotalHT', 'cartTotalTTC'])
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART']),
    removeFromCart(productId) {
      this.REMOVE_FROM_CART(productId);
    },
    checkout() {
      // Logique pour passer à la caisse
      alert('Passer à la caisse');
    }
  }
};
</script>

<style scoped>
/* Style de la page du panier */
.cart-page {
  margin: 40px auto;
  max-width: 900px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Style pour la table des articles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th, table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

/* Style pour l'en-tête des colonnes */
table th {
  background-color: #f2f2f2;
  font-weight: 600;
  color: #333;
}

/* Style des cellules */
table td {
  color: #666;
}

/* Bouton pour retirer un produit */
button {
  background-color: #e74c3c;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c0392b;
}

/* Style pour le texte "Panier vide" */
.cart-empty {
  text-align: center;
  color: #999;
  font-size: 18px;
  margin-top: 20px;
}
</style>



