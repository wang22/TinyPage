import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../layout/Index.vue'
import Blank from '../layout/Blank.vue'
import HideNav from '../layout/HideNav.vue'
import { info } from '@/api/auth'

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
        name: 'PostsList',
        component: () => import('../views/post/List.vue')
      },
      // {
      //   path: '/posts/publish',
      //   name: 'PostsPublish',
      //   component: () => import('../views/post/Publish.vue')
      // },
      {
        path: '/staff',
        name: 'Staff',
        component: () => import('../views/staff/Staff.vue')
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import('../views/member/Member.vue')
      },
      {
        path: '/codeinject',
        name: 'CodeInject',
        component: () => import('../views/codeinject/CodeInject.vue')
      },
      {
        path: '/design',
        name: 'Design',
        component: () => import('../views/design/Design.vue')
      },
      {
        path: '/general',
        name: 'General',
        component: () => import('../views/general/General.vue')
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
  },
  {
    path: '/auth',
    name: 'auth',
    component: Blank,
    children: [
      {
        path: 'signin',
        name: 'AuthBlank',
        component: () => import('../views/auth/Signin.vue')
      }
    ]
  },
  {
    path: '/posts/publish',
    name: 'publish',
    component: HideNav,
    children: [
      {
        path: '',
        name: 'PublishPage',
        component: () => import('../views/post/Publish.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/auth/signin') {
    next()
  } else {
    info().then(() => {
      next()
    })
  }
})

export default router
