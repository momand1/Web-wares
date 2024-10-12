<!-- src/components/Header.vue -->
<template>
    <header>
      <nav class="navbar">
        <div class="navbar-logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="WebWares Logo" />
          </router-link>
        </div>
        <ul class="navbar-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/products">Tous les produits</router-link></li>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
          </li>
        </ul>
        <div class="navbar-user">
          <div v-if="!isLoggedIn">
            <router-link to="/login">Connexion</router-link>
            <router-link to="/signup">Inscription</router-link>
          </div>
          <div v-else>
            <router-link to="/cart">
              <i class="fa fa-shopping-cart"></i> Panier
            </router-link>
            <div class="user-menu">
              <span>Bienvenue, {{ user.raisonSociale }}</span>
              <button @click="logout">Déconnexion</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'Header',
    computed: {
      ...mapState(['categories', 'isLoggedIn', 'user']),
    },
    methods: {
      logout() {
        this.$store.commit('logout');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  