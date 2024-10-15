<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <div class="column">
          <h5>Liens légaux</h5>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>
        <div class="column">
          <h5>Réseaux sociaux</h5>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div class="column">
          <h5>Moyens de paiement</h5>
          <img src="https://via.placeholder.com/150" alt="Logos des moyens de paiement" />
          <h5>Inscription à la newsletter</h5>
          <form @submit.prevent="subscribe">
            <input type="email" placeholder="Votre email" required>
            <button type="submit">Je m'inscris</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    subscribe() {
      alert('Inscription à la newsletter réussie !');
    }
  }
}
</script>

<style scoped>
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

.footer-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.column {
  flex: 1;
  margin: 10px;
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
  margin-top: 20px;
}
</style>
