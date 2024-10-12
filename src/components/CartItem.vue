<!-- src/components/CartItem.vue -->
<template>
    <div class="cart-item">
      <img :src="`/assets/${item.image}`" alt="Product Image" />
      <div class="cart-item-details">
        <h4>{{ item.titre }}</h4>
        <p>Prix: {{ item.prix }} €</p>
        <p>Quantité:
          <input type="number" :value="item.quantite" @input="updateQuantity($event.target.value)" min="1" />
        </p>
        <button @click="removeItem(item.id)">Retirer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['item'],
    methods: {
      updateQuantity(quantity) {
        this.$emit('updateQuantity', { productId: this.item.id, quantity: parseInt(quantity) });
      },
      removeItem(id) {
        this.$emit('remove', id);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .cart-item img {
    width: 80px;
    height: 80px;
  }
  
  .cart-item-details {
    flex: 1;
    margin-left: 20px;
  }
  </style>
  