<template>
  <div class="login-page">
    <div class="form-container">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email ou SIRET</label>
          <input type="text" v-model="emailOrSiret" @input="validateEmailOrSiret" required placeholder="Entrez votre email ou SIRET" />
          <small v-if="errors.emailOrSiret" class="error">{{ errors.emailOrSiret }}</small>
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" v-model="password" @input="validatePassword" required placeholder="Entrez votre mot de passe" />
          <small v-if="errors.password" class="error">{{ errors.password }}</small>
          <small v-if="loginError" class="error">{{ loginError }}</small>
        </div>

        <button type="submit" class="submit-btn" :disabled="hasErrors">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailOrSiret: '',
      password: '',
      loginError: null,
      errors: {
        emailOrSiret: '',
        password: ''
      }
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some(error => error !== '');
    }
  },
  methods: {
    validateEmailOrSiret() {
      if (this.emailOrSiret === '') {
        this.errors.emailOrSiret = 'Ce champ est obligatoire.';
      } else {
        this.errors.emailOrSiret = '';
      }
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.errors.password = 'Le mot de passe doit contenir au moins 8 caractères.';
      } else {
        this.errors.password = '';
      }
    },
    login() {
      if (!this.hasErrors) {
        const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
        const user = utilisateurs.find(user => user.email === this.emailOrSiret || user.siret === this.emailOrSiret);

        if (!user) {
          this.loginError = "Utilisateur non trouvé.";
          return;
        }

        const hashedPassword = btoa(this.password);
        if (user.motDePasse !== hashedPassword) {
          this.loginError = 'Mot de passe incorrect.';
          return;
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Connexion réussie');
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  background-image: url('@/assets/LoginPagebackground.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 12px;
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

/* Responsive styling */
@media (max-width: 768px) {
  .form-container {
    padding: 15px;
  }
}
</style> 