<script setup>
import { ref, onMounted } from 'vue';
import { useMediaStore } from '@/stores/gallery';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';

const mediaStore = useMediaStore();
const router = useRoute();
const slug = router.params.id;
const isLoad = ref(false);
onMounted(async () => {
    await mediaStore.fetchAnnouncementDetail(slug);
    isLoad.value = true
})
const breads = [
    { label: 'Home', url: `/${lang}`, id: 1 },
    { label: "Yangiliklar", id: 2, url: `/${lang}` },
];
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="mediaStore.announcementDetail.breadcrumbs" />
            <pre>{{ mediaStore.announcementDetail }}</pre>
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <!-- <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1">
                            <div v-for="(img, i) in images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel> -->
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
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>

                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>