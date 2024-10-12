<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
}
</style>
