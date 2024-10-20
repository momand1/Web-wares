<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-users"></i> Gestion des utilisateurs
    </h2>

    <!-- Champ de recherche pour filtrer les utilisateurs -->
    <div class="text-center mb-3">
      <input 
        type="text" 
        class="form-control mb-3" 
        placeholder="Rechercher par SIRET, email, adresse, ville, code postal, rôle..."
        v-model="searchQuery"
      />
    </div>

    <!-- Bouton pour afficher tous les utilisateurs -->
    <div class="text-center mb-4">
      <button class="btn btn-info ml-2" @click="clearFilter">
        Tous les Utilisateurs
      </button>
    </div>

    <!-- Tableau des utilisateurs -->
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- Colonnes avec tri dynamique -->
          <th @click="sortUsers('siret')">SIRET <i :class="getSortIcon('siret')" class="ml-2"></i></th>
          <th @click="sortUsers('email')">Email <i :class="getSortIcon('email')" class="ml-2"></i></th>
          <th @click="sortUsers('raisonSociale')">Raison Sociale <i :class="getSortIcon('raisonSociale')" class="ml-2"></i></th>
          <th @click="sortUsers('adresse')">Adresse <i :class="getSortIcon('adresse')" class="ml-2"></i></th>
          <th @click="sortUsers('ville')">Ville <i :class="getSortIcon('ville')" class="ml-2"></i></th>
          <th @click="sortUsers('codePostal')">Code Postal <i :class="getSortIcon('codePostal')" class="ml-2"></i></th>
          <th @click="sortUsers('role')">Rôle <i :class="getSortIcon('role')" class="ml-2"></i></th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Affichage des utilisateurs filtrés -->
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.siret }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.raisonSociale }}</td>
          <td>{{ user.adresse }}</td>
          <td>{{ user.ville }}</td>
          <td>{{ user.codePostal }}</td>
          <td>
            <span class="badge" :class="{'badge-success': user.role === 'ADMIN', 'badge-secondary': user.role === 'USER'}">
              {{ user.role }}
            </span>
          </td>
          <td>
            <!-- Groupe de boutons pour les actions (changer rôle/supprimer) -->
            <div class="btn-group">
              <!-- Bouton pour changer le rôle de l'utilisateur -->
              <button class="btn btn-sm btn-warning" @click="toggleRole(user)">
                <i class="fas fa-exchange-alt"></i> Rôle
              </button>
              <!-- Bouton pour supprimer l'utilisateur -->
              <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Texte de recherche
      sortBy: '', // Champ de tri sélectionné
      sortDirection: 'asc', // Direction de tri (ascendant ou descendant)
      users: JSON.parse(localStorage.getItem('utilisateurs')) || [] // Récupère les utilisateurs du LocalStorage
    };
  },
  computed: {
    filteredUsers() {
      let usersList = this.users;

      // Filtrage en fonction du texte de recherche (ville, siret, etc.)
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        usersList = usersList.filter(user =>
          user.siret.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.raisonSociale.toLowerCase().includes(query) ||
          user.adresse.toLowerCase().includes(query) ||
          user.ville.toLowerCase().includes(query) ||
          user.codePostal.toLowerCase().includes(query) ||
          user.role.toLowerCase().includes(query)
        );
      }

      // Application du tri (si nécessaire)
      if (this.sortBy) {
        usersList = usersList.sort((a, b) => {
          const modifier = this.sortDirection === 'asc' ? 1 : -1;
          if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
          if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
          return 0;
        });
      }

      return usersList;
    }
  },
  methods: {
    sortUsers(field) {
      // Gérer le tri: changer la direction si on clique plusieurs fois sur le même champ
      if (this.sortBy === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortBy = field;
        this.sortDirection = 'asc';
      }
    },
    getSortIcon(field) {
      // Retourne l'icône de tri pour la colonne
      if (this.sortBy === field) {
        return this.sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
      }
      return 'fas fa-sort';
    },
    toggleRole(user) {
      // Changer le rôle entre "USER" et "ADMIN"
      user.role = user.role === 'ADMIN' ? 'USER' : 'ADMIN';
      this.updateLocalStorage(); // Mettre à jour le LocalStorage après modification
    },
    deleteUser(userId) {
      // Supprimer un utilisateur par son ID
      this.users = this.users.filter(user => user.id !== userId);
      this.updateLocalStorage(); // Mettre à jour le LocalStorage après suppression
    },
    clearFilter() {
      // Réinitialiser le champ de recherche
      this.searchQuery = '';
    },
    updateLocalStorage() {
      // Mettre à jour les données dans le LocalStorage
      localStorage.setItem('utilisateurs', JSON.stringify(this.users));
    }
  },
  mounted() {
    // Vérifier si les utilisateurs existent dans le LocalStorage au chargement du composant
    if (!this.users.length) {
      // Si aucun utilisateur n'existe, ajouter des exemples
      this.users = [
        { id: 1, raisonSociale: 'Entreprise A', siret: '12345678901234', adresse: '123 Rue de la République', codePostal: '75001', ville: 'Paris', email: 'entrepriseA@example.com', motDePasse: 'motdepasseA', role: 'USER' },
        { id: 2, raisonSociale: 'Entreprise B', siret: '98765432109876', adresse: '456 Rue du Commerce', codePostal: '69001', ville: 'Lyon', email: 'entrepriseB@example.com', motDePasse: 'motdepasseB', role: 'ADMIN' }
      ];
      this.updateLocalStorage(); // Sauvegarder les utilisateurs exemples dans le LocalStorage
    }
  }
};
</script>

<style scoped>
/* Ajouter du style à la page */
.container {
  padding: 20px;
}

h2 {
  color: #343a40;
}

.table {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.table th {
  background-color: black;
  color: white;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
}

.table th i {
  margin-left: 5px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-group {
  display: flex;
  gap: 8px;
}

.btn-sm {
  padding: 4px 8px;
}
</style>


