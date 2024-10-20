import Vuex from 'vuex';

// Fonction utilitaire pour chiffrer les mots de passe (simulation)
function hashPassword(password) {
  return password.split('').reverse().join(''); // Simple inversion de caractères
}

// Récupérer les utilisateurs, utilisateurs connectés et panier depuis localStorage
const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
const savedLoggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

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
    utilisateurs: savedUsers,
    cart: savedCart, // Chargement initial du panier depuis localStorage
    cartItems: [],
    isLoggedIn: savedLoggedUsers.length > 0,
    currentUser: savedLoggedUsers.length ? savedLoggedUsers[0] : null,
    categorie: [],
    orders: []
  },
  mutations: {
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem('loggedUsers');
    },
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += product.moq;
      } else {
        state.cart.push({ ...product, quantity: product.moq });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Sauvegarder le panier dans localStorage
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Sauvegarder le panier dans localStorage
    },
    CLEAR_CART(state) {
      state.cart = [];
      localStorage.removeItem('cart'); // Vider le panier dans localStorage
    },
    UPDATE_CART_ITEM_QUANTITY(state, { id, quantity }) {
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Sauvegarder le panier mis à jour dans localStorage
    },
    ADD_USER(state, newUser) {
      state.utilisateurs.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.utilisateurs));
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      localStorage.setItem('loggedUsers', JSON.stringify([user]));
    },
    ADD_ORDER(state, order) {
      state.orders.push(order);
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    login({ commit }) {
      commit('LOGIN');
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
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    updateCartItemQuantity({ commit }, { id, quantity }) {
      commit('UPDATE_CART_ITEM_QUANTITY', { id, quantity });
    },
    registerUser({ commit, state }, userData) {
      const existingUser = state.utilisateurs.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Cet utilisateur existe déjà.');
      }

      const hashedPassword = hashPassword(userData.motDePasse);
      const newUser = { ...userData, motDePasse: hashedPassword, role: 'USER' };

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
    },
    logoutUser({ commit }) {
      commit('LOGOUT');
    },
    placeOrder({ commit, state }) {
      const newOrder = {
        id: Date.now(),
        items: state.cart,
        totalPrice: state.cart.reduce((acc, item) => acc + item.prix * item.quantity, 0),
        date: new Date().toLocaleDateString(),
        status: 'En attente',
        user: state.currentUser ? state.currentUser.raisonSociale : 'Anonyme'
      };

      commit('ADD_ORDER', newOrder);
      commit('CLEAR_CART');
    },
    chargerCategorie({ commit }) {
      const categories = [
        { id: 1, name: 'Mobilier d\'intérieur' },
        { id: 2, name: 'Luminaires' },
        { id: 3, name: 'Tapis' },
        { id: 4, name: 'Objets de décorations' }
      ];
      commit('SET_CATEGORIES', categories);
    }
  },
  getters: {
    produits: state => state.produits,
    cartItems: state => state.cart,
    cartTotalHT: state => {
      return state.cart.reduce((total, item) => total + item.prix * item.quantity, 0).toFixed(2);
    },
    cartTotalTTC: (state, getters) => {
      const taxRate = 1.20;
      return (getters.cartTotalHT * taxRate).toFixed(2);
    },
    currentUser: state => state.currentUser,
    categories: state => state.categories
  }
});
