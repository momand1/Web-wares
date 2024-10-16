<!-- src/views/LandingPage.vue -->
<template>
    
    <nav class="navbar">
        <div class="navbar-logo">
            <router-link to="">
                <img src="../assets/logo.png" alt="logo" class="logo ms-4" />
            </router-link>
        </div>
        <div class="navbar-container">
            <!-- Logo -->
            
            <!-- Navigation Links -->
            <ul class="navbar-links">
                <li><router-link to="/">Accueil</router-link></li>

                <!-- Dropdown Menu -->
        <li
          class="dropdown"
          @mouseenter="showDropdown = true"
          @mouseleave="showDropdown = false"
          >
          <span
          ><router-link to="/ProductsListPage">Produits</router-link></span
          >
          <ul v-if="showDropdown" class="dropdown-menu">
              <li><router-link to="">Catégorie 1</router-link></li>
              <li><router-link to="">Catégorie 2</router-link></li>
              <li><router-link to="">Catégorie 3</router-link></li>
              <li><router-link to="">Catégorie 4</router-link></li>
            </ul>
        </li>
        <li>
          <router-link to="/ProductDetails">Details de Produits</router-link>
        </li>
        <li><router-link to="/cart">Panier</router-link></li>
        <li><router-link to="/checkout">Caisse</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
    </ul>
</div>
<div class="text-end me-5 mb-4">
  <div class="d-flex align-items-center pt-4" id="logs">
    <img src="../assets/user.png" alt="User Icon" class="icon" />
    <a href="/login" class="btn btn-link">Connexion</a>
  </div>
  <div class="d-flex align-items-center pt-4" id="logs">
    <img src="../assets/signup.png" alt="Sign Up Icon" class="icon" />
    <a href="/signup" class="btn btn-link">Inscription</a>
  </div>
</div>

  </nav>
</template>

<script>
export default {
    name: "HeaderPage",
    data() {
    return {
      showDropdown: false,
    };
  },
}
</script>

<style>
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
.text-start {
    display: flex;
    justify-content: flex-start; /* Align items to the start */
}

.d-flex {
    align-items: center; /* Center items vertically */
    margin-right: 15px; /* Add spacing between each link/icon pair */
}

.btn-link {
    color: #fff; /* Keep your link color */
    margin-left: 8px; /* Add space between icon and text */
}



</style> 