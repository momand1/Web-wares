<template>

  <!-- Header Section -->
  <div class="row">
  <div class="col-12 text-center pt-2 pb-2 d-flex align-items-center justify-content-center">
    <img src="@/assets/logo.png" alt="WebWares Logo" class="logo me-2" /> <!-- Replace with your logo path -->
    <h1>Bienvenue sur WebWares</h1>
  </div>
  <div class="col-12 text-center">
    <p>Votre solution de commande en ligne simplifiée.</p>
    <p>Profitez d'une expérience utilisateur fluide, de nombreux produits et d'un service client à votre écoute.</p>
  </div>
</div>

  <!-- Main Image Gallery Section -->
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
  <!-- End of Main Image Gallery Section -->

  <!-- Styles et Tendances Section -->
  <div class="trends mb-4 mt-4">
    <h3 class="mb-4">Les styles et tendances à l'honneur</h3>
    <div class="trend-cards">
      <div class="trend-card">
        <img src="../assets/luminaire-5.jpg" alt="Les lampes tendance">
        <div class="trend-content">
          <h3>Les lampes tendance</h3>
          <a href="#">Je m'éclaire stylé ></a>
        </div>
      </div>
      <div class="trend-card">
        <img src="../assets/canapeconfort.jpg" alt="Canapé confort">
        <div class="trend-content">
          <h4>Canapé confort</h4>
          <a href="#">Découvrez tous nos modèles ></a>
        </div>
      </div>
      <div class="trend-card">
        <img src="../assets/tablebassejpg.jpg" alt="It's a match!">
        <div class="trend-content">
          <h4>It's a match!</h4>
          <a href="#">Je trouve la table basse idéale ></a>
        </div>
      </div>
      <div class="trend-card">
        <img src="../assets/deco-3.jpg" alt="Les vases">
        <div class="trend-content">
          <h4>Les vases</h4>
          <a href="#">Les vases qui décoreront votre intérieur ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Styles et Tendances Section -->

  <div class="separator"></div>

  <!-- Promotions Section -->
  <section class="promotions">
    <h3 class="mb-4 mt-4">Offres promotionnelles en cours</h3>
    <div class="promo-cards">
      <div class="promo-card">
        <img src="../assets/luminaire-3.jpg" alt="Nulle part ailleurs">
        <div class="promo-content">
          <h4>Nulle part ailleurs</h4>
          <a href="#" class="exclu">Nos marques exclusives</a>
          <button class="mt-3">Je me sens unique</button>
        </div>
      </div>
      <div class="promo-card">
        <img src="../assets/luminaire-2.jpg" alt="Tout nouveau, tout beau">
        <div class="promo-content">
          <h4>Tout nouveau, tout beau</h4>
          <p>C'est tout frais, ça vient d'arriver !</p>
          <button>Je m'inspire</button>
        </div>
      </div>
      <div class="promo-card">
        <img src="../assets/mobilier-2.jpg" alt="Baisse de prix">
        <div class="promo-content">
          <h4>Baisse de prix</h4>
          <p>Encore moins chers !</p>
          <button>Je saisis l'occasion</button>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Promotions Section -->

  <div class="separator"></div>

  <!-- Produits en vente -->
  <h3 class="mb1">Nos Produits</h3>
  <div class="products-grid">
    <div
    v-for="product in products"
    :key="product.id"
    class="product-card"
    @mouseover="product.hover = true"
    @mouseleave="product.hover = false"
    >
    <!-- Discount Badge -->
      <div v-if="product.discount" class="discount-badge">
        -{{ product.discount }} €
      </div>
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-details">
        <h4>{{ product.name }}</h4>
        <br>
        <p>{{ product.price.toFixed(2) }} €</p>
      </div>
      <!-- Hover "Add to Cart" Button -->
      <div v-if="product.hover" class="add-to-cart">
        Ajouter au panier
      </div>
    </div>
  </div>
  <!-- Fin produits en ventes -->

  <!-- Gift Card Banner -->
  <div class="banner">
    <a href="#" class="banner-link">
      C'est nouveau : nos cartes cadeaux !
      <span class="banner-action">Je fais des heureux &rsaquo;</span>
    </a>
  </div>
  <!-- End of Gift Card Banner -->

  <!-- Newsletter Section -->
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
        *Désinscription possible à tout moment. Code à ajouter à votre panier ou à saisir lors de la dernière étape de la commande. Code valable 6 semaines à partir de l'inscription...
        <a href="#">Afficher plus</a>
      </p>
    </div>
  </div>
  <!-- End of Newsletter Section -->

  <!-- Autres Produits -->
