import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ModelView from '@/views/ModelView.vue'
import TestVie from '@/views/TestVie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestVie,
    },
    {
      path: `/model/:id`, 
      name: 'ModelView',
      component: ModelView, 
    },
  
  ]
})

export default router
