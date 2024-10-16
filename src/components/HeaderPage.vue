<!-- src/views/LandingPage.vue -->
<template>
  
  
  <!-- Code navbar -->
  <nav class="navbar">
    <div class="navbar-logo">
      <router-link to="">
        <img src="../assets/logo.png" alt="logo" class="logo ms-4">
      </router-link>
    </div>
    <div class="navbar-container">
      <!-- Logo -->
      
      <!-- Navigation Links -->
      <ul class="navbar-links">
        <li><router-link to="/">Accueil</router-link></li>
        
        <!-- Dropdown Menu -->
        <li class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <span><router-link to="/ProductsListPage">Produits</router-link></span>
          <ul v-if="showDropdown" class="dropdown-menu">
            <li><router-link to="">Catégorie 1</router-link></li>
            <li><router-link to="">Catégorie 2</router-link></li>
            <li><router-link to="">Catégorie 3</router-link></li>
            <li><router-link to="">Catégorie 4</router-link></li>
          </ul>
        </li>
        <li><router-link to="/ProductDetails">Details de Produits</router-link></li>
        <li><router-link to="/cart">Panier</router-link></li>
        <li><router-link to="/checkout">Caisse</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
      </ul>
    </div>
    <form class="d-flex me-4" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-info me-2" type="submit">Search</button>
    </form>
    <div class="text-end me-5 mb-4">
        <div class="d-flex align-items-center pt-4">
            <a href="/login"> <img src="../assets/user.png" alt="User Icon" class="icon"> </a>
            <a href="/login" class="btn btn-link">Connexion</a>
        </div>
        <div class="d-flex align-items-center pt-4">
           <a href="/signup"> <img src="../assets/signup.png" alt="Sign Up Icon" class="icon"> </a>
            <a href="/signup" class="btn btn-link">Inscription</a>
        </div>
    </div>  
    </nav> 
    <!-- Fin navbar -->
     
  </template>
  
  <style>
/* Style pour nav bar */

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

  .icon {
      width: 40px; /* Set the width of the icon */
      height: auto; /* Maintain aspect ratio */
      margin-bottom: 5px; /* Spacing between icon and text */
  }
  
  .text-end {
      display: flex;
      justify-content: flex-end; /* Align items to the end */
  }
  
  .container {
      margin-top: 20px; /* Optional spacing */
  }
  
  
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 15px;
    
    align-items: center;
    display: flex;
    padding: 10px 20px;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 1;
    justify-content: center;
    padding: 10px 20px;
  }
  
  .navbar-links {
    list-style: none;
    display: flex;
    gap: 30px;
  }
  
  .navbar-links li {
  position: relative;
}

  .navbar-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #444;
    list-style: none;
    padding: 10px;
    display: block;
    min-width: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-menu li {
    padding: 5px 0;
  }
  
  .dropdown-menu a {
    color: #fff;
    text-decoration: none;
  }
  
  .dropdown-menu a:hover {
    color: #ccc;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        showDropdown: false,
      };
    },
  };
  </script>   