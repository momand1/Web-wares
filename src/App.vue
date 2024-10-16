<template>
  <div id="app">
    <HeaderPage />

    <router-view></router-view> <!-- This is where the page content will be rendered -->

    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  },

  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

nav {
  position: relative;
}


.burger-menu {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Hide the menu by default on small screens */
ul {
  list-style: none;
  display: none; 
  flex-direction: column; 
  justify-content: center;
  gap: 10px;
  transition: max-height 0.8s ease;
  
}

/* Show the menu when active */
ul.active {
  display: flex; 
  max-height: 300px;
  opacity: 1;
}

/* Responsive Styles */
@media (min-width: 768px) {
  ul {
    display: flex; 
    flex-direction: row;
  }
  .burger-menu {
    display: none; 
  }
}
</style>
