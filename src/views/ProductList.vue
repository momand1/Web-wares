<template>
  <div class="products-list">
    <div class="cart-summary">
      <p>Items in Cart: {{ totalItemsInCart }}</p>
    </div>
    <h1>Nos Produits</h1>

    <!-- Search Bar -->
    <SearchBar v-model="searchQuery" />

    <!-- Product Grid -->
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :isInCart="isProductInCart(product.id)"
        @addToCart="addToCart"
        @removeFromCart="removeFromCart"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    SearchBar,
    ProductCard,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapState(['produits']),
    ...mapGetters(['totalItemsInCart', 'cartItems']),
    filteredProducts() {
      // Start with all products
      let filtered = this.produits;

      // Filter by selected category from query params
      const selectedCategory = this.$route.query.category;

      if (selectedCategory) {
        filtered = filtered.filter(product => product.categorieId === parseInt(selectedCategory));
      }

      // Then filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product);
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', productId);
    },
    isProductInCart(productId) {
      return this.cartItems.some(item => item.id === productId);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
}
.products-list {
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.cart-summary {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; /* Light grey background */
  padding: 15px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a lifted effect */
  margin-bottom: 20px;
}

.cart-summary p {
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Dark grey text color */
  margin: 0;
}
</style>

  