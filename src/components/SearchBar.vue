<!-- src/components/SearchBar.vue -->
<template>
    <div>
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        placeholder="Rechercher un produit..."
      />
    </div>
  </template>
  
  <script>
  export default {
    props: ['value']
  };
  </script>
  
  <style scoped>
  input {
    padding: 10px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
  }
  </style>
  