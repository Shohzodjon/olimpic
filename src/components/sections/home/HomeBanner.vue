<script setup>
import { useImageStore } from '@/stores/setGray';
const imageStore = useImageStore();
</script>
<template>
    <section class="home-banner">
        <img src="@/assets/images/banner.jpg" alt="banner" :class="imageStore.isGray?'gray':''">
        <div class="banner_container">
            <div class="container">
                <h5 class="home-banner__sub-title">26 Jul - 11 Aug</h5>
                <h1 class="home-banner__title">
                    Parij 2024
                </h1>
            </div>
            
        </div>
    </section>
</template>