<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/List-Produits">Produits</router-link> |
            <router-link to="/ProductDetails">Details de Produits</router-link> |
            <router-link to="/CartPage">Panier</router-link> | 
            <router-link to="/OrderSummar">Detailles de Commande</router-link> |
            <router-link to="/RegistrationPage">Inscription</router-link> |
            <router-link to="/LoginPage">Connexion</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'HeaderPage',

        
    }
</script>

<style scoped>

</style>