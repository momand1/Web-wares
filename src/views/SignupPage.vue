<template>
  <div class="signup-page">
    <div class="signup-container">
      <h1>Inscription</h1>
      <form @submit.prevent="registerUser">
        
        <!-- Ligne 1 : Raison Sociale et SIRET -->
        <div class="form-row same-line">
          <div class="form-group">
            <label for="raisonSociale">Raison Sociale</label>
            <input v-model="raisonSociale" type="text" id="raisonSociale" required />
          </div>

          <div class="form-group">
            <label for="siret">SIRET</label>
            <input v-model="siret" type="text" id="siret" @input="validateSiret" required />
            <small v-if="errors.siret" class="error">{{ errors.siret }}</small>
          </div>
        </div>

        <!-- Ligne 2 : Adresse, Code Postal et Ville (Sur une seule ligne) -->
        <div class="form-row same-line">
          <div class="form-group">
            <label for="adresse">Adresse</label>
            <input v-model="adresse" type="text" id="adresse" required />
          </div>

          <div class="form-group">
            <label for="codePostal">Code Postal</label>
            <input v-model="codePostal" type="text" id="codePostal" @input="validateCodePostal" required />
            <small v-if="errors.codePostal" class="error">{{ errors.codePostal }}</small>
          </div>

          <div class="form-group">
            <label for="ville">Ville</label>
            <input v-model="ville" type="text" id="ville" required />
          </div>
        </div>

        <!-- Ligne 3 : Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" @input="validateEmail" required />
          <small v-if="errors.email" class="error">{{ errors.email }}</small>
        </div>

        <!-- Ligne 4 : Mot de Passe -->
        <div class="form-group">
          <label for="motDePasse">Mot de Passe</label>
          <input v-model="motDePasse" type="password" id="motDePasse" @input="validatePassword" required />
          <small v-if="errors.motDePasse" class="error">{{ errors.motDePasse }}</small>
        </div>

        <!-- Ligne 5 : Confirmer le Mot de Passe -->
        <div class="form-group">
          <label for="confirmerMotDePasse">Confirmer le Mot de Passe</label>
          <input v-model="confirmerMotDePasse" type="password" id="confirmerMotDePasse" @input="validateConfirmPassword" required />
          <small v-if="errors.confirmerMotDePasse" class="error">{{ errors.confirmerMotDePasse }}</small>
        </div>

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
      confirmerMotDePasse: '',
      errors: {
        siret: '',
        codePostal: '',
        email: '',
        motDePasse: '',
        confirmerMotDePasse: ''
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
    validateConfirmPassword() {
      if (this.motDePasse !== this.confirmerMotDePasse) {
        this.errors.confirmerMotDePasse = 'Les mots de passe ne correspondent pas.';
      } else {
        this.errors.confirmerMotDePasse = '';
      }
    },
    registerUser() {
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.hasErrors) {
        const newUser = {
          raisonSociale: this.raisonSociale,
          siret: this.siret,
          adresse: this.adresse,
          codePostal: this.codePostal,
          ville: this.ville,
          email: this.email,
          motDePasse: hashPassword(this.motDePasse)
        };

        let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
        utilisateurs.push(newUser);
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

        alert('Inscription réussie');
        this.$router.push('/login');
      }
    }
  }
};

function hashPassword(password) {
  return btoa(password); // Simuler un hachage simple
}
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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Garde les éléments ensemble mais les autorise à se replier sur une nouvelle ligne si nécessaire */
}

.same-line {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.same-line .form-group {
  flex: 1;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.85rem;
}

/* Responsive styling */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
</style>