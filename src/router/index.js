import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
      // 继续添加一个路由信息 创建一个路由city
    }, {
      path: '/City',
      name: 'City',
      component:City
    }
  ]
})
