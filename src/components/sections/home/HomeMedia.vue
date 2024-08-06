<script setup>
import { ref } from 'vue';
import HomeGallery from '@/components/card/HomeGallery.vue'
import hero from '@/assets/images/hero_4.jpg';
const news = [
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 2 },

];
const mainData = { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 };

const currentTab = ref('photo');

const tabClick = (tab) => {
    currentTab.value = tab;
}
</script>
<template>
    <section class="home-media">
        <div class="container">
            <div class="home-media__flex">
                <h2 class="home-media__title">Mediafayl</h2>
                <div class="custom-tab">
                    <button @click="tabClick('photo')"
                        :class="[currentTab == 'photo' ? 'active-tab' : '']">Fotogalareya</button>
                    <button @click="tabClick('video')"
                        :class="[currentTab != 'photo' ? 'active-tab' : '']">Videogalareya</button>
                </div>
            </div>
            <a-row :gutter="20">
                <a-col :span="12">
                    <HomeGallery :img="mainData.img" :title="mainData.title" :time="mainData.time"
                        class="main-interview-card" />
                </a-col>
                <a-col :span="12" class="home-media__right-side">
                    <HomeGallery v-for="item in news" :key="item.id" :img="item.img" :title="item.title"
                        :time="item.time" />
                </a-col>
            </a-row>
        </div>
    </section>

</template>