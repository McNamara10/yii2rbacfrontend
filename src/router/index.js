import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Posts from '../views/Posts.vue'
import store from '@/store'



Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter(to,from,next){
      if (store.getters["authentication/isAuth"]) {
        console.log('next')
        next()
      } else {
        next({
          name: "login" // back to safety route //
        });
      }
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    beforeEnter(to,from,next){
      if (store.getters["authentication/isAuth"]) {
        console.log('next')
        next()
      } else {
        next({
          name: "login" // back to safety route //
        });
      }
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
