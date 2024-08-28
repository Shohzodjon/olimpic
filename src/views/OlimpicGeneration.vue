<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
const gamesStore = useGamesStore();
const isLoad = ref(false);
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;

onMounted(async () => {
    await Promise.all([
        gamesStore.fetchOlimpicTeenager(),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page olimpic-generation">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in gamesStore.teenager"
                            :key="item.id">
                            <a class="partner-card global__partner" :href="item.link" style="width: 100%;"
                                target="_blank">
                                <div class="partner-card__img">
                                    <img :src="item.images" alt="parnet img">
                                </div>
                                <h5 class="partner-card__name" v-if="item.title" style="text-transform: capitalize;">{{
                                    item.title }}</h5>
                            </a>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>