<div class="products-grid">
  <div class="product-card">
    <img src="../assets/deco-3.jpg" alt="Produit 5" class="product-image" />
    <div class="discount-badge">-10 €</div>
    <div class="product-details">
      <h4>Vases décoratifs en Terre Cuite claire</h4>
      <br>
      <p>79.99 €</p>
    </div>
    <div class="add-to-cart">
      Ajouter au panier
    </div>
  </div>
  <div class="product-card">
    <img src="../assets/ensemble-sdb.jpg" alt="Produit 6" class="product-image" />
    <div class="product-details">
      <h4>Ensemble meuble simple 2 niches et colonne Zelie Bois clair</h4>
      <br>
      <p>649.99 €</p>
    </div>
    <div class="add-to-cart">
      Ajouter au panier
    </div>
  </div>
  <div class="product-card">
    <img src="../assets/salledebain.jpg" alt="Produit 7" class="product-image" />
    <div class="product-details">
      <h4>Ensemble meuble double vasque en Bois</h4>
      <br>
      <p>399.99 €</p>
    </div>
    <div class="add-to-cart">
      Ajouter au panier
    </div>
  </div>
  <div class="product-card">
    <img src="../assets/fauteuil.jpg" alt="Produit 8" class="product-image" />
    <div class="product-details">
      <h4>Fauteuil Releveur Confortable Cuir noir</h4>
      <br>
      <p>249.99 €</p>
    </div>
    <div class="add-to-cart">
      Ajouter au panier
    </div>
  </div>
</div>
<!-- Fin de la section Autres Produits -->

  <!-- Services Section -->
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
  <!-- End of Services Section -->

  <!-- Contact Form Section -->
  <div class="contact-form">
    <h2>Contactez nous !</h2>
    <p>Veuillez remplir vos informations et nous vous enverrons votre commande en un rien de temps.</p>
    <form action="submit_form.php" method="post">
      <label for="name">Votre Nom*</label>
      <div style="display: flex; gap: 10px;">
        <input type="text" name="firstName" placeholder="Prénom" required>
        <input type="text" name="lastName" placeholder="Nom de famille" required>
      </div>

      <label for="email">Votre Email*</label>
      <input type="email" name="email" placeholder="helloworld@contact.net" required>

      <label for="phone">Votre Adresse*</label>
      <div style="display: flex; gap: 10px;">
        <input type="text" name="areaCode" placeholder="Rue n°" required>
        <input type="text" name="prefix" placeholder="Ville" required>
        <input type="number" name="lineNumber" placeholder="Code Postal" required>
      </div>

      <label for="subject">Sujet du message*</label>
      <select name="subject" required>
        <option value="other">Autre</option>
        <option value="order">Aide pour ma commande</option>
        <option value="support">Retours et remboursements</option>
        <option value="paiement">Paiements et questions générales</option>
        <option value="gift">Vérifier le solde des cadeaux et de la carte</option>
        <option value="support">Service client</option>
      </select>

      <label for="message">Message*</label>
      <textarea name="message" rows="4" required></textarea>

      <div class="recaptcha-container">
        <!-- Insert reCAPTCHA -->
        <div class="g-recaptcha" data-sitekey="your-site-key"></div>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  </div>
  <!-- End of Contact Form Section -->

</template>




<style scoped>
.welcome-message {
  text-align: center; /* Center the text */
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  padding: 20px; /* Add some padding */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 600px; /* Max width for larger screens */
  margin: 20px auto; /* Center the component on the page */
}

h1 {
  color: #d35e3a; /* Green color for the title */
  margin-bottom: 10px; /* Spacing below the title */
}

p {
  color: #333; /* Dark gray color for the text */
  margin: 10px 0; /* Margin for spacing */
  font-size: large;
}

button {
  padding: 10px 20px; /* Padding for the button */
  background-color:  rgb(160, 160, 160);
  color: rgba(255, 255, 255, 0.897); /* Text color */
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for background color */
}

button:hover {
  background-color: #024ff7; /* Darker green on hover */
  color: rgba(255, 255, 255, 0.897);
}

.logo {
  height: 200px; /* Adjust the height to fit your design */
  border-radius: 50%; /* Makes the image round */
  object-fit: cover; /* Ensures the image covers the area without stretching */
}

/*------------------------------
    General Styles
------------------------------*/

/* Header Style */
h1 {
    font-size: 48px;
    font-weight: bold;
}

/* Overflow and Zoom Effects */
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

/* Image Size Adjustment */
.equal-height {
    width: 100%; 
    height: auto; 
    height: 100%; 
    object-fit: cover; 
}

/*------------------------------
    Services Section
------------------------------*/

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

/*------------------------------
    Banner Styles
------------------------------*/

.banner {
    background-color: #add8e6;
    padding: 15px;
    text-align: center;
}

