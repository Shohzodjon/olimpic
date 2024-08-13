<script setup>
import hero from '@/assets/images/hero_4.jpg';
import hero2 from '@/assets/images/hero_2.jpg';
import HomeNewsCard from '@/components/card/HomeNewsCard.vue';
import { ClockCircleOutlined, } from '@ant-design/icons-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
const news = [
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 1 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 2 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 3 },
    { img: hero, title: 'Sadullayeva ishtirokini yettinchi oʻrinda yakunladi', time: '4 Aug 2024', id: 4 },
];
const sliderData = [
    { img: hero2, title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', time: '1 Aug 2024', desc: 'Parij-2024 yozgi Olimpiya o’yinlarida O’zbekiston delegatsiyasi g’aznasi yana bir bronza medali bilan boyidi. Mazkur ', id: 1 },
    { img: hero, title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', time: '1 Aug 2024', desc: 'Parij-2024 yozgi Olimpiya o’yinlarida O’zbekiston delegatsiyasi g’aznasi yana bir bronza medali bilan boyidi. Mazkur ', id: 2 },
    { img: hero2, title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', time: '1 Aug 2024', desc: 'Parij-2024 yozgi Olimpiya o’yinlarida O’zbekiston delegatsiyasi g’aznasi yana bir bronza medali bilan boyidi. Mazkur ', id: 3 },
    { img: hero, title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', time: '1 Aug 2024', desc: 'Parij-2024 yozgi Olimpiya o’yinlarida O’zbekiston delegatsiyasi sdasdasdasdasdasdasdasdas g’aznasi yana bir bronza medali bilan boyidi. Mazkur ', id: 4 },
]

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay];

</script>
<template>
    <section class="home-news-section">
        <div class="container">
            <div class="home-news-section__flex">
                <h2 class="home-news-section__title">Yangiliklar</h2>
                <RouterLink to="/oz/news" class="home-news-section__btn">
                    Barcha yangiliklar
                </RouterLink>
            </div>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <swiper :pagination="{
                        type: 'fraction',
                    }" :effect="'fade'" :navigation="true" autoplay loop :modules="modules" class="mySwiper">
                        <swiper-slide v-for="item in sliderData" :key="item.id">
                            <div class="home-news-section__card">
                                <RouterLink to="/oz/news-slug/11">
                                    <div class="home-news-section__card-img">
                                        <img :src="item.img" alt="img">
                                    </div>
                                    <div class="home-news-section__card-info">
                                        <div class="home-news-section__card-time">
                                            <ClockCircleOutlined />
                                            <span>{{ item.time }}</span>
                                        </div>
                                        <h3>{{ item.title }}</h3>
                                        <p>{{ item.desc }}</p>
                                    </div>
                                </RouterLink>
                            </div>
                        </swiper-slide>
                    </swiper>
                </a-col>
                <a-col   :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                :xl="12">
                    <HomeNewsCard v-for="item in news" :key="item.id" :img="item.img" :title="item.title"
                        :url="`/oz/news-slug/${item.id}`" :time="item.time" />
                </a-col>
            </a-row>
        </div>
    </section>
</template>
