import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import UserAuth from "@/pages/auth/UserAuth";
import UserRegistration from "@/pages/auth/UserRegistration";
import NotesPage from "@/pages/NotesPage";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
    children: [
      { path: "login", component: UserAuth },
      { path: "registration", component: UserRegistration },
    ],
  },
  {
    path: "/notes",
    name: "notes",
    component: NotesPage,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
