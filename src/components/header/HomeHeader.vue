<script setup>
import { onMounted, ref } from 'vue';
import HeaderSlider from '@/components/slider/HeaderSlider.vue';
import HorizontalSlider from '@/components/slider/HorizontalSlider.vue'
import DefaultSlider from '@/components/slider/DefaultSlider.vue';


defineProps({
    data: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <header class="home-header" >
        <HeaderSlider :data="data" />
        <div class="home-header__container">
            <div class="container">
                <div class="home-header__flex">
                    <HorizontalSlider :data="data" />
                    <DefaultSlider :data="data" />
                </div>
            </div>
        </div>
    </header>
</template>
