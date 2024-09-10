<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';

const imageStore = useImageStore();
defineProps({
    data: { type: Array, default: [] }
})
const slidesToShow = ref(calculateSlidesToShow());
function calculateSlidesToShow() {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    return 4;
}

function updateSlidesToShow() {
    slidesToShow.value = calculateSlidesToShow();
}

onMounted(() => {
    window.addEventListener('resize', updateSlidesToShow);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesToShow);
});

</script>
<template>
    <div class="vertical-slider">
        <swiper autoplay loop :modules="modules" :breakpoints="{
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }">
            <swiper-slide v-for="item in data" :key="item.id">
                <RouterLink :to="`/${lang}/news-slug/${item.alias}`" class="vertical-slider__wrapper">
                    <div class="vertical-slider__card">
                        <img :src="item.images" alt="hero img" :class="imageStore.isGray ? 'gray' : ''">
                        <div class="vertical-slider__card-time">
                            <ClockCircleOutlined />
                            <span>{{ item.created_at }}</span>
                        </div>
                        <h3 class="vertical-slider__card-title">{{ item.title }}</h3>
                    </div>
                </RouterLink>
            </swiper-slide>
        </swiper>
    </div>
</template>