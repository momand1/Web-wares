<template>
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
</style>