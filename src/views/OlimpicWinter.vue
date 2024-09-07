<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import OlimpicCard from '@/components/card/OlimpicCard.vue'
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import { lang } from '@/uitiles/currentLang';
import { useFadeUp } from '@/uitiles/anime';
const gamesStore = useGamesStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const slug = router.name;
const isLoad = ref(false);


onMounted(async () => {
    await Promise.all([
        gamesStore.fetchOlimpicWinter(slug),
        breadCrumb.fetchList(slug)
    ])
    isLoad.value = true;
    localStorage.setItem('last-alias', slug)
});

watch(isLoad, (newValue) => {
    if (newValue) {
        nextTick(() => {
            useFadeUp(".committee-page__content" ,".olimpic-card__parent");
        });
    }
});
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <h2 v-if="isLoad">{{ breadCrumb.list?.parent?.child?.title }}</h2>
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <a-row :gutter="[20, 20]">
                            <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in gamesStore.olimpicWinter"
                                :key="item.id"  class="olimpic-card__parent">
                                <OlimpicCard :title="item.title" season="winterSeason" :img="item.images"
                                    :url="`/${lang}/olimpic-game-slug/${item.alias}`">
                                    <template #season-icon><img src="@/assets/images/sun-icon.svg" width="24"
                                            height="24" /></template>
                                </OlimpicCard>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>