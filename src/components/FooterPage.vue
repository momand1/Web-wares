<template>
  <!-- Footer -->
<footer class="footer">
    <div class="container">


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

<div class="banner-row">
        <!-- Trustpilot Column -->
        <div class="trustpilot-column">
            <img src="../assets/trustpilot.png" alt="Trustpilot" width="130" height="90" class="pb-3 pe-2">
            <p><span>Nos clients adorent Web Wares et nous le disent :</span><br>
              <strong>4,1 étoiles sur 5</strong> (8,372 avis clients)</p>
        </div>
        <!-- App Store Column -->
        <div class="app-column">
            <a href="#"><img src="../assets/app-store.png" alt="App Store" width="40"></a>
            <a href="#"><img src="../assets/app.png" alt="Google Play" width="40"></a>
            <p>Téléchargez l'appli Web Wares</p>
        </div>
        
    </div>
    <br>

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



<style scoped>
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
            background-color: #f0f0f0;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
        }

        .trustpilot-column, .app-column {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .trustpilot-column img {
            margin-right: 10px;
        }

        .app-column img {
            margin-left: 10px;
        }

        .app-column {
            gap: 10px;
        }

        .banner-row p {
            margin: 0;
            font-size: 16px;
            color: #333;
        }

</style>


<script>
export default {
  methods: {
    subscribe() {
      alert('Inscription à la newsletter réussie !');
    }
  }
}
</script>