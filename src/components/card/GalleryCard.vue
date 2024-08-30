<script setup>
import { lang } from '@/uitiles/currentLang';
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
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
                <img :src="img" alt="gallery img" :class="imageStore.isGray ? 'gray' : ''">
            </div>
            <div class="gallery-card__info">
                <p>{{ desc }}</p>
            </div>
        </div>
    </RouterLink>
</template>