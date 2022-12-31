<script setup>
import { useUserStore } from "@/stores/UserStore";
import axios from "@/config/axios";
import router from "@/router";
const userStore = useUserStore();
const logout = async () => {
  try {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers["Authorization"];
    router.push({ name: "login" });
    userStore.user = null;
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div class="text-xl lg:w-[95%] py-10 mx-auto">
    <div class="flex justify-between">
      <h1 class="text-3xl">User Data</h1>
      <h1 class="text-3xl cursor-pointer" @click="logout">Logout</h1>
    </div>
    <br />
    <code>
      <pre>{{ userStore.user }}</pre>
    </code>
  </div>
</template>
