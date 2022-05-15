//vue router
import { createWebHashHistory, createRouter } from "vue-router";

//Imports
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Faq from "../views/Faq.vue";
import Location from "../views/Location.vue";
import Profile from "../views/Profile.vue";
import Cart from "../views/Cart.vue";
import CategoryList from "../views/CategoryList.vue";
const router = new createRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/category",
      name: "category",
      component: Category,
    },
    {
      path: "/custom/:id",
      name: "custom",
      component: CategoryList,
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
    },
    {
      path: "/location",
      name: "location",
      component: Location,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
  ],
  scrollBehavior: () => ({ y: 0 }),
  history: createWebHashHistory(),
});

export default router;
