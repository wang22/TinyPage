import { createRouter, createWebHistory } from 'vue-router'
import Index from '../layout/Index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'PostList',
        component: () => import('../views/post/List.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/post/List.vue'),
      },
      {
        path: '/posts/publish',
        name: 'Publish',
        component: () => import('../views/post/Publish.vue')
      },
      {
        path: '/channels',
        name: 'Channels',
        component: () => import('../views/channel/List.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
