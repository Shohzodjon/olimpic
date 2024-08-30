import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useLicenseesStore = defineStore("licensees", () => {
  const licensees = ref([]);
  const detail = ref(null);
  const fetchLicensees = async (offset) => {
    try {
      const res = await $axios.get(`/main/licensees?page=${offset}`);
      licensees.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDetail = async (id) => {
    try {
      const res = await $axios.get(`/main/licensees/${id}`);
      detail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { licensees, detail, fetchLicensees, fetchDetail };
});
