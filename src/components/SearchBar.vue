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
  padding: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}
</style>
