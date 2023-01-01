import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import EditStarterProfile from '../views/Starters/EditStarterProfile.vue';
import StarterProfile from '../views/Starters/StarterProfile.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/profile',
  name: 'Profile',
  component: StarterProfile
},
{
  path: '/edit',
  name: 'EditProfile',
  component: EditStarterProfile
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
