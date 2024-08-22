import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useInterviewStore = defineStore("interview", () => {
  const list = ref([]);
  const listLimit=ref([]);
  const fetchList = async () => {
    try {
      const res = await $axios.get("/video-materials/interview");
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInterviewLimit = async () => {
    try {
      const res = await $axios.get("/video-materials/interview?options=options");
      listLimit.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { list,listLimit, fetchList, fetchInterviewLimit };
});
