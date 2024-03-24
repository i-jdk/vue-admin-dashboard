import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Team from "../views/Team.vue";
import SignIn from "@/views/SignInFlow/SignIn.vue";
import Request from "@/views/SignInFlow/Request.vue";
import Recover from "@/views/SignInFlow/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })

  if(requiresAuth && !currentUser) {
    next("signin");
  } else{
    next();
  }
})

export default router;
