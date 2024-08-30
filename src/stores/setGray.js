import { defineStore } from "pinia";
import { ref } from "vue";
export const useImageStore = defineStore("imageStore", () => {
  const isGray = ref(false);
  const setGray = () => {
    isGray.value = true;
  };
  const removeGray = () => {
    isGray.value = false;
  };

  return { isGray, setGray, removeGray };
});
