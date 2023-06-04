<template>
    <header>
        <router-link to="/home" class="home-link"><img src="../assets/logo.png" alt="Logo" class="logo"><h1>Softalias: Grouping Software Mentions</h1></router-link>
        <div>
            <router-link to="/help" class="help-link">Help</router-link>
            <router-link to="/about" class="about-link">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.logo {
  width: 5%;
  height: 5%;
  margin-right: 15px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}

header {
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  margin-bottom: 15px;
}

.help-link,
.about-link {
  color: #2977ec;
  font-size: 16px;
  margin-left: 12px;
  text-decoration: none;
}

.about-link {
  margin-right: 50px;
  margin-left: 20px;
  padding-left: 20px;
}
.home-link {
  display: inline-flex;
  text-decoration: none;
  color: #535353;
}

.logo img {
  margin-right: 5px;
}

h1 {
  font-size: 26px;
  margin: 0;
  display: flex;
  align-items: center;
}

</style>