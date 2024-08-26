<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import GalleryCard from '@/components/card/GalleryCard.vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Media galereya", id: 2 },
];
const galleryStore = useMediaStore();
const isLoad = ref(false);
onMounted(async () => {
    await galleryStore.fetchList();
    isLoad.value = true;
})

</script>
<template>
    <section class="gallery-page">
        <div class="container" v-if="isLoad">
            <StaticBreadcrumb :data="breads" />
            <div class="gallery-page__flex">
                <h2>Media galereya</h2>
                <ul>
                    <li>
                        <RouterLink :to="`/${lang}/gallery`">Rasmlar</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="`/${lang}/video`">Videolar</RouterLink>
                    </li>
                </ul>
            </div>
            <a-row :gutter="[20, 20]">
                <a-col :span="24">
                    <div class="gallery-page__content">

                        <a-row :gutter="[22, 22]">
                            <a-col v-for="item in galleryStore.list" :key="item.id" :xs="24" :sm="12" :md="8" :lg="6"
                                :xl="6">
                                <GalleryCard :desc="item.title" :img="item.images[0]"
                                    :url="`/${lang}/gallery-slug/${item.alias}`" />
                            </a-col>
                        </a-row>
                        <a-pagination v-model:current="current" :total="500" show-less-items />
                    </div>
                </a-col>

            </a-row>
        </div>
    </section>
</template>