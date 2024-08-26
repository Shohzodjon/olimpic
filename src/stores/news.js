import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useNewsStore = defineStore("news", () => {
  const list = ref([]);
  const interview = ref([]);
  const sport = ref([]);
  const detail = ref(null);
  const openData = ref([]);
  const execution = ref([]);
  const interviewDetail = ref(null);
  const fetchList = async (offset) => {
    try {
      const res = await $axios.get(`/news?page=${offset}`);
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const interviewList = async () => {
    try {
      const res = await $axios.get("/video-materials/interview");
      interview.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSport = async (slug, offset) => {
    try {
      const res = await $axios.get(`/news/category/${slug}?page=${offset}`);
      sport.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDetail = async (id) => {
    try {
      const res = await $axios.get(`/news/${id}`);
      detail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOpenData = async (slug, offset) => {
    try {
      const res = await $axios.get(`/news/category/${slug}?page=${offset}`);
      openData.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchExecution = async (slug) => {
    try {
      const res = await $axios.get(`/news/category/${slug}`);
      execution.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInterviewDetail = async (id) => {
    try {
      const res = await $axios.get(`/interview/${id}`);
      interviewDetail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    list,
    interview,
    sport,
    detail,
    openData,
    execution,
    interviewDetail,
    interviewList,
    fetchSport,
    fetchList,
    fetchDetail,
    fetchOpenData,
    fetchExecution,
    fetchInterviewDetail,
  };
});
