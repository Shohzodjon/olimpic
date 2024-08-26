<script setup>
import { ref, onMounted, watch } from 'vue';
import { useSocialStore } from '@/stores/social';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const isLoad = ref(false);
const socialStore = useSocialStore();
const current = ref(1);
onMounted(async () => {
    await Promise.all([
        socialStore.fetchList(current.value),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

watch(current, async (newPage) => {
    await socialStore.fetchList(newPage)
});
const paginationFunc = async (pageNum) => {
    current.value = pageNum;
};
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2>Ijtimoiy roliklar</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in socialStore.list?.data"
                            :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/social-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="socialStore.list?.meta?.total" show-less-items
                        @click="paginationFunc" />
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>