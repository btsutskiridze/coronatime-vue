import { createRouter, createWebHistory } from "vue-router";
import axios from "@/config/axios/index.js";

import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import StatisticsView from "@/views/StatisticsView.vue";

import { useUserStore } from "@/stores/UserStore";
import { isAuthorized, isNotAuthorized } from "@/router/guards";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "login" },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: (to, from, next) => {
        isNotAuthorized(next);
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      beforeEnter: (to, from, next) => {
        isNotAuthorized(next);
      },
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
      beforeEnter: (to, from, next) => {
        isAuthorized(next);
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  if (userStore.user == null) {
    try {
      const response = await axios.get("user");
      userStore.user = response.data;
      console.log(response);
    } catch (e) {
      userStore.user = null;
      console.log(e);
    }
  }
  return next();
});

export default router;
