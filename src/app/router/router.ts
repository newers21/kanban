import { createRouter, createWebHistory } from "vue-router";

import page1 from "./pages/page1.vue";
import page2 from "./pages/page2.vue";

const routes = [
  { path: "/page1", component: page1 },
  { path: "/page2", component: page2 },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
