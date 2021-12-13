import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/Main.vue';
import ProductList from '@/pages/subpages/ProductList.vue';
import ProductDetails from '@/pages/subpages/ProductDetails.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/', redirect: '/products/wine'
    },
    {
        path: '/products',
        component: Main,
        children: [
            { path: 'wine', component: ProductList },
            { path: 'wine/details', component: ProductDetails },
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
