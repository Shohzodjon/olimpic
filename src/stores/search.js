// video_materials/social-video
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useSearchStore = defineStore("search", () => {
  const list = ref([]);
  const fetchList = async (text) => {
    try {
      const res = await $axios.get(`/search?query=${text}`);
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, fetchList };
});
