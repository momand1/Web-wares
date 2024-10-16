<template>

  <div class="text-end me-5 mb-4">
        <div class="d-flex flex-column align-items-center">
            <a href="/login"> <img src="../assets/user.png" alt="User Icon" class="icon"> </a>
            <a href="/login" class="btn btn-link">Connexion</a>
        </div>
        <div class="d-flex flex-column align-items-center">
           <a href="/signup"> <img src="../assets/signup.png" alt="Sign Up Icon" class="icon"> </a>
            <a href="/signup" class="btn btn-link">Inscription</a>
        </div>
    </div>  
  
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
      </nav> 
      <!-- Fin navbar -->
    
      
       <!-- Header -->
        <div class="row">
            <div class="col-12 text-center pt-3">
                <h1>Web Wares</h1>
                <p>Bienvenue sur WebWares, votre 
                  solution de commande en ligne simplifiée.</p>
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
  <!-- Fin header -->
  <br><br><br>
  <!-- bande pub cadeau reduction -->
  <div class="banner">
    <a href="#" class="banner-link">
      C'est nouveau : nos cartes cadeaux ! 
      <span class="banner-action">Je fais des heureux &rsaquo;</span>
    </a>
  </div>
  
  <div class="newsletter-section">
    <div class="newsletter-content">
      <div class="welcome-offer">
        <p>-5 % de bienvenue*</p>
        <p>Inscrivez-vous à la newsletter et recevez toute l'actualité et les bons plans !</p>
      </div>
      <div class="newsletter-form">
        <input type="email" placeholder="Mon adresse e-mail" />
        <button>Je m'inscris</button>
      </div>
      <p class="fine-print">
        *Désinscription possible à tout moment. Code à ajouter à votre panier ou à saisir lors de la dernière étape de la commande. Code valable 6 semaines à partir de l'inscirption...
        <a href="#">Afficher plus</a>
      </p>
    </div>
  </div>
  <!-- Fin bande pub cadeau reduction -->
  
  <br><br><br>
    <section class="services-section">
      <div class="container">
        <h2 class="services-title">Nos services</h2>
        <div class="services">
          <div class="service-item">
            <img src="../assets/fast-delivery.png" alt="Retour gratuits logo" class="service-logo">
            <p>Livraisons <strong>rapides et gratuites</strong></p>
          </div>
          <div class="service-item">
            <img src="../assets/30.png" alt="Retours sous 30 jours logo" class="service-logo">
            <p>Retours sous <strong>30 jours</strong></p>
          </div>
          <div class="service-item">
            <img src="../assets/payer.png" alt="Mode de paiement logo" class="service-logo">
            <p>Vous avez le choix du <strong>mode de paiement</strong></p>
          </div>
        </div>
        <p class="more-info"><a href="#">Je découvre les engagements Web Wares &rsaquo;</a></p>
      </div>
    </section>
    <br><br><br>
  
  <!-- Footer -->
  <footer class="footer">
      <div class="container">
        <!-- Newsletter Signup Section -->
        <!-- <div class="newsletter">
          <h5>Inscription à la newsletter</h5>
          <form @submit.prevent="subscribe">
            <input type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com" required>
            <button type="submit">Je m'inscris</button>
          </form>
        </div> -->
  
        <!-- Social Media, Payment Methods, and Delivery Methods Section -->
        <div class="footer-links big-footer-bottom">
          
          <div class="column footer-top ">
            <h5>Moyens de paiement</h5>
            <ul>
              <li> <img src="../assets/paiement/visa.png" alt="Visa" class="icon"> </li>
              <li> <img src="../assets/paiement/applepay.png" alt="Apple Pay" class="icon ms-2 me-2"> </li>
              <li> <img src="../assets/paiement/mastercard.png" alt="MasterCard" class="icon me-2"> </li>
              <li> <img src="../assets/paiement/paypal.png" alt="PayPal" class="icon"> </li>
            </ul>
          </div>
  
          <div class="column footer-top ms-5 me-5">
            <h5>Suivez-nous sur les réseaux !</h5>
            <ul>
              <li>
                <a href="#"> <img src="../assets/facebook.png" alt="logo facebook" class="logo"> </a>
              </li>
              <li>
                <a href="#"> <img src="../assets/twitter.png" alt="logo twitter" class="logo ms-2 me-2"> </a>
              </li>
              <li>
                <a href="#"> <img src="../assets/linkedin.png" alt="logo linkedin" class="logo"> </a>
              </li>
            </ul>
          </div>
          
          <div class="column footer-top">
            <h5>Moyens de livraison</h5>
            <ul>
              <li> <img src="../assets/dhl.png" alt="DHL" class="small"> </li>
              <li> <img src="../assets/ups.png" alt="UPS" class="logo ms-2 me-2"> </li>
              <li> <img src="../assets/fedex.png" alt="fedex" class="small"> </li>
            </ul>
          </div>
        </div>
  
        <!-- truspilot rating -->
  
        <div class="banner-row row">
      <!-- Trustpilot Column -->
      <div class="trustpilot-column col-8">
          <img src="../assets/trustpilot.png" alt="Trustpilot" class="truspilot">
          <p> Nos clients adorent home24 et nous le disent : 
              <strong>4,1 étoiles sur 5</strong> (8,372 avis clients)
          </p>
      </div>
  
      <!-- App Store Column -->
      <div class="app-store-column col-4">
          <div class="app-icons">
              <img src="../assets/app-store.png" alt="App Store" class="logo">
              <img src="../assets/app.png" alt="Google Play" class="logo">
              <p>Téléchargez l'appli home24</p>
          </div>
      </div>
  </div>
  
  <!-- fin truspilot -->
  
        <!-- Legal Links Section -->
        <div>
          <h5>Liens légaux</h5>
          <ul class="legal-links">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
          <p class="footer-bottom">&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  
    <!-- Fin footer -->
  </template>
  
  
  <script>
  export default {
    methods: {
      subscribe() {
        alert('Inscription à la newsletter réussie !');
      }
    },
    data() {
        return {
          showDropdown: false,
        };
      },
  }
  </script>
  
  <style scoped>
  
  /* Style pour nos services */
  
  .services-section {
    background-color: #f1f1f1;
    padding: 30px 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .services-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .services {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .service-item {
    width: 30%;
  }
  
  .service-logo {
    display: block;
    margin: 0 auto 10px;
    width: 80px; 
    height: 80px; 
  }
  
  .more-info {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .more-info a {
    text-decoration: none;
    color: #333;
  }
  
  .more-info a:hover {
    text-decoration: underline;
  }
  
  
  
  /* Style pour le header et nav bar */
  
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
    /* .navbar-logo a {
      color: #fff;
      text-decoration: none;
      font-size: 24px;
    } */
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
  
  
  
   /* Banner Styles */
  .banner {
    background-color: #add8e6;
    padding: 15px;
    text-align: center;
  }
  
  .banner-link {
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block; /* Makes the entire banner clickable */
  }
  
  .banner-action {
    float: right;
    font-weight: normal;
    color: #333;
  }
  
  /* Newsletter Section */
  .newsletter-section {
    background-color: #f1f1f1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .newsletter-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
  }
  
  .welcome-offer {
    flex: 1;
    min-width: 200px;
  }
  
  .newsletter-form {
    flex: 1;
    display: flex;
    min-width: 300px;
  }
  
  .newsletter-form input {
    flex: 3;
    padding: 10px;
    margin-right: 5px;
  }
  
  .newsletter-form button {
    flex: 1;
    background-color: #ff5733;
    color: white;
    border: none;
    padding: 10px;
  }
  
  .fine-print {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }
  
  
  
  
  
  
  
  
    /* style pour footer */
    .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer {
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .footer-links {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
  
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  
  h5 {
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin: 5px 0;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    width: 100%;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    text-align: center;
  }
  
  .footer-top {
    width: 100%;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    text-align: center;
  }
  
  .big-footer-bottom {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    text-align: center;
  }
  
  
  .logo {
    width: 50px; /* Adjust as needed */
    height: 50px;
  }
  
  .small {
    width: 60px;
    height: 70px;
  }
  
  .legal-links {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .legal-links li {
    margin: 0 15px;
  }
  
  
  .column {
    flex: 1; /* Makes columns flexible */
    padding: 10px; /* Adds spacing around each column */
  }
  
  .column ul {
    list-style-type: none; /* Removes bullets */
    padding: 0; /* Removes default padding */
  }
  
  .column img.icon {
    display: block; /* Ensures icons are block elements */
    margin: 0 auto; /* Centers the image */
  }
  
  @media (max-width: 768px) {
    .logo {
      display: block; /* Assurez-vous qu'ils s'affichent */
    }
  }
  img {
    max-width: 100%; /* Permet aux images de rester dans les limites de leur conteneur */
    height: auto; /* Maintient le rapport d'aspect */
  }
  
  /* Style pour banner truspilot */
  .banner-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ccc;
      padding: 15px 30px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
  }
  
  .truspilot {
    width: 9vw;
    height: 16vh;
  }
  
  .trustpilot-column {
      display: flex;
      align-items: center;
  }
  
  .trustpilot-logo {
      width: 20px; /* Adjust according to your needs */
      margin-right: 10px;
  }
  
  .app-store-column {
      text-align: right;
  }
  
  .app-icons {
      display: flex;
      gap: 10px; /* Adjust the space between the app store icons */
  }
  
  .app-logo {
      width: 100px; /* Adjust according to your needs */
  }
  
  </style>