<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import hero1 from '@/assets/images/hero_1.jpg';
import hero2 from '@/assets/images/hero_2.jpg';
import hero3 from '@/assets/images/hero_3.jpg';
import hero4 from '@/assets/images/hero_4.jpg';
import { ClockCircleOutlined } from '@ant-design/icons-vue'
const items = reactive([
    { title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', id: 1, time: '1 Avgust 2024', img: hero1 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi! asdasd', id: 2, time: '1 Avgust 2024', img: hero2 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi 832484234', id: 3, time: '1 Avgust 2024', img: hero3 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd dfsf rwerwer nweiroweiriwe wejrweirwenr wer weru', id: 4, time: '1 Avgust 2024', img: hero4 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd dfsf rwerwer nweiroweiriwe wejrweirwenr wer weru', id: 5, time: '1 Avgust 2024', img: hero4 },
]);

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
            <RouterLink :to="`/oz/news-slug/${item.id}`" v-for="item in items" :key="item.id"
                class="vertical-slider__wrapper">
                <div class="vertical-slider__card">
                    <img :src="item.img" alt="hero img">
                    <div class="vertical-slider__card-time">
                        <ClockCircleOutlined />
                        <span>{{ item.time }}</span>
                    </div>
                    <h3 class="vertical-slider__card-title">{{ item.title }}</h3>
                </div>
            </RouterLink>
        </a-carousel>
    </div>
</template>