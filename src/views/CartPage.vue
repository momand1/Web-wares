<!-- src/views/CartPage.vue -->
<template>
  <div class="cart-page">
    <h1>Mon Panier</h1>
    
    <!-- Afficher les produits -->
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" @add-to-cart="addToCart" />
    </div>

    <!-- Résumé du panier -->
    <OrderSummary :totalHT="cartTotalHT" :totalTTC="cartTotalTTC" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import OrderSummary from '@/components/OrderSummary.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    ProductCard,
    OrderSummary
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produit A', priceHT: 10.0 },
        { id: 2, name: 'Produit B', priceHT: 20.0 }
      ]
    };
  },
  computed: {
    ...mapGetters(['cartTotalHT', 'cartTotalTTC'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product);
    }
  }
};
</script>

<style scoped>
.cart-page {
  margin: 20px;
}
</style>

