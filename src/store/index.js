import Vuex from 'vuex';

export default new Vuex.Store({
  state: { 
    // Produits disponibles
    produits: [
      {
        id: 1,
        image: 'mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        categorieId: 1
      },
      {
        id: 2,
        image: 'luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        categorieId: 2
      },
      {
        id: 3,
        image: 'tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 89.99,
        moq: 20,
        categorieId: 3
      },
      {
        id: 4,
        image: 'deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        moq: 20,
        categorieId: 4
      }
    ],

    // Utilisateurs existants (fictifs pour les tests)
    utilisateurs: [
      {
        id: 1,
        raisonSociale: 'Entreprise A',
        siret: '12345678901234',
        adresse: '123 Rue de la République',
        codePostal: '75001',
        ville: 'Paris',
        email: 'entrepriseA@example.com',
        motDePasse: 'motdepasseA',
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
        motDePasse: 'motdepasseB',
        role: 'ADMIN'
      }
    ],

    // Panier des produits ajoutés
    cart: [],

    // Utilisateur connecté (par défaut null)
    currentUser: null,
  },
  mutations: { 
    // Ajout d'un produit au panier
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantite += 1;
      } else {
        state.cart.push({ ...product, quantite: 1 });
      }
    },

    // Ajout d'un nouvel utilisateur lors de l'inscription
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
    // Action pour enregistrer un utilisateur
    registerUser({ commit, state }, userData) {
      const existingUser = state.utilisateurs.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Cet utilisateur existe déjà.');
      } else {
        commit('ADD_USER', userData);
      }
    },

    // Action pour connecter un utilisateur
    loginUser({ commit, state }, { email, password }) {
      const user = state.utilisateurs.find(user => user.email === email && user.motDePasse === password);
      if (user) {
        commit('SET_CURRENT_USER', user);
        return true;
      } else {
        throw new Error('Email ou mot de passe incorrect.');
      }
    },

    // Action pour déconnecter l'utilisateur
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    }
  },
  getters: { 
    // Récupération des produits
    produits: state => state.produits,

    // Calcul du nombre total d'articles dans le panier
    totalItemsInCart(state) {
      return state.cart.reduce((sum, item) => sum + item.quantite, 0);
    },

    // Récupération de l'utilisateur actuellement connecté
    currentUser: state => state.currentUser,

    // Récupération de tous les utilisateurs
    utilisateurs: state => state.utilisateurs
  }
});
