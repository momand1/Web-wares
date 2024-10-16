<!-- src/components/OrderSummary.vue -->
<template>
    <div class="cart-summary">
      <p><strong>Total HT :</strong> {{ totalHT }} €</p>
      <p><strong>Total TTC :</strong> {{ totalTTC }} €</p>
      <button @click="checkout">Passer à la caisse</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalHT: {
        type: Number,
        required: true
      },
      totalTTC: {
        type: Number,
        required: true
      }
    },
    methods: {
      checkout() {
        this.$emit('checkout');
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-summary {
    margin-top: 20px;
  }
  button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>