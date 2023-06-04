<template>
  <div class="container">
    <div class="container2">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo">
      </div>
      <div class="about-container">
        <h1>About Us</h1>
        <p>
          This undergraduate thesis project (TFG) was carried out by Héctor López Valero as part of the Computer Engineering degree program at the School of Computer Science at Universidad Politécnica de Madrid. The main objective of this project was to build a knowledge graph that connects software mentions in scientific articles with the names of existing repositories extracted from the Chan Zuckerberg Initiative dataset.
        </p>
        <p>
          During the development of the thesis, various tools and technologies such as Vue.js, Python, Morph, and YARRRML were employed, and various phases of the software development process were carried out, such as researching the provided datasets, creating a related model for constructing the knowledge graph, and building a website to visualize the results in a simple and clear way.
        </p>
        <p>
          This project was made possible thanks to the guidance and support of Oscar Corcho and Daniel Garijo Verdejo, who provided their expertise and knowledge at all times.
        </p>
        <p>
          In summary, this bachelor thesis has been an enriching and challenging experience, which has allowed applying the knowledge acquired throughout the degree and preparing for facing new challenges in the field of Computer Engineering.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutComponent',
}
</script>
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .container2 {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .logo-container {
    margin-bottom: 20px;
  }

  .logo {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }

  .about-container {
    text-align: center;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
</style>