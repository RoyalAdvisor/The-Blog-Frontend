import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import(/* webpackChunkName: "signup" */ "../views/SignUp"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
