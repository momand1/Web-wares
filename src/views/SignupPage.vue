<template>
  <div class="signup-page">
    <div class="signup-container">
      <h1>Inscription</h1>
      <form @submit.prevent="registerUser">
        <label for="raisonSociale">Raison Sociale</label>
        <input v-model="raisonSociale" type="text" id="raisonSociale" required />

        <label for="siret">SIRET</label>
        <input v-model="siret" type="text" id="siret" required />

        <label for="adresse">Adresse</label>
        <input v-model="adresse" type="text" id="adresse" required />

        <label for="codePostal">Code Postal</label>
        <input v-model="codePostal" type="text" id="codePostal" required />

        <label for="ville">Ville</label>
        <input v-model="ville" type="text" id="ville" required />

        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />

        <label for="motDePasse">Mot de Passe</label>
        <input v-model="motDePasse" type="password" id="motDePasse" required />

        <button type="submit">S'inscrire</button>
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
      motDePasse: ''
    };
  },
  methods: {
    registerUser() {
      // Logique d'inscription
    }
  }
};
</script>

<style scoped>
.signup-page {
  background-image: url('@/assets/SignupPagebackground.jpg'); /* Chemin relatif à image Signup */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  background-color: rgba(255, 255, 255, 0.8); /* Légère transparence pour que l'image soit visible */
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
</style>