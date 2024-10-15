<!-- src/views/CartPage.vue -->
<template>
  <div class="cart-page">
    <h1>Mon Panier</h1>

    <!-- Afficher les produits du panier -->
    <table v-if="cartItems.length > 0">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Quantité</th>
          <th>Prix HT</th>
          <th>Total HT</th>
          <th>Actions</th>
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

    <!-- Si le panier est vide -->
    <div v-else>
      <p>Votre panier est vide.</p>
    </div>

    <!-- Afficher le résumé du panier si des articles sont présents -->
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
.cart-page {
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>


