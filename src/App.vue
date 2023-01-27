<template>
  <h1>App</h1>
  <base-card>
    <template #headline>
      <h2>Counter card</h2>
    </template>
    <template #body>
      <p>{{ counter }}</p>
      <base-button @click="onButtonClick"
        >Add one value to counter +1</base-button
      >
    </template>
  </base-card>
</template>

<script>
import BaseButton from "./components/BaseButton/BaseButton.vue";
import BaseCard from "./components/BaseCard/BaseCard.vue";
import store from "./store/store";

export default {
  name: "App",
  components: { BaseCard, BaseButton },

  computed: {
    counter() {
      return store.state.conuter;
    },
  },

  methods: {
    onButtonClick() {
      store.dispatch("increment");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
