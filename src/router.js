import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
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
      {
        path: '/info',
        name: 'info',
        component: () => import('./components/info.vue'),
        meta: {
            showFooter: true
        }
      },
      {
        path: '/tongxunlu',
        name: 'tongxunlu',
        component: () => import('./components/tongxunlu.vue'),
        meta: {
            showFooter: true
        }
      },
      {
        path: '/faxian',
        name: 'faxian',
        component: () => import('./components/faxian.vue'),
        meta: {
            showFooter: true
        }
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('./components/me.vue'),
        meta: {
            showFooter: true
        }
      }
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
