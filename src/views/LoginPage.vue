<template>
  <div class="login-page">
    <div class="form-container">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <!-- Email Input -->
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            @input="validateEmail"
            placeholder="Entrez votre email"
          />
          <small v-if="errors.email" class="error">{{ errors.email }}</small>
        </div>
<p><strong>Ou</strong></p>
        <!-- SIRET Input -->
        <div class="form-group">
          <label>SIRET</label>
          <input
            type="text"
            v-model="siret"
            @input="validateSiret"
            placeholder="Entrez votre SIRET"
          />
          <small v-if="errors.siret" class="error">{{ errors.siret }}</small>
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            v-model="password"
            @input="validatePassword"
            required
            placeholder="Entrez votre mot de passe"
          />
          <small v-if="errors.password" class="error">{{ errors.password }}</small>
          <small v-if="loginError" class="error">{{ loginError }}</small>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn" :disabled="hasErrors || !isAnyInputFilled">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data properties to hold user input and error messages
      email: '',
      siret: '',
      password: '',
      loginError: null,
      errors: {
        email: '',
        siret: '',
        password: '',
      },
    };
  },
  computed: {
    // Check if any error exists in the form
    hasErrors() {
      return Object.values(this.errors).some(error => error !== '');
    },
    // Check if at least one input (email or SIRET) is filled
    isAnyInputFilled() {
      return this.email !== '' || this.siret !== '';
    },
  },
  methods: {
    // Validate the email input
    validateEmail() {
      this.errors.email = this.email === '' ? 'Ce champ est obligatoire si vous ne saisissez pas le SIRET.' : '';
    },
    // Validate the SIRET input
    validateSiret() {
      this.errors.siret = this.siret === '' ? 'Ce champ est obligatoire si vous ne saisissez pas l\'email.' : '';
    },
    // Validate the password input
    validatePassword() {
      this.errors.password = this.password.length < 8 ? 'Le mot de passe doit contenir au moins 8 caractères.' : '';
    },
    // Login method to authenticate user
    login() {
      // Check if there are no errors and at least one input is filled
      if (!this.hasErrors && this.isAnyInputFilled) {
        // Retrieve users from local storage
        const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
        
        // Find the user by email or SIRET and validate the password
        const user = utilisateurs.find(
          user => 
            (user.email === this.email || user.siret === this.siret) &&
            user.motDePasse === btoa(this.password) // Check password here
        );

        // If user is not found or password is incorrect
        if (!user) {
          this.loginError = "Utilisateur non trouvé ou mot de passe incorrect.";
          return;
        }

        // Store the current user in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Connexion réussie'); // Notify successful login
        this.$router.push('/'); // Redirect to home page
      } else {
        // If neither email nor SIRET is filled, show an error
        if (!this.isAnyInputFilled) {
          this.loginError = "Veuillez remplir au moins l'email ou le SIRET.";
        }
      }
    },
  },
};
</script>

<style scoped>
/* Styles for the login page background */
.login-page {
  background-image: url('@/assets/LoginPagebackground.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styles for the form container */
.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Styles for the form layout */
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Styles for each form group */
.form-group {
  display: flex;
  flex-direction: column;
}

/* Styles for label elements */
label {
  margin-bottom: 8px;
}

/* Styles for input fields */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Styles for the submit button */
button {
  padding: 12px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Styles for button hover effect */
button:hover {
  background-color: #4cae4c;
}

/* Styles for error messages */
.error {
  color: red;
  font-size: 0.85rem;
}

/* Responsive styling for smaller screens */
@media (max-width: 768px) {
  .form-container {
    padding: 15px;
  }
}
</style>
