import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/Checkout',
      name: 'Kassa',

      component: () => import('../pages/Checkout.vue')
    }
  ]
})

export default router
