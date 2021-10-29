import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: DashBoard,
    children: [
      {
        path: 'management',
        name:'User Management',
        component: () => import('../views/dashboard/UserManagement.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
