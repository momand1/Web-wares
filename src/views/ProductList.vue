<!-- src/views/ProductsListPage.vue -->
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
          @addToCart="addToCart"
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
        // products: [],

      };
    },
    computed: {
        ...mapState(['produits']),
        ...mapGetters(['totalItemsInCart']),
        filteredProducts() {
            if (this.searchQuery) {
                return this.produits.filter(product => 
                    product.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            }
            return this.produits;
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('ADD_TO_CART', product);
        },
    },
     
  };
  </script>
  
  <style scoped>
  .products-list {
    padding: 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .cart-summary {
    margin-bottom: 20px;
    font-weight: bold;
  }
  </style>
  