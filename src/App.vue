<template>
  <div id="app">
    <nav>
      <button @click="toggleMenu" class="burger-menu" aria-label="Toggle navigation">&#9776;</button> 
      <ul :class="{ active: menuActive }">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/ProductsListPage">Produits</router-link></li>
        <li><router-link to="/ProductDetails">Details de Produits</router-link></li>
        <li><router-link to="/CartPage">Panier</router-link></li>
        <li><router-link to="/CheckoutPage">Caisse</router-link></li>
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
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

nav {
  position: relative;
}


.burger-menu {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Hide the menu by default on small screens */
ul {
  list-style: none;
  display: none; 
  flex-direction: column; 
  justify-content: center;
  gap: 10px;
  transition: max-height 0.8s ease;
  
}

/* Show the menu when active */
ul.active {
  display: flex; 
  max-height: 300px;
  opacity: 1;
}

/* Responsive Styles */
@media (min-width: 768px) {
  ul {
    display: flex; 
    flex-direction: row;
  }
  .burger-menu {
    display: none; 
  }
}
</style>