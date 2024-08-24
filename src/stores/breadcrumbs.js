import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useBreadCrumbsStore = defineStore("bread-crumbs", () => {
  const list = ref([]);
  const fetchList = async (slug) => {
    try {
      const res = await $axios.get(`/breadcrumbs/${slug}`);
      list.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { list, fetchList };
});
