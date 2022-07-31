import { createRouter, createWebHistory } from 'vue-router'

import  NotFound from "../views/pages/NotFound.vue"



const routes = [
  

  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
 //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
  {
    path:"/:catchAll(.*)",
    component:NotFound,
    name:"NotFound"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
