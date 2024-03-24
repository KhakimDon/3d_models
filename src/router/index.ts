import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import HomeView from '@/views/HomeView.vue'
import ModelView from '@/views/ModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: `/model/:id`, 
      name: 'ModelView',
      component: ModelView, 
    }
  ]
})

export default router
