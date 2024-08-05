<script setup>
import hero1 from '@/assets/images/hero_1.jpg';
import hero2 from '@/assets/images/hero_2.jpg';
import hero3 from '@/assets/images/hero_3.jpg';
import hero4 from '@/assets/images/hero_4.jpg';
import { ClockCircleOutlined } from '@ant-design/icons-vue'
import { reactive } from 'vue'
const items = reactive([
    { title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', id: 1, time: '1 Avgust 2024', img: hero1 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi! asdasd', id: 2, time: '1 Avgust 2024', img: hero2 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi 832484234', id: 3, time: '1 Avgust 2024', img: hero3 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd dfsf rwerwer nweiroweiriwe wejrweirwenr wer weru', id: 4, time: '1 Avgust 2024', img: hero4 },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd dfsf rwerwer nweiroweiriwe wejrweirwenr wer weru', id: 5, time: '1 Avgust 2024', img: hero4 },
])
</script>
<template>
    <div class="vertical-slider">
        <a-carousel autoplay :autoplaySpeed="3000" :dots="false"  :slidesToShow="4" :pauseOnHover="false"
            :space="10">
            <RouterLink to="/:en" v-for="item in items" :key="item.id" class="vertical-slider__wrapper">
                <div  class="vertical-slider__card">
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