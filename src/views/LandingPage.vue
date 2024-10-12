<template>
    <div>

        <h1>Bienvenue sur Web-Wares</h1>
        <button>Connexion</button>
        <button>Inscription</button>
        <img src="../assets/deco-1.jpg" alt="">

    </div>
</template>

<script>
    export default {
        name: 'LandingPage',
        
    }
</script>

<style  scoped>
h1 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    color: #007bff;
}
button {
    display: block;
    margin: 50px auto;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
}
button:hover {
    background-color: yellow;
    color: black;
}
img {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
}

</style>