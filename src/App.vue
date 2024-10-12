<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/products">Produits</router-link></li>
        <li><router-link to="/ProductDetails">Details de Produits</router-link></li>
        <li><router-link to="/cart">Panier</router-link></li>
        <li><router-link to="/checkout">Caisse</router-link></li>
        <li><router-link to="/signup">Inscription</router-link></li>
        <li><router-link to="/login">Connexion</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- This is where the page content will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
