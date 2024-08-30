<script setup>
import { RouterLink } from 'vue-router';
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
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
            <img :src="img" alt="parnet img" :class="imageStore.isGray ? 'gray' : ''">
        </div>
        <h5 class="partner-card__name" v-if="title" style="text-transform: capitalize;">{{ title }}</h5>
    </RouterLink>
</template>