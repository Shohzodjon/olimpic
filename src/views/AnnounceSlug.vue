<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import { useRoute } from 'vue-router';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
import { useI18n } from 'vue-i18n';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
const mediaStore = useMediaStore();
const router = useRoute();
const { t } = useI18n();
const slug = router.params.id;
const isLoad = ref(false);
onMounted(async () => {
    await mediaStore.fetchAnnouncementDetail(slug);
    isLoad.value = true
})
const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label: t('announce'), id: 2, url: `/${lang}/announce` },
];
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <!-- <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1">
                            <div v-for="(img, i) in images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel> -->
                        <div class="news-slug__img">
                            <img :src="mediaStore.announcementDetail.images" alt="img"
                                :class="imageStore.isGray ? 'gary' : ''">
                        </div>
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ mediaStore.announcementDetail.created_at }}</span>
                            </div>
                            <div class="news-slug__statistic">
                                <EyeOutlined /> <span>272</span>
                            </div>
                        </div>
                        <div v-html="mediaStore.announcementDetail.content"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink :to="`/${lang}`">
                                <img src="@/assets/images/olimpic.png" alt="olimpic "   :class="imageStore.isGray?'gary':''">
                            </RouterLink>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>