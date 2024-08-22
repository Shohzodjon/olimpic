<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import OlimpicCard from '@/components/card/OlimpicCard.vue'
const lang = localStorage.getItem('locale');
const gamesStore = useGamesStore();
const isLoad = ref(false);
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Olimpiya o'yinlari", id: 2 },
    { label: "Qishki Olimpiya o'yinlari", id: 3 },
];

onMounted(async () => {
    await gamesStore.fetchOlimpicWinter();
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Qishki Olimpiya o'yinlari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content">
                        <a-row :gutter="[20, 20]">
                            <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in gamesStore.olimpicWinter" :key="item.id">
                                <OlimpicCard :title="item.title" :season="item.season" :img="item.images">
                                    <template #season-icon><img src="@/assets/images/sun-icon.svg" width="24"
                                            height="24" /></template>
                                </OlimpicCard>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
                        <div class="committee-page__sidebar-img">
                            <RouterLink to="/:en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>