.banner-link {
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block; 
}

.banner-action {
    float: right;
    font-weight: normal;
    color: #333;
}

/*------------------------------
    Newsletter Section
------------------------------*/

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

/*------------------------------
    Contact Form Styles
------------------------------*/

body {
    background: linear-gradient(to bottom right, #1e90ff, #00ced1);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.contact-form {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto; 
}

.contact-form h2 {
    margin-top: 0;
    color: #333;
}

.contact-form label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact-form button {
    margin-top: 20px;
    padding: 10px;
    background-color: #4198f0;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.contact-form button:hover {
    background-color: #0d3972;
}

.recaptcha-container {
    margin-top: 15px;
}

/*------------------------------
    Section General Style
------------------------------*/

section {
    margin: 20px auto;
    width: 90%;
    max-width: 1200px;
}

/*------------------------------
    Promotions Section
------------------------------*/

.promotions .promo-cards {
    display: flex;
    justify-content: space-between;
}

.promotions button {
    border-radius: 5px;
}

.promo-card {
    border: 1px solid #ccc;
    padding: 10px;
    width: 30%;
    text-align: center;
    position: relative;
    transition: border 0.3s ease; 
}

.promo-card img {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    border-radius: 5px; 
}

.promo-card:hover .promo-content h3,
.promo-card:hover .promo-content p,
.promo-card:hover a,
.promo-card:hover button {
    text-decoration: underline; 
}

.promo-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/*------------------------------
    Styles et Tendances Section
------------------------------*/

.trends {
    width: 100%; 
}

.trend-cards {
    display: flex;
    justify-content: space-between; 
    width: 100%; 
    padding: 0 10px; 
    box-sizing: border-box; 
}

.trend-card {
    position: relative; 
    flex: 1; 
    margin: 0 5px; 
    max-width: 33%; 
}

.trend-card img {
    width: 100%; 
    height: 250px;
    object-fit: cover;
}

.trend-content {
    position: absolute;
    bottom: 10px; 
    left: 10%;
    width: 80%; 
    background-color: rgba(255, 255, 255, 0.8); 
    padding: 5px; 
    border-radius: 5px;
    text-align: center; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.trend-card:hover {
    border-bottom: 3px solid #007bff; 
}


/*------------------------------
    Produits en vente
------------------------------*/
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 30px;
}

.product-card {
  position: relative;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
}

.product-card:hover {
  transform: translateY(-10px);
}

.discount-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: red;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
}

.product-image {
  /* width: 100%;
  height: auto; */
  max-height: 300px;
  /* object-fit: cover;
  display: block; */

  width: 100%;
  height: 200px; 
  object-fit: cover; 
  display: block;
}

.product-details {
  padding: 20px;
  font-size: 1.1rem;
}

.add-to-cart {
  position: absolute;
  bottom: 10px; 
  left: 10px; 
  right: 10px; 
  background-color: rgba(17, 100, 253, 0.9);
  color: #fff;
  padding: 8px; 
  text-align: center;
  font-size: 0.9rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: none; 
  border-radius: 4px; 
}

.add-to-cart:hover {
  background-color: rgb(13, 146, 47);
}

.product-card:hover .add-to-cart {
  display: block; /* Show "Add to Cart" button on hover */
}

/*------------------------------
    Trait de séparation
------------------------------*/
.separator {
  width: 80%;
  height: 2px; 
  background-color: black; 
  margin: 20px auto; 
}

</style>
           
           
           
<script>
export default {
  data() {
    return {
      showDropdown: false,
      products: [
        {
          id: 1,
          name: "Meuble TV mural 3 portes 150 cm Aurus Bois",
          price: 349.0,
          discount: null,
          image: require("../assets/deco-6.jpg"),
          hover: false,
        },
        {
          id: 2,
          name: "Table basse 110 cm Nouka Bois et Noir",
          price: 159.0,
          discount: null,
          image: require("../assets/tablebasse-1.jpg"),
          hover: false,
        },
        {
          id: 3,
          name: "Ensemble meuble simple 100cm 2 niches et colonne Zelie Bois",
          price: 579.0,
          discount: 79.00,
          image: require("../assets/ensemble-complet.jpg"),
          hover: false,
        },
        {
          id: 4,
          name: "Tapis en laine tuftée motifs vagues beiges et marron",
          price: 250.0,
          discount: null,
          image: require("../assets/tapis-6.jpg"),
          hover: false,
        },
      ],
    };
  },
  methods: {
    subscribe() {
      alert('Inscription à la newsletter réussie !');
    },
    exploreNow() {
      // Here you can redirect the user or perform any action you want
      this.$router.push('/explore'); // Example route to explore products
    }
  }
};
</script>