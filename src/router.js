import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: "group-home" */ './views/login.vue')
const TweenLite = () => import(/* webpackChunkName: "group-home" */ './views/TweenLite.vue')
const TweenMax = () => import(/* webpackChunkName: "group-home" */ './views/TweenMax.vue')
const Family = () => import(/* webpackChunkName: "group-home" */ './views/Family.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/TweenLite',
      name: 'TweenLite',
      component: TweenLite
    },
    {
      path: '/TweenMax',
      name: 'TweenMax',
      component: TweenMax
    },
    {
      path: '/Family',
      name: 'Family',
      component: Family
    }
  ]
})
