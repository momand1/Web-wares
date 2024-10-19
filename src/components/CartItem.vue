<template>
  <tr>
    <td>
      <!-- Afficher l'image du produit -->
      <img 
        :src="imageSrc" 
        alt="Image de {{ item.titre }}" 
        class="img-thumbnail" 
        width="80" 
        height="80"
      >
    </td>
    <td>{{ item.titre }}</td>
    <td>
      <input 
        type="number" 
        v-model.number="quantity" 
        @input="onQuantityChange" 
        min={{item.moq}}
      >
    </td>
    <td>{{ item.prix.toFixed(2) }} €</td> <!-- Prix unitaire -->
    <td>{{ (item.prix * quantity).toFixed(2) }} €</td> <!-- Total HT par produit -->
    <td>{{ (item.prix * quantity * 1.20).toFixed(2) }} €</td> <!-- Total TTC par produit -->
    <td>
      <button @click="removeFromCart(item.id)">
        <i class="fas fa-trash"></i>
      </button>
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
  data() {
    return {
      quantity: this.item.quantity // Utiliser une valeur locale pour éviter de muter la prop directement
    };
  },
  computed: {
    imageSrc() {
      return require(`@/assets/${this.item.image}`); // Chemin de l'image
    }
  },
  methods: {
    // Émettre l'événement pour retirer le produit du panier
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
    // Émettre la nouvelle quantité au parent
     onQuantityChange() {
      // Vérifie que la quantité n'est pas inférieure à la MOQ
      if (this.quantity < this.item.moq) {
        this.quantity = this.item.moq; // Réinitialiser à la MOQ
      }
      this.$emit('update-quantity', this.item.id, this.quantity);
    },
  }
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
