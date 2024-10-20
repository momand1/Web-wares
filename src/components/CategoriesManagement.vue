<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-tags"></i> Gestion des catégories
    </h2>
        <!-- Formulaire d'ajout de catégorie -->
  <form @submit.prevent="addCategory">
    <div class="form-group">
      <label for="newCategory">Ajouter une nouvelle catégorie</label>
      <input
        type="text"
        id="newCategory"
        class="form-control"
        v-model="newCategory"
        placeholder="Nom de la catégorie"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>


    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>  <input
            type="text"
            v-model="category.name"
            @input="editCategory(category)"
          />
          </td>
          <td>
            <button class="btn " @click="deleteCategory(category.id)">
              <i class="fas fa-trash"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
data() {
  return {
    newCategory: '', // Pour le formulaire d'ajout de catégorie
  };
},
computed: {
  ...mapGetters(['categories']), // Accès à la liste des catégories depuis le store
},
methods: {
  ...mapActions(['fetchCategories', 'createCategory', 'updateCategory', 'removeCategory']),
  
  // Appelé lors de la soumission du formulaire d'ajout de catégorie
  addCategory() {
    if (this.newCategory.trim() === '') return;

    const category = { name: this.newCategory.trim() };
    this.createCategory(category).then(() => {
      this.newCategory = ''; // Réinitialiser le champ du formulaire
    });
  },

  // Modification d'une catégorie
  editCategory(category) {
    this.updateCategory(category);
  },

  // Suppression d'une catégorie
  deleteCategory(categoryId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.removeCategory(categoryId);
    }
  },
},
mounted() {
  // Récupérer la liste des catégories lorsque le composant est monté
  this.fetchCategories();
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