<script setup>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import VK from '@/components/icons/VK.vue';
import Telegram from '@/components/icons/Telegram.vue';
import Twitter from '@/components/icons/Twitter.vue';
import OK from '@/components/icons/OK.vue';
import { lang } from '@/uitiles/currentLang';
const newsStore = useNewsStore();
const isLoad = ref(false);
const router = useRoute();
const infoId = router.params.id;
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Yangiliklar", id: 2, url: `/${lang}/news` },
];

onMounted(async () => {
    await newsStore.fetchDetail(infoId);
    isLoad.value = true;
})
const printPage = () => {
    window.print();
}
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1">
                            <div v-for="(img, i) in newsStore.detail.images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel>
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ newsStore.detail.created_at }}</span>
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
                                <EyeOutlined /> <span>{{ newsStore.detail.views }}</span>
                            </div>

                        </div>
                        <h2>{{ newsStore.detail.title }}</h2>
                        <div v-html="newsStore.detail.content"></div>
                        <button @click="printPage">Print Page</button>
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