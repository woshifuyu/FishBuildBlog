import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import innerhome from '../views/InnerHome.vue'
// import innerhome form '../views/InnerHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'innerhome',
    component: innerhome
  },
  {
    path: '/FishBuildHome',
    name: 'FishBuildHome',
    component: ()=> import("../views/FishBuildHome.vue")
  },
  // {
  //   path: "/innerhome",
  //   name:"innerhome",
  //   component: ()=> import("../views/InnerHome.vue")
  // },
  {
    path: "/fishbuildmain",
    name:"fishbuildmain",
    component: ()=> import("../views/FishBuildMain.vue")
  },
  {
    path: "/tologo",
    name:"tologo",
    component: ()=> import("../views/ToLogo.vue")
  },
  {
    path: "/devtime",
    name:"devtime",
    component: ()=> import("../views/DevTime.vue")
  },
  {
    path: "/guestboard",
    name:"guestboard",
    component: ()=> import("../views/GuestBoard.vue")
  },
  {
    path: "/count",
    name:"count",
    component: ()=> import("../views/AccessStatistics.vue")
  },
  {
    path: "/olddays",
    name:"olddays",
    component: ()=> import("../views/OldDays.vue")
  },
  {
    path: "/resume",
    name:"jianli",
    component: ()=> import("../views/JianLi.vue")
  },
  {
    path: "/firstblog",
    name:"firstblog",
    component: ()=> import("../views/FirstBlog.vue")
  },
  {
    path: "/404",
    name:"err_404",
    component: ()=> import("../views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   },
   
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
