<script setup>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';

const lang = localStorage.getItem('locale');
const newsStore = useNewsStore();
const router = useRoute();
const slug = router.query.alias;
const isLoad = ref(false);

onMounted(async () => {
    await newsStore.fetchOpenData(slug);
    isLoad.value = true
})
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Yangiliklar", id: 2 },
    { label: "Ochiq ma'lumotlar", id: 3 },
];

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Ochiq ma'lumotlar</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in newsStore.openData"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/news-slug/${item.alias}`" />
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