<template>
  <div class="signup-page">
    <div class="signup-container">
      <h1>Inscription</h1>
      <form @submit.prevent="registerUser">
        <label for="raisonSociale">Raison Sociale</label>
        <input v-model="raisonSociale" type="text" id="raisonSociale" required />

        <label for="siret">SIRET</label>
        <input v-model="siret" type="text" id="siret" @input="validateSiret" required />
        <small v-if="errors.siret" class="error">{{ errors.siret }}</small>

        <label for="adresse">Adresse</label>
        <input v-model="adresse" type="text" id="adresse" required />

        <label for="codePostal">Code Postal</label>
        <input v-model="codePostal" type="text" id="codePostal" @input="validateCodePostal" required />
        <small v-if="errors.codePostal" class="error">{{ errors.codePostal }}</small>

        <label for="ville">Ville</label>
        <input v-model="ville" type="text" id="ville" required />

        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" @input="validateEmail" required />
        <small v-if="errors.email" class="error">{{ errors.email }}</small>

        <label for="motDePasse">Mot de Passe</label>
        <input v-model="motDePasse" type="password" id="motDePasse" @input="validatePassword" required />
        <small v-if="errors.motDePasse" class="error">{{ errors.motDePasse }}</small>

        <button type="submit" :disabled="hasErrors">S'inscrire</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raisonSociale: '',
      siret: '',
      adresse: '',
      codePostal: '',
      ville: '',
      email: '',
      motDePasse: '',
      errors: {
        siret: '',
        codePostal: '',
        email: '',
        motDePasse: ''
      }
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some(error => error !== '');
    }
  },
  methods: {
    validateSiret() {
      const siretPattern = /^\d{14}$/;
      if (!siretPattern.test(this.siret)) {
        this.errors.siret = 'Le SIRET doit contenir exactement 14 chiffres.';
      } else {
        this.errors.siret = '';
      }
    },
    validateCodePostal() {
      const postalPattern = /^\d{5}$/;
      if (!postalPattern.test(this.codePostal)) {
        this.errors.codePostal = 'Le code postal doit contenir exactement 5 chiffres.';
      } else {
        this.errors.codePostal = '';
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errors.email = 'Adresse email invalide.';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
      if (!passwordPattern.test(this.motDePasse)) {
        this.errors.motDePasse = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.';
      } else {
        this.errors.motDePasse = '';
      }
    },
    registerUser() {
      if (!this.hasErrors) {
        this.$store.dispatch('registerUser', {
          raisonSociale: this.raisonSociale,
          siret: this.siret,
          adresse: this.adresse,
          codePostal: this.codePostal,
          ville: this.ville,
          email: this.email,
          motDePasse: this.motDePasse
        });
      }
    }
  }
};
</script>

<style scoped>
.signup-page {
  background-image: url('@/assets/SignupPagebackground.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}

.error {
  color: red;
  font-size: 0.85rem;
}
</style>
