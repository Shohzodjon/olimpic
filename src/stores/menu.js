import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useMenuStore = defineStore("menu", () => {
  const list = ref([]);

  const fetchList = async () => {
    try {
      const res = await $axios.get("/posts");
      list.value = res;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, fetchList };
});
