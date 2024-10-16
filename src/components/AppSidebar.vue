<template>
    <div :class="['sidebar', { 'sidebar-active': isActive }]">
      <button @click="closeSidebar" class="close-button">×</button>
      <nav class="flex flex-col space-y-4 mt-10">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/ProductsListPage" class="nav-link">Produits</router-link>
        <router-link to="/cart" class="nav-link">Panier</router-link>
        <router-link to="/checkout" class="nav-link">Caisse</router-link>
        <router-link to="/signup" class="nav-link">Inscription</router-link>
        <router-link to="/login" class="nav-link">Connexion</router-link>
        <router-link to="/admin" class="nav-link">Admin</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Side-bar',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeSidebar() {
        this.$emit('toggle'); // Emit the toggle event to parent
      }
    }
  };
  </script>
  
  <style>
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* Hidden by default */
    width: 250px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transition: left 0.3s ease; /* Animation */
    z-index: 1000;
  }
  
  .sidebar-active {
    left: 0; /* Show when active */
  }
  
  .nav-link {
    color: #4F46E5; /* Indigo color */
    padding: 12px;
    text-decoration: none;
    font-weight: 600;
  }
  
  .close-button {
    font-size: 2rem;
    color: #4F46E5;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: auto;
  }
  </style>
  