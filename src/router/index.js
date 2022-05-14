//vue router
import { createWebHashHistory, createRouter } from "vue-router";

//Imports
import Home from "../views/Home.vue";
const router = new createRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
  scrollBehavior: () => ({ y: 0 }),
  history: createWebHashHistory(),
});

export default router;
