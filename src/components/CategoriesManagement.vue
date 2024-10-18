<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-tags"></i> Gestion des catégories
    </h2>
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
          <td>{{ category.nom }}</td>
          <td>
            <button class="btn" @click="modifierCategorie(category.id)">
              <i class="fas fa-edit"></i> 
            </button>
            <button class="btn " @click="supprimerCategorie(category.id)">
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
  name: 'CategoriesManagement',
  data() {
    return {
      categories: [{ id: 1, nom: 'categorie1' },
        { id: 2, nom: 'categorie2' }], // Remplir avec les données de catégories
    };
  },
  methods: {
    modifierCategorie(//id
    ) {
      // Logique pour modifier une catégorie
    },
    supprimerCategorie(//id
    ) {
      // Logique pour supprimer une catégorie
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
