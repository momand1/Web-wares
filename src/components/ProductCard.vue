<template>
    <div class="product-card">
        <img :src="require(`@/assets/${product.image}`)" :alt="product.titre">
        <h3>{{ product.titre }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.prix }}€</p>
        <p>Min: {{ product.moq }}</p>
        <button @click="addToCart(product)">Ajouter au panier</button>
    </div>
</template>

<script>
    export default {
        // name: 'ProductCard',

        props: {
            product: {
                type: Object,
                required: true
            }
        },

        methods: {
            addToCart() {
                this.$emit('addToCart', this.product); //emit is for transfering added product to cart 
            }
        },


        
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

</style>