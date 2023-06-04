import { createRouter, createWebHistory } from 'vue-router'
import Home from './src/components/MainComponent.vue'
import Help from './src/components/HelpComponent.vue'
import About from './src/components/AboutComponent.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router