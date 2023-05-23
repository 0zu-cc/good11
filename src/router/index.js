import { createRouter, createWebHistory } from 'vue-router'
import Common from "@/views/CommonLayout.vue"
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import("@/views/MainProduct"),
  },
  {
    path: '/contact-us',
    name: 'Contact',
    components: () => import('../views/Contact.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
