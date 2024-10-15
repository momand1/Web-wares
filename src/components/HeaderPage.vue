<!-- src/views/LandingPage.vue -->
<template>
  
    <div class="text-end me-5 mb-4">
        <div class="d-flex flex-column align-items-center">
            <img src="../assets/user.png" alt="User Icon" class="icon">
            <a href="/login" class="btn btn-link">Connexion</a>
        </div>
        <div class="d-flex flex-column align-items-center">
            <img src="../assets/signup.png" alt="Sign Up Icon" class="icon">
            <a href="/signup" class="btn btn-link">Inscription</a>
        </div>
    </div>  
    
      <nav class="navbar">
        <div class="navbar-container">
          <!-- Logo -->
          <div class="navbar-logo">
            <router-link to="">Logo</router-link>
          </div>
    
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
      </nav>
    
      
       
        <div class="row">
            <div class="col-12 text-center pt-3">
                <h1>Web Wares</h1>
                <p>Pour un chez-vous qui ne ressemble qu'à vous.</p>
            </div>
        </div>
        
        <div class="container">
        <div class="row">
            <div class="col-md-6 overflow zoom">
                <img src="../assets/mobilier-1.jpg" alt="poterie" class="img-fluid equal-height">
            </div>
            <div class="col-6 col-md-6">
                <div class="row">
                    <div class="col-md-12 ms-2 mb-2 overflow zoom">
                        <img src="../assets/mobilier-3.jpg" alt="canapé" class="img-fluid equal-height">
                    </div>
                    <div class="col-md-12 ms-2 overflow zoom">
                        <img src="../assets/mobilier-4.jpg" alt="canapé" class="img-fluid equal-height">
                    </div>
                </div>
            </div>
        </div>
    </div>
       
    </template>
    
    <style>
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
    .equal-height {
      width: 100%; /* Make images responsive */
      height: auto; /* Maintain aspect ratio */
        height: 100%; /* Make sure the height fills the column */
        object-fit: cover; /* Ensure the image covers the area */
    }
    .overflow {
        position: relative;
        overflow: hidden;
    }
    .zoom img {
        transition: all 0.2s linear;
    }
    .zoom:hover img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    
    
    .navbar {
      background-color: #333;
      color: #fff;
      padding: 15px;
    }
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-logo a {
      color: #fff;
      text-decoration: none;
      font-size: 24px;
    }
    .navbar-links {
      list-style: none;
      display: flex;
      gap: 20px;
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