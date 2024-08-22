// main/summer
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useGamesStore = defineStore("games", () => {
  const olimpicSummer = ref([]);
  const olimpicWinter = ref([]);
  const teenager = ref([]);
  const asiaSummer = ref(null);
  const asiaWinter = ref(null);

  const fetchOlimpicSummer = async () => {
    try {
      const res = await $axios.get(`/main/summer`);
      olimpicSummer.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOlimpicWinter = async () => {
    try {
      const res = await $axios.get(`/main/winter`);
      olimpicWinter.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOlimpicTeenager = async () => {
    try {
      const res = await $axios.get(`/main/youthful`);
      teenager.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAsiaSummer = async () => {
    try {
      const res = await $axios.get(`/main/summer-asian`);
      asiaSummer.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAsiaWinter = async () => {
    try {
      const res = await $axios.get(`/main/winter-asian`);
      asiaWinter.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    olimpicSummer,
    olimpicWinter,
    teenager,
    asiaSummer,
    asiaWinter,
    fetchOlimpicSummer,
    fetchOlimpicWinter,
    fetchOlimpicTeenager,
    fetchAsiaSummer,
    fetchAsiaWinter,
  };
});
