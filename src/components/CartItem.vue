<template>
  <tr>
    <td><img :src="require(`@/assets/${item.image}`)" alt="Image du produit" class="img-thumbnail" width="80" height="80">
  </td>
    <td>{{ item.titre }}</td>
    <td>  <input
              type="number"
              min="1"
              :value="item.quantity"
              @input="updateQuantity(item.id, $event.target.value)"
              class="form-control"
              style="width: 60px;"
            />
    </td>
    <td>{{ item.prix }} €</td>
    <td>{{ totalHT }} €</td> <!-- Total par produit -->

    <td>
      <button @click="removeFromCart(item.id)"><i class="fas fa-trash"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    totalHT: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
    updateQuantity(productId, quantity) {
      this.$emit('update-quantity', { productId, quantity: Number(quantity) });
    },
  }
};
</script>

<style scoped>
button {
    transition: background-color 0.3s ease;

}
</style>


