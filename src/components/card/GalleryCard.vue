<script setup>
import { lang } from '@/uitiles/currentLang';
defineProps({
    img: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: `/${lang}`,
    },
    desc: {
        type: String,
        default: ''
    }
})

</script>
<template>
    <RouterLink :to="url" class="gallery-card">
        <div class="gallery-card__wrapper">
            <div class="gallery-card__img">
                <img :src="img" alt="gallery img">
            </div>
            <div class="gallery-card__info">
                <p>{{ desc }}</p>
            </div>
        </div>
    </RouterLink>
</template>