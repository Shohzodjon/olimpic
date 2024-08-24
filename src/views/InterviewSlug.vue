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
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';

const newsStore = useNewsStore();
const breadCrumb = useBreadCrumbsStore();
const isLoad = ref(false);
const router = useRoute();
const infoId = router.params.id;
onMounted(async () => {
    await Promise.all([
        newsStore.fetchInterviewDetail(infoId),
        breadCrumb.fetchList(infoId)
    ])
    isLoad.value = true;
})
const printPage = () => {
    window.print();
}
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <a-row :gutter="[20, 20]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1">
                            <div v-for="(img, i) in newsStore.interviewDetail.images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel>
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ newsStore.interviewDetail.created_at }}</span>
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
                                <EyeOutlined /> <span>{{ newsStore.interviewDetail.views }}</span>
                            </div>

                        </div>
                        <h2>{{ newsStore.interviewDetail.title }}</h2>
                        <div v-html="newsStore.interviewDetail.content"></div>
                        <button @click="printPage">Print Page</button>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                 <SidebarMenu :data="breadCrumb.list"/>
                </a-col>
            </a-row>
        </div>
    </section>
</template>