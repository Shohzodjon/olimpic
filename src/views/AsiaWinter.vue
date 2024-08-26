<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const gamesStore = useGamesStore();
const router = useRoute();
const slug = router.name;
const breadCrumb = useBreadCrumbsStore();
const isLoad = ref(false);

onMounted(async () => {
    await Promise.all([
        gamesStore.fetchAsiaWinter(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})

</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content" v-html="gamesStore.asiaWinter"></div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>