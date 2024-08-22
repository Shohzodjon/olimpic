<script setup>
defineProps({
    data: { type: Array, default: [] }
})

</script>
<template>
    <div class="header-slider">
        <a-carousel autoplay effect="fade" :dots="false" :autoplaySpeed="3000" easing="linear" :slidesToShow="1">
            <div class="slider-item" v-for="item in data">
                <img :src="item.images[0]" alt="home slider ">
            </div>
        </a-carousel>
    </div>
</template>
