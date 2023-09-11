import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contactView.vue')
  },
  {
    path: '/reviews',
    name: 'review',
    component: () => import(/* webpackChunkName: "about" */ '../views/reviewView.vue')
  },
  {
  path: '/projects',
  name: 'project',
  component: () => import(/* webpackChunkName: "about" */ '../views/projectView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
