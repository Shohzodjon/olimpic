<script setup>
import { RouterLink } from 'vue-router';
import { lang } from '@/uitiles/currentLang';
defineProps({
    url: { type: String, default: `/${lang}` },
    title: { type: String, default: '' },
    img: { type: String, default: '' },
    season: { type: String, default: '' },

})

</script>
<template>
    <RouterLink :to="url" class="olimpic-card">
        <div class="olimpic-card__left">
            <h3>{{ title }}</h3>
            <div class="olimpic-card__flex">
                <slot name="season-icon" />
                <span>{{ $t(season) }} </span>
            </div>
        </div>
        <div class="olimpic-card__img">
            <img :src="img" alt="">
        </div>
    </RouterLink>

</template>