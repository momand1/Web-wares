<template>
  <div class="product-details" v-if="product">
    <h1>{{ product.titre }}</h1>
    <img :src="require(`@/assets/${product.image}`)" :alt="product.titre" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.prix }}€</p>
    <button @click="addToCart(product)">Ajouter au panier</button>
    <router-link to="/ProductsListPage">Retour à la liste des produits</router-link>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapState(['produits']), //mapstate getting data from state
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
    this.fetchProductDetails(); // Fetch product details when the component is created
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
</style>
