<script setup>
import { ref, onMounted,watch } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import GalleryCard from '@/components/card/GalleryCard.vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';

const {t} =useI18n();
const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label:t('media'), id: 2 },
];
const galleryStore = useMediaStore();
const isLoad = ref(false);
const current = ref(1);
onMounted(async () => {
    await galleryStore.fetchList(current.value);
    isLoad.value = true;
})
watch(current, async (newPage) => {
    await galleryStore.fetchList(newPage)
});
const paginationFunc = async (pageNum) => {
    current.value = pageNum;
};

</script>
<template>
    <section class="gallery-page">
        <div class="container" v-if="isLoad">
            <StaticBreadcrumb :data="breads" />
            <div class="gallery-page__flex">
                <h2>{{$t('media')}}</h2>
                <ul>
                    <li>
                        <RouterLink :to="`/${lang}/gallery`">{{$t('images')}}</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="`/${lang}/video`">{{$t('videos')}}</RouterLink>
                    </li>
                </ul>
            </div>
            <a-row :gutter="[24, 24]">
                <a-col :span="24">
                    <div class="gallery-page__content">

                        <a-row :gutter="[22, 22]">
                            <a-col v-for="item in galleryStore.list?.data" :key="item.id" :xs="24" :sm="12" :md="8"
                                :lg="6" :xl="6">
                                <GalleryCard :desc="item.title" :img="item.images[0]"
                                    :url="`/${lang}/gallery-slug/${item.alias}`" />
                            </a-col>
                        </a-row>
                        <a-pagination v-model:current="current" :total="galleryStore.list?.meta.total"
                            @click="paginationFunc" show-less-items />
                    </div>
                </a-col>

            </a-row>
        </div>
    </section>
</template>