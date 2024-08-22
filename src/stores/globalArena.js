import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useGlobalArenaStore = defineStore("arena", () => {
  const structure = ref([]);
  const fetchStructure = async () => {
    try {
      const res = await $axios.get(`/main/ioc_structure`);
      structure.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { structure, fetchStructure };
});
