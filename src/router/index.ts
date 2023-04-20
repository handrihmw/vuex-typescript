import { createRouter, createWebHistory } from 'vue-router'
import listView from '@/views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: listView
    },
    {
      path: '/get',
      name: 'get',
      component: () => import('@/views/GetView.vue')
    }
  ]
})

export default router
