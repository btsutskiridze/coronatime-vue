import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";

export const useUserStore = defineStore("user", {
  state() {
    return {
      user: null,
    };
  },
  actions: {
    async getUser() {
      if (this.user == null) {
        try {
          const response = await axios.get("user");
          this.user = response.data;
          console.log(response);
        } catch (e) {
          this.user = null;
          console.log(e);
        }
      }
    },
  },
});
