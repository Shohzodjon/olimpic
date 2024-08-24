<script setup>
import { onMounted, ref } from 'vue';
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
onMounted(async () => {
    await Promise.all([
        interviewStore.fetchList(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
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
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>