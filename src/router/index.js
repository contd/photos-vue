import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Albums from '@/views/Albums'
import Travels from '@/views/Travels'
import Panorams from '@/views/Panorams'
import Maps from '@/views/Maps'
import Gallery from '@/views/Gallery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
  },
  {
    path: '/travels',
    name: 'Travels',
    component: Travels,
  },
  {
    path: '/panorams',
    name: 'Panorams',
    component: Panorams,
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
