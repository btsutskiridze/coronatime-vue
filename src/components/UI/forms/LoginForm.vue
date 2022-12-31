<script setup>
import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/index.js";

import BaseInput from "@/components/layout/form/BaseInput.vue";
import RememberMe from "@/components/UI/RememberMe.vue";
import ForgetPassword from "@/components/UI/ForgetPassword.vue";
import router from "@/router";

const handleLogin = async (values, actions) => {
  try {
    const response = await axios.post("login", values);
    const token = response.data.data.token;

    localStorage.setItem("access_token", token);
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;

    router.push({ name: "statistics" });
  } catch (e) {
    console.log(e);
    actions.setFieldError("password", e.response.data.error);
  }
};
</script>

<template>
  <div class="flex flex-col justify-center h-full sm:px-6 lg:px-8">
    <div class="bg-white lg:max-w-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <VeeForm class="space-y-7" @submit="handleLogin">
        <base-input name="email" rules="required|email" />
        <base-input name="password" type="password" rules="required|min:4" />
        <div class="flex items-center justify-between">
          <remember-me />
          <forget-password />
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Sign up
          </button>
        </div>
      </VeeForm>
      <section class="text-center mt-4">
        <p>
          Don't have an account?
          <router-link
            :to="{ name: 'register' }"
            class="text-indigo-700 underline"
          >
            Register
          </router-link>
        </p>
      </section>
    </div>
  </div>
</template>
