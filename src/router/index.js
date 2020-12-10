import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../layout/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Posts',
        component: () => import('../views/post/List.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/post/List.vue')
      },
      {
        path: '/components/alert',
        name: 'ComponentAlert',
        component: () => import('../views/components/Alert.vue')
      },
      {
        path: '/components/badge',
        name: 'ComponentBadge',
        component: () => import('../views/components/Badge.vue')
      },
      {
        path: '/components/table',
        name: 'ComponentTable',
        component: () => import('../views/components/Table.vue')
      },
      {
        path: '/components/card',
        name: 'ComponentCard',
        component: () => import('../views/components/Card.vue')
      },
      {
        path: '/components/form',
        name: 'ComponentForm',
        component: () => import('../views/components/Form.vue')
      },
      {
        path: '/components/editor',
        name: 'ComponentEditor',
        component: () => import('../views/components/Editor.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
