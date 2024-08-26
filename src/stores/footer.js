import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useFooterStore = defineStore("footer", () => {
  const list = ref([]);
  const fetchList = async (text) => {
    try {
      const res = await $axios.get(`/pages`);
      list.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, fetchList };
});
