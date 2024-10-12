<!-- src/components/Footer.vue -->
<template>
    <footer class="site-footer">
      <div class="footer-content">
        <ul class="footer-links">
          <li><router-link to="/legal">Mentions Légales</router-link></li>
          <li><router-link to="/privacy">Politique de Confidentialité</router-link></li>
          <li><router-link to="/terms">Conditions d'Utilisation</router-link></li>
        </ul>
        <ul class="footer-social">
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <div v-if="isLoggedIn" class="user-footer">
        <span>Bienvenue, {{ user.raisonSociale }}</span>
        <button @click="logout">Déconnexion</button>
      </div>
    </footer>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'Footer',
    computed: {
      ...mapState(['isLoggedIn', 'user']),
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
  