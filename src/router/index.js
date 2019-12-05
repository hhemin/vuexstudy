import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Order from '@/page/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    }
  ]
})
