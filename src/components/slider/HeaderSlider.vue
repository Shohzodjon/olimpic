<script setup>
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
defineProps({
    data: { type: Array, default: [] }
})

</script>
<template>
    <div class="header-slider">
        <a-carousel autoplay effect="fade" :dots="false" :autoplaySpeed="3000" easing="linear" :slidesToShow="1">
            <div class="slider-item" v-for="item in data">
                <img :src="item.images" alt="home slider " :class="imageStore.isGray ? 'gray' : ''">
            </div>
        </a-carousel>
    </div>
</template>
