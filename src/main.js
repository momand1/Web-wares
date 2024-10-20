import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');