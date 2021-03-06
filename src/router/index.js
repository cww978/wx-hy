import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('@/views/signin'),
      children: []
    },
    {
      path: '/error',
      name: 'Error',
      component: () => import('@/views/error/error')
    },
    {
      path: '/meeting',
      component: Layout,
      redirect: '/meeting/home',
      children: [
        {
          path: '/meeting/home',
          name: 'Home',
          component: () => import('@/views/meeting/home')
        },
        {
          path: '/meeting/topic',
          name: 'Topic',
          component: () => import('@/views/meeting/topic')
        },
        {
          path: '/meeting/signLocation',
          name: 'SignLocation',
          component: () => import('@/views/meeting/signLocation')
        },
        {
          path: '/meeting/votes',
          name: 'Votes',
          component: () => import('@/views/meeting/votes/index.vue')
        },
        {
          path: '/meeting/votes/detail',
          name: 'VoteDetal',
          component: () => import('@/views/meeting/votes/detail.vue')
        }
      ]
    },
    { path: '*', component: () => import('@/views/error/error') }
  ]
})
