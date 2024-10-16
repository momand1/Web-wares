<template>
    <div class="product-card">
        <router-link :to="{ name: 'ProductDetails', params: {id :product.id } }">
        <img :src="require(`@/assets/${product.image}`)" :alt="product.titre">
        <h3>{{ product.titre }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.prix }}€</p>
        <p>Min: {{ product.moq }}</p>
    </router-link>
        <button v-if="isLoggedIn" @click="addToCart(product)">Ajouter au panier</button>
        <p v-else>Connectez-vous pour ajouter au panier</p>
    </div>
</template>

<script>
    import { mapState} from 'vuex';
    export default {
        //name: 'ProductCard',

        props: {
            product: {
                type: Object,
                required: true,
                // cart: []
            }
        },

        computed: {
            ...mapState(['isLoggedIn'])
        },

        methods: {
            addToCart(product) {
                this.$store.dispatch('addToCart', product); 
            }

            // ...mapMutations(['ADD_TO_CART'])
        }   
    }
</script>

<style  scoped>
    .product-card {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
    }
    .product-card img {
        width: 100px;
        height: 100px;
    }
    button {
        padding: 5px 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 15px;
    }
    button:hover {
        background-color: #0069d9;
        padding: 5px;
    }

</style>