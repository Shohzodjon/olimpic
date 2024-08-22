// video_materials/social-video
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useSocialStore = defineStore("social", () => {
  const list = ref([]);
  const fetchList = async () => {
    try {
      const res = await $axios.get("/video-materials/social-video");
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, fetchList };
});