<!-- src/components/OrderSummary.vue -->
<template>
  <div class="cart-summary">
    <p><strong>Total HT :</strong> {{ totalHT }} €</p>
    <p><strong>Frais de livraison :</strong> 5.99 €</p>
    <p><strong>Total TTC :</strong> {{ totalTTC }} €</p>
    <router-link to="/checkout" class="btn btn-primary">
      Détail Panier
    </router-link>  
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
.btn {
  background-color: grey;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>


