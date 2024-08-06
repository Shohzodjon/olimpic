<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
    url: {
        type: String, defualt: '/:en'
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