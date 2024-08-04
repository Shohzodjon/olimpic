<script setup>
import { reactive } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue'
const items = reactive([
    { title: 'Muzaffarbek To’raboyev — Parij-2024 yozgi Olimpiya o’yinlari sovrindori!', id: 1, time: '1 Avgust 2024' },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi! asdasd', id: 2, time: '1 Avgust 2024' },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi 832484234', id: 3, time: '1 Avgust 2024' },
    { title: 'Diyora Keldiyorovaning kimоnosi XOQ muzeyidan joy oldi udcsd fsdhsdfhsddfsasdasd dfsf rwerwer nweiroweiriwe wejrweirwenr wer weru', id: 4, time: '1 Avgust 2024' },
])

</script>
<template>
    <div class="horizontal-slider">
        <a-carousel autoplay  :autoplaySpeed="3000" dot-position="left" :slidesToShow="1" :pauseOnHover="false" :space="10">
            <div v-for="item in items" :key="item.id" class="horizontal-slider__card">
                <div class="horizontal-slider__card-time">
                    <ClockCircleOutlined />
                    <span>{{ item.time }}</span>
                </div>
                <h3 class="horizontal-slider__card-title">{{ item.title }}</h3>
                <RouterLink to="/:en" class="horizontal-slider__card-btn">Batafsil</RouterLink>
            </div>
        </a-carousel>
    </div>
</template>
<style></style>