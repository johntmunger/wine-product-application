import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProductList from "../pages/ProductList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: ProductList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
