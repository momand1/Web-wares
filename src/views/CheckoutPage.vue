<!-- src/views/CheckoutPage.vue -->
<template>
  <div class="checkout-page">
    <h1>Résumé du Panier</h1>
    <table v-if="cartItems.length > 0">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Quantité</th>
          <th>Total HT</th>
          <th>Total TTC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ (item.priceHT * item.quantity).toFixed(2) }} €</td>
          <td>{{ (item.priceHT * item.quantity * 1.20).toFixed(2) }} €</td>
        </tr>
      </tbody>
    </table>
    <OrderSummary :totalHT="cartTotalHT" :totalTTC="cartTotalTTC" />
  </div>
</template>

<script>
import OrderSummary from '@/components/OrderSummary.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    OrderSummary
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotalHT', 'cartTotalTTC'])
  }
};
</script>

<style scoped>
.checkout-page {
  margin: 20px;
}
</style>

