import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue')

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/login.vue')
      },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/register.vue')
      },
  ]
})

router.beforeEach((to,from,next) => {
    const isLogin = localStorage.wxToken? true : false;
    if (to.path == '/login' || to.path == '/register') {
        next()
    } else {
        isLogin? next() : next('/login')
    }
})

export default router
