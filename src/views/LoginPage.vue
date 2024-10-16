<template>
  <div class="login-page">
    <div class="form-container">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" @input="validateEmail" required placeholder="Entrez votre email" />
          <small v-if="errors.email" class="error">{{ errors.email }}</small>
        </div>
        <div class="input-group">
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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: null,
      errors: {
        email: '',
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
    ...mapActions(['loginUser']),
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errors.email = 'Adresse email invalide.';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.errors.password = 'Le mot de passe doit contenir au moins 8 caractères.';
      } else {
        this.errors.password = '';
      }
    },
    async login() {
      if (!this.hasErrors) {
        try {
          await this.loginUser({ email: this.email, password: this.password });
          alert("Connexion réussie");
          this.$router.push('/');
        } catch (error) {
          this.loginError = 'Email ou mot de passe incorrect.';
        }
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/LoginPagebackground.jpg');
  background-size: cover;
  background-position: center;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s ease;
}

.form-container:hover {
  transform: translateY(-5px);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
}

.input-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #28a745;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #218838;
}

.error {
  color: red;
  font-size: 0.85rem;
}
</style>
