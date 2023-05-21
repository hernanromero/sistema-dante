import ConfigViewVue from '../views/ConfigView.vue'
import HomeView from '../views/HomeView.vue'
import InformesView from '../views/InformesView.vue'
import AlumnosView from '../views/AlumnosView.vue'
import ImportarViewVue from '@/views/ImportarView.vue'
import AlumnoDetailView from '@/views/AlumnoDetailView.vue'
import MovimientosView from '@/views/MovimientosView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/informes',
    name: 'informes',
    component: InformesView
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: AlumnosView
  },
  {
    path: '/alumnos/:id',
    name: 'alumno',
    component: AlumnoDetailView
  },
  {
    path: '/movimientos',
    name: 'movimientos',
    component: MovimientosView
  },
  {
    path: '/importar',
    name: 'importar',
    component: ImportarViewVue
  },
  {
    path: '/config',
    name: 'config',
    component: ConfigViewVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
