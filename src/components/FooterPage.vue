<template>
  <footer class="footer">
    <div class="container">
      <!-- Newsletter Signup Section -->
      <div class="newsletter">
        <h5>Inscription à la newsletter</h5>
        <form @submit.prevent="subscribe">
          <input type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com" required>
          <button type="submit">Je m'inscris</button>
        </form>
      </div>

      <!-- Social Media, Payment Methods, and Delivery Methods Section -->
      <div class="footer-links">
        
        <div class="column">
          <h5>Moyens de paiement</h5>
          <ul>
            <li> <img src="../assets/paiement/visa.png" alt="Visa" class="icon"> </li>
            <li> <img src="../assets/paiement/applepay.png" alt="Apple Pay" class="icon ms-2 me-2"> </li>
            <li> <img src="../assets/paiement/mastercard.png" alt="MasterCard" class="icon me-2"> </li>
            <li> <img src="../assets/paiement/paypal.png" alt="PayPal" class="icon"> </li>
          </ul>
        </div>

        <div class="column">
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
        
        <div class="column">
          <h5>Moyens de livraison</h5>
          <ul>
            <li> <img src="../assets/dhl.png" alt="DHL" class="logo small"> </li>
            <li> <img src="../assets/ups.png" alt="UPS" class="logo ms-2 me-2"> </li>
            <li> <img src="../assets/fedex.png" alt="fedex" class="logo small"> </li>
          </ul>
        </div>
      </div>


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
</template>


<script>
export default {
  name: 'FooterPage',
  methods: {
    subscribe() {
      alert('Inscription à la newsletter réussie !');
    }
  }
}
</script>

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


.logo {
  width: 50px; /* Adjust as needed */
  height: 50px;
}

.small {
  width: 60px;
  height: 80px;
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
</style>