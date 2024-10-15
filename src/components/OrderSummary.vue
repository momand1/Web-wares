<!-- src/components/OrderSummary.vue -->
<template>
  <div class="order-summary">
    <p><strong>Total HT :</strong> {{ totalHT }} €</p>
    <p><strong>Total TTC :</strong> {{ totalTTC }} €</p>
    <router-link to="/CheckoutPage">
      <button>Voir le résumé du panier</button>
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
  }
};
</script>

<style scoped>
.order-summary {
  margin-top: 20px;
}
</style>

