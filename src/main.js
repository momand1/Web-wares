import { createApp } from 'vue';
import App from './App.vue';
import store from './store';  // Vuex store
import router from './router';  // Vue Router

// Create the app instance and inject store and router
createApp(App)
  .use(store)
  .use(router)
  .mount('#app');  // Mount the app to the #app div
