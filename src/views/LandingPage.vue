<template>
  <!-- Header -->
  <div class="row">
         <div class="col-12 text-center pt-3">
             <h1>Web Wares</h1>
             <p>Bienvenue sur WebWares, votre 
               solution de commande en ligne simplifiée.</p>
         </div>
     </div>
     
     <div class="container">
     <div class="row">
         <div class="col-md-6 overflow zoom">
             <img src="../assets/mobilier-1.jpg" alt="poterie" class="img-fluid equal-height">
         </div>
         <div class="col-6 col-md-6">
             <div class="row">
                 <div class="col-md-12 ms-2 mb-2 overflow zoom">
                     <img src="../assets/mobilier-3.jpg" alt="canapé" class="img-fluid equal-height">
                 </div>
                 <div class="col-md-12 ms-2 overflow zoom">
                     <img src="../assets/mobilier-4.jpg" alt="canapé" class="img-fluid equal-height">
                 </div>
             </div>
         </div>
     </div>
 </div>
<!-- Fin header -->
 <br>
<!-- bande pub cadeau reduction -->
<div class="banner">
 <a href="#" class="banner-link">
   C'est nouveau : nos cartes cadeaux ! 
   <span class="banner-action">Je fais des heureux &rsaquo;</span>
 </a>
</div>

<div class="newsletter-section">
 <div class="newsletter-content">
   <div class="welcome-offer">
     <p>-5 % de bienvenue*</p>
     <p>Inscrivez-vous à la newsletter et recevez toute l'actualité et les bons plans !</p>
   </div>
   <div class="newsletter-form">
     <input type="email" placeholder="Mon adresse e-mail" />
     <button>Je m'inscris</button>
   </div>
   <p class="fine-print">
     *Désinscription possible à tout moment. Code à ajouter à votre panier ou à saisir lors de la dernière étape de la commande. Code valable 6 semaines à partir de l'inscirption...
     <a href="#">Afficher plus</a>
   </p>
 </div>
</div>
<!-- Fin bande pub cadeau reduction -->

<br><br><br>
 <section class="services-section">
   <div class="container">
     <h2 class="services-title">Nos services</h2>
     <div class="services">
       <div class="service-item">
         <img src="../assets/fast-delivery.png" alt="Retour gratuits logo" class="service-logo">
         <p>Livraisons <strong>rapides et gratuites</strong></p>
       </div>
       <div class="service-item">
         <img src="../assets/30.png" alt="Retours sous 30 jours logo" class="service-logo">
         <p>Retours sous <strong>30 jours</strong></p>
       </div>
       <div class="service-item">
         <img src="../assets/payer.png" alt="Mode de paiement logo" class="service-logo">
         <p>Vous avez le choix du <strong>mode de paiement</strong></p>
       </div>
     </div>
     <p class="more-info"><a href="#">Je découvre les engagements Web Wares &rsaquo;</a></p>
   </div>
 </section>
 

 <div class="contact-form">
       <h2>Contactez nous !</h2>
       <p>Veuillez remplir vos informations et nous vous enverrons votre commande en un rien de temps.</p>
       <form action="submit_form.php" method="post">
           <label for="name">Votre Nom*</label>
           <div style="display: flex; gap: 10px;">
               <input type="text" name="firstName" placeholder="Prénom" required>
               <input type="text" name="lastName" placeholder="Nom de famille" required>
           </div>

           <label for="email">Votre Email*</label>
           <input type="email" name="email" placeholder="helloworld@contact.net" required>

           <label for="phone">Votre Adresse*</label>
           <div style="display: flex; gap: 10px;">
               <input type="text" name="areaCode" placeholder="Rue n°" required>
               <input type="text" name="prefix" placeholder="Ville" required>
               <input type="nomber" name="lineNumber" placeholder="Code Postal" required>
           </div>

           <label for="subject">Sujet du message*</label>
           <select name="subject" required>
             <option value="other">Autre</option>
               <option value="order">Aide pour ma commande</option>
               <option value="support">Retours et remboursements</option>
               <option value="paiement">Paiements et questions générales</option>
               <option value="gift">Vérifier le solde des cadeau et de la carte</option>
               <option value="support">Service client</option>
           </select>

           <label for="message">Message*</label>
           <textarea name="message" rows="4" required></textarea>

           <div class="recaptcha-container">
               <!-- Insert reCAPTCHA -->
               <div class="g-recaptcha" data-sitekey="your-site-key"></div>
           </div>

           <button type="submit">Envoyer</button>
       </form>
   </div>


