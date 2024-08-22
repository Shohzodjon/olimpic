<script setup>
// import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
    url: { type: String, default: '/oz' },
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
                <span>{{ season }} </span>
            </div>
        </div>
        <div class="olimpic-card__img">
            <img :src="img" alt="">
        </div>
    </RouterLink>

</template>