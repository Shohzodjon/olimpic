<script setup>
import { onMounted, ref } from 'vue';
import { useNewsStore } from '@/stores/news';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';


const isLoad = ref(false);
const newsStore = useNewsStore();
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Yangiliklar", id: 2, },

];


onMounted(async () => {
    await newsStore.fetchList();
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Yangiliklar</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in newsStore.list.data" :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/news-slug/${item.id}`" />
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>