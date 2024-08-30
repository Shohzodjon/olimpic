<script setup>
import { onMounted, ref, watch } from 'vue';
import { useInterviewStore } from '@/stores/interview';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const isLoad = ref(false);

const interviewStore = useInterviewStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.query.alias;
const current = ref(1);
onMounted(async () => {
    await Promise.all([
        interviewStore.fetchList(current.value),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
    localStorage.setItem('last-alias', slug)
})

watch(current, async (newPage) => {
    await interviewStore.fetchList(newPage)
});
const paginationFunc = async (pageNum) => {
    current.value = pageNum;
};
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]" v-if="isLoad">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in interviewStore.list?.data"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/interview-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="interviewStore.list?.meta?.total" show-less-items
                        @click="paginationFunc" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>