// /main/movement
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const usePartnerStore = defineStore("partner", () => {
  const list = ref([]);
  const support = ref([]);
  const fetchList = async () => {
    try {
      const res = await $axios.get(`/main/movement`);
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSupport = async () => {
    try {
      const res = await $axios.get(`/main/support`);
      support.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, support, fetchList, fetchSupport };
});
