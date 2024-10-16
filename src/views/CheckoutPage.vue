<!-- src/views/CheckoutPage.vue -->
<template>
  <div class="checkout-page">
    <h1>Checkout</h1>

    <!-- Cart Items Section -->
    <div v-if="cartItems && cartItems.length > 0">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="require(`@/assets/${item.image}`)" :alt="item.titre">
        <h3>{{ item.titre }}</h3>
        <p>Prix: {{ item.prix }}€</p>
        <p>Quantité: {{ item.quantity }}</p>
      </div>

      <!-- Total Summary -->
      <div class="total-summary">
        <h3>Total: {{ totalCartPrice}}€</h3>
        <button @click="proceedToPayment">Proceed to Payment</button>
      </div>
    </div>

    <!-- If Cart is Empty -->
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // Get cart items and total from Vuex store
    ...mapState(['cart']),
    ...mapGetters(['totalCartPrice', 'cartItems']),

  },
  methods: {
    // Trigger payment 
    proceedToPayment() {
      alert('Proceeding to payment...');
    }
  }
};
</script>

<style scoped>
.checkout-page {
  padding: 20px;
}

.cart-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.cart-item img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.total-summary {
  margin-top: 20px;
  font-weight: bold;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
