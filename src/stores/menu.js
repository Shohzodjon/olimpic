import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useMenuStore = defineStore("menu", () => {
  const list = ref([]);
  const show = ref(false);
  const fetchList = async () => {
    try {
      const res = await $axios.get("/menu");
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const toggleFunc = () => {
    show.value = !show.value;
  };

  return { list, show, fetchList, toggleFunc };
});
