<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
defineProps({
    img: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="home-news">
        <RouterLink to="/:en">
            <div class="home-news__flex">
                <div class="home-news__img">
                    <img :src="img" alt="news img">
                </div>
                <div class="home-news__info">
                    <h3 class="home-news__title">{{ title }}</h3>
                    <div class="home-news__time">
                        <ClockCircleOutlined />
                        <span>{{ time }}</span>
                    </div>
                </div>
            </div>
        </RouterLink>

    </div>
</template>