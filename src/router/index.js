// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/nosotros',
    component: () => import (/* webpackChunkName: "nosotros" */ '../views/NosotrosView.vue')
  },
  {
    path: '/tienda',
    component: () => import (/* webpackChunkName: "nosotros" */ '../views/TiendaView.vue')
  },
  {
    path: '/blog',
    component: () => import(/* webpackChunkName: "blog" */'../views/BlogView.vue')
  },
  {
    path: '/galeria',
    component: () => import('../views/GaleriaView.vue')
  },
  {
    path: '/contacto',
    component: () => import('../views/ContactoView.vue')
  }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;