<template>
  <the-header></the-header>
  <div class="main">
    <router-view></router-view>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./layout/TheHeader/TheHeader.vue";
import TheFooter from "./layout/TheFooter/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin: 100px 0;
}
</style>
