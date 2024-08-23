<script setup>
import { ref, onMounted } from 'vue';
import { useGamesStore } from '@/stores/games';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { lang } from '@/uitiles/currentLang';
const gamesStore = useGamesStore();
const isLoad = ref(false);

onMounted(async () => {
    await gamesStore.fetchAsiaWinter();
    isLoad.value = true;
})
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Osiyo o'yinlari", id: 2 },
    { label: "Qishki Osiyo o‘yinlari", id: 3 },
]
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Qishki Osiyo o‘yinlari</h2>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="committee-page__content" v-html="gamesStore.asiaWinter"></div>
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