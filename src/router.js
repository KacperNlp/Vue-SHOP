import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/HomePage/HomePage.vue";
import ShopPage from "./pages/ShopPage/ShopPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/shop",
      component: ShopPage,
    },
  ],
});

export default router;
