<script setup>
import HeaderSlider from '@/components/slider/HeaderSlider.vue';
import HorizontalSlider from '@/components/slider/HorizontalSlider.vue'
import DefaultSlider from '@/components/slider/DefaultSlider.vue';
</script>
<template>
    <header class="home-header">
        <HeaderSlider />
        <div class="home-header__container">
            <div class="container">
                <div class="home-header__flex">
                    <HorizontalSlider />
                    <DefaultSlider/>
                </div>
            </div>
            
        </div>
    </header>
</template>
