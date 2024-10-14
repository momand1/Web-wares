<template>
  <div class="product-details">
    <div v-if="product">
      <!-- Display the details of the selected product -->
      <h1>{{ product.titre }}</h1>
      <img :src="require(`@/assets/${product.image}`)" :alt="product.titre" />
      <p>{{ product.description }}</p>
      <p>Price: {{ product.prix }}€</p>
      <button @click="addToCart(product)">Ajouter au panier</button>
      <router-link to="/ProductsListPage">Retour à la liste des produits</router-link>
    </div>

    <div v-else>
      <!-- Display all products if no specific product is selected -->
      <h2>Tous les Produits</h2>
      <div class="all-products">
        <ProductCard
          v-for="prod in produits"
          :key="prod.id"
          :product="prod"
          @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard.vue'; // Make sure to import your ProductCard component

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapState(['produits']), // Get all products from the store
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product);
    },
    fetchProductDetails() {
      const productId = this.$route.params.id; // Get product ID from route parameters
      this.product = this.produits.find((prod) => prod.id === parseInt(productId)); // Find the product in the state
    },
  },
  created() {
    // Check if there's a product ID in the route parameters
    if (this.$route.params.id) {
      this.fetchProductDetails(); // Fetch product details when the component is created
    }
  },
};
</script>

<style scoped>
.product-details {
  padding: 20px;
}
.product-details img {
  max-width: 300px;
}
.all-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
