<script setup>
import { onMounted, ref } from 'vue';
import { useHomeStore } from '@/stores/home';
import HomeNewsCard from '@/components/card/HomeNewsCard.vue';
import { lang } from '@/uitiles/currentLang';
import { ClockCircleOutlined, } from '@ant-design/icons-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay];
const homeStore = useHomeStore();
const isLoad = ref(false);
onMounted(async () => {
    await homeStore.fetchBanner();
    isLoad.value = true
})


</script>
<template>
    <section class="home-news-section" v-if="isLoad">
        <img src="@/assets/images/big_logo.png" alt="big logo" class="big__logo">
        <div class="container">
            <div class="home-news-section__flex">
                <h2 class="home-news-section__title">{{ $t('news') }}</h2>
                <RouterLink :to="`/${lang}/news`" class="home-news-section__btn">
                    {{ $t('allNews') }}
                </RouterLink>
            </div>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <swiper :pagination="{
                        type: 'fraction',
                    }" :effect="'fade'" :navigation="true" autoplay loop :modules="modules" class="mySwiper">
                        <swiper-slide v-for="item in homeStore.banner.data" :key="item.id">
                            <div class="home-news-section__card">
                                <RouterLink :to="`/${lang}/news-slug/${item.alias}`">
                                    <div class="home-news-section__card-img">
                                        <img :src="item.images[0]" alt="img">
                                    </div>
                                    <div class="home-news-section__card-info">
                                        <div class="home-news-section__card-time">
                                            <ClockCircleOutlined />
                                            <span>{{ item.created_at }}</span>
                                        </div>
                                        <h3>{{ item.title }}</h3>
                                        <div v-html="item.content" class="home-news-section__card-desc"></div>
                                    </div>
                                </RouterLink>
                            </div>
                        </swiper-slide>
                    </swiper>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <HomeNewsCard v-for="item in homeStore.banner.data" :key="item.id" :img="item.images[0]"
                        :title="item.title" :url="`/${lang}/news-slug/${item.alias}`" :time="item.created_at" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>
