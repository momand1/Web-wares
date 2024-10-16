import Vuex from 'vuex';

// Fonction utilitaire pour chiffrer les mots de passe (simulation)
function hashPassword(password) {
  // Cette fonction doit être faite côté backend avec bcrypt ou une autre librairie de chiffrement
  return password.split('').reverse().join(''); // Simple inversion des caractères pour simuler un hash (à ne pas utiliser en production)
}

export default new Vuex.Store({
  state: { 
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
    ],

    utilisateurs: [
      {
        id: 1,
        raisonSociale: 'Entreprise A',
        siret: '12345678901234',
        adresse: '123 Rue de la République',
        codePostal: '75001',
        ville: 'Paris',
        email: 'entrepriseA@example.com',
        motDePasse: hashPassword('motdepasseA'), // Mot de passe chiffré
        role: 'USER'
      },
      {
        id: 2,
        raisonSociale: 'Entreprise B',
        siret: '56789012345678',
        adresse: '456 Avenue des Champs-Élysées',
        codePostal: '75008',
        ville: 'Paris',
        email: 'entrepriseB@example.com',
        motDePasse: hashPassword('motdepasseB'), // Mot de passe chiffré
        role: 'ADMIN'
      }
    ],

    cart: [],

    currentUser: null, // Utilisateur connecté (null par défaut)
  },

  mutations: { 
    // Ajouter un produit au panier
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantite += 1;
      } else {
        state.cart.push({ ...product, quantite: 1 });
      }
    },

    // Ajouter un nouvel utilisateur lors de l'inscription
    ADD_USER(state, newUser) {
      state.utilisateurs.push(newUser);
    },

    // Définir l'utilisateur connecté après une connexion réussie
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },

    // Déconnexion de l'utilisateur
    LOGOUT_USER(state) {
      state.currentUser = null;
    }
  },

  actions: { 
    // Enregistrement d'un utilisateur avec des validations renforcées
    registerUser({ commit, state }, userData) {
      // Vérification de l'unicité de l'email
      const existingUser = state.utilisateurs.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Cet utilisateur existe déjà.');
      }

      // Validation du format du SIRET (doit être un nombre de 14 chiffres)
      const siretRegex = /^\d{14}$/;
      if (!siretRegex.test(userData.siret)) {
        throw new Error('Le numéro de SIRET doit comporter exactement 14 chiffres.');
      }

      // Validation du code postal (doit comporter 5 chiffres)
      const codePostalRegex = /^\d{5}$/;
      if (!codePostalRegex.test(userData.codePostal)) {
        throw new Error('Le code postal doit comporter exactement 5 chiffres.');
      }

      // Chiffrement du mot de passe avant de l'enregistrer
      const hashedPassword = hashPassword(userData.motDePasse);

      const newUser = {
        ...userData,
        motDePasse: hashedPassword, // Stocker le mot de passe chiffré
        role: 'USER'
      };

      commit('ADD_USER', newUser);
    },

    // Connexion de l'utilisateur avec vérification du mot de passe chiffré
    loginUser({ commit, state }, { email, password }) {
      const user = state.utilisateurs.find(user => user.email === email);
      
      if (!user) {
        throw new Error('Email incorrect.');
      }

      // Vérification du mot de passe chiffré
      const hashedPassword = hashPassword(password);
      if (user.motDePasse !== hashedPassword) {
        throw new Error('Mot de passe incorrect.');
      }

      commit('SET_CURRENT_USER', user);
      return true;
    },

    // Déconnexion de l'utilisateur
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    }
  },

  getters: { 
    produits: state => state.produits,

    // Calcul du nombre total d'articles dans le panier
    totalItemsInCart(state) {
      return state.cart.reduce((sum, item) => sum + item.quantite, 0);
    },

    currentUser: state => state.currentUser,

    utilisateurs: state => state.utilisateurs
  }
});
