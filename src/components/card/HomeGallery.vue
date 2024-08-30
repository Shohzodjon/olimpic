<script setup>
// import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
defineProps({
    url: {
        type: String, default: `/${lang}`
    },
    img: {
        type: String, default: ''
    },
    time: {
        type: String, default: ''
    },
    title: {
        type: String, default: ''
    },
})
</script>
<template>
    <RouterLink :to="url" class="home-gallery-card">
        <div class="home-gallery-card__img">
            <img :src="img" alt="gallery img" :class="imageStore.isGray ? 'gray' : ''">
        </div>
        <div class="home-gallery-card__info">
            <div class="home-gallery-card__time">
                <ClockCircleOutlined />
                <span>{{ time }}</span>
            </div>
            <h3 class="home-gallery-card__title">{{ title }}</h3>
        </div>
    </RouterLink>

</template>