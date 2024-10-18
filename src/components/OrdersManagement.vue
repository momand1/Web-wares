<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-shopping-cart"></i> Gestion des commandes
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Montant</th>
          <th>Statut</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.client }}</td>
          <td>{{ order.amount }} €</td>
          <td>{{ order.status }}</td>
          <td>
            <button class="btn " @click="voirDetails(order.id)">
              <i class="fas fa-eye"></i> 
            </button>
            <button class="btn " @click="annulerCommande(order.id)">
              <i class="fas fa-ban"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrdersManagement',
  data() {
    return {
      orders: [
        { id: 1, client:'alice', amount: 150 ,status:'livré'},
        { id: 2,  client:'jean', amount: 230 ,status:'en cours de traitement'}], // Remplir avec les données de commandes
    };
  },
  methods: {
    voirDetails(//id
    ) {
      // Logique pour voir les détails d'une commande
    },
    annulerCommande(//id
    ) {
      // Logique pour annuler une commande
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
