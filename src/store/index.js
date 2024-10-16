import Vuex from 'vuex';

export default new Vuex.Store({
  state: { // state is for getting data from the store 
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
  },
  mutations: { // mutations is for making changes in state
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    ADD_TO_CART(state, product) {
      const cartItem = state.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      } // if the item is already in the cart, increase the quantity by 1 else add the item to the cart
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    CLEAR_CART(state) {
      state.cart = [];
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
    }
  },
  getters: { // getters is for getting data from state
    produits: state => state.produits,
    totalItemsInCart(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0); // this will return the total number of items in the cart
    },
    cartItems: state => state.cart,
    cartTotalHT: state => {
      return state.cart.reduce((total, item) => total + item.prix * item.quantity, 0).toFixed(2);
    },
    cartTotalTTC: (state, getters) => {
      const taxRate = 1.20; // Taxe de 20%
      return (getters.cartTotalHT * taxRate).toFixed(2);
    }
  }
});
