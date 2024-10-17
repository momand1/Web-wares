import Vuex from 'vuex';

// Fonction utilitaire pour chiffrer les mots de passe (simulation)
function hashPassword(password) {
  // Cette fonction doit être faite côté backend avec bcrypt ou une autre librairie de chiffrement
  return password.split('').reverse().join(''); // Simple inversion des caractères pour simuler un hash
}

// Récupérer les utilisateurs inscrits et connectés depuis le localStorage
const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
const savedLoggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];

export default new Vuex.Store({
  state: { 
    utilisateurs: savedUsers, // Utilisateurs récupérés du localStorage
    currentUser: savedLoggedUsers.length ? savedLoggedUsers[0] : null, // Premier utilisateur connecté
    cart: [],

    produits: [
      // Produits disponibles
      {
        id: 1,
        image: 'mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        categorieId: 1
      },
      // ... autres produits
    ]
  },

  mutations: { 
    ADD_USER(state, newUser) {
      state.utilisateurs.push(newUser);
      // Mettre à jour le localStorage
      localStorage.setItem('users', JSON.stringify(state.utilisateurs));
    },

    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      const loggedUsers = [user];
      localStorage.setItem('loggedUsers', JSON.stringify(loggedUsers)); // Sauvegarder le connecté
    },

    LOGOUT_USER(state) {
      state.currentUser = null;
      localStorage.removeItem('loggedUsers'); // Supprimer du localStorage à la déconnexion
    }
  },

  actions: { 
    registerUser({ commit, state }, userData) {
      const existingUser = state.utilisateurs.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Cet utilisateur existe déjà.');
      }

      const siretRegex = /^\d{14}$/;
      if (!siretRegex.test(userData.siret)) {
        throw new Error('Le numéro de SIRET doit comporter exactement 14 chiffres.');
      }

      const codePostalRegex = /^\d{5}$/;
      if (!codePostalRegex.test(userData.codePostal)) {
        throw new Error('Le code postal doit comporter exactement 5 chiffres.');
      }

      const hashedPassword = hashPassword(userData.motDePasse);
      const newUser = {
        ...userData,
        motDePasse: hashedPassword,
        role: 'USER'
      };

      commit('ADD_USER', newUser);
    },

    loginUser({ commit, state }, { email, password }) {
      const user = state.utilisateurs.find(user => user.email === email);
      if (!user) {
        throw new Error('Email incorrect.');
      }

      const hashedPassword = hashPassword(password);
      if (user.motDePasse !== hashedPassword) {
        throw new Error('Mot de passe incorrect.');
      }

      commit('SET_CURRENT_USER', user);
      return true;
    },

    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    }
  },

  getters: { 
    produits: state => state.produits,
    currentUser: state => state.currentUser,
    utilisateurs: state => state.utilisateurs
  }
});