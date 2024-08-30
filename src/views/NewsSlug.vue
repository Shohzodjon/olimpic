<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNewsStore } from '@/stores/news';
import { useRoute } from 'vue-router';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import VueEasyLightbox from 'vue-easy-lightbox/external-css';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import SocialShare from '@/components/social/SocialShare.vue'
import { useBreadCrumbsStore } from '@/stores/breadcrumbs';
import SidebarMenu from '@/components/menu/SidebarMenu.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();


const newsStore = useNewsStore();
const breadCrumb = useBreadCrumbsStore()
const isLoad = ref(false);
const router = useRoute();
const infoId = router.params.id;
const currentUrl = ref('');
const visibleRef = ref(false);
const indexRef = ref(0);

const alias = localStorage.getItem('last-alias') || 'news';
onMounted(async () => {
    await Promise.all([
        newsStore.fetchDetail(infoId),
        breadCrumb.fetchList(alias)
    ])
    isLoad.value = true;
    currentUrl.value = window.location.href
})
const printPage = () => {
    window.print();
}
const openLightbox = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
};

const onHide = () => {
    visibleRef.value = false;
};

const imageUrls = computed(() => {
    return newsStore.detail.images.map(image => image.url);
})


</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breadCrumb.list" />
            <!-- <h2 v-if="isLoad">{{newsStore.detail.title}}</h2> -->
            <a-row :gutter="[24, 24]" v-if="isLoad">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="news-slug__content">
                        <a-carousel autoplay :dots="false" :autoplaySpeed="2400" :slidesToShow="1" draggable="true"
                            :pauseOnHover="false">
                            <div v-for="(img, i) in newsStore.detail.images" :key="i" class="news-slug__img"
                                @click="openLightbox(i)">
                                <img :src="img.url" alt="img" :class="imageStore.isGray ? 'gray' : ''">
                            </div>
                        </a-carousel>
                        <vue-easy-lightbox :visible="visibleRef" :imgs="imageUrls" :index="indexRef"
                            @hide="onHide"></vue-easy-lightbox>
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>{{ newsStore.detail.created_at }}</span>
                            </div>
                            <SocialShare :url="currentUrl" :title="newsStore.detail.title"
                                :description="newsStore.detail.title" />

                            <div class="news-slug__statistic">
                                <EyeOutlined /> <span>{{ newsStore.detail.views }}</span>
                            </div>

                        </div>
                        <h2>{{ newsStore.detail.title }}</h2>
                        <div v-html="newsStore.detail.content"></div>

                        <BaseButton @click="printPage" />
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <SidebarMenu :data="breadCrumb.list" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>