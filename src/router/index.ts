import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Movies from '../views/Movies.vue'
import { useAppStore } from '@/stores/appstore'
import HomeViewVue from '@/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homeview',
      component: HomeViewVue,
      meta: { requiresAuth: false, requiresSub: false}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false, requiresSub: false},
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'movies',
          name: 'movies',
          component: Movies,
          meta: { requiresAuth: true, requiresSub: true},
        }
    ],
      meta: { requiresAuth: true, requiresSub: false},
    }
  ]
})

router.beforeEach((to, from) => {
  const appstore = useAppStore()
  if (to.meta.requiresAuth && !appstore.user.loggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath}
    }
  }
  if (to.name == "login" && appstore.user.loggedIn) {
    return {
      path: '/dashboard',
      query: { redirect: to.fullPath}
    }
  }
  if (to.meta.requiresAuth && to.meta.requiresSub && !appstore.user.isSubscribed) {
    return {
      path: '/dashboard',
      query: { redirect: to.fullPath
    }
  }
}
})

export default router
