import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useStaticStore = defineStore("static-pages", () => {
  const data = ref(null);
  const fetchStatic = async (slug) => {
    try {
      const res = await $axios.get(`/menu/${slug}`);
      data.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { data, fetchStatic };
});
