<template>
    <footer>
      <div class="footer-text">
        <p class="footer-line">Héctor López Valero & Daniel Garijo</p>
        <p class="footer-line">Built with Vue.js</p>
        <p class="footer-line">Latest revision May, 2023</p>
      </div>
      <div class="footer-logos">
        <img src="../assets/ingGroup.gif" alt="Logo 1" class="logo">
        <img src="../assets/fiLogo.png" alt="Logo 2" class="logo">
        <img src="../assets/politecnica.png" alt="Logo 3" class="logo">
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>
  
  <style scoped>
  footer {
    width: 100%;
    height: auto;
    border-radius: 5px;
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 15px;
  }
  
  .footer-text {
    color: #535353;
    text-align: left;
  }
  
  .footer-line {
    margin: 5px 0;
  }
  
  .footer-logos {
    margin-left: 500px;
  }
  
  .logo {
    width: 15%;
    height: 15%;
    margin-left: 10px;
  }
  </style>
  