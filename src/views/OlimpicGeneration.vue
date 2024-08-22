<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import PartnerCard from '@/components/card/PartnerCard.vue'
const lang = localStorage.getItem('locale');
const gamesStore = useGamesStore();
const isLoad = ref(false);
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Olimpiya o'yinlari", id: 2 },
    { label: "O‘smirlar Olimpiya o'yinlari", id: 3 },
];
onMounted(async () => {
    await gamesStore.fetchOlimpicTeenager();
    isLoad.value = true;
})
</script>
<template>
    <section class="committee-page olimpic-generation">
        <div class="container">
            <BreadCrump :data="breads" />
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