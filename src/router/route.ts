import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Individualaccount",
    meta: { title: "IndividualAccount" },
    component: () => import("../views/IndividualAccount.vue"),
  },
  {
    path: "/Businessaccount",
    meta: { title: "BusinessAccount" },
    component: () => import("../views/BusinessAccount.vue"),
  },
  {
    path: "/Pass",
    meta: { title: "Pass" },
    component: () => import("../views/Pass.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "404",
    meta: { title: "404" },
    component: () => import("../views/404.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-yellow",
});

export default router;
