import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '@/views/LogIn'
import SignUp from '@/views/SignUp'
import Diet from '@/views/Diet'
import Training from '@/views/Training'
import Overview from '@/views/Overview'
import Friends from '@/views/Friends'
import AdminPage from '@/views/AdminPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Diet',
    name: 'Diet',
    component: Diet
  },
  {
    path: '/Training',
    name: 'Training',
    component: Training
  },
  {
    path: '/Overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
