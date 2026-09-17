import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../HomeView.vue'
import StudentsView from '../StudentsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/students', name: 'Students', component: StudentsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router