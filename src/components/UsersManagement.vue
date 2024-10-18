<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-users"></i> Gestion des utilisateurs
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn " @click="modifierUtilisateur(user.id)">
              <i class="fas fa-edit"></i> 
            </button>
            <button class="btn " @click="supprimerUtilisateur(user.id)">
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
  name: 'UsersManagement',
  data() {
    return {
      users: [    
        { id: 1, nom: 'Alice', email: 'alice@example.com' },
        { id: 2, nom: 'Bob', email: 'bob@example.com' }], // Remplir avec les données d'utilisateurs
    };
  },
  methods: {
    modifierUtilisateur(//id
    ) {
      // Logique pour modifier un utilisateur
    },
    supprimerUtilisateur(//id
    ) {
      // Logique pour supprimer un utilisateur
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
