import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoad = (view) => {
  return() => import(`@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('Home')
    },
    {
      path: '/rome',
      name: 'rome',
      component: lazyLoad('Rome')
    },
    {
      path: '/visa',
      name: 'visa',
      component: lazyLoad('VisaCard')
    }
  ]
})
