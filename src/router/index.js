import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    component: () => import('@/layout'),
    children: [
      { path: '', component: () => import('@/views/home') }
    ]
  },
  {
    path: '/mytable',
    component: () => import('@/layout'),
    children: [
      { path: '', component: () => import('@/views/myTable') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
