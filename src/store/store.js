import { createStore } from "vuex";

const store = createStore({
  state: {
    conuter: 0,
    products: [
      {
        name: "Kia Ceed",
        price: 22000,
        imgSrc: "./assets/kia-ceed.jpg",
        imgAlt: "Kia ceed 2010",
        id: 1,
      },
      {
        name: "Hyundai I30",
        price: 21200,
        imgSrc: "./assets/hyundai-i30.jpg",
        imgAlt: "Hyundai I30 2011",
        id: 2,
      },
      {
        name: "BMW X3",
        price: 55750,
        imgSrc: "./assets/bmw-x3.jpg",
        imgAlt: "BMW X3 2011",
        id: 3,
      },
    ],
  },

  getters: {
    products(state) {
      return state.products;
    },
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
