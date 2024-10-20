<template>
    <nav class="navbar">
      <div class="navbar-logo">
  <router-link to="/">
    <img src="../assets/logo.png" alt="logo" class="logo ms-4" />
  </router-link>
</div>
      <div class="burger-menu" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="navbar-container" :class="{ active: isMenuOpen }">
        <ul class="navbar-links">
          <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
  
          <!-- Dropdown Menu for Produits -->
          <li
            class="dropdown"
            @mouseover="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <router-link
              to="/ProductsListPage"
              @click="closeMenu"
            >
              Produits
            </router-link>
            <ul v-if="showDropdown" class="dropdown-menu">
              <li v-for="item in categorie" :key="item.id">
                <router-link
                  :to="{ path: '/ProductsListPage', query: { category: item.id } }"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </li>
  
          <li><router-link to="/cart" @click="closeMenu">Panier</router-link></li>
          <li><router-link to="/admin" @click="closeMenu">Admin</router-link></li>
        </ul>
      </div>
      <div class="text-end me-5 mb-4">
        <div class="d-flex align-items-center pt-4" id="logs">
          <img src="../assets/user-account.png" alt="User Icon" class="icon" />
          <!-- Dropdown Menu for Account -->
          <div class="account-dropdown" @mouseover="showAccountMenu = true" @mouseleave="showAccountMenu = false">
            <div>
              <a href="#" class="btn btn-link" @click="closeMenu">Mon Compte</a>
              <ul v-if="showAccountMenu" class="dropdown-menu1">
                <li class="dropdown-title">Résumé</li>
                <li><router-link to="/my-orders" @click="closeMenu">Mes commandes</router-link></li>
                <li><router-link to="/my-returns" @click="closeMenu">Mes retours</router-link></li>
                <li><router-link to="/personal-data" @click="closeMenu">Données personnelles</router-link></li>
                <li><router-link to="/gift-cards" @click="closeMenu">Cartes cadeaux</router-link></li>
                <li><router-link to="/settings" @click="closeMenu">Paramètres</router-link></li>
                <li class="dropdown-title">Plus</li>
                <li><router-link to="/about-us" @click="closeMenu">Qui sommes-nous ?</router-link></li>
                <li><router-link to="/about-us" @click="closeMenu">Aide & contact</router-link></li>
              </ul>
            </div>
          </div>
          <router-link to="/cart" @click="closeMenu">
            <img src="../assets/trolley.png" alt="Sign Up Icon" class="icon ms-3" />Panier
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        showDropdown: false,
        showAccountMenu: false, // Ajoutez ceci
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
        this.showDropdown = false;
        this.showAccountMenu = false; // Assurez-vous de fermer le menu compte ici
      },
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      ...mapActions(["chargerCategorie"]),
    },
    computed: {
      ...mapGetters(["categorie"]),
    },
    mounted() {
      this.chargerCategorie();
    },
  };
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between the items */
    margin-bottom: 10px;
  }
  
  #logs .icon {
    width: 40px;
    height: auto;
    margin-bottom: 0; /* Align icons with the text */
  }
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .icon {
    width: 40px;
    height: auto;
    margin-bottom: 5px;
  }
  
  /* Navbar styling */
  .navbar {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    z-index: 1000;
  }
  
  
  /* Dropdown menu styling */
  .account-dropdown {
    position: relative;
  }
  
  .dropdown-menu1 {
    position: absolute;
    top: 100%;
    right: 0; /* Aligne le menu déroulant à droite */
    background-color: #444; /* Fond sombre */
    list-style: none;
    padding: 10px 0; /* Ajoute du padding */
    display: none; /* Masqué par défaut */
    min-width: 200px; /* Largeur minimale du menu */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  /* Modifiez cette règle pour que le menu se montre au survol de l'élément parent */
  .account-dropdown:hover .dropdown-menu1 {
    display: block; /* Affiche le menu au survol */
  }
  
  /* Autres styles pour la hiérarchie du menu */
  .dropdown-title {
    background-color: #555; /* Couleur de fond pour les titres */
    color: #fff; /* Couleur du texte */
    padding: 5px 10px; /* Ajoute du padding */
    font-weight: bold; /* Met en gras le texte */
  }
  
  .dropdown-menu1 li {
    padding: 5px 10px; /* Padding pour les éléments du menu */
  }
  
  .dropdown-menu1 li a {
    color: #fff; /* Couleur blanche pour les liens */
    text-decoration: none; /* Pas de soulignement pour les liens */
  }
  
  .dropdown-menu1 li a:hover {
    background-color: #666; /* Couleur de fond au survol */
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #444;
    list-style: none;
    padding: 10px;
    display: none;
    min-width: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  /* Styling for navbar links */
  .navbar-links {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
  
  .navbar-links a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
  
  .navbar-links a:hover {
    color: #333;
    background-color: rgb(240, 240, 158);
    border-radius: 5px;
    padding: 5px;
  }
  
  /* Mobile responsive adjustments */
  @media screen and (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar-container.active {
      display: block;
    }
  
    .dropdown-menu {
      position: static;
      background-color: transparent;
      box-shadow: none;
      padding-left: 20px;
    }
  }
  
  .text-end {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .d-flex {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .btn-link {
    color: #fff;
    margin-left: 8px;
  }
  
  .burger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
    transition: all 0.4s ease;
  }
  
  .burger-menu.open .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .burger-menu.open .bar:nth-child(2) {
    opacity: 0;
  }
  
  .burger-menu.open .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  @media screen and (max-width: 768px) {
    .navbar-container.active .d-flex{
      justify-content: space-between;
      width: 100%
    }
    .burger-menu {
      display: flex;
    }
  
    .navbar-container {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #333;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      display: none;
    }
  
    .navbar-container.active {
      display: flex;
    }
  
    .navbar-links {
      flex-direction: column;
      width: 100%;
    }
  
    .navbar-links li {
      margin-bottom: 15px;
    }
  
    .dropdown-menu {
      position: static;
      background-color: transparent;
      box-shadow: none;
      padding-left: 20px;
    }
  
    .text-end {
      display: none;
    }
  
    .navbar-container.active .text-end {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-top: 15px;
    }
  
    .navbar-container.active .d-flex {
      margin-bottom: 15px;
    }
  }
  </style>