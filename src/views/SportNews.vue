<script setup>
import { ref, onMounted, watch } from 'vue';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useNewsStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.query.alias;
const isLoad = ref(false);
const current = ref(1);
const newsStore = useNewsStore();
onMounted(async () => {
    await Promise.all([
        newsStore.fetchSport(slug, current.value),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

watch(current, async (newPage) => {
    await newsStore.fetchSport(slug, newPage)
});
const fetchNews = async (pageNum) => {
    current.value = pageNum;
};
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2>Sport tibbiyoti</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in newsStore.sport?.data"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/news-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="newsStore.sport?.meta?.total" show-less-items
                        @click="fetchNews" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>