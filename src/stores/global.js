import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useGlobalStore = defineStore("global", () => {
  const greating = ref([]);
  const greatingDetail = ref(null);
  const matirials = ref([]);
  const matirialInfo = ref(null);
  const regulation = ref([]);
  const regulationDetail = ref(null);

  const fetchList = async () => {
    try {
      const res = await $axios.get(`/main/greetings`);
      greating.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDetail = async (id) => {
    try {
      const res = await $axios.get(`/main/greetings/${id}`);
      greatingDetail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMatirials = async () => {
    try {
      const res = await $axios.get(`/main/materials`);
      matirials.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const matirialDetail = async (id) => {
    try {
      const res = await $axios.get(`/main/materials/${id}`);
      matirialInfo.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRegulations = async () => {
    try {
      const res = await $axios.get(`/main/regulations`);
      regulation.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRegulationDetail = async (id) => {
    try {
      const res = await $axios.get(`/main/regulations/${id}`);
      regulationDetail.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    greating,
    greatingDetail,
    matirials,
    matirialInfo,
    regulation,
    regulationDetail,
    fetchList,
    fetchDetail,
    fetchMatirials,
    fetchRegulations,
    matirialDetail,
    fetchRegulationDetail,
  };
});
