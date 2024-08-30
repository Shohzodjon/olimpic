<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
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
        <a-carousel autoplay :autoplaySpeed="3000" :dots="false" :slidesToShow="slidesToShow" :pauseOnHover="false"
            :space="10">
            <RouterLink :to="`/${lang}/news-slug/${item.alias}`" v-for="item in data" :key="item.id"
                class="vertical-slider__wrapper">
                <div class="vertical-slider__card">
                    <img :src="item.images" alt="hero img" :class="imageStore.isGray ? 'gray' : ''">
                    <div class="vertical-slider__card-time">
                        <ClockCircleOutlined />
                        <span>{{ item.created_at }}</span>
                    </div>
                    <h3 class="vertical-slider__card-title">{{ item.title }}</h3>
                </div>
            </RouterLink>
        </a-carousel>
    </div>
</template>