import Vue from "vue";
import Router from "vue-router";
import homeview from "@/components/homeview";
import registerView from "@/components/registerView";
import loginView from "@/components/loginView";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "homeView",
    component: homeview
  },
  {
    path: "/register",
    name: "registerView",
    component: registerView
  },
  {
    path: "/login",
    name: "login",
    component: loginView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
