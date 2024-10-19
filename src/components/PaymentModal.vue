<template>
    <div class="modal-backdrop">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Paiement sécurisé</h5>
            <button type="button" class="close" @click="$emit('close')">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitPayment">
              <div class="form-group">
                <label for="cardNumber">Numéro de carte</label>
                <input
                  type="text"
                  id="cardNumber"
                  v-model="payment.cardNumber"
                  class="form-control"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="expiryDate">Date d'expiration</label>
                  <input
                    type="text"
                    id="expiryDate"
                    v-model="payment.expiryDate"
                    class="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    v-model="payment.cvv"
                    class="form-control"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Nom sur la carte</label>
                <input
                  type="text"
                  id="name"
                  v-model="payment.name"
                  class="form-control"
                  placeholder="Nom du titulaire"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block" @click="placeOrder" >Payer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payment: {
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          name: ''
        }
      };
    },
    methods: {
     
      placeOrder() {
      this.$store.dispatch('placeOrder');
      alert('Commande passée avec succès !');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-dialog {
    width: 400px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .modal-header {
    padding: 16px;
    background-color: black;
    color: white;
    border-bottom: 1px solid #ddd;
  }
  
  .modal-body {
    padding: 16px;
  }
  
  .close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color:white;
  }
  .btn{
      background-color: black;
  }
  </style>