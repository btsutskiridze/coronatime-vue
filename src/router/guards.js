import { useUserStore } from "@/stores/UserStore";
import { computed } from "vue";

const userStore = computed(() => useUserStore());

export function isAuthorized(next) {
  if (!userStore.value.user) return next("login");
  else return next();
}

export function isNotAuthorized(next) {
  if (userStore.value.user) return next("statistics");
  else return next();
}
