<script setup>
import { ref, onMounted, watch } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';

const breadCrumb = useBreadCrumbsStore();
const newsStore = useNewsStore();
const router = useRoute();
const slug = router.query.alias;
const isLoad = ref(false);
const current = ref(1);
onMounted(async () => {
    await Promise.all([
        newsStore.fetchOpenData(slug, current.value),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
    localStorage.setItem('last-alias', slug)
})
watch(current, async (newPage) => {
    await newsStore.fetchOpenData(slug, newPage)
});
const paginationFunc = async (pageNum) => {
    current.value = pageNum;
};

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in newsStore.openData?.data"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/news-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="newsStore.openData?.meta?.total" show-less-items
                        @click="paginationFunc" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>