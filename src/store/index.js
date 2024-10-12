import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 1, name: 'Mobilier d\'intérieur' },
      { id: 2, name: 'Luminaires' },
      { id: 3, name: 'Tapis' },
      { id: 4, name: 'Objets de décorations' }
    ],
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
    loggedInUser: null,  // Tracks the currently logged-in user
    cart: [],            // Array to hold products added to cart
    commandes: [],
    taxRate: 0.2
  },
  mutations: {
    SET_USER(state, user) {
      state.loggedInUser = user;
    },
    LOGOUT(state) {
      state.loggedInUser = null;
    },
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantite += product.moq;
      } else {
        state.cart.push({ ...product, quantite: product.moq });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    PLACE_ORDER(state, order) {
      state.commandes.push(order);
      state.cart = [];  // Clear cart after placing an order
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const cartItem = state.cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantite = quantity;
      }
    }
  },
  actions: {
    login({ commit, state }, { email, password }) {
      const user = state.utilisateurs.find(
        u => u.email === email && u.motDePasse === password
      );
      if (user) {
        commit('SET_USER', user);
        return true;
      }
      return false;
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    placeOrder({ commit, state }, deliveryInfo) {
      const order = {
        id: state.commandes.length + 1,
        produits: state.cart,
        coutTotal: state.cart.reduce((total, item) => total + item.prix * item.quantite, 0),
        deliveryInfo,
        userId: state.loggedInUser.id
      };
      commit('PLACE_ORDER', order);
    },
    updateQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_QUANTITY', { productId, quantity });
    }
  },
  getters: {
    isLoggedIn: state => !!state.loggedInUser,
    cartTotal: state => state.cart.reduce((total, item) => total + item.prix * item.quantite, 0),
    totalItemsInCart: state => state.cart.reduce((sum, item) => sum + item.quantite, 0),
    totalHT(state) {
      return state.cart.reduce((total, item) => total + item.prix * item.quantite, 0);
    },
    totalTTC(state, getters) {
      return getters.totalHT * (1 + state.taxRate);
    }
  }
});
