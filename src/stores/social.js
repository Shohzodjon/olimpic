// video_materials/social-video
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useSocialStore = defineStore("social", () => {
  const list = ref([]);
  const detail = ref(null);
  const fetchList = async () => {
    try {
      const res = await $axios.get("/video-materials/social-video");
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDetail = async (id) => {
    try {
      const res = await $axios.get(`/social-video/${id}`);
      detail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, detail, fetchList, fetchDetail };
});
