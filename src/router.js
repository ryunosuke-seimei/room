import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "@/views/Main"
import Survey from "@/views/Survey"


Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Main
    },{
      path: "/survey",
      component: Survey
    },
    {
      path:"*",
      redirect:"/"
    }
  ],
  base: "/Room"

})

export default router