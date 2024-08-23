<script setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
defineProps({
    data: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <div class="horizontal-slider">
        <a-carousel autoplay :dots="false" :autoplaySpeed="3000" dot-position="left" :slidesToShow="1"
            :pauseOnHover="false">
            <div v-for="item in data" :key="item.id" class="horizontal-slider__card">
                <div class="horizontal-slider__card-time">
                    <ClockCircleOutlined />
                    <span>{{ item.created_at }}</span>
                </div>
                <h3 class="horizontal-slider__card-title">{{ item.title }}</h3>
                <RouterLink :to="`/${lang}/news-slug/${item.id}`" class="horizontal-slider__card-btn">Batafsil
                </RouterLink>
            </div>
        </a-carousel>
    </div>
</template>
<style></style>