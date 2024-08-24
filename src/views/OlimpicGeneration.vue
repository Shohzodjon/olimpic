<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import PartnerCard from '@/components/card/PartnerCard.vue'
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
            <h2>O‘smirlar Olimpiya o'yinlari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in gamesStore.teenager"
                            :key="item.id">
                            <PartnerCard :img="item.images" :title="item.title" :url="item.link"
                                class="olimpic-generation__card" />
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