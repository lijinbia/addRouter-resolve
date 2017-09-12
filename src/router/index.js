import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import addRouter from '../components/router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/Hello'],resolve)
    },
    {
      path: '/router',
      name: 'addRouter',
      component: addRouter
    }
  ]
})

