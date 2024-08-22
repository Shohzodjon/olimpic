<script setup>
import { onMounted, ref } from 'vue';
import { useHomeStore } from '@/stores/home';
import HeaderSlider from '@/components/slider/HeaderSlider.vue';
import HorizontalSlider from '@/components/slider/HorizontalSlider.vue'
import DefaultSlider from '@/components/slider/DefaultSlider.vue';

const isLoad = ref(false);
const homeStore = useHomeStore();
onMounted(async () => {
    await homeStore.fetchBanner();
    isLoad.value = true
})
</script>
<template>
    <header class="home-header" v-if="isLoad">
        <HeaderSlider :data="homeStore.banner.data"/>
        <div class="home-header__container">
            <div class="container">
                <div class="home-header__flex">
                    <HorizontalSlider :data="homeStore.banner.data"/>
                    <DefaultSlider :data="homeStore.banner.data"/>
                </div>
            </div>
        </div>
    </header>
</template>
