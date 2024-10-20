<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-box"></i> Gestion des produits
    </h2>
    
    <!-- Formulaire pour ajouter ou modifier un produit -->
    <form @submit.prevent="submitProduct">
      <div class="form-group">
        <label for="titre">Titre du produit</label>
        <input type="text" id="titre" v-model="newProduct.titre" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="prix">Prix</label>
        <input type="number" id="prix" v-model="newProduct.prix" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="categorie">Catégorie</label>
        <select id="categorie" v-model="newProduct.categorieId" class="form-control" required>
          <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="moq">MOQ</label>
        <input type="number" id="moq" v-model="newProduct.moq" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-success">{{ editMode ? 'Modifier' : 'Ajouter' }} le produit</button>
    </form>

    <!-- Tableau des produits -->
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Titre</th> <!-- Updated from Nom to Titre -->
          <th>Prix</th>
          <th>Catégorie</th>
          <th>MOQ</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.titre }}</td> <!-- Make sure this is titre -->
          <td>{{ product.prix }} €</td>
          <td>{{ getCategorieName(product.categorieId) }}</td>
          <td>{{ product.moq }}</td>
          <td>
            <button class="btn btn-warning" @click="editProduct(product)">
              <i class="fas fa-edit"></i> Modifier
            </button>
            <button class="btn btn-danger" @click="supprimerProduit(product.id)">
              <i class="fas fa-trash"></i> Supprimer
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
      newProduct: {
        titre: '', // Changed from nom to titre
        prix: '',
        categorieId: '',
        moq: ''
      },
      editMode: false, // Pour savoir si on est en mode ajout ou modification
    };
  },
  computed: {
    products() {
      return this.$store.getters.produits;
    },
    categories() {
      return this.$store.getters.categorie;
    }
  },
  methods: {
    // Fonction pour ajouter ou modifier un produit
    submitProduct() {
      if (this.editMode) {
        this.$store.dispatch('updateProduct', this.newProduct);
      } else {
        this.newProduct.id = this.calculateNextProductId(); // Calculating the next ID
        this.$store.dispatch('addProduct', this.newProduct);
      }
      this.resetForm();
    },
    // Calculer le prochain ID du produit
    calculateNextProductId() {
      const products = this.$store.getters.produits;
      const lastProduct = products.length ? products[products.length - 1] : null;
      return lastProduct ? lastProduct.id + 1 : 1;
    },
    // Préparer le formulaire pour la modification
    editProduct(product) {
      this.newProduct = { ...product };
      this.editMode = true;
    },
    // Supprimer un produit
    supprimerProduit(id) {
      this.$store.dispatch('removeProduct', id);
    },
    // Obtenir le nom de la catégorie par son ID
    getCategorieName(categorieId) {
      const category = this.categories.find(cat => cat.id === categorieId);
      return category ? category.name : 'Non spécifié';
    },
    // Réinitialiser le formulaire après ajout ou modification
    resetForm() {
      this.newProduct = { titre: '', prix: '', categorieId: '', moq: '' }; // Reset with titre
      this.editMode = false;
    }
  },
  mounted() {
    // Charger les catégories depuis le store au montage du composant
    this.$store.dispatch('chargerCategorie');
  }
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
}

.table th {
  background-color: black;
  color: white;
}

button {
  margin-right: 5px;
}
</style>
