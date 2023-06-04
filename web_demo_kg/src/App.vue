<template>
  <div id="app">
    <HeaderComponent/>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
body {
  background-color: #f5f5f5;
  margin: 0;
  overflow-x: hidden; /* Evita la barra de desplazamiento horizontal */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2a36;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view-container {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