</template>



<style scoped>
h1 {
  font-size: 48px;
  font-weight: bold;
}
.overflow {
   position: relative;
     overflow: hidden;
 }
 
 .zoom img {
     transition: all 0.2s linear;
   }
 
 .zoom:hover img {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
 }
 .equal-height {
   width: 100%; /* Make images responsive */
   height: auto; /* Maintain aspect ratio */
   height: 100%; /* Make sure the height fills the column */
   object-fit: cover; /* Ensure the image covers the area */
 }

/* Style pour nos services */

.services-section {
 background-color: #f1f1f1;
 padding: 30px 0;
 text-align: center;
}

.container {
 max-width: 1200px;
 margin: 0 auto;
}

.services-title {
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 20px;
}

.services {
 display: flex;
 justify-content: space-around;
 align-items: center;
}

.service-item {
 width: 30%;
}

.service-logo {
 display: block;
 margin: 0 auto 10px;
 width: 80px; 
 height: 80px; 
}

.more-info {
 margin-top: 20px;
 font-size: 14px;
}

.more-info a {
 text-decoration: none;
 color: #333;
}

.more-info a:hover {
 text-decoration: underline;
}


 /* Banner Styles */
.banner {
 background-color: #add8e6;
 padding: 15px;
 text-align: center;
}

.banner-link {
 text-decoration: none;
 color: black;
 font-weight: bold;
 display: block; /* Makes the entire banner clickable */
}

.banner-action {
 float: right;
 font-weight: normal;
 color: #333;
}

/* Newsletter Section */
.newsletter-section {
 background-color: #f1f1f1;
 padding: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
}

.newsletter-content {
 display: flex;
 justify-content: space-between;
 width: 100%;
 max-width: 1200px;
 flex-wrap: wrap;
}

.welcome-offer {
 flex: 1;
 min-width: 200px;
}

.newsletter-form {
 flex: 1;
 display: flex;
 min-width: 300px;
}

.newsletter-form input {
 flex: 3;
 padding: 10px;
 margin-right: 5px;
}

.newsletter-form button {
 flex: 1;
 background-color: #ff5733;
 color: white;
 border: none;
 padding: 10px;
}

.fine-print {
 margin-top: 10px;
 font-size: 12px;
 color: #666;
}


         /* contact form */
         body {
           background: linear-gradient(to bottom right, #1e90ff, #00ced1);
           font-family: Arial, sans-serif;
           margin: 0;
           padding: 0;
       }
       
       .contact-form {
           background-color: white;
           padding: 30px;
           border-radius: 10px;
           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
           max-width: 800px; /* Maximum width of the form */
           margin: 20px auto; /* Center the form with auto margins */
         }
         
       .contact-form h2 {
         margin-top: 0;
         color: #333;
       }

       .contact-form label {
         display: block;
           margin-top: 15px;
           margin-bottom: 5px;
           font-weight: bold;
       }

       .contact-form input, 
       .contact-form textarea, 
       .contact-form select {
           width: calc(100% - 20px);
           padding: 10px;
           margin-top: 5px;
           border: 1px solid #ccc;
           border-radius: 5px;
       }
       
       .contact-form button {
           margin-top: 20px;
           padding: 10px;
           background-color: #4198f0;
           border: none;
           color: white;
           font-size: 16px;
           border-radius: 5px;
           cursor: pointer;
           width: 100%;
       }

       .contact-form button:hover {
           background-color: #0d3972;
       }
       
       .recaptcha-container {
           margin-top: 15px;
       }
</style>
           
           
           
           <script>
           export default {
             methods: {
               subscribe() {
                 alert('Inscription à la newsletter réussie !');
               }
             },
             data() {
                 return {
                   showDropdown: false,
                 };
               },
           }
           </script>