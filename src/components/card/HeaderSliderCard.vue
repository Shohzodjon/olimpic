<script setup>
// import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
defineProps({
    data: {
        type: Object,
        default: null
    }
})
</script>
<template>
    <div class="header-slider-card">
        <img :src="data?.img" alt="img"  :class="imageStore.isGray ? 'gray' : ''">
        <RouterLink :to="`/${lang}`">
            <h3>{{ data.time }}</h3>
            <div class="line"></div>
            <p class="desc">{{ data?.desc }}</p>
        </RouterLink>
    </div>
</template>