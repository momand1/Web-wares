<template>
    <div class="product-card">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
            <img :src="require(`@/assets/${product.image}`)" :alt="product.titre" />
            <h3>{{ product.titre }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.prix }}€</p>
            <p>Min: {{ product.moq }}</p>
        </router-link>

        <!-- Conditional Button Rendering -->
        <button v-if="isLoggedIn && !isInCart" @click="addToCart(product)">Ajouter au panier</button>
        <button v-if="isLoggedIn && isInCart" @click="removeFromCart(product.id)">Supprimer</button>
        <p v-else>Connectez-vous pour ajouter au panier</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
        isInCart: {
            type: Boolean, // Prop to check if product is in the cart
            required: true
        }
    },
    computed: {
        ...mapState(['isLoggedIn'])
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch('addToCart', product); 
        },
        removeFromCart(productId) {
            this.$store.commit('REMOVE_FROM_CART', productId); // Remove from cart logic
        },
    }
};
</script>

<style scoped>
/* Your styles remain unchanged */
.product-card {
    border: 1px solid #e0e0e0; 
    padding: 20px; 
    text-align: center;
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #fff; 
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
}

.product-card img {
    width: 150px; 
    height: 150px;
    border-radius: 10px; 
    object-fit: cover; 
    margin-bottom: 15px; 
}

.product-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333; 
    font-weight: bold;
}

.product-card p {
    font-size: 14px;
    color: #666; 
    margin-bottom: 10px;
}

.product-card p:last-of-type {
    font-weight: bold; 
    color: red;
}

button {
    padding: 10px 20px; 
    background-color: #333333; 
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 25px; 
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #218838; 
}

button:disabled {
    background-color: #ccc; 
    cursor: not-allowed;
}
</style>