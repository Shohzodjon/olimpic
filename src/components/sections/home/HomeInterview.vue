<script setup>
import { ref, onMounted } from 'vue';
import { useInterviewStore } from '@/stores/interview';
import HomeGallery from '@/components/card/HomeGallery.vue'
import hero from '@/assets/images/hero_4.jpg';

const lang=localStorage.getItem('locale');
const isLoad=ref(false);
const interviewStore=useInterviewStore();
const news = [
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 2 },

];
const mainData = { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 };

onMounted(async()=>{
    await interviewStore.fetchInterviewLimit();
    isLoad.value=true
})

</script>
<template>
    <section class="home-interview-section">
        <div class="container">
            <div class="home-interview-section__flex">
                <h2 class="home-interview-section__title">Intervyu</h2>
                <RouterLink to="/oz/interview" class="home-interview-section__btn">
                    Barcha intervyular
                </RouterLink>
            </div>
            <a-row :gutter="[20,0]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <HomeGallery :img="interviewStore.listLimit[0].images[0]" :title="interviewStore.listLimit[0].title" :time="interviewStore.listLimit[0].created_at"
                        :url="`/oz/news-slug/11`" class="main-interview-card" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="home-interview-section__right-side">
                    <span v-for="(item,i) in interviewStore.listLimit" :key="item.id" v-show="i!=0">
                            <HomeGallery  :img="item.images[0]" :title="item.title" 
                            :url="`/oz/news-slug/${item.id}`" :time="item.created_at" />
                    </span>
                </a-col>
            </a-row>
        </div>
    </section>
</template>