<template>
  <div class="product-details">
    <div v-if="product" class="product-details-container">
      <!-- Display the details of the selected product -->
      <div class="product-image-container">
        <img :src="require(`@/assets/${product.image}`)" :alt="product.titre" />
      </div>
      <div class="product-info">
        <h1>{{ product.titre }}</h1>
        <p>{{ product.description }}</p>
        <p class="price">Price: <span>{{ product.prix }}€</span></p>

        <!-- Conditionally display add or remove button based on cart status -->
        <button v-if="!isInCart" @click="addToCart(product)">Ajouter au panier</button>
        <button v-if="isInCart" @click="removeFromCart(product.id)">Supprimer du panier</button>

        <router-link to="/ProductsListPage" class="return">Retour à la liste des produits</router-link>
      </div>
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
import { mapState, mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

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
    ...mapState(['produits']),
    ...mapGetters(['cartItems']),

    // Check if the product is already in the cart
    isInCart() {
      return this.cartItems.some(item => item.id === this.product.id);
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product);
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', productId);
    },
    fetchProductDetails() {
      const productId = this.$route.params.id;
      this.product = this.produits.find((prod) => prod.id === parseInt(productId));
    },
  },
  created() {
    if (this.$route.params.id) {
      this.fetchProductDetails();
    }
  },
};
</script>

<style scoped>
.product-details {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.product-details-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image-container {
  flex: 1;
  max-width: 250px; /* Adjusted max-width for a smaller image */
}

.product-image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info h1 {
  font-size: 24px; /* Reduced font size */
  color: #333;
  margin-bottom: 20px;
  font-weight: bold; /* Made the title bold */
}

.product-info p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.product-info .price {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

.product-info .price span {
  color: #333;
}

button {
  background-color: #333333;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  align-self: start;
}

button:hover {
  background-color: #218838;
}

.return {
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
}

.return:hover {
  text-decoration: underline;
}

.all-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
