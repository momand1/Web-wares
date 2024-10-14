<!-- src/views/Panier.vue -->
<template>
  <div class="cart">
    <h1>Panier</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="require(`@/assets/${item.image}`)" :alt="item.titre" />
        <div>
          <h3>{{ item.titre }}</h3>
          <p>{{ item.prix }}€</p>
          <p>Quantité: {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Retirer</button>
        </div>
      </div>
    </div>
    <p v-else>Votre panier est vide.</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems']),
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART']),
    removeFromCart(productID) {
      this.REMOVE_FROM_CART(productID);
    }
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.cart-item img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
button {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #ff3333;
}
</style>
