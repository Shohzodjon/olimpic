<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
const gamesStore = useGamesStore();
const breadCrumb = useBreadCrumbsStore();
const alias = localStorage.getItem('last-alias');
const router = useRoute();
const slug = router.params.id;
const isLoad = ref(false);


onMounted(async () => {
    await Promise.all([
        gamesStore.fetchGameDetail(slug),
        breadCrumb.fetchList(alias)
    ])
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list"/>
            <h2 v-if="isLoad">{{gamesStore.gameDetail.title}}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <img :src="gamesStore.gameDetail?.images" style="max-width: 300px;" :class="imageStore.isGray?'gray':''" />
                        <div v-html="gamesStore.gameDetail?.content" style="margin-top:10"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>