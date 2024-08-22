<script setup>
import { onMounted, ref } from 'vue';
import { useInterviewStore } from '@/stores/interview';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
const isLoad = ref(false);
const lang = localStorage.getItem('locale') || 'oz';
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Yangiliklar", id: 2, url: `/${lang}` },
    { label: "Interviyu", id: 3 },
];
const interviewStore = useInterviewStore();
onMounted(async () => {
    await interviewStore.fetchList();
    isLoad.value = true
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Interviyu</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]" v-if="isLoad">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in interviewStore.list.data"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/interview-detail/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="500" show-less-items />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
                        <div class="committee-page__sidebar-img">
                            <RouterLink to="/:en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>