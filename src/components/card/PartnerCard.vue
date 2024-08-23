<script setup>
import { RouterLink } from 'vue-router';
import { lang } from '@/uitiles/currentLang';
defineProps({
    url: {
        type: String, defualt: `/${lang}`
    },
    img: {
        type: String, defualt: ''
    },
    title: {
        type: String, defualt: ''
    },
})
</script>
<template>
    <RouterLink class="partner-card" :to="url">
        <div class="partner-card__img">
            <img :src="img" alt="parnet img">
        </div>
        <h5 class="partner-card__name" v-if="title">{{ title }}</h5>
    </RouterLink>
</template>