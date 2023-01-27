import { createStore } from "vuex";

const store = createStore({
  state: {
    conuter: 0,
  },

  mutations: {
    increment(state) {
      state.conuter++;
    },
  },

  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});

export default store;
