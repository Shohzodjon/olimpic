<script setup>
import { ref,onMounted } from 'vue';
import { useSocialStore } from '@/stores/social';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import { lang } from '@/uitiles/currentLang';
const isLoad=ref(false);
const socialStore=useSocialStore();
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Yangiliklar", id: 2 , url:`/${lang}/news`},
];

onMounted(async()=>{
await socialStore.fetchList();
isLoad.value=true;
})
</script>
<template>
    <section class="committee-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>Ijtimoiy roliklar</h2>
            <a-row :gutter="[20,20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in socialStore.list.data" :key="item.id">
                            <NewsCard :data="item" :url="`/${lang}/social-slug/${item.alias}`" />
                        </a-col>
                    </a-row>
                    <a-pagination v-model:current="current" :total="500" show-less-items />
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