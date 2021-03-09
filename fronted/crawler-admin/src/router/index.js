import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/page/Layout'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: '',
      component: Layout
    }
  ]
})
