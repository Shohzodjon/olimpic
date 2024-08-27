<script setup>
import { ref, onMounted } from 'vue';
import { useSocialStore } from '@/stores/social';
import { useRoute } from 'vue-router';
import { lang } from '@/uitiles/currentLang';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import StaticBreadcrumb from '@/components/menu/StaticBreadcrumb.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import VK from '@/components/icons/VK.vue';
import Telegram from '@/components/icons/Telegram.vue';
import Twitter from '@/components/icons/Twitter.vue';
import OK from '@/components/icons/OK.vue';
import { useI18n } from 'vue-i18n';

const socialStore = useSocialStore();
const breadCrumb = useBreadCrumbsStore();
const router = useRoute();
const {t} = useI18n();
const isLoad = ref(false);
const slug = router.params.id
const breads = [
    { label: t('home'), url: `/${lang}`, id: 1 },
    { label: t("news"), id: 2, url: `/${lang}/news` },
];

onMounted(async () => {
    await Promise.all([
        socialStore.fetchDetail(slug),
        // breadCrumb.fetchList(slug)
    ])
    isLoad.value = true

})


</script>
<template>
    <section class="news-slug">
        <div class="container">
            <StaticBreadcrumb :data="breads" />
            <a-row :gutter="[24, 24]" v-if="isLoad" :style="{ marginTop: '20px' }">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ socialStore.detail.created_at }}</span>
                            </div>
                            <ul class="news-slug__social">
                                <li>
                                    <a href="#" target="_blank">
                                        <VK />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <OK />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Telegram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Twitter />
                                    </a>
                                </li>
                            </ul>

                            <div class="news-slug__statistic">
                                <EyeOutlined /> <span>{{ socialStore.detail.views }}</span>
                            </div>

                        </div>
                        <div v-html="socialStore.detail.content"></div>
                        <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1">
                            <div v-for="(img, i) in socialStore.detail.images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <!-- <div class="committee-page__sidebar-menu">Menu</div> -->
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