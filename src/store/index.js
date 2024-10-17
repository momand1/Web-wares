import Vuex from 'vuex';

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
    cart: [],
    isLoggedIn: true,
    currentUser: null,
    orders: []
  },
  mutations: {
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += product.moq;
      } else {
        state.cart.push({ ...product, quantity: product.moq });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    ADD_USER(state, newUser) {
      state.utilisateurs.push(newUser);
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = null;
    },
    SET_CART_ITEMS(state, items) {
      state.cartItems = items;
    },
    UPDATE_CART_ITEM_QUANTITY(state, { id, quantity }) {
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity; // Met à jour la quantité
      }
    },
    TOGGLE_USER_ROLE(state, userId) {
      const user = state.utilisateurs.find(user => user.id === userId);
      if (user) {
        user.role = user.role === 'USER' ? 'ADMIN' : 'USER';
      }
    },
    ADD_PRODUCT(state, product) {
      state.produits.push(product);
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.produits.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        // Direct assignment to state to update the product
        state.produits[index] = updatedProduct;
      }
    },
    REMOVE_PRODUCT(state, productId) {
      state.produits = state.produits.filter(product => product.id !== productId);
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
    UPDATE_CATEGORY(state, updatedCategory) {
      const index = state.categories.findIndex(cat => cat.id === updatedCategory.id);
      if (index !== -1) {
        // Direct assignment to state to update the category
        state.categories[index] = updatedCategory;
      }
    },
    REMOVE_CATEGORY(state, categoryId) {
      state.categories = state.categories.filter(cat => cat.id !== categoryId);
    },
    ADD_ORDER(state, order) {
      state.orders.push(order);
    },
    MARK_ORDER_DELIVERED(state, orderId) {
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        order.delivered = true;
      }
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
    registerUser({ commit, state }, userData) {
      const existingUser = state.utilisateurs.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Cet utilisateur existe déjà.');
      } else {
        commit('ADD_USER', userData);
      }
    },
    loginUser({ commit, state }, { email, password }) {
      const user = state.utilisateurs.find(user => user.email === email && user.motDePasse === password);
      if (user) {
        commit('SET_CURRENT_USER', user);
        return true;
      } else {
        throw new Error('Email ou mot de passe incorrect.');
      }
    },
    updateCartItemQuantity({ commit }, { id, quantity }) {
      commit('UPDATE_CART_ITEM_QUANTITY', { id, quantity });
    },
    toggleUserRole({ commit }, userId) {
      commit('TOGGLE_USER_ROLE', userId);
    },
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    updateProduct({ commit }, updatedProduct) {
      commit('UPDATE_PRODUCT', updatedProduct);
    },
    removeProduct({ commit }, productId) {
      commit('REMOVE_PRODUCT', productId);
    },
    addCategory({ commit }, category) {
      commit('ADD_CATEGORY', category);
    },
    updateCategory({ commit }, updatedCategory) {
      commit('UPDATE_CATEGORY', updatedCategory);
    },
    removeCategory({ commit }, categoryId) {
      commit('REMOVE_CATEGORY', categoryId);
    },
    markOrderDelivered({ commit }, orderId) {
      commit('MARK_ORDER_DELIVERED', orderId);
    }
  },
  getters: {
    produits: state => state.produits,
    totalItemsInCart(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    cartItems: state => state.cart,
    cartTotalHT: state => {
      return state.cart.reduce((total, item) => total + item.prix * item.quantity, 0).toFixed(2);
    },
    cartTotalTTC: (state, getters) => {
      const taxRate = 1.20; // Taxe de 20%
      return (getters.cartTotalHT * taxRate).toFixed(2);
    },
    orders: state => state.orders
  }
});
