
<template>
  <div class="container">
    <h2 class="text-center my-4">
      <i class="fas fa-shopping-cart"></i> Gestion des commandes
    </h2>
    <table class="table table-striped" v-if="orders.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Raison Sociale </th>
          <th>Total</th>
          <th>Statut</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.user }}</td>
          <td>{{ order.totalPrice}} €</td>
          <td> 
            <select v-model="order.status" @change="updateStatus(order.id, order.status)">
              <option value="En attente">En attente</option>
              <option value="En cours">En cours</option>
              <option value="Expédié">Expédié</option>
              <option value="Livré">Livré</option>
            </select>
          </td>
          <td>
            <button class="btn " @click="viewOrderDetails(order)">
              <i class="fas fa-eye"></i> 
            </button>
            <button class="btn " @click="cancelOrder(order.id)">
              <i class="fas fa-ban"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune commande passée</p>

    <div v-if="selectedOrder" class="order-details-modal">
      <h2>Détails de la commande #{{ selectedOrder.id }}</h2>
      <p><strong>Utilisateur :</strong> {{ selectedOrder.user }}</p> <!-- Ajout du nom de l'utilisateur -->
      <p><strong>Date de la commande :</strong> {{ selectedOrder.date }}</p>
      <p><strong>Total :</strong> {{ selectedOrder.totalPrice }}€</p>
      <h3>Produits commandés :</h3>
      <ul>
        <li v-for="item in selectedOrder.items" :key="item.titre">
          {{ item.titre }} - {{ item.prix }}€ x {{ item.quantity }}
        </li>
      </ul>
      <h3>Statut actuel :</h3>
      <p>{{ selectedOrder.status }}</p>
      <button @click="closeOrderDetails">Fermer</button>
    </div>
</div>  
</template>

<script>
export default {
data() {
  return {
    selectedOrder: null
  };
},
computed: {
  orders() {
    return this.$store.getters.allOrders;
  }
},
methods: {
  viewOrderDetails(order) {
    this.selectedOrder = order;
  },
  closeOrderDetails() {
    this.selectedOrder = null;
  },
  updateStatus(orderId, status) {
    this.$store.dispatch('updateOrderStatus', { orderId, status });
  },
  cancelOrder(orderId) {
    if (confirm('Êtes-vous sûr de vouloir annuler cette commande ?')) {
      this.$store.dispatch('deleteOrder', orderId);
      alert('Commande annulée avec succès');
    }
  }
}
};
</script>

<style scoped>
.order-details-modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
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