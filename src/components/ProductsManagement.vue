<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-box"></i> Gestion des produits
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.nom }}</td>
          <td>{{ product.prix }} €</td>
          <td>
            <button class="btn " @click="modifierProduit(product.id)">
              <i class="fas fa-edit"></i> 
            </button>
            <button class="btn" @click="supprimerProduit(product.id)">
              <i class="fas fa-trash"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductsManagement',
  data() {
    return {
      products: [
        { id: 1, nom: 'Produit 1', prix: 100 },
        { id: 2, nom: 'Produit 2', prix: 50 }
        
      ], // Remplir avec les données de produits
    };
  },
  methods: {
    modifierProduit(//id
    ) {
      // Logique pour modifier un produit
    },
    supprimerProduit(//id
    ) {
      // Logique pour supprimer un produit
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h2 {
  color: #343a40;
}

.table {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden; /* Arrondir les coins du tableau */
}

.table th {
  background-color: black;
  color: white;
}
</style>
