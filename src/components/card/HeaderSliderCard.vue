<script setup>
// import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    data: {
        type: Object,
        default: null
    }
})
</script>
<template>
    <div class="header-slider-card">
        <img :src="data?.img" alt="img">
        <RouterLink to="/">
            <h3>{{ data.time }}</h3>
            <div class="line"></div>
            <p class="desc">{{ data?.desc }}</p>
        </RouterLink>
    </div>
</template>