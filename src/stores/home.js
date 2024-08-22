import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useHomeStore = defineStore("home", () => {
  const banner = ref([]);
  const bannerInfo = ref([]);
  const homeSlider = ref([]);
  const olimpicGame = ref([]);
  const olimpicType = ref([]);
  const fetchBanner = async () => {
    try {
      const res = await $axios.get("/news?options=options");
      banner.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const infoList = async () => {
    try {
      const res = await $axios.get("/");
      bannerInfo.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const sliderList = async () => {
    try {
      const res = await $axios.get("/");
      homeSlider.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOlimpicGames = async () => {
    try {
      const res = await $axios.get("/main/uzb_olympic_games");
      olimpicGame.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOlimpicType = async () => {
    try {
      const res = await $axios.get("/sports/cats?options=options");
      olimpicType.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };


  return {
    banner,
    bannerInfo,
    homeSlider,
    olimpicGame,
    olimpicType,
    infoList,
    sliderList,
    fetchBanner,
    fetchOlimpicGames,
    fetchOlimpicType,
  };
});
