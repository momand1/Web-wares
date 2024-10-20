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
    cartItems: [],
    isLoggedIn: true,
    currentUser: savedLoggedUsers.length ? savedLoggedUsers[0] : null,
    utilisateurss: savedUsers,
    categorie: [],
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
    UPDATE_CART_ITEM_QUANTITY(state, { id, quantity }) {
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity; // Met à jour la quantité de l'élément
      }
    },
    ADD_USER(state, newUser) {
      state.utilisateurs.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.utilisateurs))
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      const loggedUsers = [user];
      localStorage.setItem('loggedUsers', JSON.stringify(loggedUsers));
    },
    LOGOUT_USER(state) {
      state.currentUser = null;
      localStorage.removeItem('loggedUsers');
    },
    SET_CART_ITEMS(state, items) {
      state.cartItems = items;
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
    UPDATE_ORDER_STATUS(state, { orderId, status }) {
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
      }
    },
    DELETE_ORDER(state, orderId) {
      state.orders = state.orders.filter(order => order.id !== orderId);
    },
    setCategorie(state, items) {
      state.categorie = items;
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
    },
    async chargerCategorie({ commit }) {
      // If you don't need the items, remove this part entirely
      const items = [
        { id: 1, name: 'Mobilier d\'intérieur' },
        { id: 2, name: 'Luminaires' },
        { id: 3, name: 'Tapis' },
        { id: 4, name: 'Objets de décorations' }
      ];
      commit('setCategorie', items);
    },
    placeOrder({ commit, state }) {
      const newOrder = {
        id: Date.now(),
        items: state.cart,
        totalPrice: state.cart.reduce((acc, item) => acc + item.prix * item.quantity, 0),
        date: new Date().toLocaleDateString(),
        status: 'En attente', // Statut par défaut
        user: state.utilisateurss.raisonSociale
      };
      commit('ADD_ORDER', newOrder);
      commit('CLEAR_CART');
    },
    updateOrderStatus({ commit }, { orderId, status }) {
      commit('UPDATE_ORDER_STATUS', { orderId, status });
    },
    deleteOrder({ commit }, orderId) {
      commit('DELETE_ORDER', orderId);
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
    categorie: state => state.categorie,
    currentUser: state => state.currentUser,
    utilisateurs: state => state.utilisateurs,
    allOrders: state => state.orders
  }
});
