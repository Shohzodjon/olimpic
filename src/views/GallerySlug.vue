<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import { useRoute } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox/external-css';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label: t('media'), id: 2, url: `/${lang}/gallery` },
];

const router = useRoute();
const slug = router.params.id;
const galleryStore = useMediaStore();
const isLoad = ref(false);
onMounted(async () => {
    await galleryStore.fetchGalleryDetail(slug);
    isLoad.value = true;
})
const visibleRef = ref(false)
const indexRef = ref(0)
const showImg = (index) => {
    indexRef.value = index
    visibleRef.value = true
}
const onHide = () => visibleRef.value = false
</script>
<template>
    <section class="gallery-slug">
        <div class="container" v-if="isLoad">
            <StaticBreadcrumb :data="breads" />
            <h2 class="gallery-slug__title"> {{ $t('media') }}</h2>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="gallery-slug__content">
                        <h3 class="gallery-slug__sub-title">{{ galleryStore.galleryDetail.title }}</h3>
                        <a-row :gutter="[20, 20]">
                            <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
                                v-for="(img, i) in galleryStore.galleryDetail.images" :key="i">
                                <div class="gallery-slug__card pic" @click="() => showImg(i)">
                                    <div class="pic">
                                        <img :src="img" />
                                    </div>
                                </div>
                            </a-col>
                        </a-row>
                        <vue-easy-lightbox :visible="visibleRef" :imgs="galleryStore.galleryDetail.images"
                            :index="indexRef" @hide="onHide"></vue-easy-lightbox>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="gallery-slug__sidebar">
                        <div class="gallery-slug__sidebar-img">
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