// federations/international federations/normal doctors/d_category
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useFederationStore = defineStore("federation", () => {
  const international = ref([]);
  const local = ref([]);
  const doctors = ref([]);
  const fetchInternational = async () => {
    try {
      const res = await $axios.get(`/federations/international`);
      international.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLocal = async () => {
    try {
      const res = await $axios.get(`/federations/normal`);
      local.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDoctors = async () => {
    try {
      const res = await $axios.get(`/doctors/d_category`);
      doctors.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    international,
    local,
    doctors,
    fetchInternational,
    fetchLocal,
    fetchDoctors,
  };
});
