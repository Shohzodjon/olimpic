<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
// import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
const gamesStore = useGamesStore();
// const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.params.id;
const isLoad = ref(false);


onMounted(async () => {
    await Promise.all([
        gamesStore.fetchGameDetail(slug),
        // breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <h2 v-if="isLoad">{{gamesStore.gameDetail.title}}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <img :src="gamesStore.gameDetail?.images" style="max-width: 300px;" />
                        <div v-html="gamesStore.gameDetail?.content" style="margin-top:10"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <!-- <SidebarMenu :data="breadCrumb.list" /> -->
                    <div class="committee-page__sidebar">
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