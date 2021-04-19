import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import GoodDeta from "../views/home/GoodDeta.vue";

import My from "../views/my/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/good-deta",
    name: "good-deta",
    component: GoodDeta
  },


  {
    path: "/my",
    name: "my",
    component: My
  },




  {
    path: "/",
    redirect: '/home'
  },
];

const router = new VueRouter({
  routes,
});

export default router;
