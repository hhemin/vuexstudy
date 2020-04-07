import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Order from '@/page/order'
// const Notfind = () => import(/* webpackChunkName: "notfind" */ '@/page/404.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta :{ title: "首页"} //用于给定网页名
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta :{ title: "其他"} //用于给定网页名
    },
    // { path: '*', component: Notfind }
  ]
})
