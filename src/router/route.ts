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

// Modify createWebHistory to handle the base URL for Vercel (.app domain)
const router = createRouter({
  history: createWebHistory("/"), // If your app is deployed at the root, use '/'
  // OR
  // history: createWebHistory('/your-subpath/'),  // If it's deployed under a subpath, use the appropriate path
  routes,
  linkExactActiveClass: "text-yellow",
});

export default router;
