<script setup>
import HeaderSlider from '@/components/slider/HeaderSlider.vue';
import HorizontalSlider from '@/components/slider/HorizontalSlider.vue'
</script>
<template>
    <header class="home-header">
        <HeaderSlider />
        <div class="home-header__container">
            <div class="container">
                <div class="home-header__flex">
                    <HorizontalSlider />
                </div>
            </div>
            
        </div>
    </header>
</template>
