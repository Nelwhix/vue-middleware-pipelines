import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Login.vue'
import Movies from '../views/Movies.vue'

import guest from './middleware/guest'
import auth from './middleware/auth'
import isSubscribed from './middleware/isSubscribed'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        middleware: [
          guest
        ]
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        middleware: [
          auth
        ]
      },
      children: [{
        path: '/dashboard/movies',
        name: 'dashboard.movies',
        component: Movies,
        meta: {
          middleware: [
            auth,
            isSubscribed
          ]
        }
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
})

export default router
