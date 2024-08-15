import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useMenuStore = defineStore("home", () => {
  const banner = ref([]);

  const fetchBanner = async () => {
    try {
      const res = await $axios.get("/");
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };



  return { banner, fetchBanner };
});