<script setup>
import HomeHeader from '@/components/header/HomeHeader.vue';
import HomeBanner from '@/components/sections/home/HomeBanner.vue'
import HomeNews from '@/components/sections/home/HomeNews.vue';
import HomeInterview from '@/components/sections/home/HomeInterview.vue'
import HomeMedia from '@/components/sections/home/HomeMedia.vue'
</script>
<template>
  <section class="home-page">
    <HomeHeader />
    <HomeBanner />
    <HomeNews />
    <section class="home-page__strategy"></section>
    <HomeInterview />
    <div class="container">
      <div class="home-page__banner">
        <img src="@/assets/images/home-banner.png" alt="home banner">
      </div>
    </div>
    <HomeMedia />
  </section>

</template>