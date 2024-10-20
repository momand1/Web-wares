<template>
    <div class="container mt-5">
      <!-- Titre principal stylisé -->
      <h1 class="text-center mb-4 display-4">Panneau d'administration</h1>
      <div class="row">
        <!-- Navigation latérale avec des onglets -->
        <div class="col-md-3">
          <nav class="list-group shadow-sm rounded">
            <router-link to="/admin/users" class="list-group-item list-group-item-action active-custom">
              <i class="fas fa-users"></i> Gérer les utilisateurs
            </router-link>
            <router-link to="/admin/products" class="list-group-item list-group-item-action">
              <i class="fas fa-box"></i> Gérer les produits
            </router-link>
            <router-link to="/admin/categories" class="list-group-item list-group-item-action">
              <i class="fas fa-tags"></i> Gérer les catégories
            </router-link>
            <router-link to="/admin/orders" class="list-group-item list-group-item-action">
              <i class="fas fa-shopping-cart"></i> Gérer les commandes
            </router-link>
          </nav>
        </div>
  
        <!-- Section principale où les composants dynamiques sont chargés -->
        <div class="col-md-9">
          <div class="card shadow-sm border-0 rounded p-3">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard'
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour le panneau d'administration */
  
  /* Style pour la barre de navigation latérale */
  .list-group-item {
    font-size: 1.1rem;
    padding: 15px;
  
    transition: background-color 0.3s, color 0.3s;
    border:none;
    
  }
  
  /* Style actif pour l'onglet sélectionné */
  .list-group-item.active-custom {
    background-color: grey;
    color: #fff;
    font-weight: bold;
    border-left: 4px solid black;
  }
  
  /* Effet de survol sur les éléments de la liste */
  .list-group-item:hover {
    background-color: #e9ecef;
    color: black;
    font-weight: 500;
  }
  
  /* Styles pour la section principale */
  .card {
    background-color: #ffffff;
  
    padding: 2rem;
  }
  
  /* Titre principal stylisé */
  h1.display-4 {
    font-weight: 700;
    color: #343a40;
  }
  
  /* Ombres douces pour les cartes */
  .shadow-sm {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Ajout d'icônes Font Awesome */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  </style>