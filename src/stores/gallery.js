// /main/movement
import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useMediaStore = defineStore("media", () => {
  const gallery = ref([]);
  const video = ref([]);
  const announcement = ref([]);
  const list = ref([]);
  const data = ref([]);
  const galleryDetail = ref([]);
  const videoDetail = ref(null);
  const announcementDetail = ref([]);
  const galleryList = async () => {
    try {
      const res = await $axios.get(`/gallery?options=options`);
      gallery.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const videoList = async () => {
    try {
      const res = await $axios.get(`/video?options=options`);
      video.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAnnouncement = async () => {
    try {
      const res = await $axios.get(`/main/announcement`);
      announcement.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAnnouncementDetail = async (id) => {
    try {
      const res = await $axios.get(`/main/announcement/${id}`);
      announcementDetail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchList = async (offset) => {
    try {
      const res = await $axios.get(`/gallery?page=${offset}`);
      list.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoList = async () => {
    try {
      const res = await $axios.get(`/video`);
      data.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGalleryDetail = async (id) => {
    try {
      const res = await $axios.get(`/gallery/${id}`);
      galleryDetail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoDetail = async (id) => {
    try {
      const res = await $axios.get(`/video/${id}`);
      videoDetail.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    gallery,
    video,
    announcement,
    list,
    data,
    galleryDetail,
    videoDetail,
    announcementDetail,
    galleryList,
    videoList,
    fetchAnnouncement,
    fetchList,
    fetchVideoList,
    fetchGalleryDetail,
    fetchVideoDetail,
    fetchAnnouncementDetail,
  };
});
