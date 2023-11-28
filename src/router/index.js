import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import UserAuth from "@/pages/auth/UserAuth";
import UserRegistration from "@/pages/auth/UserRegistration";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
