<template>
  <tr>
    <td>{{ item.titre }}</td>
    <td>{{ item.quantite }}</td>
    <td>{{ item.prix }} €</td>
    <td>{{ (item.prix * item.quantite).toFixed(2) }} €</td>
    <td>
      <button @click="removeFromCart(item.id)">Retirer</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    }
  }
};
</script>

<style scoped>
button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>


