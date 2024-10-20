<!-- src/components/SearchBar.vue -->
<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Rechercher un produit..."
    />
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
};
</script>

<style scoped>
input {
  padding: 10px 15px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd; /* Light border for a subtle look */
  border-radius: 25px; /* Rounded corners */
  background-color: #f9f9f9; /* Light background for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff; /* Blue border on focus */
  background-color: #fff; /* White background on focus */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Stronger shadow on focus */
}

</style>