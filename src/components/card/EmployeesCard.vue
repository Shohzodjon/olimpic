<script setup>
// import { defineProps } from 'vue';

defineProps({
    img: { type: String, default: '' },
    position: { type: String, default: '' },
    name: { type: String, default: '' },
    reception: { type: String, default: '' },
})
</script>
<template>
    <div class="employ-card">
        <div class="employ-card__img">
            <img :src="img" alt="employ img">
        </div>
        <div class="employ-card__info">
            <p>{{ position }}</p>
            <h3>{{ name }}</h3>
            <span v-if="reception"> <b>Qabul kunlari : </b> {{ reception }}</span>
        </div>
    </div>
</template>