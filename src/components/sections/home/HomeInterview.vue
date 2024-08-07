<script setup>
import HomeGallery from '@/components/card/HomeGallery.vue'
import hero from '@/assets/images/hero_4.jpg';

const news = [
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 2 },

];
const mainData = { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 };
</script>
<template>
    <section class="home-interview-section">
        <div class="container">
            <div class="home-interview-section__flex">
                <h2 class="home-interview-section__title">Yangiliklar</h2>
                <RouterLink to="/oz/interview" class="home-interview-section__btn">
                    Barcha intervyular
                </RouterLink>
            </div>
            <a-row :gutter="20">
                <a-col :span="12">
                    <HomeGallery :img="mainData.img" :title="mainData.title" :time="mainData.time"
                        :url="`/oz/news-slug/11`" class="main-interview-card" />
                </a-col>
                <a-col :span="12" class="home-interview-section__right-side">
                    <HomeGallery v-for="item in news" :key="item.id" :img="item.img" :title="item.title"
                        :url="`/oz/news-slug/${item.id}`" :time="item.time" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>