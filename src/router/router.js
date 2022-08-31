import { createRouter, createWebHistory } from "vue-router";
import daybookRouter from "./daybook/index.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/daybook/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/daybook/AboutPage.vue"),
  },
  {
    path: "/diario",
    ...daybookRouter,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/common/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
